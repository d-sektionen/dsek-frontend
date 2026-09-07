"use client";

import { useEffect } from "react";

const MINIMUM_SCROLL = 20;

export function ScrollClasses() {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > MINIMUM_SCROLL);

      const scrollDelta = window.scrollY - lastScrollY;
      if (Math.abs(scrollDelta) > MINIMUM_SCROLL) {
        document.body.classList.toggle("scrolled-down", scrollDelta > 0);
        document.body.classList.toggle("scrolled-up", scrollDelta < 0);
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
