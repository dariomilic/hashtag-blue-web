"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import BrandLogo from "@/components/BrandLogo";
import { BrandWordmark } from "@/components/HeaderWordmark";

const navLinks = [
  { label: "Arhitektura", href: "/#arhitektura", sectionId: "arhitektura" },
  { label: "Nekretnine", href: "/#poslovanje-nekretninama", sectionId: "poslovanje-nekretninama" },
  { label: "Poslovna adresa", href: "/#business-address", sectionId: "business-address" },
  { label: "Kontakt", href: "/#kontakt", sectionId: "kontakt" },
] as const;

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
};

const MENU_TRANSITION = { duration: 0.28, ease: "easeOut" as const };

function MobileNavLink({
  href,
  label,
  active,
  onClose,
}: {
  href: string;
  label: string;
  active: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onClose();

    const sectionId = href.startsWith("/#") ? href.slice(2) : null;

    window.setTimeout(() => {
      if (pathname === "/" && sectionId) {
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
      className="relative block pl-6 font-heading text-[38px] font-medium leading-[1.2] text-[#1C1C1C] transition-colors duration-200 active:text-[#205B8C]"
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

export default function MobileMenu({ open, onClose, activeSection }: MobileMenuProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Glavni izbornik"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={MENU_TRANSITION}
          className="fixed inset-0 z-[200] flex min-h-dvh flex-col bg-[#FFFFFF] md:hidden"
          style={{ touchAction: "none" }}
        >
          <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between px-8">
            <Link
              href="/"
              onClick={onClose}
              aria-label="Hashtag Blue — početna"
              className="flex items-center gap-[18px]"
            >
              <BrandLogo variant="black" className="h-[52px] w-auto" />
              <BrandWordmark />
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Zatvori izbornik"
              className="flex h-10 w-10 items-center justify-center text-[#1C1C1C]"
            >
              <span className="relative block h-5 w-5" aria-hidden="true">
                <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobilna navigacija" className="flex-1 px-8 pt-8">
            <ul className="flex flex-col gap-[48px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <MobileNavLink
                    href={link.href}
                    label={link.label}
                    active={activeSection === link.sectionId}
                    onClose={onClose}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <footer className="shrink-0 border-t border-[#E9ECEF] px-8 pt-6 pb-10">
            <p className="brand-wordmark text-[13px] font-medium tracking-[0.14em] text-[#205B8C] uppercase">
              Hashtag Blue
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#888888]">
              Arhitektura | Urbanizam | Nekretnine
            </p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
