// "Comment ça marche" — 5 étapes, fond clair, cartes à contour terracotta, CTAs en bas.
"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

type Step = { n: string; icon: string; title: string; body: string };

const STEPS: Step[] = [
  {
    n: "01",
    icon: "ph:phone-call-duotone",
    title: "Prendre un appel",
    body: "On échange sur votre activité et vos objectifs. Réservez votre appel en ligne, sans engagement.",
  },
  {
    n: "02",
    icon: "ph:pen-nib-duotone",
    title: "Maquette gratuite",
    body: "On conçoit une vraie maquette sur-mesure de votre page d'accueil. Comptez 5 à 7 jours. Pressé ? Vous pouvez démarrer directement, sans maquette.",
  },
  {
    n: "03",
    icon: "ph:check-circle-duotone",
    title: "Validation",
    body: "On vous présente le résultat lors d'un second appel. Vous validez la direction, le contenu et le calendrier.",
  },
  {
    n: "04",
    icon: "ph:code-duotone",
    title: "Design & développement",
    body: "On crée votre site sur-mesure : design unique, SEO intégré, rapide et sécurisé. Comptez 14 à 21 jours.",
  },
  {
    n: "05",
    icon: "ph:rocket-launch-duotone",
    title: "Mise en ligne",
    body: "On vous accompagne pour la mise en ligne. Votre site vous appartient à 100 %, avec un hébergement gratuit.",
  },
];

export default function Process() {
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
            Comment ça marche
          </div>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight">
            Votre site, en 5 étapes{" "}
            <span className="font-emphasis font-normal text-terra">claires.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border-2 border-terra/25 bg-white p-6 shadow-card-light transition-all hover:-translate-y-1 hover:border-terra hover:shadow-[0_24px_50px_-28px_rgba(194,65,12,0.55)]"
            >
              {/* numéro filigrane */}
              <span className="absolute right-4 top-3 font-display text-5xl font-extrabold leading-none text-terra/10 transition-colors group-hover:text-terra/20">
                {s.n}
              </span>
              {/* badge icône */}
              <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-terra to-terra-hover text-white shadow-[0_8px_24px_-8px_rgba(194,65,12,0.7)]">
                <Icon icon={s.icon} width={24} height={24} aria-hidden />
              </div>
              <h3 className="font-display text-[17px] font-semibold text-midnight mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-steel">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs de section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra"
          >
            <Icon icon="ph:phone-call-duotone" width={18} height={18} aria-hidden />
            Prendre un appel
            <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a
            href="/tarifs"
            className="inline-flex items-center gap-2 rounded-full border border-midnight/15 hover:border-terra hover:text-terra px-6 py-4 text-midnight font-medium text-[15px] transition-colors"
          >
            Acheter maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
