import { useState } from "react";
import style from "./MobileNavbar.module.css";
import Image from "next/image";
import { CgClose, CgMenu } from "react-icons/cg";
import Link from "next/link";
import { MobileNavbarLink } from "../MobileNavbarLink/MobileNavbarLink";
import type { NavbarLink } from "@/util/strapi";

type MobileNavbarProps = {
  items: NavbarLink[];
};

export function MobileNavbar({ items }: MobileNavbarProps) {
  return (
    <article className={style.navbar}>
      {/* It's a little unintuitive, but the mobile navbar is structured
          in reverse and displayed with `flex-direction: column-reverse`. This
          is so that we can use `.menu:not([open]) + header` to avoid the header
          disappearing while we're scrolling the menu. */}

      <details className={style.menu}>
        <summary className={style.menuButton}>
          <CgMenu className={style.menuIcon} size={24} />
          <CgClose className={style.closeIcon} size={24} />
        </summary>
        <nav>
          {items.map(({ id }) => (
            <MobileNavbarLink key={id} id={id} />
          ))}
        </nav>
      </details>

      <header>
        {/* TODO: Find a good solution for items that are both links and menus */}
        <Link className={style.logo} href="/">
          <Image
            src="/logo_dsektionen.svg"
            alt="Logo illustration, 'Datateknologsektionen Linköpings Universitet', colored squares represent each program."
            width={240}
            height={40}
          />
        </Link>
      </header>
    </article>
  );
}
