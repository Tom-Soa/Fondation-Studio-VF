"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { STRIPE_PAYMENT_LINK, PAIEMENT_ACTIF } from "@/lib/audit-config";

/**
 * Bouton de paiement : seul chemin de sortie de la page.
 *
 * Reprend le CTA terracotta du site (fond plein, halo, flèche qui avance au
 * survol). Tant que le lien Stripe n'est pas renseigné, le bouton reste
 * visible mais inactif : mieux vaut un bouton désactivé qu'un lien qui mène à
 * une page d'erreur pendant une campagne publicitaire.
 */
export function BoutonPaiement({
  children,
  variant = "terra",
  taille = "normal",
  className,
}: {
  children: React.ReactNode;
  variant?: "terra" | "blanc";
  taille?: "normal" | "grand";
  className?: string;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-all",
    taille === "grand" ? "px-9 py-5 text-[17px]" : "px-8 py-4 text-[16px]",
    variant === "terra"
      ? "bg-terra text-white glow-terra hover:bg-terra-hover"
      : "bg-white text-terra hover:scale-[1.02]",
    !PAIEMENT_ACTIF && "cursor-not-allowed opacity-60",
    className,
  );

  if (!PAIEMENT_ACTIF) {
    return (
      <span className={classes} aria-disabled="true" title="Lien de paiement à configurer">
        {children}
      </span>
    );
  }

  return (
    <a href={STRIPE_PAYMENT_LINK} className={classes}>
      {children}
      <Icon
        icon="lucide:arrow-right"
        width={18}
        height={18}
        className="transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </a>
  );
}
