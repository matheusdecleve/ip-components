"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GalleryRowProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export function GalleryRow({ row1, row2 }: GalleryRowProps) {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    gsap.from(row1Ref.current, {
      x: -340,
      ease: "power3.out",
      scrollTrigger: {
        trigger: row1Ref.current,
        start: "top 40%",
        end: "bottom 15%",
        scrub: 1,
      },
    });

    gsap.from(row2Ref.current, {
      x: 340,
      ease: "power3.out",
      scrollTrigger: {
        trigger: row1Ref.current,
        start: "top 40%",
        end: "bottom 15%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-8 overflow-hidden">
      {/* ROW 1 */}
      <div ref={row1Ref} className="flex items-center justify-between gap-x-8 w-full">
        {row1.map((img, index) => (
          <Image
            key={img.id}
            src={img.src}
            alt={img.alt}
            width={470}
            height={360}
            className={`object-cover max-w-[470px] max-h-[360px] ${index === 0 ? "ms-8" : ""}`}
          />
        ))}
      </div>

      {/* ROW 2 */}
      <div ref={row2Ref} className="flex items-center justify-between gap-x-8 w-full">
        {row2.map((img, index) => (
          <Image
            key={img.id}
            src={img.src}
            alt={img.alt}
            width={470}
            height={360}
            className={`object-cover max-w-[470px] max-h-[360px] ${index === row2.length - 1 ? "me-8" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
