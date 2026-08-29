import type { Metadata } from "next";
import MetaPixel from "@/components/lp/MetaPixel";
import AuditMerci from "@/components/audit/AuditMerci";

export const metadata: Metadata = {
  title: "Paiement confirmé · Audit ACTC",
  description: "Votre audit est lancé. Vous recevez votre vidéo d'analyse sous 48 h.",
  robots: { index: false, follow: false },
};

/**
 * Page de confirmation après paiement.
 *
 * À renseigner comme URL de redirection dans le lien de paiement Stripe :
 * https://www.actcstudio.fr/audit/merci
 *
 * C'est ici, et nulle part ailleurs, qu'est déclenché l'événement Purchase du
 * pixel Meta : la page n'est atteignable qu'après un paiement abouti.
 */
export default function PageMerci() {
  return (
    <main className="relative">
      <MetaPixel event="Purchase" />
      <AuditMerci />
    </main>
  );
}
