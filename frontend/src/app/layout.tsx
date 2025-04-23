import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import Script from "next/script";
import localFont from "next/font/local";
import { JumpToContentButton } from "../components/JumpToContentButton/JumpToContentButton";
import { Sidebar } from "../components/Sidebar/Sidebar";
import style from "./layout.module.css";
import { Footer } from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "dsek-frontend",
  description: "",
};

const asapFont = localFont({
  src: "./asap-regular.ttf",
  display: "swap",
  variable: "--ff-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={asapFont.variable}>
      <body>
        <Navbar />
        <div className={style.container}>
          <Sidebar endpoint="left-sidebar" />
          <main id="content">{children}</main>
          <Sidebar endpoint="right-sidebar" />
        </div>
        <Footer />
        <Script src="/scroll.js" />
      </body>
    </html>
  );
}
