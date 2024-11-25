import { calendarGetFutureEvents } from "@/util/google";
import type { SidebarCalendarWidget } from "@/util/strapi";
import style from "./SidebarCalendarWidget.module.css";
import timezone from "dayjs/plugin/timezone";
import sv from "dayjs/locale/sv";
import dayjs from "dayjs";

dayjs.extend(timezone);
dayjs.locale(sv);

type SidebarCalendarWidgetProps = {
  widget: SidebarCalendarWidget;
};

export async function SidebarCalendarWidget({
  widget: { title, calendar_id },
}: SidebarCalendarWidgetProps) {
  const events = await calendarGetFutureEvents(calendar_id);

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
              <li className={style.item}>
                <div className={style.symbol}>
                  <div className={style.month}>{startDate.format("MMM")}</div>
                  <div className={style.monthDay}>{startDate.format("DD")}</div>
                  <div className={style.weekDay}>{startDate.format("ddd")}</div>
                </div>
                <div>
                  <h4>{event.summary}</h4>
                  <p>
                    {startDate.format("HH:mm")} &ndash;{" "}
                    {endDate.format("HH:mm")}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </main>
    </article>
  );
}
