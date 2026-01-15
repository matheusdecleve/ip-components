"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeaderHeroProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export function HeaderHero({ title, description, backgroundImage, linesImage, buttons }: HeaderHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLImageElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (linesRef.current) {
        gsap.from(linesRef.current, {
          yPercent: 80,
          opacity: 0,
          ease: "power3.out",
          duration: 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            scrub: 2,
          },
        });
      }

      if (backgroundRef.current) {
        gsap.from(backgroundRef.current, {
          scale: 1.4,
          ease: "power3.out",
          duration: 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    // LIMPEZA GARANTIDA
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="header-hero relative w-full min-h-screen overflow-hidden
                 flex flex-col justify-end bg-dark-gray"
    >
      {/* LINHAS */}
      <Image ref={linesRef} src={linesImage} alt="Linhas ilustrativas" fill className="absolute bottom-0 left-0 w-full h-auto object-contain" />

      {/* BACKGROUND */}
      <Image ref={backgroundRef} src={backgroundImage} alt="" fill priority className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* BLUR MASK */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] backdrop-blur-md" />

      {/* CONTEÚDO */}
      <div className="relative z-10 bg-overlay py-[100px]">
        <div className="container">
          <h1 className="text-white mb-2">{title}</h1>

          <p className="text-lg text-white max-w-[640px]">{description}</p>

          <div className="flex items-center gap-x-5 mt-12">
            {buttons.map((button) =>
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
      </div>
    </section>
  );
}
