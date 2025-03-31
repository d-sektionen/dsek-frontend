import { apiFetch, apiFetchOne } from "@/util/api";
import { Utskott } from "@/util/strapi";
import { notFound } from "next/navigation";

export async function getStaticPaths() {
  const { data: utskotts = [] } = await apiFetch<Utskott[]>("/utskotts");

  return {
    paths: utskotts.map(({ attributes }) => ({
      params: { slug: attributes.slug },
    })),
    fallback: false,
  };
}

export default async function UtskottPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: utskott } = await apiFetchOne<Utskott>(`/utskotts`, {
    filters: { slug },
  });

  if (utskott == null) {
    return notFound();
  }

  const { title, summary } = utskott.attributes;

  return (
    <div>
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  );
}
