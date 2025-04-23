import { Author } from "../../util/strapi";
import style from "./PageHeader.module.css";
import dayjs, { type Dayjs } from "dayjs";

type PageHeaderProps = {
  title: string;
  publishDate?: Dayjs;
  event?: {
    start: Dayjs;
    end?: Dayjs;
  };
  endDate?: Dayjs;
  authors?: Author[];
};

export function PageHeader({
  title,
  publishDate,
  event,
  authors,
}: PageHeaderProps) {
  return (
    <div className={style.header}>
      <h1>{title}</h1>

      {(publishDate || authors) && (
        <p>
          Publicerad{" "}
          {publishDate && (
            <time dateTime={publishDate.format()}>
              {publishDate.format("ddd ll [kl.]LT")}{" "}
            </time>
          )}{" "}
          {authors && (
            <span>av {authors.map((a) => a.attributes.name).join()}</span>
          )}
        </p>
      )}

      {event && (
        <p className={style.eventDateRange}>
          <span>Start:</span>
          <span>{event.start.format("ddd ll [kl.]LT")}</span>
          {event.end && (
            <>
              <span>Slut:</span>
              <span>{event.end.format("ddd ll [kl.]LT")}</span>
            </>
          )}
        </p>
      )}
    </div>
  );
}
