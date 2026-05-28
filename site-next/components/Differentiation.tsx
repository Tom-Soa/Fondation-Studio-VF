// INSPIRATION: editorial pull-quote magazine + Awwwards big statement -> contraste fort, citation italic, KPIs en bento mini
"use client";

import { motion } from "motion/react";

const BENEFITS = [
  {
    num: "1",
    title: "Le meilleur de votre secteur",
    body: "Vos concurrents ont des sites moyens. Le vôtre joue dans une autre catégorie, dès la première seconde.",
  },
  {
    num: "2",
    title: "Confiance immédiate",
    body: "En 3 secondes, le visiteur comprend qu'il est au bon endroit. La crédibilité se voit, elle ne se lit pas.",
  },
  {
    num: "3",
    title: "Un résultat qui se mesure",
    body: "Plus de demandes, plus de contacts, plus de ventes. La différence avec votre ancien site est quantifiable.",
  },
];

export default function Differentiation() {
  return (
    <section className="relative bg-alabaster text-midnight py-24 lg:py-36 overflow-hidden">
      {/* Texture decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.6]"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 100%, rgba(194,65,12,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT: statement editorial */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-6"
            >
              03 / Pourquoi nous choisir
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans font-medium tracking-[-0.035em] text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] text-midnight max-w-3xl"
            >
              Un site qui{" "}
              <span className="text-terra">
                vous distingue
              </span>{" "}
              vraiment.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel-2"
            >
              On livre des sites qui rivalisent avec les plus grandes marques.
              Pas un template, pas juste un beau site. Un site qui convertit
              et qui marque dès la première visite.
            </motion.p>

            {/* Benefits stacked */}
            <div className="mt-12 space-y-8">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full border border-terra/30 flex items-center justify-center text-terra text-2xl text-terra">
                    {b.num}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-sans font-medium text-[clamp(1.15rem,1.5vw,1.35rem)] tracking-[-0.01em] text-midnight mb-2">
                      {b.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-steel-2 max-w-md">
                      {b.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: pull quote + KPIs + CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Pull quote */}
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl bg-midnight text-white p-9 lg:p-10 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-[0.18] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 50% at 100% 0%, rgba(249,115,22,0.35) 0%, transparent 60%)",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                aria-hidden
              >
                <svg className="w-full h-full">
                  <filter id="diff-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#diff-grain)" />
                </svg>
              </div>
              <div className="relative">
                <svg className="w-10 h-10 text-terra/70 mb-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h3c.5 0 1-.5 1-1 0 4-1 5-5 5v4zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h3c.5 0 1-.5 1-1 0 4-1 5-5 5v4z" />
                </svg>
                <blockquote className="text-terra text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.15] text-white">
                  Des studios comme Fondation, c'est 1 % du marché. Ce n'est
                  pas un hasard, c'est un niveau d'exigence que peu sont prêts
                  à tenir.
                </blockquote>
              </div>
            </motion.figure>

            {/* KPI bento */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl bg-white border border-midnight/8 p-6">
                <div className="text-terra text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-terra">
                  42<span className="text-terra">+</span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-steel-2 mt-3">
                  Projets livrés
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-midnight/8 p-6">
                <div className="text-terra text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-terra">
                  14<span className="text-terra">–</span>21
                  <span className="text-base font-sans not-italic font-medium ml-1 text-steel-2">
                    j
                  </span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-steel-2 mt-3">
                  Délai livraison
                </div>
              </div>
            </motion.div>

            {/* Inline CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-2xl border border-midnight/10 bg-alabaster p-6 flex flex-col gap-3"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-terra hover:bg-terra text-white font-semibold text-[15px] transition-colors whitespace-nowrap"
              >
                Démarrer mon projet
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-center text-[12px] text-steel-2">
                Sans engagement · Réponse sous 24 h
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
