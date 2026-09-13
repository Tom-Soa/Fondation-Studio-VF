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
import PixelAudit from "@/components/audit/PixelAudit";
import BandeauLancement from "@/components/audit/BandeauLancement";
import AuditHero from "@/components/audit/AuditHero";
import BoutonFlottant from "@/components/audit/BoutonFlottant";
import AuditFaq from "@/components/audit/AuditFaq";
import SitesRealises from "@/components/audit/SitesRealises";
import {
  Livrables,
  Etapes,
  Axes,
  Auteur,
  Offre,
  AppelFinal,
} from "@/components/audit/Sections";

export default function PageAudit() {
  // Le padding compense le bandeau fixe, sorti du flux.
  return (
    <main className="relative pt-[42px]">
      <PixelAudit />
      <BoutonFlottant />
      <BandeauLancement />

      {/* 1. Accroche : prix, délai et bouton visibles sans défiler */}
      <AuditHero />

      {/* 2. Qui réalise l'audit : la crédibilité d'abord */}
      <Auteur />

      {/* 3. Les sites déjà réalisés, en preuve */}
      <SitesRealises />

      {/* 4. Ce qu'il reçoit concrètement */}
      <Livrables />

      {/* 5. Les cinq axes analysés */}
      <Axes />

      {/* 6. Les trois étapes, dépliables */}
      <Etapes />

      {/* 7. L'offre et la déduction */}
      <Offre />

      {/* 9. Questions fréquentes */}
      <AuditFaq />

      {/* 10. Dernier appel à l'action */}
      <AppelFinal />

      {/* Pied de page minimal : mentions obligatoires, aucune navigation */}
      <footer className="border-t border-grid-line bg-alabaster py-8 text-center">
        <p className="text-[12.5px] text-midnight/70">
          © {new Date().getFullYear()} ACTC ·{" "}
          <a href="/fr" className="underline hover:text-midnight">
            Notre site
          </a>{" "}
          ·{" "}
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
