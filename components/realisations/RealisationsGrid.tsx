"use client";

import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SHOWCASE, type ShowcaseItem } from "@/lib/content";
import { localeHref, type Locale } from "@/lib/i18n";

const T: Record<
  Locale,
  {
    offerFilters: string[];
    typeFilters: string[];
    reset: string;
    empty: string;
    seeDetail: string;
    learnMore: string;
    close: string;
    sectorLabel: string;
    durationLabel: string;
    deliveredLabel: string;
    ctaButton: string;
  }
> = {
  fr: {
    offerFilters: ["Tous", "Offre Standard", "Offre Conversion", "Offre Premium", "E-commerce Shopify"],
    typeFilters: ["Tous types", "Site vitrine", "Site vitrine premium", "Boutique e-commerce"],
    reset: "Réinitialiser les filtres",
    empty: "Aucun projet pour ces filtres.",
    seeDetail: "Voir le détail de",
    learnMore: "En savoir plus",
    close: "Fermer",
    sectorLabel: "Secteur",
    durationLabel: "Délai",
    deliveredLabel: "Ce qu'on a livré",
    ctaButton: "Je veux un site comme celui-ci",
  },
  en: {
    offerFilters: ["All", "Standard plan", "Conversion plan", "Premium plan", "Shopify e-commerce"],
    typeFilters: ["All types", "Showcase website", "Premium showcase website", "E-commerce store"],
    reset: "Reset filters",
    empty: "No projects match these filters.",
    seeDetail: "View details for",
    learnMore: "Learn more",
    close: "Close",
    sectorLabel: "Industry",
    durationLabel: "Timeline",
    deliveredLabel: "What we delivered",
    ctaButton: "I want a website like this",
  },
};

export default function RealisationsGrid({ lang }: { lang: Locale }) {
  const t = T[lang];
  const items = SHOWCASE[lang];

  const [active, setActive] = useState<ShowcaseItem | null>(null);
  const [filterOffer, setFilterOffer] = useState(t.offerFilters[0]);
  const [filterType, setFilterType] = useState(t.typeFilters[0]);

  const filtered = useMemo(() => {
    return items.filter((s) => {
      const matchOffer = filterOffer === t.offerFilters[0] || s.offer === filterOffer;
      const matchType = filterType === t.typeFilters[0] || s.type === filterType;
      return matchOffer && matchType;
    });
  }, [items, filterOffer, filterType, t]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      {/* Filtres */}
      <div className="mb-8 space-y-3">
        <div className="flex flex-wrap gap-2">
          {t.offerFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilterOffer(f)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                filterOffer === f
                  ? "bg-terra text-white shadow-[0_4px_14px_rgba(194,65,12,0.35)]"
                  : "bg-white border border-grid-line text-steel hover:text-midnight hover:border-terra/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {t.typeFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all ${
                filterType === f
                  ? "bg-midnight text-white"
                  : "bg-white border border-grid-line text-steel hover:text-midnight"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        {(filterOffer !== t.offerFilters[0] || filterType !== t.typeFilters[0]) && (
          <button
            onClick={() => { setFilterOffer(t.offerFilters[0]); setFilterType(t.typeFilters[0]); }}
            className="text-[12px] text-terra hover:underline flex items-center gap-1"
          >
            <Icon icon="lucide:x" width={12} height={12} aria-hidden />
            {t.reset}
          </button>
        )}
      </div>

      {/* Grille */}
      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center text-steel">
            {t.empty}
          </motion.div>
        ) : (
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => (
              <motion.article
                key={s.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-grid-line bg-white shadow-card-light transition-all hover:-translate-y-1 hover:border-terra/40 hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)]"
              >
                <button
                  onClick={() => setActive(s)}
                  className="relative aspect-[16/10] overflow-hidden border-b border-grid-line bg-alabaster text-left"
                  aria-label={`${t.seeDetail} ${s.name}`}
                >
                  <img src={s.src} alt={s.alt} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-lg font-semibold text-midnight">{s.name}</h2>
                    <span className="shrink-0 rounded-full bg-terra/10 px-2.5 py-1 text-[11px] font-semibold text-terra">{s.offer}</span>
                  </div>
                  <p className="mt-1 text-[13px] text-steel">{s.sector}</p>
                  <button
                    onClick={() => setActive(s)}
                    className="group/btn mt-5 inline-flex items-center gap-1.5 self-start rounded-full border border-midnight/15 px-4 py-2 text-[13.5px] font-semibold text-midnight transition-colors hover:border-terra hover:text-terra"
                  >
                    {t.learnMore}
                    <Icon icon="lucide:arrow-right" width={15} height={15} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modale détail */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-midnight/60 backdrop-blur-sm p-0 sm:p-6"
            aria-modal="true" role="dialog"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl"
            >
              <button onClick={() => setActive(null)} aria-label={t.close} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-midnight shadow-card-light hover:bg-white transition-colors">
                <Icon icon="lucide:x" width={18} height={18} aria-hidden />
              </button>
              <div className="relative aspect-[16/9] overflow-hidden border-b border-grid-line bg-alabaster">
                <img src={active.src} alt={active.alt} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full bg-terra/10 px-3 py-1 text-[11px] font-semibold text-terra">{active.offer}</span>
                  <span className="rounded-full border border-grid-line px-3 py-1 text-[11px] font-medium text-steel">{active.type}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] text-midnight">{active.name}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-steel">{active.summary}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-grid-line bg-alabaster p-4">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-steel mb-1">
                      <Icon icon="ph:briefcase-duotone" width={15} height={15} className="text-terra" aria-hidden />{t.sectorLabel}
                    </div>
                    <div className="text-[14px] font-semibold text-midnight">{active.sector}</div>
                  </div>
                  <div className="rounded-2xl border border-grid-line bg-alabaster p-4">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-steel mb-1">
                      <Icon icon="ph:clock-duotone" width={15} height={15} className="text-terra" aria-hidden />{t.durationLabel}
                    </div>
                    <div className="text-[14px] font-semibold text-midnight">{active.duration}</div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-wider text-steel mb-3">{t.deliveredLabel}</div>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {active.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[14px] text-midnight/85">
                        <Icon icon="lucide:check" width={18} height={18} className="mt-0.5 shrink-0 text-terra" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={localeHref(lang, "/contact")} className="group inline-flex items-center justify-center gap-2 rounded-full bg-terra hover:bg-terra-hover px-6 py-3.5 text-white font-semibold text-[14px] transition-all glow-terra">
                    {t.ctaButton}
                    <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </a>
                  <button onClick={() => setActive(null)} className="inline-flex items-center justify-center rounded-full border border-midnight/15 px-6 py-3.5 text-midnight font-medium text-[14px] hover:border-midnight/40 transition-colors">
                    {t.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
