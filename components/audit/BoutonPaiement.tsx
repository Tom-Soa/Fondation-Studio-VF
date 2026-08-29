"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { STRIPE_PAYMENT_LINK, PAIEMENT_ACTIF } from "@/lib/audit-config";

/**
 * Bouton de paiement : seul chemin de sortie de la page.
 *
 * Tant que le lien Stripe n'est pas renseigné, le bouton reste visible mais
 * inactif : mieux vaut un bouton désactivé qu'un lien qui mène à une page
 * d'erreur pendant une campagne publicitaire.
 */
export function BoutonPaiement({
  children,
  className,
  taille = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  taille?: "normal" | "grand";
}) {
  const classes = cn(
    "audit-cta group inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-all",
    taille === "grand" ? "px-9 py-5 text-[17px]" : "px-8 py-4 text-[16px]",
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
