"use client";

import { motion } from "framer-motion";
import { Award, Building2, UserRound, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fadeUpVariants, VIEWPORT_ONCE } from "@/lib/motion";

const statIcons: LucideIcon[] = [Award, Building2, UserRound];

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) {
    return { target: 0, suffix: value };
  }

  return { target: Number(match[1]), suffix: match[2] };
}

type CounterStatProps = {
  value: string;
  label: string;
  delay?: number;
  iconIndex?: number;
};

export default function CounterStat({ value, label, delay = 0, iconIndex }: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);
  const { target, suffix } = parseStatValue(value);
  const Icon = iconIndex !== undefined ? statIcons[iconIndex] : undefined;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || target === 0) return;

    let frame = 0;
    const duration = 1600;
    const start = performance.now() + delay;

    function tick(now: number) {
      const elapsed = now - start;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, delay]);

  return (
    <motion.article
      ref={ref}
      className="stat-card group"
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
      {Icon && (
        <Icon
          className="mx-auto mb-6 h-5 w-5 text-accent/70"
          strokeWidth={1.25}
          aria-hidden="true"
        />
      )}
      <p className="font-heading text-[clamp(3.25rem,8vw,5.5rem)] leading-none tracking-tight text-charcoal">
        {target === 0 ? value : `${displayValue}${suffix}`}
      </p>
      <p className="mt-5 text-[12px] leading-relaxed tracking-[0.14em] text-muted uppercase">
        {label}
      </p>
    </motion.article>
  );
}
