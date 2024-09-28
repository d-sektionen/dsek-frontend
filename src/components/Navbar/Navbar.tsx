import clsx from "clsx";
import style from "./Navbar.module.css";
import Image from "next/image";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import Link from "next/link";

type NavbarLink = {
  label: string;
  href?: string;
  children?: NavbarLink[];
};

/* TODO: this should be fetched from Strapi */
const links: NavbarLink[] = [
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

export function Navbar() {
  return (
    <div className={style.wrapper}>
      <div className={style.navbar}>
        <Link href="/">
          <Image
            className={style.logo}
            src="/logo_dsektionen.svg"
            alt="Logo illustration, 'Datateknologsektionen Linköpings Universitet', colored squares represent each program."
            width={600}
            height={100}
          />
        </Link>

        <nav>
          {links.map(({ label, href, children }, i) => (
            <NavbarItem key={i} label={label} href={href}>
              {children?.map(({ label, href, children }, j) => (
                <NavbarItem key={j} isSubItem label={label} href={href}>
                  {children?.map(({ label, href, children }, k) => (
                    <NavbarItem key={k} isSubItem label={label} href={href} />
                  ))}
                </NavbarItem>
              ))}
            </NavbarItem>
          ))}
        </nav>
      </div>
    </div>
  );
}
