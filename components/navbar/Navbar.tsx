"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { NavbarProps } from "./types";

export function Navbar({ variant = "white", logoBlue, logoWhite, links, actions }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "transparent") return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      console.log("scroll");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const isTransparent = variant === "transparent" && !isScrolled;

  return (
    <header className={clsx("w-full z-50 transition-all duration-300 fixed top-0 left-0", isTransparent ? "bg-transparent" : "bg-white")}>
      <div className="container flex items-center justify-between py-3">
        {/* LOGO + NAV */}
        <div className="flex items-center gap-x-[64px]">
          <Link href="/">
            <Image src={isTransparent ? logoWhite : logoBlue} alt="Logo Ilha Pura" width={181} height={48} priority />
          </Link>

          <nav className="flex items-center gap-x-[48px]">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={clsx(
                  "text-sm font-semibold transition-colors",
                  isTransparent ? "text-white hover:text-primary" : "text-gray hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-x-5 px-3">
          {actions.map((action) => (
            <Link
              key={action.id}
              href={action.href}
              className={clsx(
                "button flex items-center gap-x-2 transition-all",
                action.variant === "primary"
                  ? "bg-white text-primary-dark hover:bg-primary-dark hover:text-white"
                  : isTransparent
                  ? "text-white hover:bg-white hover:text-primary-dark"
                  : "text-gray hover:bg-primary hover:text-white"
              )}
            >
              {action.icon && <Image src={action.icon} alt="" width={20} height={20} />}
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
