// "Comment ça marche" : 3 étapes, fond clair, cartes à contour terracotta, CTAs en bas.
"use client";

import Link from "next/link";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Icon } from "@iconify/react";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import { RevealWords } from "@/components/ui/motion-kit";

type Step = { n: string; icon: string; title: string; body: string };

const T: Record<
  Locale,
  { kicker: string; h2Start: string; h2Em: string; steps: Step[]; ctaCall: string; ctaBuy: string }
> = {
  fr: {
    kicker: "Comment ça marche",
    h2Start: "Votre site, en 3 étapes",
    h2Em: "simples.",
    steps: [
      {
        n: "01",
        icon: "ph:chat-circle-text-duotone",
        title: "Vous nous décrivez votre activité",
        body: "Un message ou le formulaire, en deux minutes. On vous répond sous 24 h, sans engagement.",
      },
      {
        n: "02",
        icon: "ph:pen-nib-duotone",
        title: "On vous offre la maquette",
        body: "Une vraie maquette sur-mesure de votre page d'accueil, sous 5 à 7 jours. Vous voyez le résultat avant de payer quoi que ce soit.",
      },
      {
        n: "03",
        icon: "ph:rocket-launch-duotone",
        title: "Votre site en ligne en 21 jours",
        body: "Vous validez, on construit. Hébergement gratuit, aucun abonnement, et le site vous appartient.",
      },
    ],
    ctaCall: "Recevoir ma maquette offerte",
    ctaBuy: "Voir les tarifs",
  },
  en: {
    kicker: "How it works",
    h2Start: "Your website, in 3",
    h2Em: "simple steps.",
    steps: [
      {
        n: "01",
        icon: "ph:chat-circle-text-duotone",
        title: "Tell us about your business",
        body: "A message or the form, in two minutes. We reply within 24 hours, no commitment.",
      },
      {
        n: "02",
        icon: "ph:pen-nib-duotone",
        title: "We design your free mockup",
        body: "A real custom mockup of your homepage, within 5 to 7 days. You see the result before paying anything.",
      },
      {
        n: "03",
        icon: "ph:rocket-launch-duotone",
        title: "Your website live in 21 days",
        body: "You approve, we build. Free hosting, no subscription, and the website is yours.",
      },
    ],
    ctaCall: "Get my free mockup",
    ctaBuy: "See pricing",
  },
};

// Pastille d'icône : contour au repos, se remplit de terracotta quand la ligne l'atteint.
function StepBadge({ icon, progress, at }: { icon: string; progress: MotionValue<number>; at: number }) {
  const fill = useTransform(progress, [at, at + 0.12], [0, 1]);
  const scale = useTransform(progress, [at, at + 0.12], [0.9, 1]);
  return (
    <motion.div style={{ scale }} className="relative mb-5 grid h-14 w-14 place-items-center rounded-2xl border-2 border-terra/30 bg-white text-terra">
      <motion.span aria-hidden style={{ opacity: fill }} className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-terra to-terra-hover shadow-[0_8px_24px_-8px_rgba(194,65,12,0.7)]" />
      <motion.span style={{ opacity: fill }} className="relative text-white"><Icon icon={icon} width={26} height={26} aria-hidden /></motion.span>
      <motion.span style={{ opacity: useTransform(fill, (v) => 1 - v) }} className="absolute inset-0 grid place-items-center"><Icon icon={icon} width={26} height={26} aria-hidden /></motion.span>
    </motion.div>
  );
}

export default function Process({ lang }: { lang: Locale }) {
  const t = T[lang];
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stepsProgress } = useScroll({ target: stepsRef, offset: ["start 80%", "end 55%"] });
  const line = useTransform(stepsProgress, [0, 0.85], [0, 1]);
  return (
    <section id="process" className="relative bg-alabaster pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
      {/* Atmosphère : halo terracotta doux + grille de points subtile */}
      <div
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.10) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.05) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">
            {t.kicker}
          </div>
          <RevealWords
            as="h2"
            inView
            className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight"
            emClassName="font-emphasis font-normal text-terra"
            segments={[{ text: t.h2Start }, { text: t.h2Em, em: true }]}
          />
        </div>

        <div ref={stepsRef} className="relative grid gap-4 md:grid-cols-3">
          {/* Ligne qui se trace au scroll et relie les étapes (desktop) */}
          <div aria-hidden className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[3.25rem] hidden h-[2px] bg-terra/15 md:block">
            <motion.div className="h-full origin-left bg-terra" style={{ scaleX: line }} />
          </div>
          {t.steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative z-[1] flex flex-col items-center text-center rounded-2xl border-2 border-terra/25 bg-white p-6 shadow-card-light transition-all hover:-translate-y-1 hover:border-terra hover:shadow-[0_24px_50px_-28px_rgba(194,65,12,0.55)]"
            >
              {/* numéro filigrane */}
              <span className="absolute right-4 top-3 font-display text-5xl font-extrabold leading-none text-terra/10 transition-colors group-hover:text-terra/20">
                {s.n}
              </span>
              {/* badge icône */}
              <StepBadge icon={s.icon} progress={stepsProgress} at={i / t.steps.length} />
              <h3 className="font-display text-[17px] font-semibold text-midnight mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-steel">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs de section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={localeHref(lang, "/contact")}
            className="group inline-flex items-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra"
          >
            <Icon icon="ph:chat-circle-text-duotone" width={18} height={18} aria-hidden />
            {t.ctaCall}
            <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <Link
            href={localeHref(lang, "/tarifs")}
            className="inline-flex items-center gap-2 px-4 py-4 text-midnight/70 hover:text-terra font-medium text-[15px] underline underline-offset-4 transition-colors"
          >
            {t.ctaBuy}
          </Link>
        </div>
      </div>
    </section>
  );
}
