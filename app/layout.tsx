import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

import { AnimationProvider } from "@/components/providers/AnimationProvider";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";
import { Footer } from "@/components/footer";
import { footerData } from "@/src/data/footer";

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
          {children}
          <Footer {...footerData} />
        </AnimationProvider>
      </body>
    </html>
  );
}
