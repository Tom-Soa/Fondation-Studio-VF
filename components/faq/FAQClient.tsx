"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_CATEGORIES = [
  {
    id: "general",
    label: "Général",
    questions: [
      { q: "Qu'est-ce que Fondation Studio ?", a: "Fondation Studio est une agence web premium fondée par Tom-Soa Cyprien et Andylane Chatenay. On crée des sites vitrines et e-commerce sur-mesure pour PME ambitieuses. Notre équipe réunit les deux fondateurs et un réseau de freelances diplômés sélectionnés selon les projets." },
      { q: "Où êtes-vous basés ?", a: "On est basés en France et on travaille avec des clients partout dans le monde, entièrement à distance. Paris, Lyon, Bordeaux, La Réunion, les États-Unis, le Canada : notre organisation 100 % digitale nous rend aussi efficaces peu importe la localisation." },
      { q: "Travaillez-vous avec des clients à l'étranger ?", a: "Oui, sans aucun problème. La totalité de notre process est en ligne : appels vidéo, maquettes partagées, livraison digitale. On a travaillé avec des clients en France métropolitaine, dans les DOM-TOM et à l'international." },
      { q: "Comment se passe le premier contact ?", a: "Tout commence par un appel gratuit de 20 minutes. On discute de votre activité, vos objectifs et vos besoins. Aucun engagement, aucun devis surprise. Vous repartez avec une vision claire de ce qu'on peut faire pour vous." },
      { q: "Faites-vous des devis gratuits ?", a: "Oui. L'appel de découverte est gratuit, et on crée votre maquette de page d'accueil avant tout engagement financier. Vous voyez le résultat avant de signer quoi que ce soit." },
      { q: "Avec qui est-ce que je travaille directement ?", a: "Avec Tom-Soa et Andylane, les deux fondateurs. Pas d'intermédiaire, pas de chef de projet externe. Ce sont les mêmes personnes qui répondent à vos messages et qui pilotent votre projet de A à Z." },
      { q: "Combien de projets avez-vous réalisés ?", a: "Plus de 25 projets livrés : boulangerie, immobilier, cabinet comptable, club sportif, formation professionnelle, construction, e-commerce audio, institutions publiques, cession d'entreprise, et d'autres." },
    ],
  },
  {
    id: "tarifs",
    label: "Tarifs et paiement",
    questions: [
      { q: "Quels sont vos tarifs ?", a: "Nos forfaits démarrent à 1 400 € (Standard, jusqu'à 5 pages), 1 900 € (Conversion, jusqu'à 8 pages avec copywriting), et 2 400 € et plus (Prestige, sur devis). Les boutiques e-commerce Shopify démarrent à 3 000 €." },
      { q: "Comment se passe le paiement ?", a: "Un acompte de 60 % est demandé à la commande pour démarrer le projet. Le solde de 40 % est réglé à la livraison, une fois que vous avez validé votre site." },
      { q: "Peut-on payer en plusieurs fois ?", a: "Oui, le paiement en plusieurs fois est possible. On en discute lors de l'appel de découverte selon votre situation." },
      { q: "Les prix incluent-ils la TVA ?", a: "Nos tarifs sont hors taxes. La TVA n'est pas applicable (article 293 B du CGI). Vous ne payez pas de TVA sur nos prestations." },
      { q: "Y a-t-il des frais cachés ou des abonnements ?", a: "Non. L'hébergement est gratuit et illimité. Pas d'abonnement mensuel obligatoire, pas de frais de licence, pas de coûts cachés. Le seul coût optionnel est la maintenance mensuelle à 150 €/mois si vous souhaitez des modifications régulières." },
      { q: "Que comprend la maintenance mensuelle ?", a: "À 150 €/mois : modifications de textes, ajout de photos, changements de pages, petites évolutions. Chaque forfait inclut déjà 1 mois offert (6 mois pour le Prestige)." },
      { q: "Quelles options peut-on ajouter ?", a: "Maintenance mensuelle (150 €/mois), publicité Google (300 €), séquences de mails (300 €), refonte branding (500 €), blog (300 €), logo (150 €). Aucune dépendance entre les options." },
      { q: "Peut-on payer directement en ligne pour démarrer rapidement ?", a: "Oui. Une fois votre devis validé, vous pouvez régler l'acompte de 60 % directement en ligne via un lien de paiement sécurisé. Votre dossier est pris en charge sous 24 h et le projet démarre immédiatement." },
    ],
  },
  {
    id: "process",
    label: "Process et délais",
    questions: [
      { q: "Combien de temps faut-il pour livrer un site ?", a: "14 à 21 jours à partir du démarrage. Ce délai inclut la maquette, les retours, le développement et la mise en ligne. On respecte nos délais sur 100 % de nos projets." },
      { q: "Comment se déroule un projet de A à Z ?", a: "1. Appel de découverte gratuit. 2. Maquette de la page d'accueil offerte. 3. Validation et acompte. 4. Développement complet. 5. Retours et corrections. 6. Mise en ligne. 7. Livraison et solde." },
      { q: "Combien de retours peut-on faire ?", a: "Deux tours de retours sur la maquette avant développement, et un tour après. C'est largement suffisant pour arriver exactement au résultat souhaité." },
      { q: "Faut-il préparer quelque chose avant de démarrer ?", a: "Idéalement : vos textes (ou on les écrit), vos photos, votre logo, et une idée des sites que vous aimez. Si vous n'avez rien de tout ça, on s'occupe de tout." },
      { q: "Est-ce que vous écrivez les textes ?", a: "Oui. Le copywriting stratégique est inclus dans les offres Conversion et Prestige. Pour le Standard, c'est une option à 300 €. Nos textes sont orientés conversion : ils parlent à vos clients et les poussent à agir." },
      { q: "Travaillez-vous en dehors des heures de bureau ?", a: "Oui. Notre organisation flexible nous permet de répondre rapidement même en dehors des horaires classiques. On s'adapte à votre planning." },
    ],
  },
  {
    id: "design",
    label: "Design et contenu",
    questions: [
      { q: "Les designs sont-ils vraiment sur-mesure ?", a: "Oui, entièrement. Aucun template, aucun constructeur de page. Chaque site est conçu de zéro selon votre identité et vos objectifs. Deux projets Fondation Studio ne se ressemblent jamais." },
      { q: "Peut-on voir des exemples de votre travail ?", a: "Oui, consultez notre page Réalisations. Vous y trouverez des projets récents avec leurs résultats concrets." },
      { q: "Pouvez-vous créer mon logo et mon identité visuelle ?", a: "Oui. Refonte branding à 500 € (logo, couleurs, typographie, déclinaisons). Logo seul à 150 €." },
      { q: "Est-ce que je peux fournir mes propres photos ?", a: "Absolument. On intègre vos photos professionnelles. Si vous n'en avez pas, on utilise des banques d'images premium cohérentes avec votre identité." },
      { q: "Le site sera-t-il adapté aux mobiles ?", a: "Oui, à 100 %. Tous nos sites sont responsive et testés sur plusieurs appareils avant livraison." },
      { q: "Dans quelle langue peut-on faire le site ?", a: "Français par défaut. On peut créer des sites bilingues (français/anglais) ou multilingues sur demande." },
    ],
  },
  {
    id: "technique",
    label: "Technique, SEO et hébergement",
    questions: [
      { q: "Avec quelles technologies construisez-vous les sites ?", a: "Next.js (React) pour les sites vitrines, Shopify pour l'e-commerce. Hébergement sur infrastructures cloud de premier plan. Aucun WordPress, aucun Wix, aucun page builder. Du code propre et sur-mesure." },
      { q: "L'hébergement est vraiment gratuit ?", a: "Oui, l'hébergement est inclus et gratuit pour toujours. Pas d'abonnement, pas de frais annuels. Votre site reste en ligne sans coût supplémentaire." },
      { q: "Est-ce que le site sera rapide ?", a: "Oui. Nos sites atteignent régulièrement 95-100/100 sur Google PageSpeed. La rapidité améliore directement votre référencement et réduit le taux de rebond." },
      { q: "Le SEO est-il inclus ?", a: "Oui. SEO technique intégré dès le développement : titres, balises méta, données structurées, sitemap, Core Web Vitals, optimisation des images. Le SEO éditorial (textes optimisés pour mots-clés) est inclus en Conversion et Prestige." },
      { q: "Mon site sera-t-il sécurisé ?", a: "Oui. HTTPS, sans WordPress (pas de vulnérabilités de plugins), mises à jour de sécurité automatiques." },
      { q: "Est-ce que je serai propriétaire de mon site ?", a: "Oui, à 100 %. Le code source vous appartient intégralement à la livraison. Aucun verrou, aucune dépendance. Vous êtes libre de faire ce que vous voulez de votre site." },
      { q: "Puis-je utiliser mon propre nom de domaine ?", a: "Oui. On configure votre domaine existant ou on vous aide à en acheter un. Le nom de domaine (env. 10-15 €/an) est à votre charge." },
      { q: "Le site apparaîtra-t-il sur Google ?", a: "Oui. On soumet votre site à Google Search Console à la livraison. Les premiers résultats sur Google apparaissent généralement dans les 2 à 8 semaines." },
    ],
  },
  {
    id: "apres",
    label: "Après la livraison",
    questions: [
      { q: "Que se passe-t-il après la mise en ligne ?", a: "Vous bénéficiez d'une maintenance offerte (1 mois en Standard/Conversion, 6 mois en Prestige). Passé ce délai, maintenance mensuelle à 150 € ou autonomie totale, c'est vous qui choisissez." },
      { q: "Peut-on ajouter des pages après la livraison ?", a: "Oui. Toute modification après la période offerte est facturée au cas par cas ou incluse dans l'abonnement mensuel." },
      { q: "Assurez-vous le support technique ?", a: "Oui. En cas de bug sur ce qu'on a développé, on intervient rapidement. Toujours." },
      { q: "Que se passe-t-il si vous cessez votre activité ?", a: "Comme vous êtes propriétaire à 100 % du code, vous pouvez continuer à l'utiliser et le faire évoluer avec n'importe quel autre développeur. Aucune dépendance à notre existence." },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    questions: [
      { q: "Faites-vous des boutiques en ligne ?", a: "Oui. On crée des boutiques Shopify complètes : catalogue, panier, paiement sécurisé, gestion des commandes. Tarif à partir de 3 000 €, sur devis selon votre catalogue." },
      { q: "Pourquoi Shopify ?", a: "C'est la référence mondiale de l'e-commerce : fiable, sécurisé, facile à gérer au quotidien. Vous ajoutez des produits, gérez vos stocks et vos commandes sans aucune compétence technique." },
      { q: "Peut-on vendre à l'international ?", a: "Oui. On configure devises, langues, taxes et modes de livraison pour chaque marché. Boutique multilingue et multi-devises tout à fait réalisable." },
      { q: "Quels modes de paiement peut-on intégrer ?", a: "Tous les grands moyens de paiement via Shopify Payments : CB, Apple Pay, Google Pay, PayPal, et plus. Paiement sécurisé par défaut." },
      { q: "La publicité est-elle obligatoire avec une boutique e-commerce ?", a: "Pas obligatoire, mais quasi indispensable pour démarrer. Sans trafic, pas de ventes. On peut s'occuper de toute la stratégie pub Meta et Google, créer vos visuels et gérer vos campagnes mensuellement." },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-grid-line last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-midnight leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-terra/10 text-terra"
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] leading-relaxed text-steel">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQClient() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [search, setSearch] = useState("");

  const totalQuestions = FAQ_CATEGORIES.reduce((sum, c) => sum + c.questions.length, 0);

  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    const results: { category: string; question: string; answer: string }[] = [];
    for (const cat of FAQ_CATEGORIES) {
      for (const item of cat.questions) {
        if (item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) {
          results.push({ category: cat.label, question: item.q, answer: item.a });
        }
      }
    }
    return results;
  }, [search]);

  const currentCategory = FAQ_CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-28 lg:pt-36 pb-24">

        {/* En-tête */}
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">
            FAQ · {totalQuestions} questions répondues
          </div>
          <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.04] text-midnight">
            Toutes vos{" "}
            <span className="font-emphasis font-normal text-terra">questions.</span>
          </h1>
        </div>

        {/* Barre de recherche */}
        <div className="relative mb-10">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-steel/60">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une question... (tarifs, délais, SEO, Shopify...)"
            className="w-full rounded-2xl border border-grid-line bg-white pl-11 pr-4 py-3.5 text-[15px] text-midnight placeholder:text-midnight/35 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/20 transition-colors shadow-card-light"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-4 flex items-center text-steel/60 hover:text-midnight"
              aria-label="Effacer la recherche"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Résultats de recherche */}
        {searchResults !== null ? (
          <div className="rounded-3xl border border-grid-line bg-white p-6 md:p-10 shadow-card-light">
            {searchResults.length === 0 ? (
              <p className="text-[15px] text-steel text-center py-8">
                Aucune question trouvée pour "<strong>{search}</strong>". Essayez un autre mot, ou{" "}
                <a href="/contact" className="text-terra underline underline-offset-2">contactez-nous</a>.
              </p>
            ) : (
              <>
                <p className="text-[13px] text-steel mb-6">{searchResults.length} résultat{searchResults.length > 1 ? "s" : ""} pour "<strong>{search}</strong>"</p>
                {searchResults.map((item) => (
                  <div key={item.question}>
                    <p className="text-[11px] uppercase tracking-wider text-terra/70 mb-1">{item.category}</p>
                    <AccordionItem question={item.question} answer={item.answer} />
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          <>
            {/* Filtres catégories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-terra text-white shadow-[0_4px_14px_rgba(194,65,12,0.35)]"
                      : "bg-white border border-grid-line text-steel hover:text-midnight hover:border-terra/40"
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-[11px] ${activeCategory === cat.id ? "text-white/70" : "text-steel/50"}`}>
                    {cat.questions.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Questions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-grid-line bg-white p-6 md:p-10 shadow-card-light"
              >
                <h2 className="font-display text-lg font-bold text-midnight mb-6">{currentCategory.label}</h2>
                {currentCategory.questions.map((item) => (
                  <AccordionItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-3xl border border-terra/20 bg-white p-8 text-center shadow-card-light">
          <h3 className="font-display text-lg font-bold text-midnight mb-2">Votre question n'est pas là ?</h3>
          <p className="text-[14px] text-steel mb-5">On répond directement, rapidement.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover text-white px-6 py-3.5 text-[14.5px] font-semibold transition-colors glow-terra">
              Nous contacter
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="tel:+33637999738" className="inline-flex items-center gap-2 rounded-full border border-grid-line bg-white hover:border-terra/40 text-midnight px-6 py-3.5 text-[14.5px] font-medium transition-colors">
              +33 6 37 99 97 38
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
