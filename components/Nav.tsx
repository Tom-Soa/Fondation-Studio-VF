// Nav : pill flottante en haut (desktop) + barre flottante en bas (mobile).
"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { localeHref, switchLocalePath, type Locale } from "@/lib/i18n";

const NAV_ITEMS: { label: Record<Locale, string>; href: string }[] = [
  { label: { fr: "Accueil", en: "Home" }, href: "/" },
  { label: { fr: "Sites vitrines", en: "Showcase sites" }, href: "/sites-vitrine" },
  { label: { fr: "Sites marchands", en: "E-commerce" }, href: "/sites-marchands" },
  { label: { fr: "Réalisations", en: "Our work" }, href: "/realisations" },
  { label: { fr: "Nos offres", en: "Pricing" }, href: "/tarifs" },
  { label: { fr: "L'équipe", en: "The team" }, href: "/qui-sommes-nous" },
  { label: { fr: "FAQ", en: "FAQ" }, href: "/faq" },
];

const T: Record<Locale, { contact: string; menu: string; close: string; open: string; cta: string; mainNav: string; mobileNav: string; homeAria: string; switchAria: string }> = {
  fr: {
    contact: "Contact",
    menu: "Menu",
    close: "Fermer le menu",
    open: "Ouvrir le menu",
    cta: "Demander un devis gratuit",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    homeAria: "Accueil ACTC",
    switchAria: "Switch to English",
  },
  en: {
    contact: "Contact",
    menu: "Menu",
    close: "Close menu",
    open: "Open menu",
    cta: "Get a free quote",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    homeAria: "ACTC home",
    switchAria: "Passer en français",
  },
};

function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      AC<span className="text-terra">TC</span>
    </span>
  );
}

function isActive(pathname: string, lang: Locale, href: string) {
  const full = localeHref(lang, href);
  return href === "/" ? pathname === full : pathname.startsWith(full);
}

export default function Nav({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = T[lang];
  const otherLang: Locale = lang === "fr" ? "en" : "fr";
  const switchHref = switchLocalePath(pathname, otherLang);

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
        aria-label={t.mainNav}
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
            href={localeHref(lang, "/")}
            className="flex items-center pl-3 pr-3 py-1 font-display font-extrabold text-[15px] text-white tracking-[-0.02em] whitespace-nowrap"
          >
            <Logo />
          </a>
          <div className="h-5 w-px bg-white/10 mx-1" aria-hidden />
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, lang, item.href);
            return (
              <a
                key={item.href}
                href={localeHref(lang, item.href)}
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
                <span className="relative">{item.label[lang]}</span>
              </a>
            );
          })}
          <a
            href={switchHref}
            aria-label={t.switchAria}
            className="ml-1 px-3 py-2 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-[12.5px] font-semibold tracking-[0.08em] transition-colors whitespace-nowrap uppercase"
          >
            {otherLang}
          </a>
          <a
            href={localeHref(lang, "/contact")}
            className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-full bg-terra hover:bg-terra-hover text-white text-[13.5px] font-semibold tracking-tight transition-colors whitespace-nowrap"
          >
            {t.contact}
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
                <Logo className="font-display font-extrabold text-[16px] text-white tracking-[-0.02em]" />
                <div className="flex items-center gap-2">
                  <a
                    href={switchHref}
                    aria-label={t.switchAria}
                    className="grid h-9 px-3 place-items-center rounded-full bg-white/10 text-white text-[12px] font-semibold uppercase tracking-[0.08em]"
                  >
                    {otherLang}
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label={t.close}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white"
                  >
                    <Icon icon="lucide:x" width={18} height={18} aria-hidden />
                  </button>
                </div>
              </div>
              <nav className="flex flex-col" aria-label={t.mobileNav}>
                {NAV_ITEMS.map((item) => {
                  const active = isActive(pathname, lang, item.href);
                  return (
                    <a
                      key={item.href}
                      href={localeHref(lang, item.href)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-3.5 border-b border-white/[0.06] text-[17px]",
                        active ? "text-terra font-semibold" : "text-white/85",
                      )}
                    >
                      {item.label[lang]}
                      <Icon icon="lucide:arrow-up-right" width={18} height={18} className="text-white/30" aria-hidden />
                    </a>
                  );
                })}
              </nav>
              <a
                href={localeHref(lang, "/contact")}
                className="mt-5 flex items-center justify-center gap-2 w-full rounded-full bg-terra hover:bg-terra-hover px-5 py-4 text-white font-semibold text-[15px]"
              >
                {t.cta}
                <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Mobile : petit logo flottant en haut à gauche ────────────── */}
      <a
        href={localeHref(lang, "/")}
        className="lg:hidden fixed top-3 left-3 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-midnight/85 backdrop-blur-xl pl-3 pr-4 py-2 shadow-[0_6px_24px_rgba(0,0,0,0.3)]"
        aria-label={t.homeAria}
      >
        <Logo className="font-display font-extrabold text-[14px] text-white tracking-[-0.02em]" />
      </a>

      {/* ── Mobile : barre flottante en bas (menu + contact) ─────────── */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        <button
          onClick={() => setOpen(true)}
          aria-label={t.open}
          aria-expanded={open}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-midnight/90 backdrop-blur-xl pl-4 pr-5 py-3 text-white text-[14px] font-medium shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        >
          <Icon icon="lucide:menu" width={18} height={18} aria-hidden />
          {t.menu}
        </button>
        <a
          href={localeHref(lang, "/contact")}
          className="flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover px-5 py-3 text-white text-[14px] font-semibold shadow-[0_8px_30px_rgba(194,65,12,0.45)]"
        >
          <Icon icon="ph:chat-circle-text-duotone" width={18} height={18} aria-hidden />
          {t.contact}
        </a>
      </div>
    </>
  );
}
