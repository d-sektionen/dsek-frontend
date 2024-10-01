import Link from "next/link";
import type { NavbarLink } from "../Navbar/Navbar";
import style from "./MobileNavbarLink.module.css";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import clsx from "clsx";

type MobileNavbarLinkProps = {
  label: string;
  href?: string;
  depth?: number;
  children?: NavbarLink[];
};

// TODO: This can probably be cleverly combined with <DesktopNavbarLink /> in some way
//       but this site will (should) be redesigned at some point so having them separate
//       right now makes much more sense.
export function MobileNavbarLink({
  label,
  href,
  depth = 1,
  children,
}: MobileNavbarLinkProps) {
  const Label = href != null ? Link : "li";
  const depthVariable = { "--depth": depth } as Record<string, unknown>;

  if (children == null) {
    return (
      <Label
        style={depthVariable}
        className={clsx(style.navbarLink, style.label)}
        href={href ?? ""}
      >
        {label}
      </Label>
    );
  }

  return (
    <details style={depthVariable} className={style.navbarLink}>
      <summary>
        <Label className={style.label} href={href ?? ""}>
          {label}
          <CgChevronDown size={24} className={style.iconClosed} />
          <CgChevronUp size={24} className={style.iconOpen} />
        </Label>
      </summary>
      <nav>
        {children.map(({ label, href, children }) => (
          <MobileNavbarLink depth={depth + 1} label={label} href={href}>
            {children}
          </MobileNavbarLink>
        ))}
      </nav>
    </details>
  );
}
