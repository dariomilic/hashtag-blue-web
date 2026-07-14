"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { BrandWordmark } from "@/components/HeaderWordmark";

const navLinks = [
  { label: "Arhitektura", href: "/#arhitektura", sectionId: "arhitektura" },
  { label: "Nekretnine", href: "/#poslovanje-nekretninama", sectionId: "poslovanje-nekretninama" },
  { label: "Kontakt", href: "/#kontakt", sectionId: "kontakt" },
];

const trackedSections = navLinks.map((link) => link.sectionId);

function NavItem({
  href,
  label,
  active,
  onHero,
}: {
  href: string;
  label: string;
  active: boolean;
  onHero: boolean;
}) {
  const textClass = onHero
    ? "text-[#F7F6F4]/92 hover:text-accent"
    : "text-charcoal hover:text-accent";

  const underlineClass = "bg-accent";

  return (
    <a
      href={href}
      className={`nav-link relative pb-1.5 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${textClass}`}
    >
      {label}
      <span
        className={`nav-link-underline ${underlineClass} ${active ? "nav-link-underline--active" : ""}`}
        aria-hidden="true"
      />
    </a>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isHome = pathname === "/";
  const onHero = isHome && !scrolled && !menuOpen;
  const showSolidHeader = !isHome || scrolled || menuOpen;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const elements = trackedSections
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const barClass = onHero ? "bg-[#F7F6F4]" : "bg-charcoal";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
      className={`sticky top-0 z-50 h-[var(--header-height)] transition-all duration-300 ease-out ${
        showSolidHeader
          ? "border-b border-border-light/50 bg-[rgba(255,255,255,0.92)] shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-[16px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between pl-8 pr-6 md:pl-12 md:pr-10">
        <Link
          href="/"
          aria-label="Hashtag Blue — početna"
          className="relative z-50 flex shrink-0 items-center gap-[18px]"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex shrink-0 items-center"
          >
            <BrandLogo variant="card" priority className="h-[52px] w-auto" />
          </motion.span>
          <BrandWordmark onHero={onHero} />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavItem
                  href={link.href}
                  label={link.label}
                  active={activeSection === link.sectionId}
                  onHero={onHero}
                />
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${barClass} ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${barClass} ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col bg-background transition-all duration-500 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-1 flex-col items-center justify-center px-6">
          <div className="mb-12 flex items-center gap-[18px]">
            <BrandLogo variant="card" className="h-[52px] w-auto" />
            <BrandWordmark />
          </div>
          <nav aria-label="Mobilna navigacija">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="font-heading text-3xl text-charcoal transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

export { BrandWordmark } from "@/components/HeaderWordmark";
