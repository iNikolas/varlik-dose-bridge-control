import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Керуйте зовнішніми силосами в STEP7 - SiloMaster",
  description:
    "Ефективно керуйте зовнішніми силосами з SiloMaster. Моніторинг дозування, втручання за потреби та оптимізація керування партіями. Натисніть, щоб оптимізувати ваш виробництво вже сьогодні!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
