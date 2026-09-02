"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import HeroBackground from "@/components/ui/HeroBackground";
import { Grille, Formes } from "@/components/audit/Decor";
import { AUDIT } from "@/lib/audit-content";
import { PRIX, DELAI } from "@/lib/audit-config";
import { BoutonPaiement } from "@/components/audit/BoutonPaiement";

/**
 * Accroche de la page de vente.
 *
 * Reprend le hero du site : halo terracotta, réseau de particules animé, titre
 * géant avec le mot accentué en serif italic. L'entrée est orchestrée du haut
 * vers le bas, et sur téléphone le prix, le délai et le bouton entrent dans le
 * premier écran.
 */
export default function AuditHero() {
  const t = AUDIT.hero;

  return (
    <header
      className="relative isolate overflow-hidden bg-alabaster pb-16 pt-10 sm:pt-14"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Halo terracotta, en pixels pour ne pas varier au défilement mobile */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[560px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <Grille className="-z-[21] opacity-60" />
      <Formes variante="terra" className="-z-[21]" />
      <HeroBackground />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] bg-alabaster/60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Logo seul, non cliquable : identité sans porte de sortie */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display text-[15px] font-extrabold uppercase tracking-[0.22em] text-midnight/70"
        >
          ACTC
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-grid-line bg-white px-4 py-1.5 shadow-card-light"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-terra" />
          <span className="text-[12.5px] font-medium uppercase tracking-[0.12em] text-midnight/70">
            {t.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-[clamp(2.05rem,6vw,3.85rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight text-balance"
        >
          {t.h1Start}{" "}
          <span className="font-emphasis font-normal text-terra">{t.h1Em}</span>{" "}
          {t.h1End}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-midnight/70 sm:text-[16.5px]"
        >
          {t.sub}
        </motion.p>

        {/* Prix et délai, côte à côte, visibles sans défiler */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.33 }}
          className="mx-auto mt-8 flex max-w-sm items-stretch gap-3"
        >
          <div className="flex-1 rounded-2xl border border-grid-line bg-white px-4 py-3 shadow-card-light">
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-midnight/70">
              {t.priceLabel}
            </div>
            <div className="mt-1 font-display text-[27px] font-extrabold leading-none text-terra">
              {PRIX}
            </div>
          </div>
          <div className="flex-1 rounded-2xl border border-grid-line bg-white px-4 py-3 shadow-card-light">
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-midnight/70">
              {t.delayLabel}
            </div>
            <div className="mt-1 font-display text-[27px] font-extrabold leading-none text-midnight">
              {DELAI}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-6"
        >
          <BoutonPaiement taille="grand" className="w-full sm:w-auto">
            {t.cta}
          </BoutonPaiement>
          <p className="mt-3 text-[13px] text-midnight/70">{t.ctaNote}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2.5 rounded-2xl border border-terra/25 bg-terra/[0.06] px-4 py-3 text-[13.5px] leading-snug text-midnight/85"
        >
          <Icon
            icon="ph:arrow-bend-down-right-bold"
            width={16}
            height={16}
            className="shrink-0 text-terra"
            aria-hidden
          />
          {t.deductionFlash}
        </motion.p>
      </div>
    </header>
  );
}
