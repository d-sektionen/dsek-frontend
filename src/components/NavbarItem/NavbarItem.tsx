import { ReactNode } from "react";
import style from "./NavbarItem.module.css";
import Link from "next/link";
import clsx from "clsx";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";

type NavbarItemProps = {
  label: string;
  href?: string;
  children?: ReactNode;
  isSubItem?: boolean;
};

export function NavbarItem({
  label,
  href,
  children,
  isSubItem,
}: NavbarItemProps) {
  const Label = href != null ? Link : "li";

  return (
    <div className={clsx(style.navbarItem, isSubItem && style.subItem)}>
      <Label
        tabIndex={0}
        className={style.link}
        role="listitem"
        href={href ?? ""}
      >
        {label}
        {children && (isSubItem ? <CgChevronRight /> : <CgChevronDown />)}
      </Label>

      {children && <nav className={style.subMenu}>{children}</nav>}
    </div>
  );
}
