import Link from "next/link";
import style from "./PaginationButton.module.css";
import clsx from "clsx";

type PaginationButtonProps = {
  href: string;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
};

export function PaginationButton({
  href,
  disabled = false,
  active = false,
  children,
}: PaginationButtonProps) {
  return (
    <Link
      className={clsx(
        style.paginationButton,
        disabled && style.disabled,
        active && style.active,
      )}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      href={href}
    >
      {children}
    </Link>
  );
}
