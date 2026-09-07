"use strict";

import pg from "pg";
import dotenv from "dotenv";
import dayjs from "dayjs";
import { stripHtml } from "string-strip-html";

/**
 * @typedef {{ id: number, publishedId?: number }} PublishedItem
 * @typedef {{title: {rendered: string}, date: string, slug: string, status: "draft" | "publish", excerpt: {rendered: string}, content: {rendered: string}}} WPPost
 */

dotenv.configDotenv();
const client = new pg.Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

await client.connect();

/** @type {WPPost[]} */
const items = [];

console.log("🔎 Searching d-sektionen.se for wordpress posts");
for (let i = 1; i <= 7; i++) {
  const res = await fetch(
    `https://d-sektionen.se/wp-json/wp/v2/posts?per_page=100&page=${i}`,
  );
  if (!res.ok) {
    console.error(`Failed to fetch page ${i}`);
    continue;
  }
  const data = await res.json();
  items.push(...data);
}

try {
  console.log("👤 Creating 'WordPress Admin' user");
  const author = await getOrCreateAuthor("WordPress Admin");

  console.log("Creating posts...");
  for (const item of items) {
    console.log("\t📄 " + item.title.rendered);
    const post = await createPost(item);
    if (post) await associateAuthor(post, author);
  }
  console.log("✅ Finished!");
} catch (error) {
  console.error(error);
}

/**
 * @param {WPPost} item
 * @returns {Promise<PublishedItem | undefined>}
 */
async function createPost(item) {
  const documentId = randomId();
  const title = item.title.rendered.slice(0, 255);
  const date = dayjs(item.date).toISOString();
  const slug = item.slug.slice(0, 255);
  const isPublished = item.status === "publish";
  const excerpt = stripHtml(item.excerpt.rendered).result.slice(0, 255);
  const content = item.content.rendered;

  const exists = await client.query(`SELECT id FROM posts WHERE slug = $1;`, [
    slug,
  ]);
  if (exists.rows.length !== 0) {
    return undefined;
  }

  const created = await client.query(
    `INSERT INTO posts (document_id, title, slug, excerpt, custom_html, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;`,
    [documentId, title, slug, excerpt, content, date, date],
  );
  if (isPublished) {
    const published = await client.query(
      `INSERT INTO posts (document_id, title, slug, excerpt, custom_html, created_at, updated_at, published_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;`,
      [documentId, title, slug, excerpt, content, date, date, date],
    );
    return {
      id: created.rows[0].id,
      publishedId: published.rows[0].id,
    };
  }

  return {
    id: created.rows[0].id,
  };
}

/**
 * @param {string} name
 * @returns {Promise<PublishedItem>}
 */
async function getOrCreateAuthor(name) {
  const res = await client.query(`SELECT id FROM authors WHERE name = $1;`, [
    name,
  ]);

  if (res.rows.length !== 0) {
    return {
      id: res.rows[0].id,
      publishedId: res.rows[1].id,
    };
  }

  const documentId = randomId();
  const date = dayjs().toISOString();
  await client.query(
    `INSERT INTO authors (document_id, name, created_at, updated_at) VALUES ($1, $2, $3, $4) RETURNING id`,
    [documentId, name, date, date],
  );
  await client.query(
    `INSERT INTO authors (document_id, name, created_at, updated_at, published_at) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [documentId, name, date, date, date],
  );

  return getOrCreateAuthor(name);
}

/**
 * @param {PublishedItem} post
 * @param {PublishedItem} author
 */
async function associateAuthor(post, author) {
  console.log("\t\t 🔗 Linking author");
  await client.query(
    `INSERT INTO posts_authors_lnk (post_id, author_id, author_ord) VALUES ($1, $2, 1)`,
    [post.id, author.id],
  );
  await client.query(
    `INSERT INTO posts_authors_lnk (post_id, author_id, author_ord) VALUES ($1, $2, 1)`,
    [post.publishedId, author.publishedId],
  );
}

/**
 * @returns {string}
 */
function randomId() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
  return Array.from(
    { length: 24 },
    () => alphabet[Math.floor(Math.random() * alphabet.length)],
  );
}
