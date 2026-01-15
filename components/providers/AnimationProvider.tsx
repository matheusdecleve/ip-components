"use client";

import { ReactNode } from "react";
import { useSplitHeadings } from "@/hooks/useSplitHeadings";

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  useSplitHeadings();

  return <>{children}</>;
}
