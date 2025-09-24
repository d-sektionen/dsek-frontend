"use client";

import {
  MEILI_DEFAULT_PAGE_SIZE,
  MeiliSearchResults,
} from "@/util/meilisearch";
import { Page, Post } from "@/util/strapi";
import { useEffect, useState } from "react";
import style from "./SearchResults.module.css";
import Link from "next/link";
import dayjs from "@/util/dayjs";
import { Pagination } from "../Pagination/Pagination";

type SearchResultsProps = {
  query: string;
  page?: number;
};

const PAGE_SIZE = 20;

export function SearchResults({ query, page = 1 }: SearchResultsProps) {
  const [results, setResults] = useState<MeiliSearchResults<Post | Page>>();

  useEffect(() => {
    fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, page }),
    })
      .then((it) => it.json())
      .then(setResults);
  }, [query, page]);

  return (
    <>
      <ul>
        {results?.hits?.map((it) => (
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

      <Pagination
        searchParams={{ q: query }}
        page={page}
        pageSize={MEILI_DEFAULT_PAGE_SIZE}
        totalPosts={results?.estimatedTotalHits ?? 1}
      />
    </>
  );
}
