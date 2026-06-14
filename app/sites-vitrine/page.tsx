import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Création de site vitrine pour PME et artisans",
  description:
    "Site vitrine sur-mesure pour PME, artisans et indépendants : design unique, référencement intégré, hébergement gratuit. À partir de 1 400 €, page d'accueil offerte avant tout engagement.",
};

const POUR_QUI = [
  "Artisans & BTP",
  "Restaurants & commerces",
  "Professions libérales",
  "Associations & clubs",
  "Indépendants & freelances",
  "PME & services",
];

const ETAPES = [
  {
    num: "01",
    title: "Appel gratuit",
    body: "20 minutes pour comprendre votre activité, vos clients et vos objectifs. Sans engagement.",
    color: "bg-terra",
    textColor: "text-white",
  },
  {
    num: "02",
    title: "Maquette offerte",
    body: "On vous présente la maquette de votre page d'accueil avant toute signature.",
    color: "bg-midnight",
    textColor: "text-white",
  },
  {
    num: "03",
    title: "Développement",
    body: "Le site est codé sur-mesure. Aucun template, aucun WordPress. Du code propre.",
    color: "bg-[#1A3A2A]",
    textColor: "text-white",
  },
  {
    num: "04",
    title: "Mise en ligne",
    body: "On gère le déploiement, le domaine et le référencement. Livraison en 14 à 21 jours.",
    color: "bg-alabaster border border-grid-line",
    textColor: "text-midnight",
  },
];

export default function SitesVitrinePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-alabaster pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[60vh]" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.10) 0%, transparent 70%)" }} aria-hidden />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-5">Sites vitrines</div>
              <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-midnight">
                Un site qui{" "}
                <span className="font-emphasis font-normal text-terra">attire</span>{" "}
                et{" "}
                <span className="font-emphasis font-normal text-terra">convainc.</span>
              </h1>
              <p className="mt-6 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">
                Pour PME, artisans et indépendants. Sur-mesure, crédible et bien référencé. Pensé pour transformer vos visiteurs en clients.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a href="/contact" className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra">
                  Maquette offerte, sans engagement
                  <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
                <a href="/tarifs" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-midnight/15 hover:border-midnight/40 px-6 py-4 text-midnight font-medium text-[15px] transition-colors">
                  Voir les tarifs
                </a>
              </div>
            </div>

            {/* Carte prix + inclus */}
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-grid-line bg-white p-8 shadow-card-light">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-extrabold text-[2.2rem] tracking-[-0.04em] text-midnight leading-none">À partir de</span>
                </div>
                <div className="font-display font-extrabold text-[3.5rem] tracking-[-0.05em] text-terra leading-none mb-5">
                  1&nbsp;400&nbsp;€
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: "ph:paint-brush-duotone", label: "Design 100 % sur-mesure" },
                    { icon: "ph:magnifying-glass-duotone", label: "SEO intégré dès le départ" },
                    { icon: "ph:cloud-duotone", label: "Hébergement gratuit à vie" },
                    { icon: "ph:lock-key-duotone", label: "Site 100 % à vous" },
                    { icon: "ph:device-mobile-duotone", label: "Parfait sur mobile" },
                    { icon: "ph:gift-duotone", label: "Page d'accueil offerte" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <Icon icon={item.icon} width={17} height={17} className="text-terra shrink-0" aria-hidden />
                      <span className="text-[13.5px] font-medium text-midnight/80">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-white py-10 border-y border-grid-line">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-steel font-medium shrink-0">Pour qui</p>
          <div className="flex flex-wrap gap-2">
            {POUR_QUI.map((t) => (
              <span key={t} className="rounded-full border border-grid-line bg-alabaster px-4 py-1.5 text-[13px] font-medium text-midnight/80">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'un bon site vous apporte — liste compacte */}
      <section className="bg-alabaster py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl border border-grid-line bg-white p-8 lg:p-10">
              <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.4rem,3vw,2rem)] text-midnight mb-8">
                Ce qu'un bon site vitrine{" "}
                <span className="font-emphasis font-normal text-terra">vous apporte.</span>
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {[
                  { icon: "ph:storefront-duotone", label: "Vos clients vous trouvent 24h/24" },
                  { icon: "ph:device-mobile-duotone", label: "Parfait sur mobile" },
                  { icon: "ph:shield-check-duotone", label: "Un design qui inspire confiance" },
                  { icon: "ph:key-duotone", label: "Site 100 % à vous, hébergement gratuit" },
                  { icon: "ph:magnifying-glass-duotone", label: "Visible sur Google dès le lancement" },
                  { icon: "ph:lightning-duotone", label: "Livré en 14 à 21 jours" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <Icon icon={item.icon} width={18} height={18} className="text-terra shrink-0" aria-hidden />
                    <span className="text-[14.5px] font-medium text-midnight">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process en étapes — avec ronds numérotés */}
      <section className="bg-white py-20 lg:py-28 border-t border-grid-line">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">Comment ça se passe</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.4rem)] text-midnight">
              De l'appel à la mise en ligne.
            </h2>
          </div>

          {/* Étapes avec cercles et connecteurs */}
          <div className="relative">
            {/* Ligne verticale de connexion (desktop) */}
            <div className="hidden lg:block absolute left-[2.2rem] top-10 bottom-10 w-px bg-grid-line" aria-hidden />

            <div className="space-y-6">
              {ETAPES.map((e, i) => (
                <Reveal key={e.num} delay={i * 0.1}>
                  <div className="flex items-start gap-6">
                    {/* Rond numéroté */}
                    <div className={`shrink-0 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full text-center font-display font-extrabold text-[1.3rem] tracking-[-0.02em] ${e.color} ${e.textColor} shadow-sm z-10`}>
                      {e.num}
                    </div>
                    {/* Contenu */}
                    <div className="flex-1 pt-3">
                      <h3 className="font-display text-xl font-bold text-midnight mb-1">{e.title}</h3>
                      <p className="text-[14.5px] leading-relaxed text-steel max-w-lg">{e.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA terra */}
      <section className="bg-alabaster py-16 lg:py-24 border-t border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
              <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden>
                <svg className="w-full h-full"><filter id="cta-grain-vitrine3"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#cta-grain-vitrine3)" /></svg>
              </div>
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Gratuit · Sans engagement
                </span>
                <h2 className="mt-6 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-white text-[clamp(2rem,5vw,3.75rem)]">
                  Votre page d'accueil.{" "}
                  <span className="font-emphasis font-normal">Offerte.</span>
                </h2>
                <p className="mt-5 max-w-lg mx-auto text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-white/85">
                  On crée la maquette de votre page d'accueil avant tout engagement. Vous voyez le résultat, puis vous décidez.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-terra font-bold text-[15px] transition-transform hover:scale-[1.02]">
                    Réserver un appel gratuit
                    <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </a>
                  <a href="/tarifs" className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-6 py-4 text-[15px] font-medium transition-colors">
                    Voir les tarifs
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
