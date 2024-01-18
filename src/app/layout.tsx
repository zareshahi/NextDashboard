import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const estedad = localFont({ src: "../assets/fonts/Estedad.woff2" });

export const metadata: Metadata = {
  title: "خزشگر منتظر",
  description: "منتظر دات آی آر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={estedad.className}>{children}</body>
    </html>
  );
}
