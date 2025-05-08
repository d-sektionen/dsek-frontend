import { apiFetch, apiFetchOne } from "../../util/api";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import { Richtext } from "../../components/Richtext/Richtext";
import { Page } from "../../util/strapi";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageThumbnail } from "../../components/PageThumbnail/PageThumbnail";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { data: pages = [] } = await apiFetch<Page[]>("/pages");
  return pages.map((u) => u.slug);
}

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

  const { title, authors, thumbnail, publishedAt, content } = post;

  return (
    <div>
      <PageHeader title={title} />
      <PageThumbnail thumbnail={thumbnail} />
      <div className={style.content}>
        <Richtext content={content} />
      </div>
    </div>
  );
}
