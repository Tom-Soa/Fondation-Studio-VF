"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqCategories } from "@/lib/faq";
import { localeHref, type Locale } from "@/lib/i18n";

const T: Record<
  Locale,
  {
    kickerSuffix: string;
    titleStart: string;
    titleEm: string;
    searchPlaceholder: string;
    clearSearch: string;
    noResultBefore: string;
    noResultMiddle: string;
    noResultLink: string;
    resultWord: string;
    resultFor: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  }
> = {
  fr: {
    kickerSuffix: "questions répondues",
    titleStart: "Toutes vos",
    titleEm: "questions.",
    searchPlaceholder: "Rechercher une question... (tarifs, délais, SEO, Shopify...)",
    clearSearch: "Effacer la recherche",
    noResultBefore: "Aucune question trouvée pour",
    noResultMiddle: ". Essayez un autre mot, ou",
    noResultLink: "contactez-nous",
    resultWord: "résultat",
    resultFor: "pour",
    ctaTitle: "Votre question n'est pas là ?",
    ctaText: "On répond directement, rapidement.",
    ctaButton: "Nous contacter",
  },
  en: {
    kickerSuffix: "questions answered",
    titleStart: "All your",
    titleEm: "questions.",
    searchPlaceholder: "Search a question... (pricing, timelines, SEO, Shopify...)",
    clearSearch: "Clear search",
    noResultBefore: "No questions found for",
    noResultMiddle: ". Try another word, or",
    noResultLink: "contact us",
    resultWord: "result",
    resultFor: "for",
    ctaTitle: "Can't find your question?",
    ctaText: "We answer directly, fast.",
    ctaButton: "Contact us",
  },
};

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-grid-line last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-midnight leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-terra/10 text-terra"
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] leading-relaxed text-steel">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQClient({ lang }: { lang: Locale }) {
  const t = T[lang];
  const categories = useMemo(() => faqCategories(lang), [lang]);
  const [activeCategory, setActiveCategory] = useState("general");
  const [search, setSearch] = useState("");

  const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    const results: { category: string; question: string; answer: string }[] = [];
    for (const cat of categories) {
      for (const item of cat.questions) {
        if (item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) {
          results.push({ category: cat.label, question: item.q, answer: item.a });
        }
      }
    }
    return results;
  }, [search, categories]);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-28 lg:pt-36 pb-24">

        {/* En-tête */}
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">
            FAQ · {totalQuestions} {t.kickerSuffix}
          </div>
          <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.04] text-midnight">
            {t.titleStart}{" "}
            <span className="font-emphasis font-normal text-terra">{t.titleEm}</span>
          </h1>
        </div>

        {/* Barre de recherche */}
        <div className="relative mb-10">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-steel/60">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-2xl border border-grid-line bg-white pl-11 pr-4 py-3.5 text-[15px] text-midnight placeholder:text-midnight/35 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/20 transition-colors shadow-card-light"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-4 flex items-center text-steel/60 hover:text-midnight"
              aria-label={t.clearSearch}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Résultats de recherche */}
        {searchResults !== null ? (
          <div className="rounded-3xl border border-grid-line bg-white p-6 md:p-10 shadow-card-light">
            {searchResults.length === 0 ? (
              <p className="text-[15px] text-steel text-center py-8">
                {t.noResultBefore} "<strong>{search}</strong>"{t.noResultMiddle}{" "}
                <a href={localeHref(lang, "/contact")} className="text-terra underline underline-offset-2">{t.noResultLink}</a>.
              </p>
            ) : (
              <>
                <p className="text-[13px] text-steel mb-6">{searchResults.length} {t.resultWord}{searchResults.length > 1 ? "s" : ""} {t.resultFor} "<strong>{search}</strong>"</p>
                {searchResults.map((item) => (
                  <div key={item.question}>
                    <p className="text-[11px] uppercase tracking-wider text-terra/70 mb-1">{item.category}</p>
                    <AccordionItem question={item.question} answer={item.answer} />
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          <>
            {/* Filtres catégories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-terra text-white shadow-[0_4px_14px_rgba(194,65,12,0.35)]"
                      : "bg-white border border-grid-line text-steel hover:text-midnight hover:border-terra/40"
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-[11px] ${activeCategory === cat.id ? "text-white/70" : "text-steel/50"}`}>
                    {cat.questions.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Questions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-grid-line bg-white p-6 md:p-10 shadow-card-light"
              >
                <h2 className="font-display text-lg font-bold text-midnight mb-6">{currentCategory.label}</h2>
                {currentCategory.questions.map((item) => (
                  <AccordionItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-3xl border border-terra/20 bg-white p-8 text-center shadow-card-light">
          <h3 className="font-display text-lg font-bold text-midnight mb-2">{t.ctaTitle}</h3>
          <p className="text-[14px] text-steel mb-5">{t.ctaText}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={localeHref(lang, "/contact")} className="inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover text-white px-6 py-3.5 text-[14.5px] font-semibold transition-colors glow-terra">
              {t.ctaButton}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="tel:+33672758478" className="inline-flex items-center gap-2 rounded-full border border-grid-line bg-white hover:border-terra/40 text-midnight px-6 py-3.5 text-[14.5px] font-medium transition-colors">
              +33 6 72 75 84 78
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
