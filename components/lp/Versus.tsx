"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { LP } from "@/lib/lp-content";

/**
 * Comparatif frontal "ce que font les autres / ce qu'on fait".
 * Deux colonnes sur desktop, deux blocs empilés sur mobile : la colonne "eux"
 * reste volontairement terne, la colonne "nous" porte l'accent terracotta.
 */
export default function Versus() {
  const t = LP.versus;

  return (
    <section className="bg-alabaster py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight">
            {t.h2Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h2Em}</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="grid gap-4 md:grid-cols-2 md:gap-6"
        >
          {/* Eux */}
          <div className="rounded-3xl border border-grid-line bg-white/60 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-grid-line pb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-steel/10 text-steel">
                <Icon icon="lucide:x" width={18} height={18} aria-hidden />
              </span>
              <h3 className="font-display text-[15px] font-semibold uppercase tracking-wide text-steel">
                {t.themTitle}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.rows.map((r) => (
                <li key={r.them} className="flex gap-3 text-[14.5px] leading-relaxed text-steel">
                  <Icon
                    icon="lucide:minus"
                    width={16}
                    height={16}
                    className="mt-1 shrink-0 text-steel/40"
                    aria-hidden
                  />
                  {r.them}
                </li>
              ))}
            </ul>
          </div>

          {/* Nous */}
          <div className="rounded-3xl border border-terra/25 bg-white p-6 shadow-card-light sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-terra/15 pb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terra text-white">
                <Icon icon="lucide:check" width={18} height={18} aria-hidden />
              </span>
              <h3 className="font-display text-[15px] font-bold uppercase tracking-wide text-terra">
                {t.usTitle}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.rows.map((r) => (
                <li
                  key={r.us}
                  className="flex gap-3 text-[14.5px] leading-relaxed text-midnight/85"
                >
                  <Icon
                    icon="lucide:check"
                    width={16}
                    height={16}
                    className="mt-1 shrink-0 text-terra"
                    aria-hidden
                  />
                  {r.us}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
