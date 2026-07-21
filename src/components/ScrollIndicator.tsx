"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type ScrollIndicatorProps = {
  ariaLabel: string;
};

export default function ScrollIndicator({ ariaLabel }: ScrollIndicatorProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href="#statement"
      aria-label={ariaLabel}
      className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#F7F6F4]/60 transition-colors duration-300 hover:text-[#F7F6F4]/90"
      animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <ChevronDown className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
    </motion.a>
  );
}
