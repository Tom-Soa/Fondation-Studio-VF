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
    editorTitle: string;
    editorIntro: string;
    editorName: string;
    editorNameValue: string;
    editorFounders: string;
    editorFoundersValue: string;
    editorEmail: string;
    editorPhone: string;
    editorStatus: string;
    editorStatusValue: string;
    editorVat: string;
    editorVatValue: string;
    hostingTitle: string;
    hostingIntro: string;
    hostingAddress: string;
    ipTitle: string;
    ipText: string;
    gdprTitle: string;
    gdprP1: string;
    gdprP2: string;
    gdprP3: string;
    gdprP4: string;
    cookiesTitle: string;
    cookiesP1: string;
    cookiesP2: string;
    linksTitle: string;
    linksText: string;
    updated: string;
  }
> = {
  fr: {
    metaTitle: "Mentions légales · ACTC",
    metaDescription:
      "Mentions légales, politique de confidentialité et politique de cookies de ACTC.",
    kicker: "Légal",
    h1: "Mentions légales",
    editorTitle: "Éditeur du site",
    editorIntro: "Le site fondationstudio.fr est édité par :",
    editorName: "Dénomination :",
    editorNameValue: "ACTC",
    editorFounders: "Fondateurs :",
    editorFoundersValue: "Tom-Soa Cyprien et Andylane Chatenay",
    editorEmail: "Email :",
    editorPhone: "Téléphone :",
    editorStatus: "Statut :",
    editorStatusValue: "Micro-entreprise",
    editorVat: "Régime TVA :",
    editorVatValue: "TVA non applicable, art. 293 B du CGI",
    hostingTitle: "Hébergement",
    hostingIntro: "Ce site est hébergé par :",
    hostingAddress: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    ipTitle: "Propriété intellectuelle",
    ipText:
      "L'ensemble des contenus présents sur ce site (textes, images, graphismes, code) est la propriété exclusive de ACTC, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.",
    gdprTitle: "Données personnelles (RGPD)",
    gdprP1:
      "ACTC collecte uniquement les données nécessaires au traitement de vos demandes (nom, email, téléphone, description du projet). Ces données ne sont jamais revendues ni transmises à des tiers sans votre consentement.",
    gdprP2:
      "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : ",
    gdprP3: "Durée de conservation : 3 ans à compter du dernier contact.",
    gdprP4: "Pour toute réclamation : ",
    cookiesTitle: "Cookies",
    cookiesP1:
      "Ce site utilise des cookies fonctionnels strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement explicite.",
    cookiesP2:
      "Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Certaines fonctionnalités du site pourraient alors être limitées.",
    linksTitle: "Liens externes",
    linksText:
      "Ce site peut contenir des liens vers des sites tiers (Stripe, WhatsApp, etc.). ACTC ne saurait être tenu responsable du contenu de ces sites ni de leurs pratiques en matière de confidentialité.",
    updated: "Dernière mise à jour : juin 2026",
  },
  en: {
    metaTitle: "Legal notice · ACTC",
    metaDescription: "Legal notice, privacy policy and cookie policy of ACTC.",
    kicker: "Legal",
    h1: "Legal notice",
    prevails:
      "This English translation is provided for convenience only. The French version prevails in the event of any discrepancy.",
    editorTitle: "Site publisher",
    editorIntro: "The website fondationstudio.fr is published by:",
    editorName: "Business name:",
    editorNameValue: "ACTC",
    editorFounders: "Founders:",
    editorFoundersValue: "Tom-Soa Cyprien and Andylane Chatenay",
    editorEmail: "Email:",
    editorPhone: "Phone:",
    editorStatus: "Legal status:",
    editorStatusValue: "French micro-entreprise",
    editorVat: "VAT status:",
    editorVatValue: "VAT not applicable, art. 293 B of the French General Tax Code",
    hostingTitle: "Hosting",
    hostingIntro: "This website is hosted by:",
    hostingAddress: "440 N Barranca Ave #4133, Covina, CA 91723, United States",
    ipTitle: "Intellectual property",
    ipText:
      "All content on this website (text, images, graphics, code) is the exclusive property of ACTC, unless stated otherwise. Any reproduction, distribution or use without prior written authorization is prohibited.",
    gdprTitle: "Personal data (GDPR)",
    gdprP1:
      "ACTC only collects the data required to process your requests (name, email, phone, project description). This data is never sold or shared with third parties without your consent.",
    gdprP2:
      "In accordance with the GDPR and the French Data Protection Act, you have the right to access, rectify and delete your data. To exercise this right: ",
    gdprP3: "Retention period: 3 years from the last contact.",
    gdprP4: "For any complaint: ",
    cookiesTitle: "Cookies",
    cookiesP1:
      "This website uses functional cookies that are strictly necessary for its operation. No advertising or third-party tracking cookies are used without your explicit consent.",
    cookiesP2:
      "You can disable cookies in your browser settings. Some features of the website may then be limited.",
    linksTitle: "External links",
    linksText:
      "This website may contain links to third-party websites (Stripe, WhatsApp, etc.). ACTC cannot be held responsible for the content of these websites or their privacy practices.",
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

export default async function MentionsLegalesPage({
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

        <div className="space-y-12 text-[15px] leading-relaxed text-steel">
          {t.prevails && <p className="italic text-steel/80">{t.prevails}</p>}

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">{t.editorTitle}</h2>
            <p>{t.editorIntro}</p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-midnight">{t.editorName}</strong> {t.editorNameValue}</li>
              <li><strong className="text-midnight">{t.editorFounders}</strong> {t.editorFoundersValue}</li>
              <li><strong className="text-midnight">{t.editorEmail}</strong> fondationstudio.fr@gmail.com</li>
              <li><strong className="text-midnight">{t.editorPhone}</strong> +33 6 72 75 84 78</li>
              <li><strong className="text-midnight">{t.editorStatus}</strong> {t.editorStatusValue}</li>
              <li><strong className="text-midnight">{t.editorVat}</strong> {t.editorVatValue}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">{t.hostingTitle}</h2>
            <p>{t.hostingIntro}</p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-midnight">Vercel Inc.</strong></li>
              <li>{t.hostingAddress}</li>
              <li>vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">{t.ipTitle}</h2>
            <p>{t.ipText}</p>
          </section>

          <section id="rgpd">
            <h2 className="font-display text-xl font-bold text-midnight mb-4">{t.gdprTitle}</h2>
            <p>{t.gdprP1}</p>
            <p className="mt-3">{t.gdprP2}<a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a></p>
            <p className="mt-3">{t.gdprP3}</p>
            <p className="mt-3">{t.gdprP4}<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-terra underline underline-offset-2">cnil.fr</a></p>
          </section>

          <section id="politique-cookies">
            <h2 className="font-display text-xl font-bold text-midnight mb-4">{t.cookiesTitle}</h2>
            <p>{t.cookiesP1}</p>
            <p className="mt-3">{t.cookiesP2}</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">{t.linksTitle}</h2>
            <p>{t.linksText}</p>
          </section>

          <p className="text-[13px] text-steel/60">{t.updated}</p>
        </div>
      </div>
    </main>
  );
}
