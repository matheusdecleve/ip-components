"use client";

import { useState } from "react";
import { ImageContentTabProps } from "./types";

export function ImageContentTabs({ items }: ImageContentTabProps) {
  const initialIndex = items.findIndex((item) => item.active) >= 0 ? items.findIndex((item) => item.active) : 0;

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isFading, setIsFading] = useState(false);

  function handleChange(index: number) {
    if (index === activeIndex) return;

    setIsFading(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 200);
  }

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 items-center padding-section">
        {/* IMAGE */}
        <div className="relative w-full h-[600px]">
          <img
            src={items[activeIndex].image}
            alt={items[activeIndex].title}
            className={`w-full h-full object-cover transition-opacity duration-700 ${isFading ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        {/* TABS */}
        <div className="space-y-10">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.id}
                onClick={() => handleChange(index)}
                className={`cursor-pointer group text-left w-full flex gap-6 ${!isActive ? "inactive" : ""}`}
              >
                <span className={`w-[2px] bg-primary transition ${isActive ? "opacity-100" : "opacity-0"}`} />

                <div>
                  <h3 className={`${isActive ? "text-primary" : ""}`}>{item.title}</h3>

                  <p className="text-dark-gray text-lg mt-4">{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
