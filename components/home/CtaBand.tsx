// CTA final (section_cta Miniamea) : bande terracotta pleine, gros titre, badge gratuit.
"use client";

import Link from "next/link";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import { RevealWords, Magnetic } from "@/components/ui/motion-kit";

const T: Record<
  Locale,
  { badge: string; h2Start: string; h2Em: string; body: string; cta: string; note: string }
> = {
  fr: {
    badge: "Gratuit · Sans engagement",
    h2Start: "Votre page d'accueil.",
    h2Em: "Offerte.",
    body: "Vous nous décrivez votre activité, on conçoit une vraie maquette sur-mesure sous 5 à 7 jours. Si elle vous plaît, on démarre.",
    cta: "Recevoir ma maquette offerte",
    note: "Réponse rapide · sans engagement",
  },
  en: {
    badge: "Free · No commitment",
    h2Start: "Your homepage.",
    h2Em: "On us.",
    body: "Tell us about your business and we design a real custom mockup within 5 to 7 days. If you like it, we start.",
    cta: "Get my free mockup",
    note: "Fast response · no commitment",
  },
};

export default function CtaBand({ lang }: { lang: Locale }) {
  const t = T[lang];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Le bloc grandit en entrant dans l'écran (transform seulement).
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  return (
    <section id="cta" className="bg-alabaster py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          style={reduce ? undefined : { scale, y }}
          className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-24 text-center"
        >
          {/* Aplat franc, sans grain ni flou : le bloc est mis à l'échelle au scroll, un filtre serait recalculé à chaque image. */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {t.badge}
            </span>
            <RevealWords
              as="h2"
              inView
              className="mt-7 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-white text-[clamp(2rem,6vw,4.75rem)]"
              emClassName="font-emphasis font-normal"
              segments={[{ text: t.h2Start }, { text: t.h2Em, em: true }]}
            />
            <p className="mt-6 max-w-xl mx-auto text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-white/85">
              {t.body}
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <Magnetic>
              <Link
                href={localeHref(lang, "/contact")}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-terra font-bold text-[16px] transition-transform hover:scale-[1.02]"
              >
                {t.cta}
                <Icon icon="lucide:arrow-right" width={18} height={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              </Magnetic>
              <p className="text-[13px] text-white/80">{t.note}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
