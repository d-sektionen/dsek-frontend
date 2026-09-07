import { strapiFetch } from "../../util/strapi";
import type { Sidebar, StrapiComponent } from "../../util/strapi";
import { SidebarSponsorWidget } from "../SidebarSponsorWidget/SidebarSponsorWidget";
import { ElementType } from "react";
import style from "./Sidebar.module.css";
import { SidebarNavigationWidget } from "../SidebarNavigationWidget/SidebarNavigationWidget";
import { SidebarCalendarWidget } from "../SidebarCalendarWidget/SidebarCalendarWidget";

export type SidebarProps = {
  endpoint: "right-sidebar" | "left-sidebar";
};

const widgetMap: Record<
  string,
  ElementType<{ widget: StrapiComponent<any> }>
> = {
  "sidebar.sponsor-widget": SidebarSponsorWidget,
  "sidebar.navigation-widget": SidebarNavigationWidget,
  "sidebar.calendar-widget": SidebarCalendarWidget,
};

export async function Sidebar({ endpoint }: SidebarProps) {
  const { data: sidebar } = await strapiFetch<Sidebar>(endpoint, {
    populate: ["widgets.logos.image.*", "widgets.navbar_links"],
  });

  if (sidebar == null) {
    return <div />;
  }

  const { widgets } = sidebar;

  return (
    <aside className={style.sidebar}>
      {widgets.map((widget) => {
        const Widget = widgetMap[widget.__component];
        return Widget && <Widget key={widget.id} widget={widget} />;
      })}
    </aside>
  );
}
