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

export type Blogpost = StrapiEntry<{
  title: string;
  content: string;
  preview_content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  thumbnail: StrapiResponse<StrapiFile<StrapiImage>>;
  extra_media: StrapiResponse<StrapiFile<StrapiImage>[]>;
  extra_files: StrapiResponse<StrapiFile>;
}>;
