import Image from "next/image";
import style from "./page.module.css";
import { strapiFetch } from "../util/strapi";
import { Post } from "../util/strapi";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import Link from "next/link";
import { Pagination } from "../components/Pagination/Pagination";
import { PostList } from "@/components/PostList/PostList";

const PAGE_SIZE = 10;
export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const params = await searchParams;
  const pageNumber = Number(params.page || 1);

  const { data: posts, total } = await strapiFetch<Post[]>("posts", {
    pagination: {
      page: pageNumber,
      pageSize: PAGE_SIZE,
    },
  });

  return (
    <div>
      <PostList posts={posts ?? []} />

      {total && total > PAGE_SIZE ? (
        <Pagination page={pageNumber} pageSize={PAGE_SIZE} totalPosts={total} />
      ) : null}
    </div>
  );
}
