"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadcrumbProps } from "./types";

export function Breadcrumb({ labels = {} }: BreadcrumbProps) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    const label =
      labels[segment] ??
      decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      label,
      href,
      isLast,
    };
  });

  return (
    <div className="fixed left-0 top-20 z-50 text-xs text-[#868686] border-t border-b border-[#DADADA] w-full bg-white h-12 flex items-center">
      <div className="container flex items-center gap-x-2">
        <Image src="/images/icons/house.svg" alt="Ícone de uma casa" width={16} height={16} />

        <Link href="/" className="hover:text-primary">
          Home
        </Link>

        {breadcrumbs.map((item, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <span>/</span>

            {item.isLast ? (
              <span className="font-bold text-dark-gray">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
