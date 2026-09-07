import { strapiFetch, strapiUrl, strapiUploadUrl } from "../../util/strapi";
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
        {logos?.map(({ id, image, link }) => {
          const img = (
            <Image
              alt={`Logotype of ${title}`}
              src={strapiUploadUrl(image.url)}
              width={200}
              height={130}
            />
          );

          return link ? (
            <Link className={style.logo} key={id} href={link}>
              {img}
            </Link>
          ) : (
            <div className={style.logo} key={id}>
              {img}
            </div>
          );
        })}
      </main>
    </article>
  );
}
