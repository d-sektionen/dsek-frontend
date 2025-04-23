import Image from "next/image";
import style from "./page.module.css";
import { apiFetch } from "../util/api";
import { Post } from "../util/strapi";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import Link from "next/link";
import { Pagination } from "../components/Pagination/Pagination";

const PAGE_SIZE = 10;
export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const params = await searchParams;
  const pageNumber = Number(params.page || 1);

  const { data: posts, total } = await apiFetch<Post[]>("posts", {
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

      {total && total > PAGE_SIZE ? (
        <Pagination page={pageNumber} pageSize={PAGE_SIZE} totalPosts={total} />
      ) : null}
    </div>
  );
}
