import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import Script from "next/script";
import { JumpToContentButton } from "@/components/JumpToContentButton/JumpToContentButton";

export const metadata: Metadata = {
  title: "dsek-frontend",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JumpToContentButton />
        <Navbar />
        <main id="content">{children}</main>
        <Script src="/scroll.js" />
      </body>
    </html>
  );
}
