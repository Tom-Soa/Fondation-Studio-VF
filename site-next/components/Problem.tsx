// INSPIRATION: editorial diagnostic report -> grille 2x2 de "frictions" avec metric grand + ancre cumul
"use client";

import { motion } from "motion/react";

const FRICTIONS = [
  {
    num: "01",
    title: "Aucune confiance instantanée",
    cost: "8 s",
    costLabel: "pour convaincre",
    detail:
      "Pas de visage, pas de preuve, pas de pourquoi vous choisir. Le visiteur arrive, doute, et passe son chemin avant même de comprendre.",
  },
  {
    num: "02",
    title: "Parcours client labyrinthe",
    cost: "5+ clics",
    costLabel: "pour l'info clé",
    detail:
      "L'information essentielle est enterrée sous trois niveaux de menus. Le visiteur abandonne avant d'y arriver — et appelle un concurrent.",
  },
  {
    num: "03",
    title: "Navigation confuse",
    cost: "73 %",
    costLabel: "d'abandons en moins de 10 s",
    detail:
      "Menus surchargés, hiérarchie illisible, structure éclatée. Le visiteur ne sait pas où regarder, ni où cliquer.",
  },
  {
    num: "04",
    title: "Friction permanente",
    cost: "1/10",
    costLabel: "visiteur passe à l'action",
    detail:
      "Formulaires longs, boutons cachés, contact difficile. À chaque étape, une raison de plus de partir voir ailleurs.",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-alabaster text-midnight py-24 lg:py-32 overflow-hidden">
      {/* Diagonal lines bg — métaphore "friction" */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,23,42,0.6) 0 1px, transparent 1px 14px)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header — split éditorial */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-5">
              01 / Le problème
            </div>
            <h2 className="font-sans font-medium tracking-[-0.035em] text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98]">
              Trop de{" "}
              <span className="text-terra">friction</span>
              <br />
              entre le visiteur
              <br />
              et l'action.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 self-end"
          >
            <p className="text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">
              La plupart des sites de PME inspirent peu confiance, sont
              compliqués à naviguer, et cachent l'information clé. Le visiteur
              cherche, hésite, et part voir ailleurs. On supprime ces frictions
              une par une — chacune coûte un client.
            </p>
          </motion.div>
        </div>

        {/* Diagnostic grid — 2×2 de cards friction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-midnight/[0.08] border border-midnight/10 rounded-3xl overflow-hidden">
          {FRICTIONS.map((f, i) => (
            <motion.article
              key={f.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-alabaster hover:bg-white transition-colors p-7 sm:p-9 lg:p-11"
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-terra to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden
              />

              {/* Row 1 : number + metric */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[11px] text-terra tracking-[0.16em]">
                  {f.num}
                </span>
                <div className="text-right">
                  <div className="font-sans text-terra text-[clamp(2.5rem,4vw,3.75rem)] leading-none tracking-[-0.03em] font-medium">
                    {f.cost}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-steel">
                    {f.costLabel}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans font-medium text-[clamp(1.35rem,1.9vw,1.75rem)] tracking-[-0.02em] leading-[1.15] mb-4">
                {f.title}
              </h3>

              {/* Detail */}
              <p className="text-[14.5px] leading-relaxed text-steel max-w-md">
                {f.detail}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Cumul + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 lg:mt-16 grid md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-7 flex items-baseline gap-4 flex-wrap">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
              Cumul
            </span>
            <span className="font-sans text-terra text-[clamp(2rem,3.5vw,3rem)] leading-none tracking-[-0.03em] font-medium">
              9 / 10
            </span>
            <span className="text-[15px] text-midnight max-w-sm leading-snug">
              visiteurs partent sans avoir fait ce que vous attendiez d'eux.
            </span>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-midnight hover:bg-midnight/90 text-white text-[14px] font-semibold whitespace-nowrap transition-colors"
            >
              Voir comment on supprime ça
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
