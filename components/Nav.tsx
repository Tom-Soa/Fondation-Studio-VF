// Nav : pill flottante en haut (desktop) + barre flottante en bas (mobile).
"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Sites vitrines", href: "/sites-vitrine" },
  { label: "Sites marchands", href: "/sites-marchands" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "L'équipe", href: "/qui-sommes-nous" },
  { label: "FAQ", href: "/faq" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile au changement de page.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* ── Desktop : pill flottante en haut ─────────────────────────── */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 hidden lg:flex transition-all duration-500"
        aria-label="Navigation principale"
      >
        <div
          className={cn(
            "flex items-center gap-1 px-2 py-1.5 rounded-full",
            "border border-white/[0.10] backdrop-blur-xl",
            "shadow-[0_4px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]",
            scrolled ? "bg-midnight/85" : "bg-midnight/70",
          )}
        >
          <a
            href="/"
            className="flex items-center pl-3 pr-3 py-1 font-display font-extrabold text-[15px] text-white tracking-[-0.02em] whitespace-nowrap"
          >
            Fondation<span className="text-terra">&nbsp;Studio</span>
          </a>
          <div className="h-5 w-px bg-white/10 mx-1" aria-hidden />
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3.5 py-2 rounded-full text-[13.5px] font-medium tracking-tight transition-colors whitespace-nowrap",
                  active ? "text-white" : "text-white/50 hover:text-white/90",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-lamp"
                    className="absolute inset-0 rounded-full bg-terra/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
          <a
            href="/contact"
            className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-full bg-terra hover:bg-terra-hover text-white text-[13.5px] font-semibold tracking-tight transition-colors whitespace-nowrap"
          >
            Contact
            <Icon icon="lucide:arrow-right" width={14} height={14} aria-hidden />
          </a>
        </div>
      </motion.nav>

      {/* ── Mobile : panneau de navigation (slide-up) ────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-50 bg-midnight/40 backdrop-blur-sm"
              aria-hidden
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="lg:hidden fixed inset-x-3 bottom-3 z-50 rounded-3xl border border-white/10 bg-midnight p-5 shadow-[0_-10px_60px_rgba(0,0,0,0.4)]"
              role="dialog"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-extrabold text-[16px] text-white tracking-[-0.02em]">
                  Fondation<span className="text-terra">&nbsp;Studio</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white"
                >
                  <Icon icon="lucide:x" width={18} height={18} aria-hidden />
                </button>
              </div>
              <nav className="flex flex-col" aria-label="Navigation mobile">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-3.5 border-b border-white/[0.06] text-[17px]",
                        active ? "text-terra font-semibold" : "text-white/85",
                      )}
                    >
                      {item.label}
                      <Icon icon="lucide:arrow-up-right" width={18} height={18} className="text-white/30" aria-hidden />
                    </a>
                  );
                })}
              </nav>
              <a
                href="/contact"
                className="mt-5 flex items-center justify-center gap-2 w-full rounded-full bg-terra hover:bg-terra-hover px-5 py-4 text-white font-semibold text-[15px]"
              >
                Réserver un appel gratuit
                <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Mobile : petit logo flottant en haut à gauche ────────────── */}
      <a
        href="/"
        className="lg:hidden fixed top-3 left-3 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-midnight/85 backdrop-blur-xl pl-3 pr-4 py-2 shadow-[0_6px_24px_rgba(0,0,0,0.3)]"
        aria-label="Accueil Fondation Studio"
      >
        <span className="font-display font-extrabold text-[14px] text-white tracking-[-0.02em]">
          Fondation<span className="text-terra">&nbsp;Studio</span>
        </span>
      </a>

      {/* ── Mobile : barre flottante en bas (menu + contact) ─────────── */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-midnight/90 backdrop-blur-xl pl-4 pr-5 py-3 text-white text-[14px] font-medium shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        >
          <Icon icon="lucide:menu" width={18} height={18} aria-hidden />
          Menu
        </button>
        <a
          href="/contact"
          className="flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover px-5 py-3 text-white text-[14px] font-semibold shadow-[0_8px_30px_rgba(194,65,12,0.45)]"
        >
          <Icon icon="ph:phone-call-duotone" width={18} height={18} aria-hidden />
          Contact
        </a>
      </div>
    </>
  );
}
