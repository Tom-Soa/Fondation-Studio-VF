import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Création de boutique e-commerce Shopify · Fondation Studio",
  description:
    "On crée votre boutique Shopify sur-mesure et on s'occupe de tout l'écosystème : publicité Meta & Google, newsletter, SEO, relances email. À partir de 2 900 €, sur devis.",
};

const SHOPIFY_ATOUTS = [
  {
    icon: "ph:chart-line-up-duotone",
    title: "Plus de ventes",
    body: "Fiches produits optimisées, tunnel d'achat fluide, paiement rapide. Tout est pensé pour que le visiteur achète.",
  },
  {
    icon: "ph:plug-duotone",
    title: "Un écosystème complet",
    body: "Pub, emails, SEO, newsletter, relances automatiques : tout se connecte à Shopify pour faire tourner votre boutique.",
  },
  {
    icon: "ph:sliders-duotone",
    title: "Simple à gérer",
    body: "Ajoutez vos produits, gérez vos commandes, lancez une promo. Sans technicien, depuis votre téléphone.",
  },
  {
    icon: "ph:lock-duotone",
    title: "Fiable et sécurisé",
    body: "Des millions de boutiques dans le monde tournent sur Shopify. La technique est maintenue par Shopify lui-même.",
  },
];

const ECOSYSTEME = [
  {
    icon: "ph:megaphone-duotone",
    title: "Publicité Meta & Google",
    body: "On crée vos visuels et on les diffuse aux bonnes personnes. Chaque euro investi est tracé et optimisé.",
  },
  {
    icon: "ph:envelope-duotone",
    title: "Newsletter & emails auto",
    body: "Mail de bienvenue, promo flash, relance client. Des ventes générées automatiquement, sans effort.",
  },
  {
    icon: "ph:arrow-counter-clockwise-duotone",
    title: "Relance panier abandonné",
    body: "70 % des acheteurs partent sans payer. On les relance automatiquement pour récupérer ces ventes.",
  },
  {
    icon: "ph:magnifying-glass-duotone",
    title: "Référencement naturel",
    body: "Du trafic gratuit et constant depuis Google, sans dépendre de la pub.",
  },
  {
    icon: "ph:users-duotone",
    title: "Trafic & acquisition",
    body: "Réseaux sociaux, influence, contenu. On met en place les canaux qui amènent vos futurs clients.",
  },
  {
    icon: "ph:chart-line-up-duotone",
    title: "Suivi mensuel",
    body: "Chaque mois : nouveaux visuels, nouvelles campagnes, rapport de résultats. On améliore en continu.",
  },
];

const PUB_STEPS = [
  { num: "01", label: "On comprend votre produit et votre client idéal" },
  { num: "02", label: "On crée les visuels : photos, vidéos, carrousels" },
  { num: "03", label: "On lance sur Meta (Instagram/Facebook) et/ou Google" },
  { num: "04", label: "On mesure : ventes, coût par achat, produits qui marchent" },
  { num: "05", label: "On optimise chaque mois et on amplifie ce qui fonctionne" },
];

