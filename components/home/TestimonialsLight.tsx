// Avis clients — un avis à la fois + gros logo client cliquable vers sa réalisation.
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@iconify/react";
import { TESTIMONIALS } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-terra mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} icon="mdi:star" width={16} height={16} aria-hidden />
      ))}
    </div>
  );
}

export default function TestimonialsLight() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const href = t.realisationSlug ? `/realisations#${t.realisationSlug}` : "/realisations";
  const go = (d: number) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="avis" className="bg-alabaster pt-16 lg:pt-20 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-5">Avis clients</div>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight">
            Des résultats, <span className="font-emphasis font-normal text-terra">pas des promesses.</span>
          </h2>
        </div>

        <div className="relative rounded-3xl border border-grid-line bg-white shadow-card-light overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="grid md:grid-cols-[1.4fr_1fr]"
            >
              {/* Avis */}
              <figure className="p-8 lg:p-12">
                <Stars />
                <blockquote className="font-display text-[clamp(1.25rem,2.2vw,1.7rem)] font-medium leading-[1.35] text-midnight tracking-[-0.01em]">
                  « {t.text} »
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-terra flex items-center justify-center text-white text-[13px] font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-midnight text-[14px] font-semibold">{t.name}</div>
                    <div className="text-steel text-[12.5px]">{t.role}</div>
                  </div>
                </figcaption>
              </figure>

              {/* Logo client cliquable -> réalisation */}
              <a
                href={href}
                className="group relative flex flex-col items-center justify-center gap-4 p-8 lg:p-12 text-center border-t md:border-t-0 md:border-l border-grid-line overflow-hidden"
                style={{ background: "linear-gradient(135deg,#0f1424 0%,#2a1810 70%,#9a3412 130%)" }}
              >
                <div
                  className="absolute inset-0 opacity-60"
                  style={{ background: "radial-gradient(60% 70% at 30% 25%, rgba(249,115,22,0.35) 0%, transparent 60%)" }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 mb-3">Projet client</div>
                  <div className="font-display text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] text-white">{t.project}</div>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm transition-colors group-hover:border-terra group-hover:bg-terra">
                    Voir la réalisation
                    <Icon icon="lucide:arrow-right" width={14} height={14} aria-hidden />
                  </span>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-7 flex items-center justify-center gap-5">
          <button onClick={() => go(-1)} aria-label="Avis précédent" className="grid place-items-center h-11 w-11 rounded-full border border-grid-line bg-white text-midnight hover:border-terra hover:text-terra transition-colors">
            <Icon icon="lucide:chevron-left" width={18} height={18} aria-hidden />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Avis ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-terra" : "w-2 bg-midnight/20 hover:bg-midnight/40"}`}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Avis suivant" className="grid place-items-center h-11 w-11 rounded-full border border-grid-line bg-white text-midnight hover:border-terra hover:text-terra transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
