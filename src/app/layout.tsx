import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const estedad = localFont({ src: "../assets/fonts/Vazirmatn-RD.woff2" });

export const metadata: Metadata = {
  title: "سامانه تبدیل صوت به متن منتظر",
  description: "سامانه ای برای تبدیل صوت به متن فارسی",
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
