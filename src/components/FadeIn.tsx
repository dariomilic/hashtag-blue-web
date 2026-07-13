"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpVariants, VIEWPORT_ONCE } from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={{
        hidden: fadeUpVariants.hidden,
        visible: {
          ...fadeUpVariants.visible,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: delay / 1000,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
