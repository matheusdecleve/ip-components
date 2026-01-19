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
          yPercent: 20,
          opacity: 0,
          ease: "power3.out",
          duration: 4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
          },
        });
      }

      if (backgroundRef.current) {
        gsap.from(backgroundRef.current, {
          scale: 1.2,
          ease: "power3.out",
          duration: 4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
          },
        });
      }

      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          y: -60,
          ease: "power3.out",
          duration: 4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 0",
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    // CLEANUP
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen relative bg-dark-gray flex flex-col justify-end header-hero overflow-hidden z-20">
      {/* LINHAS */}
      <Image ref={linesRef} src={linesImage} alt="Linhas ilustrativas" width={1200} height={600} className="absolute -bottom-20 left-0 w-full" />

      {/* BACKGROUND */}
      <Image ref={backgroundRef} src={backgroundImage} alt="" fill priority className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* BLUR MASK */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] backdrop-blur-md blur-mask" />

      {/* CONTEÚDO */}
      <div className="z-10 bg-overlay py-[100px]">
        <div className="container">
          <h1 className="text-white mb-2">{title}</h1>

          <p className="text-lg text-white">{description}</p>

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
