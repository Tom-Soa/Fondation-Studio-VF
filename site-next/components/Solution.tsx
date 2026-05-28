// INSPIRATION: manifeste éditorial vertical -> "Zéro friction" en pivot + chapitres alignés sur spine terra
"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock,
  Code2,
  Search,
  Target,
} from "lucide-react";

const PILLARS = [
  {
    num: "01",
    icon: Target,
    badge: "Confiance",
    title: "Design orienté conversion",
    body:
      "Chaque section, chaque CTA est pensé pour transformer le visiteur en client. Hiérarchie claire, parcours linéaire, preuves visibles.",
    metric: "1 seul",
    metricLabel: "CTA dominant par écran",
  },
  {
    num: "02",
    icon: Clock,
    badge: "Vitesse",
    title: "Livré en 14 à 21 jours",
    body:
      "Délais contractuels. Pas de mois supplémentaires, pas d'aller-retours sans fin. On respecte votre calendrier, point.",
    metric: "21 j",
    metricLabel: "délai maximum garanti",
  },
  {
    num: "03",
    icon: Code2,
    badge: "Propriété",
    title: "Code en propriété totale",
    body:
      "HTML, CSS, JS purs. Hébergement gratuit inclus. Aucune dépendance à WordPress, aucun plugin payant, aucun abonnement mensuel.",
    metric: "0 € / mois",
    metricLabel: "frais récurrents",
  },
  {
    num: "04",
    icon: Search,
    badge: "Visibilité",
    title: "Référencement intégré dès le jour 1",
    body:
      "Optimisé Google + IA conversationnelles (ChatGPT, Perplexity, Claude). Schéma sémantique, vitesse maximale, contenu structuré.",
    metric: "100 %",
    metricLabel: "indexable au lancement",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative bg-midnight text-white py-24 lg:py-36 overflow-hidden"
    >
      {/* Background glow + grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 60% at 75% 15%, rgba(249,115,22,0.12) 0%, transparent 60%), radial-gradient(45% 55% at 10% 85%, rgba(194,65,12,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-5">
              02 / La solution
            </div>
            <h2 className="font-sans font-medium tracking-[-0.035em] text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] text-white">
              Un site sans détour,
              <br />
              <span className="text-terra">
                construit pour vendre.
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 self-end"
          >
            <p className="text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-white/65">
              Code pur, maquette offerte, livraison rapide. Chaque pilier
              élimine un point de friction. Le visiteur arrive, comprend,
              clique. Sans détour.
            </p>
          </motion.div>
        </div>

        {/* Manifesto pivot — "Zéro friction" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 lg:mb-28"
        >
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-10 lg:p-16 overflow-hidden">
            {/* Corner glows */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terra/15 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-terra/[0.08] blur-3xl"
              aria-hidden
            />
            {/* Top accent line */}
            <div
              className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-terra/60 to-transparent"
              aria-hidden
            />

            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-terra/90 mb-5">
                  Manifeste
                </div>
                <h3 className="font-sans font-medium tracking-[-0.04em] text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] text-white">
                  Zéro
                  <br />
                  <span className="text-terra">friction</span>
                  <span className="text-white">.</span>
                </h3>
                <p className="mt-7 max-w-md text-[15.5px] leading-relaxed text-white/65">
                  Une promesse, quatre piliers. Chaque ligne de code, chaque
                  pixel sert un seul objectif : faire passer le visiteur de la
                  curiosité à l'action, sans aucun obstacle entre les deux.
                </p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <ul className="grid grid-cols-2 gap-3">
                  {PILLARS.map((p) => (
                    <li
                      key={p.badge}
                      className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2"
                    >
                      <span className="block h-1.5 w-1.5 rounded-full bg-terra" />
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/80">
                        {p.badge}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-terra hover:bg-terra-hover text-white text-[14px] font-semibold whitespace-nowrap transition-colors glow-terra"
                >
                  Démarrer mon projet
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chapter spine */}
        <div className="relative">
          {/* Vertical spine line (desktop) */}
          <div
            className="absolute left-[3.5rem] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent hidden lg:block"
            aria-hidden
          />

          <ol className="space-y-px">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative"
                >
                  <div className="relative grid grid-cols-12 gap-4 lg:gap-8 items-start py-8 lg:py-10 border-t border-white/[0.06] first:border-t-0 transition-colors">
                    {/* Spine dot (desktop) */}
                    <div
                      className="absolute left-[3.5rem] top-12 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-midnight border-2 border-terra/60 group-hover:bg-terra group-hover:scale-125 transition-all duration-300 hidden lg:block z-10"
                      aria-hidden
                    />

                    {/* Number */}
                    <div className="col-span-3 lg:col-span-2 flex items-center gap-3">
                      <span className="font-mono text-[11px] text-terra tracking-[0.18em]">
                        {p.num}
                      </span>
                      <Icon
                        className="w-4 h-4 text-white/35 group-hover:text-terra transition-colors hidden sm:block"
                        aria-hidden
                      />
                    </div>

                    {/* Title */}
                    <div className="col-span-9 lg:col-span-4">
                      <h3 className="font-sans font-medium tracking-[-0.02em] text-[clamp(1.35rem,2vw,1.85rem)] leading-[1.15] text-white">
                        {p.title}
                      </h3>
                    </div>

                    {/* Body */}
                    <div className="col-span-12 lg:col-span-4 lg:col-start-7">
                      <p className="text-[14.5px] leading-relaxed text-white/65 max-w-md">
                        {p.body}
                      </p>
                    </div>

                    {/* Metric */}
                    <div className="col-span-12 lg:col-span-2 lg:text-right">
                      <div className="font-sans text-terra text-[clamp(1.5rem,2.2vw,2rem)] leading-none tracking-[-0.03em] font-medium">
                        {p.metric}
                      </div>
                      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                        {p.metricLabel}
                      </div>
                    </div>

                    {/* Hover left fill — subtle */}
                    <div
                      className="absolute -left-6 top-8 bottom-8 w-px bg-terra opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"
                      aria-hidden
                    />
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Closing CTA strap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 lg:mt-20 pt-10 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p className="text-[15px] text-white/65 max-w-md">
            Quatre piliers, une seule promesse : un site sans détour, qui
            transforme.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-terra hover:bg-terra/10 text-white text-[14px] font-semibold whitespace-nowrap transition-all"
          >
            Voir le processus complet
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
