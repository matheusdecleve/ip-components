"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { ExperienceGalleryProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceGallery({
  title,
  subtitle,
  description,
  buttonLabel,
  buttonHref = "#",
  images,
}: ExperienceGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const imageEls = gsap.utils.toArray<HTMLDivElement>(
        ".experience-image"
      );

      gsap.set(imageEls, {
        opacity: 0,
        y: 20,
      });

      gsap.to(imageEls, {
        opacity: 1,
        y: 0,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${imageEls.length * 60}%`,
          scrub: true,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="experience-gallery relative h-screen bg-white overflow-hidden"
    >
      {/* CONTEÚDO CENTRAL */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        {subtitle && (
          <span className="text-sm text-primary mb-2">{subtitle}</span>
        )}

        <h2
          className="text-4xl md:text-5xl font-light mb-4 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {description && (
          <p className="text-dark-gray text-lg mb-8">{description}</p>
        )}

        {buttonLabel && (
          <Link
            href={buttonHref}
            className="button bg-primary text-white pointer-events-auto"
          >
            {buttonLabel}
          </Link>
        )}
      </div>

      {/* IMAGENS */}
      <div className="absolute inset-0 w-full">
        {images.map((img) => (
          <div
            key={img.id}
            className={`experience-image absolute ${img.className ?? ""}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
