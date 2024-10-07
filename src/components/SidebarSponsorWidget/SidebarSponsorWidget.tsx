import { apiFetch } from "@/util/api";
import type { SidebarSponsorWidget } from "@/util/strapi";

export type SidebarSponsorWidgetProps = {
  widget: SidebarSponsorWidget;
};

export async function SidebarSponsorWidget({
  widget: { title, logos },
}: SidebarSponsorWidgetProps) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {logos.map((logo) => (
          <>{logo.link}</>
        ))}
      </div>
    </div>
  );
}
