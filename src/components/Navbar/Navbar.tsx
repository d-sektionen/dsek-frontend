import { DesktopNavbar } from "../DesktopNavbar/DesktopNavbar";
import { JumpToContentButton } from "../JumpToContentButton/JumpToContentButton";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { ScreenReaderText } from "../ScreenReaderText/ScreenReaderText";
import style from "./Navbar.module.css";

export type NavbarLink = {
  label: string;
  href?: string;
  children?: NavbarLink[];
};

/* TODO: this should be fetched from Strapi */
const items: NavbarLink[] = [
  {
    label: "Sektionen",
    children: [
      { label: "Aktuella dokument", href: "/aktuella-dokument" },
      { label: "Alumni-blogg", href: "/kategori/alumni-blogg" },
      { label: "Exjobb", href: "/kategori/exjobb" },
      { label: "Fotoalbum", href: "/filarkiv/fotoalbum" },
      { label: "Grafisk profil", href: "/grafisk-profil" },
      { label: "Kalender", href: "/kalender" },
      { label: "Miljö & arbetsmiljö", href: "/miljo-arbetsmiljo" },
      { label: "Sektionsinfo", href: "/sektionsinfo" },
      { label: "Sociala medier", href: "/socialamedier" },
      { label: "Styrelsen, kansliet & SnOrdfar", href: "/styrelsenkansli" },
      {
        label: "Protokoll styrelsemöten och sektionsmöten",
        href: "/aktuella-dokument/protokoll-styrelsemoten",
      },
    ],
  },
  {
    label: "Utskott",
    children: [
      { label: "Alumni", href: "/alumni" },
      { label: "D-Group", href: "/d-group" },
      { label: "DONNA – D-sektionens Damförening", href: "/donna" },
      { label: "Ekonomiutskottet", href: "/ekonomiutskottet" },
      { label: "Eventutskottet", href: "/eventutskottet" },
      { label: "Infoutskottet", href: "/info" },
      { label: "LINK-dagarna", href: "/link" },
      {
        label: "Marknadsföringsutskottet",
        children: [
          { label: "Allmän information", href: "/marknadsforing" },
          { label: "Hemmissionering", href: "/marknadsforing/hemmissionering" },
        ],
      },
      { label: "Näringslivsutskottet", href: "/naringsliv" },
      { label: "Pubutskottet", href: "/pubutskottet" },
      { label: "STABEN", href: "/staben" },
      { label: "Utbildningsutskottet", href: "/utbildningsutskottet" },
      { label: "Valberedningen", href: "/val" },
      { label: "Webbutskottet", href: "/webbutskottet" },
      { label: "Werkmästeriet", href: "/werkmasteriet" },
    ],
  },
  {
    label: "Sökande",
    children: [
      { label: "Utbildningar", href: "/sokande/utbildningar" },
      { label: "Bostad", href: "/sokande/bostad" },
      { label: "Skolan", href: "/sokande/skolan" },
      { label: "Studentliv", href: "/sokande/studentliv" },
      { label: "FAQ", href: "/sokande/FAQ" },
    ],
  },
  {
    label: "Företag",
    href: "/foretag",
    children: [
      { label: "Annonsering och Eventidéer", href: "/annonsering-och-event" },
      {
        label: "Utskott och företagsevent",
        href: "/utskott_och_foretagsevent",
      },
    ],
  },
  {
    label: "Medlemstjänster",
    href: "https://medlem.d-sektionen.se",
  },
];

/* Bad solution alert! Fix this eventually by unifying the navbars */
export function Navbar() {
  return (
    <>
      <div className={style.desktopNavbar}>
        <ScreenReaderText as="h3">Desktop navbar</ScreenReaderText>
        <DesktopNavbar items={items} />
      </div>
      <JumpToContentButton />
      <div className={style.mobileNavbar}>
        <ScreenReaderText as="h3">Mobile navbar</ScreenReaderText>
        <MobileNavbar items={items} />
      </div>
    </>
  );
}
