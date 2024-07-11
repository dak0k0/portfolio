import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "./ui/header"
import HeaderMobile from "./ui/header_mobile"

const courier_prime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "dakota yu",
  description: "indomie mi goreng appreciator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courier_prime.className}>
        <Header />
        <HeaderMobile />
        {children}</body>
    </html>
  );
}
