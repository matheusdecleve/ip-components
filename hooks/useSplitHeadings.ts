"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function useSplitHeadings() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1");

    const splits: SplitType[] = [];

    headings.forEach((heading) => {
      const split = new SplitType(heading, {
        types: "chars",
      });

      splits.push(split);

      gsap.from(split.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.04,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
        },
      });
    });

    // LIMPEZA GLOBAL
    return () => {
      splits.forEach((split) => split.revert());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
