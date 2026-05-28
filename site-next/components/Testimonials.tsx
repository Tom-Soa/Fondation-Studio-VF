// INSPIRATION: 21st.dev TestimonialsColumn (marquee vertical) -> 3 colonnes vitesses différentes, gradient mask, dark
"use client";

import React from "react";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  initials: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    text: "En 3 semaines après la mise en ligne, notre taux de demandes de contact a doublé. Le site attire des clients qu'on n'aurait jamais touchés avec notre ancien WordPress.",
    initials: "ML",
    name: "Marie-Laure Donnet",
    role: "Gérante · Maison Leconte",
  },
  {
    text: "Le PageSpeed score est à 98. Mon site charge en moins d'une seconde. Les clients me le font remarquer spontanément, et ça se sent sur les réservations.",
    initials: "TD",
    name: "Thomas Durif",
    role: "Artisan · Atelier Durif",
  },
  {
    text: "J'avais un budget serré et des doutes. Finalement, c'est le meilleur investissement de l'année. Process simple, livraison rapide, et le résultat dépasse mes attentes.",
    initials: "SC",
    name: "Sophie Carpentier",
    role: "Avocate · Cabinet Moreau",
  },
  {
    text: "Résultat professionnel, délai tenu. Notre agence immobilière a vu ses demandes de visite augmenter dès la première semaine. Le site inspire vraiment confiance.",
    initials: "PL",
    name: "Pierre-Louis Fabre",
    role: "Directeur · Fabre Immobilier",
  },
  {
    text: "Le sur-mesure se voit. Mes clients me disent que le site reflète enfin qui nous sommes. Très différent du template précédent qu'on traînait depuis 5 ans.",
    initials: "AG",
    name: "Alexandre Guérin",
    role: "Gérant · Guérin Couverture",
  },
  {
    text: "Maquette présentée en 5 jours, site en ligne sous 3 semaines. Pas un retard, pas un mail sans réponse. Du sérieux comme on n'en voit plus souvent.",
    initials: "CR",
    name: "Camille Roussel",
    role: "Co-fondatrice · Studio Roussel",
  },
];

const col1 = [TESTIMONIALS[0], TESTIMONIALS[3], TESTIMONIALS[1]];
const col2 = [TESTIMONIALS[2], TESTIMONIALS[4], TESTIMONIALS[5]];
const col3 = [TESTIMONIALS[5], TESTIMONIALS[1], TESTIMONIALS[3]];

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-midnight/80 to-midnight/60 backdrop-blur-sm p-7 shadow-card max-w-sm">
      <div className="flex gap-0.5 text-terra mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5" />
        ))}
      </div>
      <p className="text-terra text-[17px] leading-[1.45] text-white/95 mb-6">
        « {t.text.replace(/'/g, "’")} »
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terra to-terra flex items-center justify-center text-white text-[12px] font-semibold">
          {t.initials}
        </div>
        <div>
          <div className="text-white text-[13.5px] font-medium tracking-tight">
            {t.name}
          </div>
          <div className="text-white/55 text-[12px]">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function Column({
  items,
  duration,
  className,
}: {
  items: Testimonial[];
  duration: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ y: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5"
      >
        {[0, 1].map((dup) => (
          <React.Fragment key={dup}>
            {items.map((t, i) => (
              <TestimonialCard key={`${dup}-${i}`} t={t} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-midnight py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-4">
            04 / Témoignages
          </div>
          <h2 className="font-sans font-medium tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-white">
            Ils nous font{" "}
            <span className="text-terra">confiance</span>.
          </h2>
          <p className="mt-5 text-[15px] text-white/55">
            Ce que disent nos clients après livraison. Aucune com', aucun
            arrangement.
          </p>
        </motion.div>
      </div>

      {/* Marquee region */}
      <div
        className="relative max-w-7xl mx-auto px-6"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex justify-center gap-5 h-[680px] overflow-hidden">
          <Column items={col1} duration={28} />
          <Column items={col2} duration={36} className="hidden md:block" />
          <Column items={col3} duration={32} className="hidden lg:block" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-12 text-center">
        <a
          href="https://g.page/r/Caj-6GdZ9cDZEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-white/30 text-white text-[13.5px] font-medium transition-colors"
        >
          Voir tous les avis Google
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
