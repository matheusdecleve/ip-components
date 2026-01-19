"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PlantsContentTabProps } from "./types";
import Image from "next/image";

export function PlantsContentTab({ plants }: PlantsContentTabProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesRef = useRef<HTMLDivElement[]>([]);

  const activePlant = plants[activeIndex];
  const hasSlider = activePlant.images.length > 1;

  function animateSlide(nextIndex: number) {
    if (nextIndex === currentSlide) return;

    const current = slidesRef.current[currentSlide];
    const next = slidesRef.current[nextIndex];

    if (!current || !next) return;

    gsap
      .timeline()
      .to(current, {
        autoAlpha: 0,
        scale: 1.05,
        duration: 0.35,
        ease: "power2.out",
      })
      .set(next, { autoAlpha: 0, scale: 1.1 })
      .to(
        next,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "<"
      );

    setCurrentSlide(nextIndex);
  }

  function nextSlide() {
    animateSlide((currentSlide + 1) % activePlant.images.length);
  }

  function prevSlide() {
    animateSlide((currentSlide - 1 + activePlant.images.length) % activePlant.images.length);
  }

  // reset ao trocar a planta
  useEffect(() => {
    setCurrentSlide(0);

    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, {
        autoAlpha: i === 0 ? 1 : 0,
        scale: 1,
      });
    });
  }, [activeIndex]);

  return (
    <section className="container py-20 grid grid-cols-1 lg:grid-cols-[320px_1fr] items-start min-h-[680px]">
      {/* TABS */}
      <div>
        {plants.map((plant, index) => (
          <button
            key={plant.id}
            onClick={() => setActiveIndex(index)}
            className={`w-full text-left py-8 px-6 transition border-b border-[#F0F0F0] ${
              index === activeIndex ? "bg-secondary text-white" : "hover:bg-gray-50"
            }`}
          >
            <h3 className="text-lg font-medium">{plant.title}</h3>
            <p className="text-sm opacity-70 mt-1">{plant.area}</p>
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <div className="relative w-full min-h-[680px] overflow-hidden ">
        {activePlant.images.map((img, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) slidesRef.current[i] = el;
            }}
            className="absolute inset-0"
          >
            <img src={img.src} alt={img.alt ?? activePlant.title} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* SETAS */}
        {hasSlider && (
          <>
            {/* SETA ESQUERDA */}
            <button aria-label="Depoimento anterior" className="absolute left-0 arrow-slider" onClick={prevSlide}>
              <Image src="/images/icons/testimonial-arrow-left.svg" alt="Ícone de seta" width={24} height={24} />
            </button>

            {/* SETA DIREITA */}
            <button aria-label="Próximo depoimento" className="absolute right-0 arrow-slider" onClick={nextSlide}>
              <Image src="/images/icons/testimonial-arrow-right.svg" alt="Ícone de seta" width={24} height={24} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
