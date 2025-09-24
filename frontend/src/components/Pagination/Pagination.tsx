import Link from "next/link";
import style from "./Pagination.module.css";
import clsx from "clsx";
import { PaginationButton } from "../PaginationButton/PaginationButton";
import {
  CgChevronDoubleLeft,
  CgChevronDoubleRight,
  CgChevronLeft,
  CgChevronRight,
} from "react-icons/cg";
import qs from "qs";

type PaginationProps = {
  page: number;
  pageSize: number;
  totalPosts: number;
  searchParams?: Record<string, string>;
};

export function Pagination({
  searchParams,
  page,
  pageSize,
  totalPosts,
}: PaginationProps) {
  if (!page || !pageSize) return null;
  const totalPages = Math.ceil(totalPosts / pageSize);
  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, start + 4);

  function hrefToPage(page: number) {
    return "?" + qs.stringify({ ...searchParams, page });
  }

  return (
    <div className={style.pagination}>
      <PaginationButton href={hrefToPage(1)} disabled={page <= 2}>
        <CgChevronDoubleLeft />
      </PaginationButton>
      <PaginationButton href={hrefToPage(page - 1)} disabled={page === 1}>
        <CgChevronLeft />
      </PaginationButton>

      <div className={style.pages}>
        {Array.from({ length: end - start + 1 }, (_, i) => (
          <PaginationButton
            key={i}
            active={start + i === page}
            href={hrefToPage(start + i)}
          >
            {start + i}
          </PaginationButton>
        ))}
      </div>

      <PaginationButton
        href={hrefToPage(page + 1)}
        disabled={page >= totalPages - 1}
      >
        <CgChevronRight />
      </PaginationButton>
      <PaginationButton
        href={hrefToPage(totalPages)}
        disabled={page === totalPages}
      >
        <CgChevronDoubleRight />
      </PaginationButton>
    </div>
  );
}
