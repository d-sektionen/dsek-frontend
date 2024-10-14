import { apiFetch, apiUrl, uploadUrl } from "@/util/api";
import type { SidebarSponsorWidget } from "@/util/strapi";
import Link from "next/link";
import Image from "next/image";
import style from "./SidebarSponsorWidget.module.css";

export type SidebarSponsorWidgetProps = {
  widget: SidebarSponsorWidget;
};

export async function SidebarSponsorWidget({
  widget: { title, logos },
}: SidebarSponsorWidgetProps) {
  console.log(logos[0].logo);
  return (
    <article className={style.sponsor}>
      <header>
        <h3>{title}</h3>
      </header>
      <main>
        {logos?.map(({ id, logo, link }) => (
          <Link className={style.logo} key={id} href={link}>
            <Image
              alt={`Logotype of ${title}`}
              src={uploadUrl(logo.data.attributes.url)}
              width={200}
              height={130}
            />
          </Link>
        ))}
      </main>
    </article>
  );
}
