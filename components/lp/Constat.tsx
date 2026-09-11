"use client";

import { Icon } from "@iconify/react";
import { LP } from "@/lib/lp-content";

/**
 * Le constat sur l'état du marché, posé juste après le CTA.
 *
 * C'est le passage le plus frontal de la page. Il est volontairement sobre :
 * le texte porte déjà la charge, un décor appuyé le ferait sonner faux.
 */
export default function Constat() {
  const c = LP.constat;

  return (
    <section className="border-y border-grid-line bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
          {c.kicker}
        </div>

        <h2 className="mt-4 font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-midnight">
          {c.h2Start}{" "}
          <span className="font-emphasis font-normal text-terra">{c.h2Em}</span>
        </h2>

        <p className="mt-5 max-w-2xl text-[clamp(0.98rem,1.2vw,1.1rem)] leading-relaxed text-midnight/75">
          {c.body}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {c.points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-grid-line bg-alabaster p-5"
            >
              <Icon
                icon="ph:warning-duotone"
                width={22}
                height={22}
                className="text-terra"
                aria-hidden
              />
              <h3 className="mt-3 font-display text-[15.5px] font-bold leading-snug text-midnight">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-midnight/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 border-l-2 border-terra pl-5 font-display text-[clamp(1.05rem,1.8vw,1.35rem)] font-bold leading-snug text-midnight">
          {c.closing}
        </p>
      </div>
    </section>
  );
}
