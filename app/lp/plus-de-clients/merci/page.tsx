import type { Metadata } from "next";
import MetaPixel from "@/components/lp/MetaPixel";
import ThankYouCard from "@/components/lp/ThankYouCard";

export const metadata: Metadata = {
  title: "Merci · ACTC",
  description: "Votre demande est bien enregistrée.",
  robots: { index: false, follow: false },
};

/**
 * Page de remerciement.
 *
 * Elle n'est atteignable qu'après soumission du formulaire Pipedrive (à régler
 * dans Pipedrive : Web Forms → Après soumission → rediriger vers cette URL).
 * C'est donc ici, et nulle part ailleurs, qu'est déclenché l'événement Lead.
 */
export default function MerciPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-alabaster px-6 py-20">
      <MetaPixel event="Lead" />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <ThankYouCard />
    </main>
  );
}
