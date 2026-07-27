import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { hasLocale } from "@/lib/i18n";

const T: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    h1: string;
    prevails?: string;
    s1Title: string;
    s1TextBefore: string;
    s1Contact: string;
    s2Title: string;
    s2Intro: string;
    s2List: string[];
    s3Title: string;
    s3List: string[];
    s3Legal: string;
    s4Title: string;
    s4Text: string;
    s5Title: string;
    s5Text: string;
    s6Title: string;
    s6Intro: string;
    s6List: string[];
    s6Exercise: string;
    s6Complaint: string;
    s7Title: string;
    s7Text: string;
    s8Title: string;
    s8Text: string;
    updated: string;
  }
> = {
  fr: {
    metaTitle: "Politique de confidentialité · ACTC",
    metaDescription:
      "Politique de confidentialité et traitement des données personnelles de ACTC.",
    kicker: "Légal",
    h1: "Politique de confidentialité",
    s1Title: "1. Responsable du traitement",
    s1TextBefore:
      "ACTC (Tom-Soa Cyprien et Andylane Chatenay) est responsable du traitement des données collectées sur fondationstudio.fr. Contact : ",
    s1Contact: "fondationstudio.fr@gmail.com",
    s2Title: "2. Données collectées",
    s2Intro: "Nous collectons uniquement les données que vous nous fournissez volontairement :",
    s2List: [
      "Via le formulaire de contact : prénom, nom, email, téléphone, secteur d'activité, budget, type de projet, message",
      "Via Stripe (paiement) : données bancaires gérées par Stripe selon leur propre politique. Nous ne stockons aucune donnée de carte bancaire",
    ],
    s3Title: "3. Finalités du traitement",
    s3List: [
      "Traitement et suivi de vos demandes",
      "Gestion des contrats et paiements",
      "Envoi d'informations relatives à vos projets",
      "Amélioration de nos services",
    ],
    s3Legal: "Base légale : exécution du contrat, intérêt légitime, consentement.",
    s4Title: "4. Durée de conservation",
    s4Text:
      "Vos données sont conservées pendant 3 ans à compter du dernier contact, puis supprimées. Les données de paiement sont conservées conformément aux obligations légales (10 ans pour les documents comptables).",
    s5Title: "5. Partage des données",
    s5Text:
      "Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises à nos sous-traitants techniques (hébergement Vercel, email) dans le strict cadre de l'exécution de nos services, et uniquement dans la mesure nécessaire.",
    s6Title: "6. Vos droits",
    s6Intro: "Conformément au RGPD, vous disposez des droits suivants :",
    s6List: [
      "Droit d'accès à vos données",
      "Droit de rectification",
      'Droit à l\'effacement ("droit à l\'oubli")',
      "Droit à la limitation du traitement",
      "Droit à la portabilité",
      "Droit d'opposition",
    ],
    s6Exercise: "Pour exercer vos droits : ",
    s6Complaint: "En cas de réclamation non résolue : ",
    s7Title: "7. Sécurité",
    s7Text:
      "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : connexion HTTPS, accès restreint, hébergement sur infrastructure sécurisée (Vercel).",
    s8Title: "8. Cookies",
    s8Text:
      "Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou analytique tiers n'est placé sans votre consentement. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.",
    updated: "Dernière mise à jour : juin 2026",
  },
  en: {
    metaTitle: "Privacy policy · ACTC",
    metaDescription: "Privacy policy and personal data processing of ACTC.",
    kicker: "Legal",
    h1: "Privacy policy",
    prevails:
      "This English translation is provided for convenience only. The French version prevails in the event of any discrepancy.",
    s1Title: "1. Data controller",
    s1TextBefore:
      "ACTC (Tom-Soa Cyprien and Andylane Chatenay) is the controller of the data collected on fondationstudio.fr. Contact: ",
    s1Contact: "fondationstudio.fr@gmail.com",
    s2Title: "2. Data collected",
    s2Intro: "We only collect the data you provide to us voluntarily:",
    s2List: [
      "Through the contact form: first name, last name, email, phone, industry, budget, project type, message",
      "Through Stripe (payment): banking data handled by Stripe under its own policy. We do not store any card details",
    ],
    s3Title: "3. Purposes of processing",
    s3List: [
      "Processing and following up on your requests",
      "Managing contracts and payments",
      "Sending information related to your projects",
      "Improving our services",
    ],
    s3Legal: "Legal basis: performance of the contract, legitimate interest, consent.",
    s4Title: "4. Retention period",
    s4Text:
      "Your data is kept for 3 years from the last contact, then deleted. Payment data is kept in accordance with legal obligations (10 years for accounting records).",
    s5Title: "5. Data sharing",
    s5Text:
      "Your data is never sold or transferred to third parties for commercial purposes. It may be shared with our technical service providers (Vercel hosting, email) strictly for the performance of our services, and only to the extent necessary.",
    s6Title: "6. Your rights",
    s6Intro: "In accordance with the GDPR, you have the following rights:",
    s6List: [
      "Right of access to your data",
      "Right to rectification",
      'Right to erasure ("right to be forgotten")',
      "Right to restriction of processing",
      "Right to data portability",
      "Right to object",
    ],
    s6Exercise: "To exercise your rights: ",
    s6Complaint: "If your complaint remains unresolved: ",
    s7Title: "7. Security",
    s7Text:
      "We implement technical and organizational measures to protect your data: HTTPS connection, restricted access, hosting on secure infrastructure (Vercel).",
    s8Title: "8. Cookies",
    s8Text:
      "This website uses cookies that are strictly necessary for its operation. No advertising or third-party analytics cookies are placed without your consent. You can manage your cookie preferences in your browser settings.",
    updated: "Last updated: June 2026",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  return {
    title: T[locale].metaTitle,
    description: T[locale].metaDescription,
    robots: { index: false },
  };
}

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];

  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-28 lg:pt-36 pb-24">
        <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-4">{t.kicker}</div>
        <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] text-midnight mb-12">
          {t.h1}
        </h1>

        <div className="space-y-10 text-[15px] leading-relaxed text-steel">
          {t.prevails && <p className="italic text-steel/80">{t.prevails}</p>}

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s1Title}</h2>
            <p>{t.s1TextBefore}<a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">{t.s1Contact}</a></p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s2Title}</h2>
            <p>{t.s2Intro}</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              {t.s2List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s3Title}</h2>
            <ul className="space-y-1 list-disc list-inside">
              {t.s3List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">{t.s3Legal}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s4Title}</h2>
            <p>{t.s4Text}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s5Title}</h2>
            <p>{t.s5Text}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s6Title}</h2>
            <p>{t.s6Intro}</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              {t.s6List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">{t.s6Exercise}<a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a></p>
            <p className="mt-2">{t.s6Complaint}<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-terra underline underline-offset-2">cnil.fr</a></p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s7Title}</h2>
            <p>{t.s7Text}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.s8Title}</h2>
            <p>{t.s8Text}</p>
          </section>

          <p className="text-[13px] text-steel/60">{t.updated}</p>
        </div>
      </div>
    </main>
  );
}
