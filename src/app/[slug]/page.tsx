import { apiFetchOne } from "@/util/api";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import { Richtext } from "@/components/Richtext/Richtext";
import { Page } from "@/util/strapi";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { PageThumbnail } from "@/components/PageThumbnail/PageThumbnail";

export default async function PagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: post } = await apiFetchOne<Page>("pages", {
    filters: { slug },
    populate: ["authors", "thumbnail", "attachments"],
  });

  if (post == null) return notFound();

  const { title, authors, thumbnail, publishedAt, content } = post.attributes;

  return (
    <div>
      <PageHeader title={title} />
      <PageThumbnail thumbnail={thumbnail?.data} />
      <div className={style.content}>
        <Richtext content={content} />
      </div>
    </div>
  );
}
