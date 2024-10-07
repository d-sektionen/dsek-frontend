import { ReactNode } from "react";
import style from "./DesktopNavbarLink.module.css";
import Link from "next/link";
import clsx from "clsx";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import type { NavbarLink } from "@/util/strapi";
import { apiFetch } from "@/util/api";

type DesktopNavbarLinkProps = {
  id: number;
  depth?: number;
};

// TODO: This can probably be cleverly combined with <MobileNavbarLink /> in some way
//       but this site will (should) be redesigned at some point so having them separate
//       right now makes much more sense.
export async function DesktopNavbarLink({
  id,
  depth = 1,
}: DesktopNavbarLinkProps) {
  const isNested = depth > 1;

  const link = await apiFetch<NavbarLink>(`navbar-links/${id}`, {
    populate: "*",
  });
  if (link == null) {
    return null;
  }

  const { label, url, navbar_links } = link.attributes;
  const hasChildren = navbar_links?.data.length ?? 0 > 0;
  const Label = url != null ? Link : "span";

  return (
    <li className={clsx(style.navbarLink, isNested && style.nested)}>
      <Label tabIndex={0} className={style.label} href={url ?? ""}>
        {label}

        {hasChildren ? (
          isNested ? (
            <CgChevronRight size={16} />
          ) : (
            <CgChevronDown size={16} />
          )
        ) : null}
      </Label>

      <ol>
        {navbar_links?.data.map(({ id }) => (
          <DesktopNavbarLink key={id} id={id} depth={depth + 1} />
        ))}
      </ol>
    </li>
  );
}
