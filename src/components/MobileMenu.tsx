"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { BrandWordmark } from "@/components/HeaderWordmark";

const navLinks = [
  { label: "Arhitektura", href: "/#arhitektura", sectionId: "arhitektura" },
  { label: "Nekretnine", href: "/#poslovanje-nekretninama", sectionId: "poslovanje-nekretninama" },
  { label: "Kontakt", href: "/#kontakt", sectionId: "kontakt" },
] as const;

const menuDisciplines = ["Arhitektura", "Urbanizam", "Nekretnine"] as const;

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
};

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

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClose();

    if (!href.startsWith("/#")) return;

    const sectionId = href.slice(2);

    if (pathname !== "/") return;

    event.preventDefault();

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group relative block pl-5 text-[38px] font-medium leading-[1.2] text-[#1C1C1C] transition-colors duration-200 hover:text-accent active:text-accent"
    >
      {active && (
        <span
          className="absolute top-1/2 left-0 h-7 w-px -translate-y-1/2 bg-accent"
          aria-hidden="true"
        />
      )}
      {label}
    </Link>
  );
}

export default function MobileMenu({ open, onClose, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Glavni izbornik"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col bg-white md:hidden"
        >
          <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between px-8">
            <Link
              href="/"
              onClick={onClose}
              aria-label="Hashtag Blue — početna"
              className="flex items-center gap-[18px]"
            >
              <BrandLogo variant="card" className="h-[52px] w-auto" />
              <BrandWordmark />
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Zatvori izbornik"
              className="flex h-10 w-10 items-center justify-center text-[#1C1C1C] transition-colors duration-200 hover:text-accent"
            >
              <span className="relative block h-5 w-5" aria-hidden="true">
                <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobilna navigacija" className="flex-1 px-8 pt-10">
            <ul className="flex flex-col gap-[44px]">
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

          <footer className="shrink-0 px-8 pb-10 pt-6">
            <p className="text-[13px] tracking-[0.12em] text-[#888888] uppercase">Hashtag Blue</p>
            <ul className="mt-3 space-y-1">
              {menuDisciplines.map((item) => (
                <li key={item} className="text-[13px] text-[#888888]">
                  {item}
                </li>
              ))}
            </ul>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
