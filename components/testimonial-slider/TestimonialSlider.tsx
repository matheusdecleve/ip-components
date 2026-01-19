"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialSliderProps } from "./types";

export function TestimonialSlider({ items, autoplayDelay = 5000 }: TestimonialSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLElement[]>([]);
  const current = useRef(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const nextRef = useRef<(() => void) | null>(null);
  const prevRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    slidesRef.current = gsap.utils.toArray(sliderRef.current.querySelectorAll(".testimonial-slide")) as HTMLElement[];

    const slides = slidesRef.current;
    if (!slides.length) return;

    const showSlide = (index: number, direction = 1) => {
      const prev = slides[current.current];
      current.current = (index + slides.length) % slides.length;
      const next = slides[current.current];

      gsap
        .timeline()
        .to(prev, {
          autoAlpha: 0,
          y: direction > 0 ? -20 : 20,
          duration: 0.5,
          ease: "power2.out",
        })
        .set(prev, { display: "none" })
        .set(next, { display: "block" })
        .fromTo(
          next,
          { autoAlpha: 0, y: direction > 0 ? 20 : -20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }
        );
    };

    const nextSlide = () => showSlide(current.current + 1, 1);
    const prevSlide = () => showSlide(current.current - 1, -1);

    nextRef.current = nextSlide;
    prevRef.current = prevSlide;

    // estado inicial
    slides.forEach((slide, i) => {
      gsap.set(slide, {
        autoAlpha: i === 0 ? 1 : 0,
        display: i === 0 ? "block" : "none",
        y: 0,
      });
    });

    const startAutoPlay = () => {
      interval.current = setInterval(nextSlide, autoplayDelay);
    };

    const stopAutoPlay = () => {
      if (interval.current) clearInterval(interval.current);
    };

    startAutoPlay();

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
      }

      if (e.key === "ArrowLeft") {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      stopAutoPlay();
      document.removeEventListener("keydown", handleKeydown);
      ScrollTrigger?.getAll()?.forEach((t) => t.kill());
      gsap.killTweensOf(slides);
    };
  }, [autoplayDelay]);

  return (
    <div className="overflow-hidden padding-section">
      <div ref={sliderRef} className="relative" aria-live="polite" aria-roledescription="carousel">
        {items.map((item) => (
          <figure key={item.id} className="testimonial-slide container">
            <blockquote className="text-2xl md:text-[64px] leading-[72px] text-dark-gray font-extralight text-center">{item.quote}</blockquote>

            <figcaption className="mt-14 flex items-center gap-4 mx-auto w-fit">
              <div className="w-28 h-28 rounded-full bg-[#F0F0F0] overflow-hidden">
                {item.avatar && <Image src={item.avatar} alt={item.name} width={112} height={112} />}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
                <p className="text-xs text-gray-400 mt-1">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}

        {/* SETA ESQUERDA */}
        <button
          aria-label="Depoimento anterior"
          className="absolute left-0 arrow-slider"
          onClick={() => {
            if (interval.current) clearInterval(interval.current);
            prevRef.current?.();
          }}
        >
          <Image src="/images/icons/testimonial-arrow-left.svg" alt="Ícone de seta" width={24} height={24} />
        </button>

        {/* SETA DIREITA */}
        <button
          aria-label="Próximo depoimento"
          className="absolute right-0 arrow-slider"
          onClick={() => {
            if (interval.current) clearInterval(interval.current);
            nextRef.current?.();
          }}
        >
          <Image src="/images/icons/testimonial-arrow-right.svg" alt="Ícone de seta" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
