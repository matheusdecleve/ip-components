"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

import { ProductCard } from "@/components/product-card";
import { ProductSectionProps } from "./types";

gsap.registerPlugin(Draggable);

export function ProductSection({ products }: ProductSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sliderRef.current || !wrapperRef.current) return;

    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;

    const getBounds = () => {
      const wrapperWidth = wrapper.offsetWidth;
      const sliderWidth = slider.scrollWidth;

      return {
        minX: Math.min(wrapperWidth - sliderWidth, 0),
        maxX: 0,
      };
    };

    const bounds = getBounds();

    const draggable = Draggable.create(slider, {
      type: "x",
      bounds,
      inertia: true, // só funciona se ativar o InertiaPlugin
      cursor: "grab",
      activeCursor: "grabbing",
    });

    const resize = () => {
      const newBounds = getBounds();
      draggable[0].applyBounds(newBounds);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      draggable[0].kill();
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      {/* WRAPPER */}
      <div
        ref={wrapperRef}
        className="
          relative
          w-full
          overflow-hidden
        "
      >
        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-8
            will-change-transform
            pl-[max(1rem,calc((100vw-1370px)/2))]
            pr-16
          "
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[330px] max-w-[330px] select-none">
              <ProductCard
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                href={product.href}
                tags={product.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
