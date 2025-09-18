import qs from "qs";
import { trimLeft } from "./util";

const MEILI_BASE_URL =
  (process.env.MEILI_BASE_URL as string) || "http://localhost:7700";

type MeiliSearchOptions = {};

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
  options: MeiliSearchOptions = {},
): Promise<MeiliSearchResults<T>> {
  const res = await fetch(meiliUrl("/multi-search"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      federation: {},
      queries: indexes.map((id) => ({ indexUid: id, q: query })),
    }),
  });

  return res.json();
}
