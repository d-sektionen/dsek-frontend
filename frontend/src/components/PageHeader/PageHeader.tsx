import { Author } from "../../util/strapi";
import style from "./PageHeader.module.css";
import dayjs, { type Dayjs } from "dayjs";

type PageHeaderProps = {
  title: string;
  publishDate?: Dayjs;
  event?: {
    start: Dayjs;
    end?: Dayjs;
    hasTime?: boolean;
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
  const eventTimeFormat = event?.hasTime ? "dddd ll [kl.]LT" : "dddd ll";

  return (
    <div className={style.header}>
      <h1>{title}</h1>

      {(publishDate || authors) && (
        <p>
          Publicerad{" "}
          {publishDate && (
            <time dateTime={publishDate.format()}>
              {publishDate.format("dddd ll [kl.]LT")}{" "}
            </time>
          )}{" "}
          {authors && <span>av {authors.map((a) => a.name).join()}</span>}
        </p>
      )}

      {event && (
        <p className={style.eventDateRange}>
          <span>Start:</span>
          <span>{event.start.format(eventTimeFormat)}</span>
          {event.end && (
            <>
              <span>Slut:</span>
              <span>{event.end.format(eventTimeFormat)}</span>
            </>
          )}
        </p>
      )}
    </div>
  );
}
