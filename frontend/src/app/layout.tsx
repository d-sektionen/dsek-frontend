import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import localFont from "next/font/local";
import { JumpToContentButton } from "../components/JumpToContentButton/JumpToContentButton";
import { Sidebar } from "../components/Sidebar/Sidebar";
import style from "./layout.module.css";
import { Footer } from "../components/Footer/Footer";
import clsx from "clsx";
import { ScrollClasses } from "./ScrollClasses";

export const metadata: Metadata = {
  title: "D-sektionen på LiU",
  description:
    "D-sektionen vid LiU bildades 1976 i Linköping och har Sveriges äldsta och mest moderna datateknologiska utbildningar.",
};

const asapFont = localFont({
  src: "../assets/fonts/asap-regular.ttf",
  display: "swap",
  variable: "--ff-display",
});

const stabenFont = localFont({
  src: "../assets/fonts/rocky-aoe.ttf",
  display: "swap",
  variable: "--ff-staben",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={clsx(asapFont.variable, stabenFont.variable)}>
      <body>
        <Navbar />
        <div className={style.container}>
          <Sidebar endpoint="left-sidebar" />
          <main id="content">{children}</main>
          <Sidebar endpoint="right-sidebar" />
        </div>
        <Footer />
        <ScrollClasses />
      </body>
    </html>
  );
}
