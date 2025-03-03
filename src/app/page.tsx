import Image from "next/image";
import styles from "./page.module.css";
import { apiFetch } from "@/util/api";
import { Post } from "@/util/strapi";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";

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
        {posts?.map(({ attributes: { title, publishedAt, excerpt } }) => (
          <li>
            <h3>
              {title} - {dayjs(publishedAt).format("ddd ll [kl.]LT")}
            </h3>
            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
