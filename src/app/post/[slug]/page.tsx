import { apiFetch, apiFetchOne, apiUrl } from "@/util/api";
import type { Post, LegacyPost } from "@/util/strapi";
import { notFound } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { ReactElement } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from "./page.module.css";
import Link from "next/link";
import { RenderContent } from "@/components/RenderContent/RenderContent";
import Image from "next/image";

type PostContent = {
  title: string;
  content: ReactElement;
  excerpt: string;
  authors: string[];
  thumbnail?: string;
  attachments: string[];
  publishedAt: Dayjs;
};

async function getPostContent(slug: string): Promise<PostContent | undefined> {
  // Prioritize posts over legacy posts
  const post = await apiFetchOne<Post>("posts", {
    filters: { slug },
    populate: ["authors", "thumbnail", "attachments"],
  });

  if (post != null) {
    return {
      title: post.attributes.title,
      excerpt: post.attributes.excerpt,
      content: <RenderContent blocks={post.attributes.content} />,
      authors: post.attributes.authors.data?.map((a) => a.attributes.name),
      thumbnail: post.attributes.thumbnail.data.attributes.url,
      attachments: post.attributes.attachments.data?.map(
        (a) => a.attributes.url,
      ),
      publishedAt: dayjs(post.attributes.publishedAt),
    };
  }

  // If no post was found, try to find a legacy post
  const legacyPost = await apiFetchOne<LegacyPost>("legacy-posts", {
    filters: { slug },
  });

  if (legacyPost != null) {
    return {
      title: legacyPost.attributes.title,
      excerpt: legacyPost.attributes.excerpt,
      content: <RenderContent html={legacyPost.attributes.html} />,
      authors: ["Admin"],
      thumbnail: undefined,
      attachments: [],
      publishedAt: dayjs(legacyPost.attributes.publishedAt),
    };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostContent(slug);
  if (post == null) return notFound();

  const { title, authors, thumbnail, publishedAt, content } = post;

  return (
    <div className={style.post}>
      <div className={style.header}>
        <h1>{title}</h1>
        <p>
          Publicerad{" "}
          <time dateTime={publishedAt.format()}>
            {publishedAt.format("ddd ll [kl.]LT")}
          </time>{" "}
          av {authors.join()}
        </p>
      </div>

      {thumbnail && (
        <Image src={apiUrl(thumbnail)} alt={title} width={800} height={400} />
      )}
      <div className={style.content}>{content}</div>
      <div className={style.footer}></div>
    </div>
  );
}
