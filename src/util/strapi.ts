import { BlocksContent } from "@strapi/blocks-react-renderer";
import { types as mimeTypes } from "mime-types";

export type StrapiResponse<T> = {
  data: T;
};

export type StrapiEntry<T> = {
  id: number;
  attributes: T;
};

export type StrapiFile<T = {}> = StrapiEntry<
  {
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
  } & T
>;

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

export type Post = StrapiEntry<{
  title: string;
  excerpt: string;
  content: BlocksContent;
  slug: string;
  authors: StrapiResponse<Author[]>;
  thumbnail: StrapiResponse<StrapiFile<StrapiImage>>;
  attachments: StrapiResponse<StrapiFile[]>;
  publishedAt: string;
}>;

export type Author = StrapiEntry<{
  name: string;
}>;

export type LegacyPost = StrapiEntry<{
  title: string;
  excerpt: string;
  html: string;
  slug: string;
  publishedAt: string;
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
  slug: string;
  content: BlocksContent;
  summary: string;
  logo: StrapiResponse<StrapiFile<StrapiImage>>;
}>;

export type Sidebar = StrapiEntry<{
  widgets: StrapiComponent[];
}>;

export type ImageWithLink = StrapiComponent<{
  image: StrapiResponse<StrapiFile<StrapiImage>>;
  link: string;
}>;

export type TextWithLink = StrapiComponent<{
  text: string;
  link: string;
}>;

export type SidebarSponsorWidget = StrapiComponent<{
  __component: "sidebar.sponsor";
  title: string;
  logos: ImageWithLink[];
}>;

export type SidebarNavigationWidget = StrapiComponent<{
  __component: "sidebar.navigation";
  navbar_links?: StrapiResponse<NavbarLink[]>;
}>;

export type SidebarCalendarWidget = StrapiComponent<{
  __component: "sidebar.calendar";
  title: string;
}>;

export type Footer = StrapiEntry<{
  text: BlocksContent;
  socials: ImageWithLink[];
  readmore: TextWithLink;
}>;
