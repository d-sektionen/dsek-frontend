import { types as mimeTypes } from "mime-types";

export type StrapiResponse<T> = {
  data: T;
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

export type StrapiComponent<T = unknown> = {
  id: number;
  __component: string;
} & T;

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

export type Navbar = StrapiEntry<{
  navbar_links: StrapiResponse<NavbarLink[]>;
}>;

export type NavbarLink = StrapiEntry<{
  label: string;
  url: string;
  navbar_links?: StrapiResponse<NavbarLink[]>;
}>;

export type Utskott = StrapiEntry<{
  title: string;
  content: string;
  slug: string;
  preview_content: string;
}>;

export type Sidebar = StrapiEntry<{
  sidebar_widgets: StrapiComponent[];
}>;

export type LogoWithLink = StrapiComponent<{
  logo: StrapiResponse<StrapiImage>;
  link: string;
}>;

export type SidebarSponsorWidget = StrapiComponent<{
  __component: "sidebar-widgets.sponsor";
  title: string;
  logos: LogoWithLink[];
}>;
