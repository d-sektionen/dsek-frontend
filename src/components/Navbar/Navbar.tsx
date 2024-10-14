import { apiFetch } from "@/util/api";
import { DesktopNavbar } from "../DesktopNavbar/DesktopNavbar";
import { JumpToContentButton } from "../JumpToContentButton/JumpToContentButton";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { ScreenReaderText } from "../ScreenReaderText/ScreenReaderText";
import style from "./Navbar.module.css";
import type { Navbar } from "@/util/strapi";

/* Bad solution alert! Fix this eventually by unifying the navbars */
export async function Navbar() {
  const navbar = await apiFetch<Navbar>("/navbar", { populate: "*" });

  if (navbar == null) {
    return null;
  }

  const links = navbar.attributes.navbar_links;

  return (
    <>
      <div className={style.desktopNavbar}>
        <ScreenReaderText as="h3">Desktop navbar</ScreenReaderText>
        <DesktopNavbar items={links.data} />
      </div>
      <JumpToContentButton />
      <div className={style.mobileNavbar}>
        <ScreenReaderText as="h3">Mobile navbar</ScreenReaderText>
        <MobileNavbar items={links.data} />
      </div>
    </>
  );
}
