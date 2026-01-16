"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeaturedCardProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedCard({ items }: FeaturedCardProps) {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          y: (index + 1) * 80,
          opacity: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        });
      });
    });

    // CLEANUP
    return () => ctx.revert();
  }, []);

  return (
    <div className="container grid grid-cols-3 gap-x-8 padding-section">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="featured-card"
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
        >
          <Image
            src={item.image}
            alt={item.imageAlt || "Imagem do card destacado"}
            width={520}
            height={520}
            className="w-full h-[520px] object-cover bg-[#DADADA]"
          />

          <h3 className="mt-10 mb-4">{item.title}</h3>

          <p className="text-lg">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
