import { apiFetch, uploadUrl } from "@/util/api";
import type { Footer } from "@/util/strapi";
import Image from "next/image";
import Link from "next/link";
import style from "./Footer.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Richtext } from "../Richtext/Richtext";

type FooterProps = {};

export async function Footer({}: FooterProps) {
  const { data: footer } = await apiFetch<Footer>("/footer", {
    populate: ["socials.image", "read_more"],
  });
  console.log({ footer });
  if (!footer) return null;

  const { text, socials, read_more } = footer;

  return (
    <footer className={style.footer}>
      <div className={style.overline}>
        <div style={{ backgroundColor: "var(--color-pixels-brown)" }} />
        <div style={{ backgroundColor: "var(--color-pixels-pink)" }} />
        <div style={{ backgroundColor: "var(--color-pixels-yellow)" }} />
        <div style={{ backgroundColor: "var(--color-pixels-green)" }} />
        <div style={{ backgroundColor: "var(--color-pixels-blue)" }} />
      </div>

      <div className={style.text}>
        <Richtext content={text} />
      </div>

      <div className={style.socials}>
        <ul>
          {socials.map(({ id, image, link }) => (
            <li key={id}>
              <Link href={link ?? ""}>
                <Image
                  alt=""
                  src={uploadUrl(image.url)}
                  width={48}
                  height={48}
                />
              </Link>
            </li>
          ))}
        </ul>

        {read_more && <Link href={read_more.link ?? ""}>{read_more.text}</Link>}
      </div>
    </footer>
  );
}
