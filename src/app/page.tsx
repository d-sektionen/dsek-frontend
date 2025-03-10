import Image from "next/image";
import style from "./page.module.css";
import { apiFetch } from "@/util/api";
import { Post } from "@/util/strapi";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import Link from "next/link";

const PAGE_SIZE = 10;
export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const { page: pageNumber } = await searchParams;

  const { data: posts } = await apiFetch<Post[]>("posts", {
    pagination: {
      page: pageNumber,
      pageSize: PAGE_SIZE,
    },
  });

  return (
    <div>
      <ul>
        {posts?.map(({ attributes: { title, slug, publishedAt, excerpt } }) => (
          <li className={style.post}>
            <Link className={style.postTitle} href={`/post/${slug}`}>
              <h2>{title}</h2>
            </Link>
            <hr />
            <p>
              <time dateTime={dayjs(publishedAt).format("YYYY-MM-DD")}>
                {dayjs(publishedAt).format("YYYY-MM-DD")}
              </time>
            </p>
            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
