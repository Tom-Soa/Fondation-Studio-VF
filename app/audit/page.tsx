// ─────────────────────────────────────────────────────────────────────────────
// Page de vente de l'audit à 97 € (/audit).
//
// À REMPLACER VOUS-MÊME (tout est dans lib/audit-config.ts) :
//   1. STRIPE_PAYMENT_LINK  : le lien de paiement Stripe
//   2. SITES_CREES          : le nombre de sites créés, s'il évolue
//   3. Le pixel Meta        : variable NEXT_PUBLIC_META_PIXEL_ID sur Vercel
//
// La photo du fondateur est déjà en place : /public/images/tom-soa.jpg
// ─────────────────────────────────────────────────────────────────────────────

import { AUDIT } from "@/lib/audit-content";
import MetaPixel from "@/components/lp/MetaPixel";
import AuditHero from "@/components/audit/AuditHero";
import AuditFaq from "@/components/audit/AuditFaq";
import {
  Probleme,
  Livrables,
  Etapes,
  Axes,
  Auteur,
  Offre,
  AppelFinal,
} from "@/components/audit/Sections";

export default function PageAudit() {
  return (
    <main className="relative">
      <MetaPixel event="PageView" />

      {/* 1. Accroche : prix, délai et bouton visibles sans défiler */}
      <AuditHero />

      {/* 2. Les symptômes que le visiteur reconnaît chez lui */}
      <Probleme />

      {/* 3. Ce qu'il reçoit concrètement */}
      <Livrables />

      {/* 4. Les trois étapes */}
      <Etapes />

      {/* 5. Les six axes analysés */}
      <Axes />

      {/* 6. Qui réalise l'audit */}
      <Auteur />

      {/* 7. L'offre et la déduction */}
      <Offre />

      {/* 8. Questions fréquentes */}
      <AuditFaq />

      {/* 9. Dernier appel à l'action */}
      <AppelFinal />

      {/* Pied de page minimal : mentions obligatoires, aucune navigation */}
      <footer className="border-t border-grid-line bg-alabaster py-8 text-center">
        <p className="text-[12.5px] text-steel">
          © {new Date().getFullYear()} ACTC ·{" "}
          <a href="/fr/mentions-legales" className="underline hover:text-midnight">
            Mentions légales
          </a>{" "}
          ·{" "}
          <a href="/fr/politique-confidentialite" className="underline hover:text-midnight">
            Confidentialité
          </a>
        </p>
      </footer>
    </main>
  );
}
