// Pricing — section claire (fond alabaster), cartes d'offres + carte e-commerce horizontale.
"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { OfferCard } from "@/components/ui/OfferCard";
import { OFFERS, OPTIONS_NOTE, PAYMENT_NOTE } from "@/lib/content";

export default function Pricing({
  optionsHref = "/tarifs#options",
  showOptionsButton = true,
  hideHead = false,
  topPadded = true,
}: {
  optionsHref?: string;
  showOptionsButton?: boolean;
  hideHead?: boolean;
  /** false = pas de gros padding haut (quand un titre de page le précède déjà) */
  topPadded?: boolean;
}) {
  return (
    <section
      id="tarifs"
      className={`relative bg-alabaster overflow-hidden border-y border-grid-line ${topPadded ? "py-24 lg:py-32" : "pb-24 lg:pb-32 pt-4"}`}
    >
      {/* halo terracotta doux en haut */}
      <div
        className="absolute inset-x-0 top-0 -z-0 h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(70% 60% at 50% 0%, rgba(194,65,12,0.10) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {!hideHead && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">Tarifs</div>
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] text-midnight">
              Des sites qui se <span className="font-emphasis font-normal text-terra">remboursent.</span>
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">
              Prix fixe, tout inclus. Hébergement gratuit. Paiement en plusieurs fois. Votre site vous appartient.
            </p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3 items-stretch pt-3">
          {OFFERS.map((o, i) => (
            <motion.div
              key={o.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <OfferCard offer={o} />
            </motion.div>
          ))}
        </div>

        {/* Carte e-commerce — horizontale sur desktop, compacte sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 overflow-hidden rounded-3xl border border-grid-line bg-white shadow-card-light"
        >
          <div className="flex flex-col sm:flex-row sm:items-center">
            {/* Visuel / logo Shopify */}
            <div className="relative flex items-center justify-center sm:w-56 shrink-0 p-7 sm:p-8 overflow-hidden bg-white">
              <Icon icon="fa6-brands:shopify" width={72} height={72} className="relative text-[#5E8E3E]" aria-hidden />
            </div>
            {/* Texte */}
            <div className="flex-1 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-display text-xl font-bold text-midnight">On crée aussi des sites marchands</h3>
                <span className="rounded-full bg-terra/10 px-3 py-1 text-[11px] font-semibold text-terra">E-commerce Shopify</span>
                <span className="rounded-full border border-midnight/15 px-3 py-1 text-[11px] font-semibold text-midnight">À partir de 3 900 €</span>
              </div>
              <p className="text-[14.5px] leading-relaxed text-steel max-w-2xl">
                Vous vendez vos produits en ligne ? On crée votre boutique complète : catalogue,
                panier, paiement sécurisé et gestion des commandes. Pensée pour vendre, simple à
                gérer au quotidien.
              </p>
              <a
                href="/sites-marchands"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-midnight hover:bg-midnight/90 px-6 py-3 text-[14px] font-semibold text-white transition-colors"
              >
                Découvrir nos sites marchands
                <Icon icon="lucide:arrow-right" width={15} height={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Note : forfaits de base + options */}
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="max-w-2xl text-[14.5px] text-steel">{OPTIONS_NOTE}</p>
          {showOptionsButton && (
            <a
              href={optionsHref}
              className="inline-flex items-center gap-2 rounded-full border border-midnight/15 hover:border-terra hover:text-terra px-6 py-3 text-[14px] font-semibold text-midnight transition-colors"
            >
              Voir les options
              <Icon icon="lucide:arrow-right" width={14} height={14} aria-hidden />
            </a>
          )}
          <p className="text-[12px] text-steel/70 max-w-xl">{PAYMENT_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
