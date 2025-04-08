import { uploadUrl } from "@/util/api";
import { StrapiFile, StrapiImage } from "@/util/strapi";
import Image from "next/image";
import style from "./PageThumbnail.module.css";

type PageThumbnailProps = {
  thumbnail: StrapiFile<StrapiImage>;
  alt?: string;
};

export function PageThumbnail({ thumbnail, alt = "" }: PageThumbnailProps) {
  if (!thumbnail) return null;

  return (
    <Image
      src={uploadUrl(thumbnail.attributes.url)}
      className={style.thumbnail}
      alt={alt}
      width={800}
      height={400}
    />
  );
}
