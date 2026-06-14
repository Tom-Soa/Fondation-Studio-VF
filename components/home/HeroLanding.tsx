// Hero façon Miniamea (header78), transposé en clair : centré, H1 géant + emphase
// serif italic, note pill, 2 CTA, feature row, 2 bandes d'aperçus de sites réels.
"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { MockupCard } from "@/components/ui/MockupCard";
import HeroBackground from "@/components/ui/HeroBackground";
import { SHOWCASE } from "@/lib/content";
import type { PageAccueilData } from "@/lib/sanity";

// Une ligne d'aperçus. `reverse` inverse le sens de défilement, `offset`
// décale le point de départ pour que les 2 lignes ne soient pas alignées.
function MarqueeRow({ reverse = false, offset = 0 }: { reverse?: boolean; offset?: number }) {
  const items = [...SHOWCASE.slice(offset), ...SHOWCASE.slice(0, offset)];
  const loop = [...items, ...items];
  return (
    <div className="flex w-max gap-4 sm:gap-5">
      <div
        className={`flex w-max gap-4 sm:gap-5 animate-marquee-x ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ animationDuration: "40s" }}
      >
        {loop.map((s, i) => (
          <MockupCard key={i} image={s.src} alt={s.alt} className="w-[200px] md:w-[340px]" />
        ))}
      </div>
    </div>
  );
}

export default function HeroLanding({ data }: { data?: PageAccueilData | null }) {
  return (
    <header className="relative isolate overflow-hidden bg-alabaster pt-28 lg:pt-36 pb-16" style={{ transform: "translateZ(0)" }}>
      {/* Halo terracotta */}
      <div
        className="absolute inset-x-0 top-0 -z-20 h-[70vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      {/* Réseau de particules animé (mouvement autonome, pas de scroll-parallax) */}
      <HeroBackground />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Note pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-grid-line bg-white px-4 py-1.5 shadow-card-light"
        >
          <span className="flex -space-x-0.5 text-terra">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} icon="mdi:star" width={13} height={13} aria-hidden />
            ))}
          </span>
          <span className="text-[13px] font-medium text-midnight/70">Places limitées chaque mois</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-display font-extrabold tracking-[-0.03em] leading-[1.05] text-midnight text-[clamp(2.6rem,7vw,5.25rem)]"
        >
          On crée des sites web qui{" "}
          <span className="font-emphasis font-normal text-terra">captent</span> vos{" "}
          <span className="font-emphasis font-normal text-terra">futurs clients.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 max-w-2xl mx-auto text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-midnight/70"
        >
          <span className="font-semibold text-midnight">{data?.heroSousTitre ? "" : "À partir de 1 400 €. "}</span>
          {data?.heroSousTitre ??
            "Un site qui dure des années et qui inspire confiance à vos visiteurs. On réalise gratuitement votre page d'accueil, avant tout engagement."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra"
          >
            {data?.heroCta ?? "Je veux mon site en 21 jours"}
            <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-full border border-midnight/15 hover:border-midnight/40 bg-white/60 backdrop-blur-md px-6 py-4 text-midnight font-medium text-[15px] transition-colors"
          >
            Voir nos réalisations
          </a>
        </motion.div>

        {/* Feature row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 hidden sm:flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13.5px] text-midnight/65"
        >
          {[
            ["ph:cloud-duotone", "Hébergement gratuit"],
            ["ph:sliders-duotone", "Vous gérez votre site en autonomie"],
            ["ph:key-duotone", "Vous êtes propriétaire de votre site"],
          ].map(([icon, label]) => (
            <span key={label} className="inline-flex items-center gap-2">
              <Icon icon={icon} width={18} height={18} className="text-terra" aria-hidden />
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2 bandes d'aperçus : la 1re défile vers la droite, la 2e vers la gauche */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="relative mt-16 space-y-4 sm:space-y-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <MarqueeRow reverse offset={0} />
        <MarqueeRow offset={3} />
      </motion.div>
    </header>
  );
}