export default function SitesMarchandsPage() {
  return (
    <main>
      {/* Hero + tarif intégré */}
      <section className="relative isolate overflow-hidden bg-alabaster pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[60vh]"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.10) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-grid-line bg-white px-4 py-1.5 shadow-card-light mb-6">
            <Icon icon="fa6-brands:shopify" width={15} height={15} className="text-[#5E8E3E]" aria-hidden />
            <span className="text-[12px] font-semibold text-midnight/70">E-commerce Shopify · À partir de 2 900 €</span>
          </div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02] text-midnight">
            Une boutique en ligne{" "}
            <span className="font-emphasis font-normal text-terra">qui vend vraiment.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">
            On crée votre boutique Shopify et on s'occupe de tout pour la faire tourner : pub, emails, SEO, trafic. Un projet complet, pas juste un site.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra">
              Obtenir un devis gratuit
              <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href="/realisations" className="inline-flex items-center gap-2 rounded-full border border-midnight/15 hover:border-midnight/40 px-6 py-4 text-midnight font-medium text-[15px] transition-colors">
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>

      {/* Tarif */}
      <section className="bg-white py-14 border-b border-grid-line">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-terra px-8 py-10 lg:px-12 lg:py-12">
            <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay pointer-events-none" aria-hidden>
              <svg className="w-full h-full"><filter id="cta-grain-tarif"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#cta-grain-tarif)" /></svg>
            </div>
            <div className="absolute -top-20 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden />
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="text-center lg:text-left lg:flex-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Tarif
                </span>
                <div className="font-display font-extrabold text-[clamp(2.5rem,6vw,4rem)] tracking-[-0.04em] text-white leading-none mb-3">
                  Sur devis
                </div>
                <p className="text-[14.5px] text-white/80 leading-relaxed max-w-sm">
                  À partir de <strong className="text-white">2 900 €</strong>. Selon la taille du catalogue et les fonctionnalités, certains projets montent à plusieurs dizaines de milliers d'euros.
                </p>
              </div>
              <a href="/contact" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-terra font-bold text-[15px] transition-transform hover:scale-[1.02] whitespace-nowrap">
                Obtenir un devis gratuit
                <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Shopify */}
      <section className="bg-alabaster py-16 lg:py-20 border-b border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Icon icon="fa6-brands:shopify" width={18} height={18} className="text-[#5E8E3E]" aria-hidden />
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium">Pourquoi Shopify ?</div>
            </div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.4rem)] text-midnight max-w-xl mx-auto">
              La plateforme qui crée tout un écosystème autour de vos ventes.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SHOPIFY_ATOUTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-grid-line bg-white p-6">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-terra/10 text-terra">
                    <Icon icon={item.icon} width={22} height={22} aria-hidden />
                  </div>
                  <h3 className="font-display text-[15px] font-semibold text-midnight mb-2">{item.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* La publicité */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">La publicité</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.5rem)] text-midnight max-w-2xl mx-auto">
              Sans pub, votre boutique est invisible.
            </h2>
            <p className="mt-4 text-[15px] text-steel max-w-lg mx-auto">
              C'est comme ouvrir un magasin dans une rue déserte. La pub amène des clients devant votre vitrine, tous les jours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Pourquoi */}
            <Reveal>
              <div className="rounded-3xl border border-grid-line bg-alabaster p-7 h-full">
                <h3 className="font-display text-[16px] font-semibold text-midnight mb-5">Ce que ça change</h3>
                <ul className="space-y-4">
                  {[
                    { icon: "ph:target-duotone", text: "On cible vos futurs clients : âge, intérêts, localisation, comportement d'achat" },
                    { icon: "ph:currency-eur-duotone", text: "Vous choisissez le budget. On peut démarrer à 300 €/mois et scaler selon les résultats" },
                    { icon: "ph:chart-bar-duotone", text: "Chaque vente est tracée. Vous savez exactement ce que rapporte chaque euro investi" },
                    { icon: "ph:arrows-clockwise-duotone", text: "Chaque mois : nouveaux visuels, nouvelles campagnes, rapport de résultats" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-terra/10 text-terra">
                        <Icon icon={item.icon} width={16} height={16} aria-hidden />
                      </div>
                      <span className="text-[14px] text-steel leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Comment on travaille */}
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-terra/20 bg-white p-7 h-full">
                <h3 className="font-display text-[16px] font-semibold text-midnight mb-5">Comment on travaille</h3>
                <ol className="space-y-4">
                  {PUB_STEPS.map((step) => (
                    <li key={step.num} className="flex items-start gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terra text-white text-[11px] font-bold mt-0.5">
                        {parseInt(step.num)}
                      </span>
                      <span className="text-[14px] text-midnight leading-snug">{step.label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Écosystème */}
      <section className="bg-white py-20 lg:py-28 border-t border-grid-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">On s'occupe de tout</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.5rem)] text-midnight max-w-xl mx-auto">
              L'écosystème complet autour de votre boutique.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEME.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-grid-line bg-alabaster p-6">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-terra/10 text-terra">
                    <Icon icon={e.icon} width={22} height={22} aria-hidden />
                  </div>
                  <h3 className="font-display text-[15px] font-semibold text-midnight mb-1.5">{e.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-steel">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
              {/* grain */}
              <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden>
                <svg className="w-full h-full">
                  <filter id="cta-grain-shop">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#cta-grain-shop)" />
                </svg>
              </div>
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" aria-hidden />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Gestion mensuelle disponible
                </span>
                <h2 className="mt-6 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-white text-[clamp(2rem,5vw,3.75rem)]">
                  On peut tout gérer{" "}
                  <span className="font-emphasis font-normal">pour vous.</span>
                </h2>
                <p className="mt-5 max-w-lg mx-auto text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-white/85">
                  Visuels, campagnes pub, newsletter, SEO. Vous vous occupez de vos produits. On s'occupe du reste, mois après mois.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-terra font-bold text-[15px] transition-transform hover:scale-[1.02]">
                    Parler de mon projet
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
