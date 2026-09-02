"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { STRIPE_PAYMENT_LINK, PAIEMENT_ACTIF, PRIX } from "@/lib/audit-config";

/**
 * Bouton de commande flottant, sur téléphone uniquement.
 *
 * Il apparaît dès que le visiteur a dépassé le bouton du haut de page, pour
 * qu'il puisse commander à tout moment sans remonter. Il se retire quand le
 * bloc d'offre entre à l'écran, sinon deux boutons se superposeraient.
 */
export default function BoutonFlottant() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const surveiller = () => {
      // Passé le premier écran, le bouton du haut n'est plus visible.
      const depasseHero = window.scrollY > window.innerHeight * 0.9;

      // Le bloc d'offre porte déjà un bouton bien visible : on s'efface.
      const offre = document.getElementById("bloc-offre");
      let offreVisible = false;
      if (offre) {
        const r = offre.getBoundingClientRect();
        offreVisible = r.top < window.innerHeight && r.bottom > 0;
      }

      setVisible(depasseHero && !offreVisible);
    };

    surveiller();
    window.addEventListener("scroll", surveiller, { passive: true });
    window.addEventListener("resize", surveiller);
    return () => {
      window.removeEventListener("scroll", surveiller);
      window.removeEventListener("resize", surveiller);
    };
  }, []);

  if (!PAIEMENT_ACTIF) return null;

  return (
    <a
      href={STRIPE_PAYMENT_LINK}
      className={`fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-terra px-5 py-3.5 text-[14.5px] font-bold text-white shadow-terra transition-all duration-300 md:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Commander mon audit
      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[13px]">{PRIX}</span>
      <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
    </a>
  );
}
