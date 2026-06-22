import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "L'équipe · Fondation Studio",
  description:
    "Tom-Soa Cyprien et Andylane Chatenay, entrepreneurs et fondateurs de Fondation Studio. On comprend les problématiques des entreprises de l'intérieur et on accompagne pour trouver des clients et se développer.",
};

const VALEURS = [
  {
    num: "01",
    title: "Transparence totale",
    body: "On ne vous vendra jamais quelque chose dont vous n'avez pas besoin. Lors de l'appel, on vous dit la vérité sur ce qui marchera pour votre activité, même si ça veut dire qu'on n'est pas la bonne option.",
  },
  {
    num: "02",
    title: "Les résultats avant tout",
    body: "On ne crée pas des sites pour qu'ils soient beaux. On les crée pour ramener des clients. Chaque section, chaque bouton, chaque texte est pensé pour convertir vos visiteurs.",
  },
  {
    num: "03",
    title: "Zéro dépendance",
    body: "Votre site vous appartient à 100 %. Pas d'abonnement, pas de verrou technique. Si demain vous partez, vous emportez tout. C'est notre manière de prouver qu'on mérite votre confiance.",
  },
];

export default function EquipePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-alabaster pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-[60vh]" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.08) 0%, transparent 70%)" }} aria-hidden />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-5">L'équipe</div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-midnight">
            Deux entrepreneurs.{" "}
            <span className="font-emphasis font-normal text-terra">Un seul objectif.</span>
          </h1>
          <p className="mt-6 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel max-w-xl mx-auto">
            Avant d'être des créateurs de sites, on est des entrepreneurs. On comprend vos problématiques de l'intérieur : trouver des clients, se faire connaître, digitaliser son activité. C'est pour ça que nos sites fonctionnent vraiment.
          </p>
        </div>
      </section>

      {/* Fondateurs */}
      <section className="bg-white py-16 lg:py-20 border-y border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Tom-Soa */}
            <Reveal>
              <div className="rounded-3xl border border-grid-line bg-alabaster overflow-hidden h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/tom-soa.jpg" alt="Tom-Soa Cyprien, co-fondateur Fondation Studio" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-terra/10 px-3 py-1 text-[11px] font-semibold text-terra mb-4">
                    Co-fondateur
                  </div>
                  <h2 className="font-display text-2xl font-bold text-midnight">Tom-Soa Cyprien</h2>
                  <p className="text-[13px] text-steel font-medium mt-1 mb-4">Design · Publicité payante · Parcours client</p>
                  <p className="text-[14px] leading-relaxed text-steel mb-5">
                    Entrepreneur depuis plusieurs années, Tom-Soa pilote la direction artistique, le parcours client et les stratégies d'acquisition payante (Meta, Google). Il conçoit des sites qui convertissent et des campagnes qui ramènent des clients.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Design web", "Publicité Meta & Google", "Parcours client", "Direction artistique"].map((s) => (
                      <span key={s} className="rounded-full bg-white border border-grid-line px-3 py-1 text-[12px] font-medium text-midnight/70">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="https://www.instagram.com/tomso.ads" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-grid-line bg-white text-steel hover:text-midnight hover:border-midnight/30 transition-colors" aria-label="Instagram Tom-Soa">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/tom-soa-cyprien-934798333/" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-grid-line bg-white text-steel hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-colors" aria-label="LinkedIn Tom-Soa">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Andylane */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-grid-line bg-alabaster overflow-hidden h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/andy-lan.png" alt="Andylane Chatenay, co-fondateur Fondation Studio" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-terra/10 px-3 py-1 text-[11px] font-semibold text-terra mb-4">
                    Co-fondateur
                  </div>
                  <h2 className="font-display text-2xl font-bold text-midnight">Andylane Chatenay</h2>
                  <p className="text-[13px] text-steel font-medium mt-1 mb-4">SEO · Optimisation textuelle · Stratégie commerciale</p>
                  <p className="text-[14px] leading-relaxed text-steel mb-5">
                    Entrepreneur expérimenté, Andylane maîtrise le référencement naturel, l'optimisation des textes pour vendre et la stratégie commerciale. Il aide aussi les entrepreneurs à réduire leurs coûts et à trouver de meilleures solutions opérationnelles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["SEO & référencement", "Optimisation textuelle", "Stratégie commerciale", "Développement web"].map((s) => (
                      <span key={s} className="rounded-full bg-white border border-grid-line px-3 py-1 text-[12px] font-medium text-midnight/70">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accompagnement global — citation */}
      <section className="bg-alabaster py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl border border-grid-line bg-white p-10 lg:p-14">
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-8">Au-delà du site</div>
              <blockquote className="font-display font-medium tracking-[-0.02em] text-[clamp(1.2rem,2.5vw,1.65rem)] leading-[1.45] text-midnight">
                "On n'est pas uniquement des créateurs de sites. On est des entrepreneurs qui comprennent vos problématiques de l'intérieur : trouver des clients, réduire ses coûts, digitaliser son activité, construire sa présence en ligne. On peut vous accompagner au-delà du site : stratégie d'acquisition, conseil sur vos actions prioritaires, mise en place de votre écosystème digital complet."
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-grid-line" />
                <span className="text-[13px] font-medium text-steel">Tom-Soa & Andylane, fondateurs</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valeurs — double carte par valeur */}
      <section className="bg-white py-20 lg:py-24 border-t border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">Ce qui nous guide</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.5rem)] text-midnight">
              Nos valeurs, en vrai.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* 01 — fond terra */}
            <Reveal delay={0}>
              <div className="flex flex-col gap-0 rounded-3xl overflow-hidden h-full">
                <div className="relative overflow-hidden bg-terra px-7 py-7">
                  <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden>
                    <svg className="w-full h-full"><filter id="grain-v1"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#grain-v1)" /></svg>
                  </div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" aria-hidden />
                  <div className="relative">
                    <div className="font-mono text-[10px] text-white/50 mb-3">{VALEURS[0].num}</div>
                    <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.65rem)] font-extrabold tracking-[-0.02em] text-white leading-tight">{VALEURS[0].title}</h3>
                  </div>
                </div>
                <div className="bg-white border border-t-0 border-grid-line rounded-b-3xl px-7 py-6 flex-1">
                  <p className="text-[14px] leading-relaxed text-steel">{VALEURS[0].body}</p>
                </div>
              </div>
            </Reveal>

            {/* 02 — fond midnight */}
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-0 rounded-3xl overflow-hidden h-full">
                <div className="relative overflow-hidden bg-midnight px-7 py-7">
                  <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-terra/20 blur-2xl pointer-events-none" aria-hidden />
                  <div className="relative">
                    <div className="font-mono text-[10px] text-terra/70 mb-3">{VALEURS[1].num}</div>
                    <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.65rem)] font-extrabold tracking-[-0.02em] text-white leading-tight">{VALEURS[1].title}</h3>
                  </div>
                </div>
                <div className="bg-[#F7F5F2] border border-t-0 border-grid-line rounded-b-3xl px-7 py-6 flex-1">
                  <p className="text-[14px] leading-relaxed text-steel">{VALEURS[1].body}</p>
                </div>
              </div>
            </Reveal>

            {/* 03 — fond vert doux */}
            <Reveal delay={0.16}>
              <div className="flex flex-col gap-0 rounded-3xl overflow-hidden h-full">
                <div className="relative overflow-hidden bg-[#1A3A2A] px-7 py-7">
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" aria-hidden />
                  <div className="relative">
                    <div className="font-mono text-[10px] text-emerald-400/60 mb-3">{VALEURS[2].num}</div>
                    <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.65rem)] font-extrabold tracking-[-0.02em] text-white leading-tight">{VALEURS[2].title}</h3>
                  </div>
                </div>
                <div className="bg-white border border-t-0 border-grid-line rounded-b-3xl px-7 py-6 flex-1">
                  <p className="text-[14px] leading-relaxed text-steel">{VALEURS[2].body}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA terra */}
      <section className="bg-alabaster py-16 lg:py-24 border-t border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
              <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden>
                <svg className="w-full h-full"><filter id="cta-grain-equipe"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#cta-grain-equipe)" /></svg>
              </div>
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  20 minutes · Sans engagement
                </span>
                <h2 className="mt-6 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-white text-[clamp(2rem,5vw,3.75rem)]">
                  On travaille{" "}
                  <span className="font-emphasis font-normal">ensemble ?</span>
                </h2>
                <p className="mt-5 max-w-lg mx-auto text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-white/85">
                  Un appel gratuit de 20 minutes pour parler de votre projet, vos objectifs et voir si on est la bonne équipe pour vous.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-terra font-bold text-[15px] transition-transform hover:scale-[1.02]">
                    Réserver un appel gratuit
                    <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </a>
                  <a href="/realisations" className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-6 py-4 text-[15px] font-medium transition-colors">
                    Voir nos réalisations
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
