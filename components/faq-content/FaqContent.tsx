"use client";

import { useEffect, useRef } from "react";
import { FaqContentProps } from "./types";

export function FaqContent({ items }: FaqContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const details = containerRef.current?.querySelectorAll("details");
    if (!details) return;

    details.forEach((detail) => {
      detail.addEventListener("toggle", () => {
        if (detail.open) {
          details.forEach((other) => {
            if (other !== detail) other.open = false;
          });
        }
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="container faq-content padding-section">
      {items.map((item, index) => (
        <details key={item.id} className="group py-10 px-6 open:shadow-[-4px_4px_32px_0px_#00000014] border-b border-light">
          <summary className="flex cursor-pointer list-none items-center justify-between text-[32px] text-dark-gray pe-6">
            <span className="block ms-4 font-extralight group-open:text-primary">
              <span className="mr-2">{String(index + 1).padStart(1, "0")}.</span>
              {item.question}
            </span>

            {/* ÍCONE */}
            <span
              className="ml-4 text-[32px] relative w-6 h-6 flex items-center justify-center
                         text-dark-gray transition-colors duration-300
                         group-open:text-primary"
            >
              <span className="absolute opacity-100 group-open:opacity-0">+</span>
              <span className="absolute opacity-0 group-open:opacity-100">–</span>
            </span>
          </summary>

          {/* CONTEÚDO */}
          <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
            <div className="overflow-hidden">
              <p className="mt-4 text-sm text-dark-gray opacity-0 group-open:opacity-100 transition-opacity duration-300">{item.answer}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
