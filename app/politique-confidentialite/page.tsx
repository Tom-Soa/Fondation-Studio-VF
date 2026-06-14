import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Fondation Studio",
  description: "Politique de confidentialité et traitement des données personnelles de Fondation Studio.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-28 lg:pt-36 pb-24">
        <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-4">Légal</div>
        <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] text-midnight mb-12">
          Politique de confidentialité
        </h1>

        <div className="space-y-10 text-[15px] leading-relaxed text-steel">

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">1. Responsable du traitement</h2>
            <p>Fondation Studio (Tom-Soa Cyprien et Andylane Chatenay) est responsable du traitement des données collectées sur fondationstudio.fr. Contact : <a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a></p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">2. Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous fournissez volontairement :</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Via le formulaire de contact : prénom, nom, email, téléphone, secteur d'activité, budget, type de projet, message</li>
              <li>Via Calendly (prise de rendez-vous) : données gérées par Calendly Inc. selon leur propre politique</li>
              <li>Via Stripe (paiement) : données bancaires gérées par Stripe selon leur propre politique. Nous ne stockons aucune donnée de carte bancaire</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">3. Finalités du traitement</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Traitement et suivi de vos demandes</li>
              <li>Gestion des contrats et paiements</li>
              <li>Envoi d'informations relatives à vos projets</li>
              <li>Amélioration de nos services</li>
            </ul>
            <p className="mt-3">Base légale : exécution du contrat, intérêt légitime, consentement.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">4. Durée de conservation</h2>
            <p>Vos données sont conservées pendant 3 ans à compter du dernier contact, puis supprimées. Les données de paiement sont conservées conformément aux obligations légales (10 ans pour les documents comptables).</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">5. Partage des données</h2>
            <p>Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises à nos sous-traitants techniques (hébergement Vercel, email) dans le strict cadre de l'exécution de nos services, et uniquement dans la mesure nécessaire.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-3">Pour exercer vos droits : <a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a></p>
            <p className="mt-2">En cas de réclamation non résolue : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-terra underline underline-offset-2">cnil.fr</a></p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">7. Sécurité</h2>
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : connexion HTTPS, accès restreint, hébergement sur infrastructure sécurisée (Vercel).</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">8. Cookies</h2>
            <p>Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou analytique tiers n'est placé sans votre consentement. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.</p>
          </section>

          <p className="text-[13px] text-steel/60">Dernière mise à jour : juin 2026</p>
        </div>
      </div>
    </main>
  );
}
