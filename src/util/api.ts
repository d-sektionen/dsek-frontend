import qs from "qs";
import { StrapiEntry, StrapiFile, StrapiImage, StrapiResponse } from "./strapi";

const BASE_URL = process.env.STRAPI_BASE_URL as string;
type ApiFetchQuery = {
  filters?: {
    slug?: string;
  };
  populate?: string;
};

type ApiFetchOptions = RequestInit & {};

export function apiUrl(path: string, query?: object) {
  let url = new URL(BASE_URL);
  url.pathname = `/api/${path}`;
  url.search = qs.stringify(query);
  return url;
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
  const data = await apiFetch<T[]>(path);
  if (data == null) return null;
  return data[0] ?? null;
}
