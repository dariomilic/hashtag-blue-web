"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { BrandWordmark } from "@/components/HeaderWordmark";
import type { Locale, TranslationDictionary } from "@/content/translations";

const trackedSections = [
  "hero",
  "architecture",
  "real-estate",
  "business-address",
  "contact",
] as const;

function scrollToTop(homePath: string) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.location.hash) {
    window.history.replaceState(null, "", homePath);
  }
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="nav-link relative pb-1.5 text-[11px] font-medium tracking-[0.12em] uppercase hover:text-accent"
    >
      {label}
      <span
        className={`nav-link-underline bg-accent ${active ? "nav-link-underline--active" : ""}`}
        aria-hidden="true"
      />
    </Link>
  );
}

type HeaderProps = {
  locale: Locale;
  content: TranslationDictionary["header"];
  languagePaths?: Record<Locale, string>;
};

export default function Header({ locale, content, languagePaths }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pendingScrollToTop = useRef(false);

  const homePath = locale === "hr" ? "/" : `/${locale}`;
  const isHome = pathname === homePath;
  const onHero = isHome && !scrolled && !menuOpen;
  const showSolidHeader = !isHome || scrolled;
  const navLinks = [
    {
      label: content.nav.architecture,
      href: `${homePath}#architecture`,
      sectionId: "architecture",
    },
    {
      label: content.nav.realEstate,
      href: `${homePath}#real-estate`,
      sectionId: "real-estate",
    },
    {
      label: content.nav.businessAddress,
      href: `${homePath}#business-address`,
      sectionId: "business-address",
    },
    {
      label: content.nav.contact,
      href: `${homePath}#contact`,
      sectionId: "contact",
    },
  ];

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
    if (!menuOpen) {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      return;
    }

    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && pendingScrollToTop.current) {
      pendingScrollToTop.current = false;
      scrollToTop(homePath);
    }
  }, [homePath, menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      e.preventDefault();
      if (menuOpen) {
        pendingScrollToTop.current = true;
        closeMenu();
        return;
      }
      scrollToTop(homePath);
      return;
    }

    if (menuOpen) {
      closeMenu();
    }
  }

  const barClass = onHero ? "bg-white" : "bg-[#111111]";
  const instantHeader = showSolidHeader && !isHome;

  return (
    <>
      <header
        className={`site-header sticky top-0 z-50 h-[var(--header-height)]${
          showSolidHeader ? " site-header--scrolled" : ""
        }${instantHeader ? " site-header--instant" : ""}`}
        data-scrolled={showSolidHeader ? "true" : "false"}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between pl-8 pr-6 md:pl-12 md:pr-10">
          <Link
            href={homePath}
            scroll={isHome ? false : true}
            onClick={handleLogoClick}
            aria-label={content.logoAriaLabel}
            className="header-brand-link relative z-50 flex shrink-0 cursor-pointer items-center gap-[18px]"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex shrink-0 items-center"
            >
              <BrandLogo
                variant="color"
                priority
                className="h-[52px] w-auto"
              />
            </motion.span>
            <BrandWordmark />
          </Link>

          <div className="site-header__nav hidden items-center gap-4 lg:flex xl:gap-6">
            <nav aria-label={content.navAriaLabel}>
              <ul className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavItem
                    href={link.href}
                    label={link.label}
                    active={activeSection === link.sectionId}
                  />
                </li>
              ))}
              </ul>
            </nav>
            <LanguageSwitcher
              locale={locale}
              ariaLabel={content.languageAriaLabel}
              variant="desktop"
              activeSection={activeSection}
              languagePaths={languagePaths}
              onHero={onHero}
            />
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={content.openMenuLabel}
            onClick={() => setMenuOpen(true)}
          >
            <span className={`block h-px w-6 ${barClass}`} />
            <span className={`block h-px w-6 ${barClass}`} />
            <span className={`block h-px w-6 ${barClass}`} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
        locale={locale}
        content={content}
        languagePaths={languagePaths}
      />
    </>
  );
}

export { BrandWordmark } from "@/components/HeaderWordmark";
