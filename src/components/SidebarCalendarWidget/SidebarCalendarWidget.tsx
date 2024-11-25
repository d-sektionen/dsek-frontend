import { calendarGetFutureEvents } from "@/util/google";
import type { SidebarCalendarWidget } from "@/util/strapi";
import style from "./SidebarCalendarWidget.module.css";
import Link from "next/link";
import dayjs from "@/util/dayjs";

type SidebarCalendarWidgetProps = {
  widget: SidebarCalendarWidget;
};

export async function SidebarCalendarWidget({
  widget: { title },
}: SidebarCalendarWidgetProps) {
  const events = await calendarGetFutureEvents();

  return (
    <article className={style.calendarWidget}>
      <header>
        <h3>{title}</h3>
      </header>
      <main>
        <ol>
          {events.slice(0, 8).map((event) => {
            const startDate = dayjs(event.start?.dateTime);
            const endDate = dayjs(event.end?.dateTime);
            return (
              <Link href={`/kalender/${event.id}`}>
                <li className={style.item}>
                  <div className={style.symbol}>
                    <div className={style.month}>{startDate.format("MMM")}</div>
                    <div className={style.monthDay}>
                      {startDate.format("DD")}
                    </div>
                    <div className={style.weekDay}>
                      {startDate.format("ddd")}
                    </div>
                  </div>
                  <div>
                    <h4>{event.summary}</h4>
                    <p>
                      {startDate.format("HH:mm")} &ndash;{" "}
                      {endDate.format("HH:mm")}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ol>
      </main>
    </article>
  );
}
