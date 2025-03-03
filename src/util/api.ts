import qs from "qs";
import { trimLeft } from "./util";

const BASE_URL = process.env.STRAPI_BASE_URL as string;
type ApiFetchQuery = {
  filters?: {
    slug?: string;
  };
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  populate?: any;
};

type ApiFetchOptions<T> = RequestInit & {
  default?: T;
};

type ApiFetchResponse<T> = {
  data?: T;
  total?: number;
};

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
  options?: ApiFetchOptions<T>,
): Promise<ApiFetchResponse<T>> {
  let url = apiUrl(path, query);
  const res = await fetch(url, options);
  let data = options?.default;
  let total;

  if (res.ok) {
    const json = await res.json();
    if (json.hasOwnProperty("data")) data = json.data as T;
    if (json.hasOwnProperty("pagination"))
      total = json.pagination.total as number;
  }

  return { data, total };
}

export async function apiFetchOne<T>(
  path: string,
  query?: ApiFetchQuery,
  options?: ApiFetchOptions<T>,
) {
  const { data, total } = await apiFetch<T[]>(
    path,
    query,
    options as ApiFetchOptions<T[]>,
  );

  if (data == null) return { data: options?.default, total };
  else return { data: data[0] ?? options?.default, total };
}
