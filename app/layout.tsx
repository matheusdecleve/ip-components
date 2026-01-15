import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

import { AnimationProvider } from "@/components/providers/AnimationProvider";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

import { HeaderHero } from "@/components/header-hero";
import { headerHeroData } from "@/src/data/header-hero";

import { HeaderHeroPage } from "@/components/header-hero-page";
import { headerHeroPageData } from "@/src/data/header-hero-page";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilha Pura - components",
  description: "By Hagens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${albertSans.variable} antialiased`}>
        <AnimationProvider>
          <Navbar {...navbarData} />
          <HeaderHero {...headerHeroData} />
          <HeaderHeroPage {...headerHeroPageData} />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
