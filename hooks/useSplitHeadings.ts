"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function useSplitHeadings() {
  const pathname = usePathname();

  useEffect(() => {
    let splits: SplitType[] = [];

    // espera o layout estabilizar
    const timeout = setTimeout(() => {
      const headings = document.querySelectorAll("h1");

      headings.forEach((heading) => {
        if (heading.querySelector(".char")) return;

        const split = new SplitType(heading as HTMLElement, {
          types: "chars",
        });

        splits.push(split);

        gsap.from(split.chars, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.04,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger:
            pathname === "/"
              ? undefined // HOME anima imediatamente
              : {
                  trigger: heading,
                  start: "top 80%",
                },
        });
      });

      ScrollTrigger.refresh();
    }, 50); // ESSENCIAL

    return () => {
      clearTimeout(timeout);
      splits.forEach((s) => s.revert());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);
}
