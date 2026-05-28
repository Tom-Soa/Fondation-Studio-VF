// INSPIRATION: index.html hero + magazine editorial -> serif italic emphasis, dark with subtle texture, bento mini-stats
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { PageAccueilData } from "@/lib/sanity";

interface HeroProps {
  data?: PageAccueilData | null
}

export default function Hero({ data }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen overflow-hidden bg-midnight pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Background: gradient + grain + radial glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 30%, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0) 60%), radial-gradient(50% 70% at 85% 70%, rgba(194,65,12,0.12) 0%, rgba(194,65,12,0) 65%), linear-gradient(180deg, #0a0e1a 0%, #0f1424 100%)",
        }}
        aria-hidden
      />

      {/* Grain texture */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 opacity-[0.14] pointer-events-none"
        aria-hidden
      >
        <svg className="w-full h-full">
          <filter id="hero-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>
      </motion.div>

      {/* Vertical lines decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="max-w-7xl mx-auto h-full grid grid-cols-12 px-6">
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-white/[0.04] h-full"
              style={{ gridColumn: i + 1 }}
            />
          ))}
        </div>
      </div>

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <span className="relative flex">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-terra opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terra" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/85">
              Disponible · 2 places ce mois
            </span>
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-medium tracking-[-0.035em] text-[clamp(2.75rem,8vw,7rem)] leading-[0.96] text-white"
          >
            Votre site.
            <br />
            <span className="text-terra font-normal">
              Conçu pour vendre.
            </span>
            <br />
            Livré en{" "}
            <span className="relative inline-block">
              21 jours.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-terra/70"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M2 8 Q 75 2, 150 6 T 298 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 max-w-xl text-[clamp(1rem,1.25vw,1.15rem)] leading-relaxed text-white/65"
          >
            {data?.heroSousTitre ?? "Code pur, design sur-mesure, référencement intégré. À partir de 1 400 €, maquette gratuite avant tout engagement."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-terra hover:bg-terra text-white font-semibold text-[15px] whitespace-nowrap transition-all glow-terra"
            >
              {data?.heroCta ?? "Demander ma maquette gratuite"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/realisations"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-white text-[15px] font-medium whitespace-nowrap transition-colors"
            >
              {data?.heroCtaSecondaire ?? "Voir nos réalisations"}
            </a>
          </motion.div>

          {/* Proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-white/55"
          >
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-terra" aria-hidden>
                <path d="M12 2l2.93 6.43L22 9.51l-5 4.87 1.18 6.87L12 17.93l-6.18 3.32L7 14.38 2 9.51l7.07-1.08L12 2z" />
              </svg>
              <span>5.0 · 12 avis</span>
            </div>
            <div className="hidden sm:block h-3 w-px bg-white/10" />
            <span><strong className="text-white">42+</strong> projets livrés</span>
            <div className="hidden sm:block h-3 w-px bg-white/10" />
            <span>Réponse <strong className="text-white">sous 24 h</strong></span>
            <div className="hidden sm:block h-3 w-px bg-white/10" />
            <span>Code en <strong className="text-white">propriété totale</strong></span>
          </motion.div>
        </div>

        {/* Right floating card — décalé en bas droite avec KPI */}
        <motion.aside
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden xl:block absolute right-6 top-32 w-[260px]"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-card">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mb-3">
              Dernier livré
            </div>
            <div className="text-terra text-2xl text-white leading-tight mb-1">
              Maison Leconte
            </div>
            <div className="text-[12px] text-white/55 mb-5">
              Boulangerie · Saint-Denis
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div>
                <div className="text-3xl text-terra leading-none">2×</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-white/50 mt-1.5">
                  Demandes contact
                </div>
              </div>
              <div>
                <div className="text-3xl text-terra leading-none">98</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-white/50 mt-1.5">
                  PageSpeed
                </div>
              </div>
            </div>
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-terra/60 to-transparent" />
          </div>
        </motion.aside>
      </motion.div>

      {/* Bottom mountain divider */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path
            d="M0,80 L0,40 C360,8 1080,72 1440,28 L1440,80 Z"
            fill="#0f1424"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}
