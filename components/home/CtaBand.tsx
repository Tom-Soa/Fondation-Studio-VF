// CTA final (section_cta Miniamea) : bande terracotta pleine, gros titre, badge gratuit.
"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import type { PageAccueilData } from "@/lib/sanity";

export default function CtaBand({ data }: { data?: PageAccueilData | null }) {
  return (
    <section id="cta" className="bg-alabaster py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-24 text-center"
        >
          {/* texture */}
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
            aria-hidden
          >
            <svg className="w-full h-full">
              <filter id="cta-grain2">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#cta-grain2)" />
            </svg>
          </div>
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-64 rounded-full bg-white/20 blur-3xl pointer-events-none"
            aria-hidden
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Gratuit · Places limitées ce mois
            </span>
            <h2 className="mt-7 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-white text-[clamp(2rem,6vw,4.75rem)]">
              Votre page d'accueil.{" "}
              <span className="font-emphasis font-normal">Offerte.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-white/85">
              {data?.nobrainerDescription ??
                "On échange lors d'un premier appel, puis on conçoit une vraie maquette sur-mesure. Si ça vous convient, on démarre."}
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-terra font-bold text-[16px] transition-transform hover:scale-[1.02]"
              >
                {data?.nobrainerCta ?? "Réserver un appel gratuit"}
                <Icon icon="lucide:arrow-right" width={18} height={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
              <p className="text-[13px] text-white/80">Réponse rapide · sans engagement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
