"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { brandPhotos } from "@/lib/photos";
import ScrollIndicator from "@/components/ScrollIndicator";

const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-[var(--header-height)] flex min-h-screen items-center overflow-hidden pt-[var(--header-height)]"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="absolute inset-0 -top-[10%] h-[120%] w-full" style={{ y: imageY }}>
          <Image
            src={brandPhotos.hero}
            alt=""
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.42)]" aria-hidden="true" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.div
          className="max-w-[520px] text-left"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={heroItem}>
            <h1 className="brand-wordmark text-[clamp(1.7rem,4.25vw,2.76rem)] font-medium uppercase leading-none">
              <span className="text-[#F7F6F4]">HASHTAG</span>{" "}
              <span className="text-[#205B8C]">BLUE</span>
            </h1>
          </motion.div>

          <motion.p
            variants={heroItem}
            className="font-heading mt-7 text-[clamp(2.48rem,6.05vw,4.13rem)] leading-[1.14] text-[#F7F6F4]"
          >
            Arhitektura.
            <br />
            Urbanizam.
            <br />
            Nekretnine.
          </motion.p>

          <motion.p
            variants={heroItem}
            className="mt-10 text-[15px] leading-[1.95] text-[#F7F6F4]/88 md:mt-12 md:text-base"
          >
            Arhitektonski ured iz Zagreba specijaliziran za projektiranje privatnih kuća i zgrada
            te poslovanje nekretninama.
          </motion.p>

          <motion.div variants={heroItem} className="mt-12 flex flex-wrap gap-4 md:mt-14">
            <a href="#arhitektura" className="btn-primary">
              Naše usluge
            </a>
            <a href="#kontakt" className="btn-secondary">
              Kontakt
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
