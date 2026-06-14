// Comparatif (section_comparaison Miniamea) : Fondation vs autre agence / freelance.
"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const ROWS: { label: string; us: boolean; them: boolean }[] = [
  { label: "Design sur-mesure et qualitatif", us: true, them: false },
  { label: "Un site qui inspire confiance à vos visiteurs", us: true, them: false },
  { label: "Parcours client optimisé pour convertir", us: true, them: false },
  { label: "Hébergement gratuit", us: true, them: false },
  { label: "Vous gérez votre site en autonomie", us: true, them: false },
  { label: "Vous êtes propriétaire de votre site", us: true, them: false },
  { label: "Aucun abonnement mensuel caché", us: true, them: false },
  { label: "Référencement naturel intégré (Google + IA)", us: true, them: false },
  { label: "Livraison en 14 à 21 jours", us: true, them: false },
];

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <Icon icon="lucide:check" className="text-terra" width={20} height={20} aria-label="oui" />
  ) : (
    <Icon icon="lucide:x" className="text-steel/40" width={20} height={20} aria-label="non" />
  );
}

export default function Comparison() {
  return (
    <section className="bg-alabaster py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">
            La différence
          </div>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight">
            Pourquoi nous, plutôt{" "}
            <span className="font-emphasis font-normal text-terra">qu'une autre agence ?</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-grid-line bg-white"
        >
          <div className="grid grid-cols-[1fr_6rem_6rem] sm:grid-cols-[1fr_9rem_9rem]">
            {/* En-tête */}
            <div className="p-4 sm:p-5" />
            <div className="flex items-center justify-center p-3 sm:p-5">
              <span className="font-display text-[13px] sm:text-base font-bold text-terra text-center leading-tight">Fondation<br />Studio</span>
            </div>
            <div className="flex items-center justify-center p-3 sm:p-5">
              <span className="text-[10.5px] sm:text-[12px] uppercase tracking-wide text-steel font-medium text-center leading-snug">Autre agence /<br />freelance</span>
            </div>

            {ROWS.map((r) => (
              <div key={r.label} className="contents">
                <div className="flex items-center p-4 sm:p-5 text-[13px] sm:text-[14px] leading-snug text-midnight/85 border-t border-grid-line">
                  {r.label}
                </div>
                <div className="flex items-center justify-center p-4 sm:p-5 border-t border-grid-line bg-terra/[0.05]">
                  <Mark ok={r.us} />
                </div>
                <div className="flex items-center justify-center p-4 sm:p-5 border-t border-grid-line">
                  <Mark ok={r.them} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
