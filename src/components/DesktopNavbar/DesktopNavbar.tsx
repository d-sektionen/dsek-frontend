import clsx from "clsx";
import style from "./DesktopNavbar.module.css";
import Image from "next/image";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import Link from "next/link";
import { NavbarLink } from "../Navbar/Navbar";
import { DesktopNavbarLink } from "../DesktopNavbarLink/DesktopNavbarLink";

type DesktopNavbarProps = {
  items: NavbarLink[];
};

export function DesktopNavbar({ items }: DesktopNavbarProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.navbar}>
        <Link href="/" className={style.logo}>
          <Image
            src="/logo_dsektionen.svg"
            alt="Logo illustration, 'Datateknologsektionen Linköpings Universitet', colored squares represent each program."
            width={600}
            height={100}
          />
        </Link>

        <nav>
          {items.map(({ label, href, children }, i) => (
            <DesktopNavbarLink key={i} label={label} href={href}>
              {children}
            </DesktopNavbarLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
