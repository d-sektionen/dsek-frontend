import { ReactNode } from "react";
import style from "./DesktopNavbarLink.module.css";
import Link from "next/link";
import clsx from "clsx";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import type { NavbarLink } from "../../util/strapi";
import { strapiFetch } from "../../util/strapi";

type DesktopNavbarLinkProps = {
  documentId: string;
  depth?: number;
};

// TODO: This can probably be cleverly combined with <MobileNavbarLink /> in some way
//       but this site will (should) be redesigned at some point so having them separate
//       right now makes much more sense.
export async function DesktopNavbarLink({
  documentId,
  depth = 1,
}: DesktopNavbarLinkProps) {
  const isNested = depth > 1;

  const { data: link } = await strapiFetch<NavbarLink>(
    `/navbar-links/${documentId}`,
    { populate: "*" },
  );

  if (link == null) {
    return null;
  }

  const { label, url, navbar_links } = link;
  const hasChildren = (navbar_links?.length ?? 0) > 0;
  const Label = url != null ? Link : "span";

  return (
    <li
      key={documentId}
      className={clsx(style.navbarLink, isNested && style.nested)}
    >
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
        {navbar_links?.map(({ documentId }) => (
          <DesktopNavbarLink
            key={documentId}
            documentId={documentId}
            depth={depth + 1}
          />
        ))}
      </ol>
    </li>
  );
}
