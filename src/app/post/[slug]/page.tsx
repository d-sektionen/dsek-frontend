import { apiFetch, apiFetchOne, apiUrl } from "@/util/api";
import type { Post } from "@/util/strapi";
import { notFound } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { ReactElement } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from "./page.module.css";
import Link from "next/link";
import { RenderContent } from "@/components/RenderContent/RenderContent";
import Image from "next/image";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: post } = await apiFetchOne<Post>("posts", {
    filters: { slug },
    populate: ["authors", "thumbnail", "attachments"],
  });

  if (post == null) return notFound();

  const { title, authors, thumbnail, publishedAt, content, custom_html } =
    post.attributes;
  const publishDate = dayjs(publishedAt);

  return (
    <div className={style.post}>
      <div className={style.header}>
        <h1>{title}</h1>
        <p>
          Publicerad{" "}
          <time dateTime={publishDate.format()}>
            {publishDate.format("ddd ll [kl.]LT")}
          </time>{" "}
          av {authors.data.map((a) => a.attributes.name).join()}
        </p>
      </div>

      {thumbnail.data && (
        <Image
          src={apiUrl(thumbnail.data.attributes.url)}
          alt={title}
          width={800}
          height={400}
        />
      )}
      <div className={style.content}>
        {content && <BlocksRenderer content={content} />}
        {custom_html && (
          <div dangerouslySetInnerHTML={{ __html: custom_html }} />
        )}
      </div>
      <div className={style.footer}></div>
    </div>
  );
}
