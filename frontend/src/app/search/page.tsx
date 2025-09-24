import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Suspense } from "react";
import { SearchResults } from "@/components/SearchResults/SearchResults";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const { q, page = 1 } = await searchParams;

  if (!q) return null;

  return (
    <div>
      <PageHeader title={`Sökresultat för ${q}`} />

      <Suspense>
        <SearchResults query={q} page={Number(page)} />
      </Suspense>
    </div>
  );
}
