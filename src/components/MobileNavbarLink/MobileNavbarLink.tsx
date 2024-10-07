import Link from "next/link";
import style from "./MobileNavbarLink.module.css";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import clsx from "clsx";
import { apiFetch } from "@/util/api";
import { NavbarLink } from "@/util/strapi";

type MobileNavbarLinkProps = {
  id: number;
  depth?: number;
};

// TODO: This can probably be cleverly combined with <DesktopNavbarLink /> in some way
//       but this site will (should) be redesigned at some point so having them separate
//       right now makes much more sense.
export async function MobileNavbarLink({
  id,
  depth = 1,
}: MobileNavbarLinkProps) {
  const depthVariable = { "--depth": depth } as Record<string, unknown>;

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
    <li>
      <details
        name={`navbar-${depth}`}
        style={depthVariable}
        className={style.navbarLink}
      >
        <summary>
          <Label className={style.label} href={url ?? ""}>
            {label}
          </Label>

          {hasChildren ? (
            <div className={style.icon}>
              <CgChevronDown size={20} className={style.iconClosed} />
              <CgChevronUp size={20} className={style.iconOpen} />
            </div>
          ) : null}
        </summary>
        <ol>
          {navbar_links?.data.map(({ id }) => (
            <MobileNavbarLink key={id} id={id} depth={depth + 1} />
          ))}
        </ol>
      </details>
    </li>
  );
}
