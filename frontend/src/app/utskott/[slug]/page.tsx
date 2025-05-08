import { apiFetch, apiFetchOne, apiUrl, uploadUrl } from "../../../util/api";
import { Utskott } from "../../../util/strapi";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Richtext } from "../../../components/Richtext/Richtext";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { data: utskotts = [] } = await apiFetch<Utskott[]>("/utskotts");
  return utskotts.map((u) => u.slug);
}

export default async function UtskottPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: utskott } = await apiFetchOne<Utskott>(`/utskotts`, {
    filters: { slug },
    populate: ["content", "logo"],
  });

  if (utskott == null) {
    return notFound();
  }

  const { title, summary, content, logo } = utskott;

  return (
    <div>
      <div className={style.header}>
        <h1>
          {logo && (
            <Image
              width={64}
              height={64}
              alt={`${title} logotyp`}
              src={uploadUrl(logo.url)}
            />
          )}
          {title}
        </h1>
        <hr />
      </div>
      <p>{summary}</p>
      <Richtext content={content} />
    </div>
  );
}
