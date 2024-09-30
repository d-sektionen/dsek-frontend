import Link from "next/link";
import type { NavbarLink } from "../Navbar/Navbar";
import style from "./MobileNavbarLink.module.css";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

type MobileNavbarLinkProps = {
  label: string;
  href?: string;
  indent?: number;
  children?: NavbarLink[];
};

export function MobileNavbarLink({
  label,
  href,
  indent = 1,
  children,
}: MobileNavbarLinkProps) {
  const Label = href != null ? Link : "li";

  if (children == null) {
    return (
      <Label className={style.label} href={href ?? ""}>
        {label}
      </Label>
    );
  }

  return (
    <details className={style.navbarLink}>
      <summary>
        <Label className={style.label} href={href ?? ""}>
          {label}
          <CgChevronDown className={style.iconClosed} />
          <CgChevronUp className={style.iconOpen} />
        </Label>
      </summary>
      <nav style={{ "--indent": indent } as Record<string, unknown>}>
        {children.map(({ label, href, children }) => (
          <MobileNavbarLink indent={indent + 1} label={label} href={href}>
            {children}
          </MobileNavbarLink>
        ))}
      </nav>
    </details>
  );
}
