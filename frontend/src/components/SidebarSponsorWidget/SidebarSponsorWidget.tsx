import { apiFetch, apiUrl, uploadUrl } from "../../util/api";
import type { SidebarSponsorWidget } from "../../util/strapi";
import Link from "next/link";
import Image from "next/image";
import style from "./SidebarSponsorWidget.module.css";

export type SidebarSponsorWidgetProps = {
  widget: SidebarSponsorWidget;
};

export async function SidebarSponsorWidget({
  widget: { title, logos },
}: SidebarSponsorWidgetProps) {
  return (
    <article className={style.sponsorWidget}>
      <header>
        <h3>{title}</h3>
      </header>
      <main>
        {logos?.map(({ id, image, link }) => (
          <Link className={style.logo} key={id} href={link ?? ""}>
            <Image
              alt={`Logotype of ${title}`}
              src={uploadUrl(image.url)}
              width={200}
              height={130}
            />
          </Link>
        ))}
      </main>
    </article>
  );
}
