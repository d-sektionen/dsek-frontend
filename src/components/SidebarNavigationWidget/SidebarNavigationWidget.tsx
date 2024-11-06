import type { SidebarNavigationWidget } from "@/util/strapi";
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
      <Input
        name="search"
        type="search"
        leadingIcon={CgSearch}
        placeholder="Sök"
      />
      <nav>
        {navbar_links?.data
          .filter((link) => link.attributes.url != null)
          .map((link) => (
            <Link href={link.attributes.url}>
              <li>{link.attributes.label}</li>
            </Link>
          ))}
      </nav>
    </article>
  );
}
