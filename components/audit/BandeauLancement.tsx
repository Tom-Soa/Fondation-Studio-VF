"use client";

import { Icon } from "@iconify/react";
import { PRIX, PRIX_APRES } from "@/lib/audit-config";

/**
 * Bandeau de lancement, fixé en haut de l'écran.
 *
 * Il reste visible pendant tout le défilement : le rappel du tarif de lancement
 * accompagne le visiteur jusqu'au bouton de paiement. Volontairement
 * sans compte à rebours : un décompte qui se relance à chaque visiteur est une
 * fausse rareté, sanctionnée par Meta et contraire à ce que la page promet
 * par ailleurs. L'urgence vient du fait, pas d'une horloge.
 */
export default function BandeauLancement() {
  const messages = [
    `Offre de lancement : ${PRIX} au lieu de ${PRIX_APRES}`,
    "Places limitées chaque jour",
  ];

  // Doublé pour que la boucle de défilement soit continue.
  const boucle = Array.from({ length: 6 }, () => messages).flat();

  return (
    <div className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-terra text-white">
      <div className="flex w-max animate-marquee-x" style={{ animationDuration: "34s" }}>
        {boucle.map((m, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap px-7 py-2.5 text-[13.5px] font-semibold"
          >
            <Icon
              icon="ph:sparkle-fill"
              width={13}
              height={13}
              className="shrink-0 opacity-70"
              aria-hidden
            />
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
