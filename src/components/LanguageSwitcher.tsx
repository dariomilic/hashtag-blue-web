"use client";

import Link from "next/link";
import { localePaths, locales, type Locale } from "@/content/translations";

type LanguageSwitcherProps = {
  locale: Locale;
  ariaLabel: string;
  variant: "desktop" | "mobile";
  activeSection: string | null;
  languagePaths?: Record<Locale, string>;
  onNavigate?: () => void;
  onHero?: boolean;
};

export default function LanguageSwitcher({
  locale,
  ariaLabel,
  variant,
  activeSection,
  languagePaths,
  onNavigate,
  onHero = false,
}: LanguageSwitcherProps) {
  const hash = activeSection && activeSection !== "hero" ? `#${activeSection}` : "";
  const isDesktop = variant === "desktop";

  return (
    <nav aria-label={ariaLabel}>
      <ul className={`flex items-center ${isDesktop ? "gap-1" : "gap-2"}`}>
        {locales.map((item, index) => {
          const active = item === locale;
          const inactiveColor = isDesktop
            ? onHero
              ? "text-white/70 hover:text-white"
              : "text-charcoal/60 hover:text-accent"
            : "text-charcoal/60 hover:text-accent";

          return (
            <li key={item} className="flex items-center">
              {index > 0 && (
                <span
                  className={`mr-1 ${isDesktop && onHero ? "text-white/30" : "text-charcoal/25"}`}
                  aria-hidden="true"
                >
                  |
                </span>
              )}
              <Link
                href={languagePaths?.[item] ?? `${localePaths[item]}${hash}`}
                hrefLang={item}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
                className={`language-switcher-link flex min-h-11 min-w-10 items-center justify-center text-[10px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 ${
                  active ? "text-accent" : inactiveColor
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
