"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { LP } from "@/lib/lp-content";

/** Bande de réassurance + les trois chiffres de la promesse. */
export default function TrustRow() {
  return (
    <section className="border-y border-grid-line bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Réassurance */}
        <ul className="grid grid-cols-2 gap-3 text-[13.5px] text-midnight/80 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:text-[14px] sm:text-midnight/70">
          {LP.trust.map(([icon, label]) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-2xl border border-grid-line bg-alabaster px-3 py-2.5 leading-snug sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
            >
              <Icon
                icon={icon}
                width={19}
                height={19}
                className="shrink-0 text-terra"
                aria-hidden
              />
              {label}
            </li>
          ))}
        </ul>

        {/* Chiffres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 grid grid-cols-3 gap-4 border-t border-grid-line pt-10 sm:gap-6"
        >
          {LP.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] text-terra">
                {s.value}
              </div>
              <p className="mx-auto mt-2 max-w-[16rem] text-[12px] leading-snug text-steel sm:text-[13.5px]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
