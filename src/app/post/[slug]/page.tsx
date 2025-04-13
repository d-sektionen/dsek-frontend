import { apiFetchOne } from "@/util/api";
import type { Post } from "@/util/strapi";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import { Richtext } from "@/components/Richtext/Richtext";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { PageThumbnail } from "@/components/PageThumbnail/PageThumbnail";
import dayjs from "dayjs";

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

  return (
    <div>
      <PageHeader
        title={title}
        authors={authors?.data}
        publishDate={dayjs(publishedAt)}
      />
      <PageThumbnail thumbnail={thumbnail?.data} />
      <Richtext content={content} />
      <div className={style.content}>
        <Richtext content={content} />
        {custom_html && (
          <div dangerouslySetInnerHTML={{ __html: custom_html }} />
        )}
      </div>
    </div>
  );
}
