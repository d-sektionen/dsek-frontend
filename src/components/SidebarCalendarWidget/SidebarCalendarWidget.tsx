import { calendarGetEvents } from "@/util/google";
import type { SidebarCalendarWidget } from "@/util/strapi";
import style from "./SidebarCalendarWidget.module.css";

type SidebarCalendarWidgetProps = {
  widget: SidebarCalendarWidget;
};

export function SidebarCalendarWidget({
  widget: { title, calendar_id },
}: SidebarCalendarWidgetProps) {
  const events = calendarGetEvents(calendar_id);

  return (
    <article className={style.calendarWidget}>
      <header>
        <h3>{title}</h3>
      </header>
      <main></main>
    </article>
  );
}
