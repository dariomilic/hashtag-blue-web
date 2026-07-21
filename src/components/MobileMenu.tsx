"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import BrandLogo from "@/components/BrandLogo";
import { BrandWordmark } from "@/components/HeaderWordmark";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale, TranslationDictionary } from "@/content/translations";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
  locale: Locale;
  content: TranslationDictionary["header"];
  languagePaths?: Record<Locale, string>;
};

const MENU_TRANSITION = { duration: 0.28, ease: "easeOut" as const };

function MobileNavLink({
  href,
  label,
  sectionId,
  homePath,
  active,
  onClose,
}: {
  href: string;
  label: string;
  sectionId: string;
  homePath: string;
  active: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onClose();

    window.setTimeout(() => {
      if (pathname === homePath) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      router.push(href);
    }, MENU_TRANSITION.duration * 1000);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="relative block min-h-11 pl-6 font-heading text-[clamp(2rem,9vw,2.375rem)] font-medium leading-[1.2] text-[#1C1C1C] transition-colors duration-200 active:text-[#205B8C]"
    >
      {active && (
        <span
          className="absolute top-1/2 left-0 h-9 w-[2px] -translate-y-1/2 bg-[#205B8C]"
          aria-hidden="true"
        />
      )}
      {label}
    </Link>
  );
}

export default function MobileMenu({
  open,
  onClose,
  activeSection,
  locale,
  content,
  languagePaths,
}: MobileMenuProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  const homePath = locale === "hr" ? "/" : `/${locale}`;
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

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label={content.mobileDialogLabel}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={MENU_TRANSITION}
          className="fixed inset-0 z-[200] flex min-h-dvh flex-col bg-[#FFFFFF] lg:hidden"
          style={{ touchAction: "none" }}
        >
          <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between px-8">
            <Link
              href={homePath}
              onClick={onClose}
              aria-label={content.logoAriaLabel}
              className="flex items-center gap-[18px]"
            >
              <BrandLogo variant="black" className="h-[52px] w-auto" />
              <BrandWordmark />
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label={content.closeMenuLabel}
              className="flex h-10 w-10 items-center justify-center text-[#1C1C1C]"
            >
              <span className="relative block h-5 w-5" aria-hidden="true">
                <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label={content.mobileNavAriaLabel} className="flex-1 px-8 pt-6">
            <ul className="flex flex-col gap-8 sm:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <MobileNavLink
                    href={link.href}
                    label={link.label}
                    sectionId={link.sectionId}
                    homePath={homePath}
                    active={activeSection === link.sectionId}
                    onClose={onClose}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 px-8 py-5">
            <LanguageSwitcher
              locale={locale}
              ariaLabel={content.languageAriaLabel}
              variant="mobile"
              activeSection={activeSection}
              languagePaths={languagePaths}
              onNavigate={onClose}
            />
          </div>

          <footer className="shrink-0 border-t border-[#E9ECEF] px-8 pt-6 pb-10">
            <p className="brand-wordmark text-[13px] font-medium tracking-[0.14em] text-[#205B8C] uppercase">
              Hashtag Blue
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#888888]">
              {content.mobileFooterDisciplines}
            </p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
