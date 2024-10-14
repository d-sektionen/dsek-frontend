import { apiFetch } from "@/util/api";
import type { Sidebar, StrapiComponent } from "@/util/strapi";
import { SidebarSponsorWidget } from "../SidebarSponsorWidget/SidebarSponsorWidget";
import { ElementType } from "react";
import style from "./Sidebar.module.css";

export type SidebarProps = {
  endpoint: "right-sidebar" | "left-sidebar";
};

const widgetMap: Record<
  string,
  ElementType<{ widget: StrapiComponent<any> }>
> = {
  "sidebar.sponsor": SidebarSponsorWidget,
};

export async function Sidebar({ endpoint }: SidebarProps) {
  const sidebar = await apiFetch<Sidebar>(endpoint, {
    populate: "widgets.logos.logo.*",
  });

  if (sidebar == null) {
    return <div />;
  }

  const {
    attributes: { widgets },
  } = sidebar;

  return (
    <aside className={style.sidebar}>
      {widgets.map((widget) => {
        const Widget = widgetMap[widget.__component];
        return <Widget key={widget.id} widget={widget} />;
      })}
    </aside>
  );
}
