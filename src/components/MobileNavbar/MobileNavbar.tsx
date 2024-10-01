import { useState } from "react";
import { NavbarLink } from "../Navbar/Navbar";
import style from "./MobileNavbar.module.css";
import Image from "next/image";
import { CgClose, CgMenu } from "react-icons/cg";
import Link from "next/link";
import { MobileNavbarLink } from "../MobileNavbarLink/MobileNavbarLink";

type MobileNavbarProps = {
  items: NavbarLink[];
};

export function MobileNavbar({ items }: MobileNavbarProps) {
  return (
    <article className={style.navbar}>
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

      <details className={style.menu}>
        <summary className={style.menuButton}>
          <CgMenu className={style.menuIcon} size={24} />
          <CgClose className={style.closeIcon} size={24} />
        </summary>
        <nav>
          {items.map(({ label, href, children }) => (
            <MobileNavbarLink label={label} href={href}>
              {children}
            </MobileNavbarLink>
          ))}
        </nav>
      </details>
    </article>
  );
}
