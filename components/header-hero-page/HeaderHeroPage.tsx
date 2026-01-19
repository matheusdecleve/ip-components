"use client";

import Image from "next/image";
import Link from "next/link";
import { HeaderHeroPageProps } from "./types";

export function HeaderHeroPage({ subtitle, title, description, linesImage, buttons }: HeaderHeroPageProps) {
  return (
    <section className="w-full min-h-[456px] relative bg-primary-dark flex flex-col justify-center header-hero-page overflow-hidden mt-[128px]">
      {/* LINHAS */}
      {linesImage && <Image src={linesImage} alt="Linhas ilustrativas" width={1000} height={400} className="absolute bottom-0 right-0" />}

      {/* CONTEÚDO */}
      <div className="container space-y-2 text-white">
        <span className="text-sm">{subtitle}</span>
        <h1 className="!text-[48px] max-w-2xl" dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p>{description}</p>

        <div className="flex items-center gap-x-5 mt-8">
          {buttons?.map((button) =>
            button.variant === "primary" ? (
              <Link key={button.id} href={button.href} className="bg-white text-primary-dark button">
                {button.label}
              </Link>
            ) : (
              <Link key={button.id} href={button.href} className="border border-[#FFFFFF29] text-white button">
                {button.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
