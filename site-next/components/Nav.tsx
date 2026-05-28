// INSPIRATION: index.html original pill-nav -> floating glass pill dark, accent terra (identité exacte)
"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Accueil", href: "/", active: true },
  { label: "L'équipe", href: "/qui-sommes-nous" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Processus", href: "/processus" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating pill nav — desktop */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "fixed top-3 left-1/2 -translate-x-1/2 z-50 hidden lg:flex",
          "transition-all duration-500"
        )}
        aria-label="Navigation principale"
      >
        <div
          className={cn(
            "flex items-center gap-1 px-2 py-1.5 rounded-full",
            "border border-white/[0.10] backdrop-blur-xl",
            "shadow-[0_4px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]",
            scrolled ? "bg-midnight/85" : "bg-midnight/70"
          )}
        >
          <a
            href="/"
            className="flex items-center gap-2 pl-3 pr-3 py-1 font-sans font-extrabold text-[15px] text-white tracking-[-0.02em] whitespace-nowrap"
          >
            <span className="relative flex h-1.5 w-1.5 live-dot">
              <span className="block h-1.5 w-1.5 rounded-full bg-terra" />
            </span>
            Fondation<span className="text-terra ml-1">Studio</span>
          </a>
          <div className="h-5 w-px bg-white/10 mx-1" aria-hidden />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3.5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.08em] transition-colors whitespace-nowrap",
                item.active
                  ? "text-white"
                  : "text-white/50 hover:text-white/90"
              )}
            >
              {item.active && (
                <motion.span
                  layoutId="nav-lamp"
                  className="absolute inset-0 rounded-full bg-terra/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
          <a
            href="/contact"
            className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-full bg-terra hover:bg-terra-hover text-white text-[12px] font-bold uppercase tracking-[0.06em] transition-colors whitespace-nowrap"
          >
            Contact
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.nav>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-5 h-14">
          <a href="/" className="font-sans font-extrabold text-[15px] text-white tracking-[-0.02em] flex items-center gap-2">
            <span className="block h-1.5 w-1.5 rounded-full bg-terra" />
            Fondation<span className="text-terra ml-0.5">Studio</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="p-2 -mr-2 text-white"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="14" x2="21" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/5 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2.5 text-white/85 hover:text-white text-[15px]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-terra text-white font-semibold text-sm"
              >
                Démarrer mon projet
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
