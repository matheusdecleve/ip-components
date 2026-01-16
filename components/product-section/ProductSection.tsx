"use client";

import { useRef } from "react";
import { ProductCard } from "@/components/product-card";
import { ProductSectionProps } from "./types";

export function ProductSection({ products }: ProductSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  function scrollNext() {
    sliderRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  }

  function scrollPrev() {
    sliderRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  }

  return (
    <section className="py-20">
      {/* SLIDER */}
      <div className="relative">
        {/* margem esquerda alinhada com container */}
        <div
          ref={sliderRef}
          className="
            flex gap-8
            overflow-x-auto
            scroll-smooth
            pl-[max(1rem,calc((100vw-1370px)/2))]
            pr-16
            scrollbar-hide
          "
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[330px] max-w-[330px]">
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
