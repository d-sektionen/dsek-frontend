import qs from "qs";
import { trimLeft } from "./util";

export const MEILI_DEFAULT_PAGE_SIZE = 20;
const MEILI_BASE_URL =
  (process.env.MEILI_BASE_URL as string) || "http://localhost:7700";

type MeiliSearchOptions = {
  pagination?: {
    page?: number;
    pageSize?: number;
  };
};

export type MeiliSearchHit<T> = T & {
  _meilisearch_id: string;
  _federation: {
    indexUid: string;
    queriesPosition: number;
    weightedRankingScore: number;
  };
};

export type MeiliSearchResults<T> = {
  hits: MeiliSearchHit<T>[];
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
};

export function meiliUrl(path: string, query?: object) {
  let url = new URL(MEILI_BASE_URL);
  url.pathname = `/${trimLeft(path, "/")}`;
  url.search = qs.stringify(query);
  return url.href;
}

export async function meiliSearchMultiple<T>(
  indexes: string[],
  query: string,
  { pagination }: MeiliSearchOptions,
): Promise<MeiliSearchResults<T>> {
  const key = process.env.MEILI_PUBLIC_KEY;
  if (!key && process.env.NODE_ENV !== "development") {
    throw new Error("Cannot use meilisearch without a public key.");
  }

  const res = await fetch(meiliUrl("/multi-search"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      federation: {
        offset:
          ((pagination?.page ?? 1) - 1) *
          (pagination?.pageSize ?? MEILI_DEFAULT_PAGE_SIZE),
        limit: pagination?.pageSize ?? MEILI_DEFAULT_PAGE_SIZE,
      },
      queries: indexes.map((id) => ({
        indexUid: id,
        q: query,
      })),
    }),
  });

  return res.json();
}
