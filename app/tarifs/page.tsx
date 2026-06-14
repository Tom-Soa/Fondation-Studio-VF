import type { Metadata } from "next";
import Pricing from "@/components/home/Pricing";
import Comparison from "@/components/home/Comparison";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { OPTIONS, SERVICES, FAQ } from "@/lib/content";

const PUBLICITE = SERVICES.find((s) => s.title.includes("Publicité"));

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Forfaits à partir de 1 400 €, options à la carte, sites e-commerce Shopify et publicité Meta/Google. Site en propriété, acompte 60 %, paiement en plusieurs fois.",
};

export default function TarifsPage() {
  return (
    <main>
      {/* Titre de page (clair) — directement au-dessus des forfaits, même flux */}
      <section className="bg-alabaster pt-32 pb-10 lg:pt-44 lg:pb-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-6 font-medium">Tarifs</div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-midnight">
            Des sites qui se <span className="font-emphasis font-normal text-terra">remboursent.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-steel">
            Un investissement, pas une dépense. Prix fixe, tout inclus, hébergement gratuit.
            Votre site vous appartient. Des forfaits de base à enrichir avec des options à la carte.
          </p>
        </div>
      </section>

      {/* Forfaits — section claire, sans gros padding haut (le titre précède) */}
      <Pricing hideHead showOptionsButton={false} topPadded={false} optionsHref="#options" />

      {/* Options à la carte */}
      <section id="options" className="bg-alabaster py-24 lg:py-28 border-t border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-3 font-medium">Options</div>
              <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.8rem,4vw,3rem)] leading-none text-midnight whitespace-nowrap">
                Personnalisez votre site à la carte.
              </h2>
            </div>
            <p className="text-[14px] text-steel max-w-sm leading-relaxed">
              Chaque option s'ajoute à n'importe quel forfait, sans dépendance ni abonnement caché.
            </p>
          </div>

          {(() => {
            const OPTION_COLORS = [
              "bg-white border-grid-line",
              "bg-[#FFF7F3] border-terra/20",
              "bg-[#F3F7FF] border-blue-100",
              "bg-[#F3FFF6] border-emerald-100",
              "bg-[#FFFBF0] border-amber-100",
              "bg-[#FDF3FF] border-purple-100",
            ];
            const OPTION_ACCENT = [
              "text-terra",
              "text-terra",
              "text-blue-600",
              "text-emerald-600",
              "text-amber-600",
              "text-purple-600",
            ];
            return (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {OPTIONS.map((o, i) => (
                  <Reveal key={o.name} delay={i * 0.06}>
                    <div className={`h-full rounded-2xl border p-6 ${OPTION_COLORS[i % OPTION_COLORS.length]}`}>
                      <div className={`font-display text-xl font-bold mb-1 ${OPTION_ACCENT[i % OPTION_ACCENT.length]}`}>{o.price}</div>
                      <div className="font-semibold text-midnight mb-2">{o.name}</div>
                      <div className="text-[13.5px] text-steel leading-relaxed">{o.description}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            );
          })()}

          <p className="mt-6 text-[12px] text-steel/70">
            Prix hors taxes (TVA non applicable, art. 293 B du CGI) · Acompte 60 % à la commande, solde 40 % à la livraison
          </p>
        </div>
      </section>

      {/* Publicité Meta & Google */}
      {PUBLICITE && (
        <section className="bg-white py-24 lg:py-28 border-t border-grid-line">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <div className="rounded-3xl border border-grid-line bg-alabaster p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="font-display text-2xl font-bold text-midnight">{PUBLICITE.title}</h2>
                  <span className="rounded-full border border-terra/30 bg-terra/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-terra whitespace-nowrap">
                    {PUBLICITE.price}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-steel max-w-3xl">{PUBLICITE.description}</p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-terra hover:underline"
                >
                  En parler avec nous
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <Comparison />

      {/* FAQ tarifs */}
      <section className="bg-white py-24 lg:py-28 border-t border-grid-line">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.8rem,4vw,3rem)] text-midnight mb-10 text-center">
            Questions fréquentes
          </h2>
          <Accordion items={FAQ} />
        </div>
      </section>
    </main>
  );
}
