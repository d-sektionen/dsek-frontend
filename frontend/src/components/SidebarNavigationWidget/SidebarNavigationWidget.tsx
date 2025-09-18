import type { SidebarNavigationWidget } from "../../util/strapi";
import Link from "next/link";
import style from "./SidebarNavigationWidget.module.css";
import { Input } from "../Input/Input";
import { CgArrowRight, CgSearch } from "react-icons/cg";

export type SidebarSponsorWidgetProps = {
  widget: SidebarNavigationWidget;
};

export function SidebarNavigationWidget({
  widget: { navbar_links },
}: SidebarSponsorWidgetProps) {
  return (
    <article className={style.navigationWidget}>
      <form method="get" action="/search">
        <Input
          name="q"
          type="search"
          leadingIcon={CgSearch}
          placeholder="Sök"
        />
      </form>
      <nav>
        {navbar_links
          ?.filter((l) => l.url != null)
          ?.map(({ url, label }, i) => (
            <Link key={i} href={url}>
              <li>{label}</li>
            </Link>
          ))}
      </nav>
    </article>
  );
}
