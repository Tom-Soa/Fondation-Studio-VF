// INSPIRATION: editorial closing statement + bento callout -> bandeau plein, serif italic gros, badge gratuit minimal
"use client";

import { motion } from "motion/react";
import type { PageAccueilData } from "@/lib/sanity";

interface CTAProps {
  data?: PageAccueilData | null
}

export default function CTA({ data }: CTAProps) {
  return (
    <section
      id="no-brainer"
      className="relative bg-gradient-to-b from-midnight to-midnight py-24 lg:py-36 overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 70% at 50% 50%, rgba(249,115,22,0.18) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
        aria-hidden
      >
        <svg className="w-full h-full">
          <filter id="cta-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#cta-grain)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <span className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-terra/30 bg-terra/10">
            <span className="px-2 py-0.5 rounded-full bg-terra text-white text-[10px] font-bold uppercase tracking-wider">
              Gratuit
            </span>
            <span className="text-white/80 text-[12px] font-mono uppercase tracking-[0.14em]">
              Places limitées ce mois
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans font-medium tracking-[-0.035em] text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] text-white"
        >
          La maquette de votre
          <br />
          futur site.{" "}
          <span className="text-terra">Gratuite.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-xl mx-auto text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-white/65"
        >
          {data?.nobrainerDescription ?? "Une vraie proposition visuelle, sur-mesure, présentée en appel vidéo. Si ça vous convient, on démarre."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-terra hover:bg-terra text-white font-semibold text-[16px] whitespace-nowrap transition-all glow-terra"
          >
            {data?.nobrainerCta ?? "Demander ma maquette gratuite"}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-[13px] text-white/55">Réponse sous 24 h</p>
        </motion.div>

        {/* Tiny proof row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[12.5px] font-mono uppercase tracking-[0.14em] text-white/40"
        >
          <span>Sans engagement</span>
          <span className="hidden sm:block h-3 w-px bg-white/10" />
          <span>Devis sous 24 h</span>
          <span className="hidden sm:block h-3 w-px bg-white/10" />
          <span>Code en propriété</span>
          <span className="hidden sm:block h-3 w-px bg-white/10" />
          <span>À partir de 1 400 €</span>
        </motion.div>
      </div>
    </section>
  );
}
