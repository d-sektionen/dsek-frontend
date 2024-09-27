import { types as mimeTypes } from "mime-types";

export type StrapiResponse<T> = {
  data: StrapiEntry<T>;
};

export type StrapiEntry<T> = {
  id: number;
  attributes: T;
};

export type StrapiFile<T = {}> = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  hash: string;
  ext: string;
  mime: keyof typeof mimeTypes;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: "local" | string;
  provider_metadata: unknown | null; // TODO: what is this?
  createdAt: string;
  updatedAt: string;
} & T;

export type StrapiImage = {
  width: number;
  height: number;
  formats: Record<string, StrapiImageFormat>;
};

export type StrapiImageFormat = {
  ext: ".avif" | ".bmp" | ".gif" | ".jpg" | ".jpeg" | ".png" | ".webp";
  url: string;
  hash: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

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
