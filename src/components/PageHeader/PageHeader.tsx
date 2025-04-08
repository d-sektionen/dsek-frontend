import { Author } from "@/util/strapi";
import style from "./PageHeader.module.css";
import dayjs from "dayjs";

type PageHeaderProps = {
  title: string;
  date?: string;
  authors?: Author[];
};

export function PageHeader({
  title,
  date: dateString,
  authors,
}: PageHeaderProps) {
  let dateContent;
  if (dateString) {
    const date = dayjs(dateString);
    dateContent = (
      <time dateTime={date.format()}>{date.format("ddd ll [kl.]LT")} </time>
    );
  }

  let authorContent;
  if (authors) {
    authorContent = (
      <span>av {authors.map((a) => a.attributes.name).join()}</span>
    );
  }

  return (
    <div className={style.header}>
      <h1>{title}</h1>

      {(dateContent || authorContent) && (
        <p>
          Publicerad {dateContent} {authorContent}
        </p>
      )}
    </div>
  );
}
