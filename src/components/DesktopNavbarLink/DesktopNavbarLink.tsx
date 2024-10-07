import { ReactNode } from "react";
import style from "./DesktopNavbarLink.module.css";
import Link from "next/link";
import clsx from "clsx";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { NavbarLink } from "../Navbar/Navbar";

type DesktopNavbarLinkProps = {
  label: string;
  href?: string;
  depth?: number;
  children?: NavbarLink[];
};

// TODO: This can probably be cleverly combined with <MobileNavbarLink /> in some way
//       but this site will (should) be redesigned at some point so having them separate
//       right now makes much more sense.
export function DesktopNavbarLink({
  label,
  href,
  depth = 1,
  children,
}: DesktopNavbarLinkProps) {
  const Label = href != null ? Link : "span";
  const isNested = depth > 1;

  return (
    <li className={clsx(style.navbarLink, isNested && style.nested)}>
      <Label tabIndex={0} className={style.label} href={href ?? ""}>
        {label}

        {children &&
          (isNested ? (
            <CgChevronRight size={16} />
          ) : (
            <CgChevronDown size={16} />
          ))}
      </Label>

      <ol>
        {children?.map(({ label, href, children }, i) => (
          <DesktopNavbarLink
            key={i}
            depth={depth + 1}
            label={label}
            href={href}
          >
            {children}
          </DesktopNavbarLink>
        ))}
      </ol>
    </li>
  );
}
