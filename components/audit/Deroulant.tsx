"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

/**
 * Bloc dépliable réutilisable.
 *
 * Sert à raccourcir la page : les contenus secondaires (le parcours détaillé,
 * les étapes, les résultats) restent accessibles mais ne forcent plus le
 * visiteur à faire défiler pour arriver à l'offre.
 */
export default function Deroulant({
  titre,
  soustitre,
  icone,
  enfants,
  ouvertParDefaut = false,
  fond = "blanc",
}: {
  titre: string;
  soustitre?: string;
  icone?: string;
  enfants: React.ReactNode;
  ouvertParDefaut?: boolean;
  fond?: "blanc" | "alabaster";
}) {
  const [ouvert, setOuvert] = useState(ouvertParDefaut);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`overflow-hidden rounded-3xl border-2 border-terra/25 ${
        fond === "blanc" ? "bg-white" : "bg-alabaster"
      } shadow-card-light`}
    >
      <button
        type="button"
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
        className="flex w-full items-center gap-4 px-6 py-6 text-left transition-colors hover:bg-terra/[0.04] sm:px-8"
      >
        {icone && (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terra/10 text-terra">
            <Icon icon={icone} width={24} height={24} aria-hidden />
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block font-display text-[19px] font-bold text-midnight sm:text-[22px]">
            {titre}
          </span>
          {soustitre && (
            <span className="mt-1 block text-[14px] leading-snug text-midnight/70">
              {soustitre}
            </span>
          )}
        </span>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terra text-white transition-transform duration-300 ${
            ouvert ? "rotate-180" : ""
          }`}
        >
          <Icon icon="lucide:chevron-down" width={20} height={20} aria-hidden />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-400 ease-out"
        style={{ gridTemplateRows: ouvert ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-grid-line px-6 py-7 sm:px-8">{enfants}</div>
        </div>
      </div>
    </motion.div>
  );
}
