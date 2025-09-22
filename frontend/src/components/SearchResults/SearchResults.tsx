"use client";

import { MeiliSearchResults } from "@/util/meilisearch";
import { Page, Post } from "@/util/strapi";
import { useEffect, useState } from "react";
import style from "./SearchResults.module.css";
import Link from "next/link";
import dayjs from "@/util/dayjs";

type SearchResultsProps = {
  query: string;
};

export function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<MeiliSearchResults<Post | Page>>();

  useEffect(() => {
    fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((it) => it.json())
      .then(setResults);
  }, [query]);

  return (
    <>
      <ul>
        {results?.hits.map((it) => (
          <li key={it.documentId} className={style.post}>
            <Link href={`/post/${it.slug}`}>
              <h2>{it.title}</h2>
            </Link>
            <hr />
            <p>
              <time dateTime={dayjs(it.publishedAt).format("YYYY-MM-DD")}>
                {dayjs(it.publishedAt).format("YYYY-MM-DD")}
              </time>
            </p>

            {it._federation.indexUid === "post" ? (
              <p>{(it as Post).excerpt}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
