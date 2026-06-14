// Bande statement (remplace la section vidéo Miniamea) : grosse phrase + stats.
"use client";

import { motion } from "motion/react";
import { StatCounter } from "@/components/ui/StatCounter";
import { STATS } from "@/lib/content";

export default function StatementBand() {
  return (
    <section className="bg-alabaster py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display font-extrabold tracking-[-0.03em] leading-[1.05] text-midnight text-[clamp(2.25rem,6vw,4.5rem)]"
        >
          Un site qui inspire{" "}
          <span className="font-emphasis font-normal text-terra">confiance.</span> Et qui{" "}
          <span className="font-emphasis font-normal text-terra">fait vendre.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-7 max-w-3xl mx-auto text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-steel"
        >
          Vos visiteurs comprennent en quelques secondes qu'ils sont au bon endroit. Site
          vitrine ou boutique Shopify : un design unique, pensé pour transformer cette
          confiance en ventes.
        </motion.p>

        {/* Chiffres clés — cartes */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-2xl border border-grid-line bg-white px-5 py-7 shadow-card-light transition-colors hover:border-terra/40"
            >
              <div className="font-display font-extrabold text-terra text-[clamp(2.25rem,5vw,3.5rem)] leading-none tracking-[-0.03em]">
                <StatCounter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[12px] sm:text-[12.5px] font-medium leading-snug text-steel">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
