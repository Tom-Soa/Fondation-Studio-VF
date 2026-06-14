import type { Metadata } from "next";
import RealisationsGrid from "@/components/realisations/RealisationsGrid";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Ce qu'on a fait pour nos clients : sites vitrines et e-commerce dans tous les secteurs. Hébergement gratuit, site en propriété totale.",
};

export default function RealisationsPage() {
  return (
    <main>
      {/* Titre de page clair (inspiré de l'ancien site) */}
      <section className="bg-alabaster pt-32 pb-10 lg:pt-44 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-6 font-medium">Réalisations</div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-midnight max-w-3xl">
            Ce qu'on a fait{" "}
            <span className="font-emphasis font-normal text-terra">pour nos clients.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-steel">
            Chaque projet est conçu sur-mesure pour son secteur. Voici quelques sites que nous avons
            réalisés pour des entreprises qui voulaient se distinguer.
          </p>
        </div>
      </section>

      {/* Grille de réalisations avec vrais aperçus + modale "En savoir plus" */}
      <section className="bg-alabaster pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <RealisationsGrid />

          {/* CTA bas de page */}
          <div className="mt-16 rounded-3xl border border-grid-line bg-white p-10 lg:p-14 text-center">
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.75rem,3.5vw,2.75rem)] text-midnight">
              Votre site sera le <span className="font-emphasis font-normal text-terra">prochain.</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-steel">
              On vous offre la maquette de votre page d'accueil, sur-mesure, avant tout engagement.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover text-white px-7 py-3.5 text-[15px] font-semibold transition-colors glow-terra"
            >
              Réserver un appel gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
