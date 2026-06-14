// Réalisations (home) — bande d'aperçus qui défile automatiquement vers la gauche.
"use client";

import { Icon } from "@iconify/react";
import { SHOWCASE } from "@/lib/content";

export default function Showcase() {
  // doublé pour une boucle continue (translateX -50%)
  const loop = [...SHOWCASE, ...SHOWCASE];

  return (
    <section id="realisations" className="bg-white py-24 lg:py-32 border-y border-grid-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">
            Nos réalisations
          </div>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight">
            Des sites qui <span className="font-emphasis font-normal text-terra">convertissent.</span>
          </h2>
        </div>
      </div>

      {/* Défilement automatique vers la gauche */}
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max">
          <div
            className="flex w-max gap-6 animate-marquee-x"
            style={{ animationDuration: "48s" }}
          >
            {loop.map((s, i) => (
              <article
                key={i}
                className="group flex w-[280px] sm:w-[340px] flex-col shrink-0 overflow-hidden rounded-3xl border border-grid-line bg-white shadow-card-light transition-all hover:border-terra/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-grid-line bg-alabaster">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <h3 className="font-display text-lg font-semibold text-midnight">{s.name}</h3>
                  <span className="shrink-0 rounded-full bg-terra/10 px-2.5 py-1 text-[11px] font-semibold text-terra">
                    {s.offer}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Note + CTA sous les cartes */}
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
        <p className="text-[14.5px] text-steel mb-5">
          Et bien d'autres projets dans tous les secteurs.
        </p>
        <a
          href="/realisations"
          className="inline-flex items-center gap-2 rounded-full bg-midnight hover:bg-midnight/90 px-7 py-4 text-[15px] font-semibold text-white transition-colors"
        >
          Voir toutes nos réalisations
          <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
        </a>
      </div>
    </section>
  );
}
