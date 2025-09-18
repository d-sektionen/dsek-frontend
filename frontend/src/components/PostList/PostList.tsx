import dayjs from "@/util/dayjs";
import { Post } from "@/util/strapi";
import Link from "next/link";
import style from "./PostList.module.css";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map(({ documentId, title, slug, publishedAt, excerpt }) => (
        <li key={documentId} className={style.post}>
          <Link href={`/post/${slug}`}>
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
  );
}
