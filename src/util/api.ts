import qs from "qs";
import { StrapiEntry, StrapiFile, StrapiImage, StrapiResponse } from "./strapi";
import { trimLeft } from "./util";

const BASE_URL = process.env.STRAPI_BASE_URL as string;
type ApiFetchQuery = {
  filters?: {
    slug?: string;
  };
  pagination?: {
    start?: number;
    limit?: number;
  };
  populate?: any;
};

type ApiFetchOptions = RequestInit & {};

export function apiUrl(path: string, query?: object) {
  let url = new URL(BASE_URL);
  url.pathname = `/api/${trimLeft(path, "/")}`;
  url.search = qs.stringify(query);
  console.log({ query, search: url.search });
  return url.href;
}

export function uploadUrl(path: string) {
  let url = new URL(BASE_URL);
  url.pathname = trimLeft(path, "/");
  return url.href;
}

export async function apiFetch<T>(
  path: string,
  query?: ApiFetchQuery,
  options?: ApiFetchOptions,
) {
  let url = apiUrl(path, query);
  const res = await fetch(url, options);
  if (!res.ok) return null;

  const json = await res.json();
  if (!json.hasOwnProperty("data")) return null;

  return json.data as T;
}

export async function apiFetchOne<T>(
  path: string,
  query?: ApiFetchQuery,
  options?: ApiFetchOptions,
) {
  const data = await apiFetch<T[]>(path, query, options);
  if (data == null) return null;
  return data[0] ?? null;
}
