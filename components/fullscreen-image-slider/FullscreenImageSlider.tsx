"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FullscreenImageSliderProps } from "./types";

export function FullscreenImageSlider({ slides, autoplayDelay = 5000 }: FullscreenImageSliderProps) {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const current = useRef(0);
  const isAnimating = useRef(false);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const captionRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const totalRef = useRef<HTMLSpanElement>(null);

  const nextRef = useRef<(() => void) | null>(null);
  const prevRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!slidesRef.current.length) return;

    totalRef.current!.textContent = String(slides.length).padStart(2, "0");

    // estado inicial
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, {
        autoAlpha: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 1.1,
      });
    });

    function updateUI() {
      captionRef.current!.textContent = slides[current.current].caption;
      currentRef.current!.textContent = String(current.current + 1).padStart(2, "0");
    }

    function goToSlide(index: number) {
      if (isAnimating.current || index === current.current) return;
      isAnimating.current = true;

      const prevSlide = slidesRef.current[current.current];
      current.current = (index + slides.length) % slides.length;
      const nextSlide = slidesRef.current[current.current];

      gsap
        .timeline({
          onComplete: () => {
            isAnimating.current = false;
          },
        })
        .to(prevSlide, {
          autoAlpha: 0,
          scale: 1.05,
          duration: 0.8,
          ease: "power2.out",
        })
        .fromTo(
          nextSlide,
          { autoAlpha: 0, scale: 1.1 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<"
        );

      updateUI();
    }

    function nextSlide() {
      goToSlide(current.current + 1);
    }

    function prevSlide() {
      goToSlide(current.current - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      interval.current = setInterval(nextSlide, autoplayDelay);
    }

    function stopAutoplay() {
      if (interval.current) clearInterval(interval.current);
    }

    nextRef.current = () => {
      stopAutoplay();
      nextSlide();
      startAutoplay();
    };

    prevRef.current = () => {
      stopAutoplay();
      prevSlide();
      startAutoplay();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextRef.current?.();
      if (e.key === "ArrowLeft") prevRef.current?.();
    };

    document.addEventListener("keydown", onKeyDown);

    updateUI();
    startAutoplay();

    // CLEANUP
    return () => {
      stopAutoplay();
      document.removeEventListener("keydown", onKeyDown);
      gsap.killTweensOf(slidesRef.current);
    };
  }, [slides, autoplayDelay]);

  return (
    <div
      id="fullscreen-slider"
      className="relative w-full h-screen overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Galeria do empreendimento"
    >
      {/* SLIDES */}
      <div className="absolute inset-0 max-w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => {
              if (el) slidesRef.current[index] = el;
            }}
            className="slide absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* SETAS */}
      <button aria-label="Slide anterior" className="absolute left-0 arrow-slider" onClick={() => prevRef.current?.()}>
        <Image src="/images/icons/testimonial-arrow-left.svg" alt="Ícone de seta" width={24} height={24} />
      </button>

      <button aria-label="Próximo slide" className="absolute right-0 arrow-slider" onClick={() => nextRef.current?.()}>
        <Image src="/images/icons/testimonial-arrow-right.svg" alt="Ícone de seta" width={24} height={24} />
      </button>

      {/* LEGENDA + CONTADOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center">
        <span ref={captionRef} className="bg-white text-dark-gray px-6 py-4" />

        <span className="bg-[#242424CC] text-white px-6 py-4">
          <b ref={currentRef}>01</b> | <span ref={totalRef}>01</span>
        </span>
      </div>
    </div>
  );
}
