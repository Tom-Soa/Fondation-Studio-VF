import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { hasLocale } from "@/lib/i18n";

type Section = { title: string; paragraphs: string[]; list?: string[] };

const T: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    h1: string;
    prevails?: string;
    sections: Section[];
    contactTitle: string;
    contactText: string;
    version: string;
  }
> = {
  fr: {
    metaTitle: "Conditions Générales de Vente · ACTC",
    metaDescription:
      "Conditions générales de vente des prestations de création de sites web et services digitaux de ACTC.",
    kicker: "Légal",
    h1: "Conditions Générales de Vente",
    sections: [
      {
        title: "1. Objet",
        paragraphs: [
          "Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre ACTC (Tom-Soa Cyprien et Andylane Chatenay, micro-entreprise) et tout client ayant commandé une prestation de création de site web, boutique e-commerce, design, copywriting ou service digital connexe.",
        ],
      },
      {
        title: "2. Prestations proposées",
        paragraphs: ["ACTC propose notamment :"],
        list: [
          "Création de sites vitrines (forfaits Standard, Conversion, Premium)",
          "Création de boutiques e-commerce Shopify",
          "Création de logo et identité visuelle",
          "Copywriting et rédaction web",
          "Gestion de campagnes publicitaires Meta & Google",
          "Maintenance mensuelle",
          "Tout autre service digital défini dans le devis",
        ],
      },
      {
        title: "3. Formation du contrat",
        paragraphs: [
          "Tout projet démarre après acceptation du devis par le client (signature électronique ou confirmation écrite par email) et réception de l'acompte. Le devis est valable 30 jours à compter de sa date d'émission.",
        ],
      },
      {
        title: "4. Tarifs et paiement",
        paragraphs: [
          "**Tarifs :** Tous les tarifs sont exprimés en euros hors taxes. La TVA n'est pas applicable (art. 293 B du CGI).",
          "**Modalités :** Un acompte de 60 % est exigible à la commande. Le solde de 40 % est dû à la livraison, avant transfert définitif des fichiers et mise en ligne.",
          "**Retard de paiement :** Tout retard de paiement entraîne de plein droit l'application d'une pénalité de 10 % du montant dû, ainsi que l'arrêt des travaux jusqu'à régularisation.",
          "**Paiement en ligne :** Les paiements effectués via les liens Stripe sont sécurisés. ACTC ne conserve aucune donnée bancaire.",
        ],
      },
      {
        title: "5. Délais de livraison",
        paragraphs: [
          "Les délais indicatifs sont précisés dans le devis (généralement 14 à 21 jours ouvrés). Ces délais courent à compter de la réception de l'acompte et de la fourniture par le client de tous les éléments nécessaires (contenus, photos, accès). ACTC ne peut être tenu responsable des retards causés par le client.",
        ],
      },
      {
        title: "6. Retours et corrections",
        paragraphs: [
          "Le client dispose de deux tours de retours sur la maquette et d'un tour sur le site développé, tels que définis dans le devis. Toute demande de modification substantielle en dehors de ces tours fera l'objet d'un devis complémentaire.",
        ],
      },
      {
        title: "7. Propriété intellectuelle et transfert",
        paragraphs: [
          "Les droits sur les créations (design, code, textes) sont intégralement cédés au client à la réception du paiement final. Avant ce paiement, ACTC conserve l'intégralité des droits. ACTC se réserve le droit de présenter les projets réalisés dans son portfolio, sauf refus express du client.",
        ],
      },
      {
        title: "8. Obligations du client",
        paragraphs: ["Le client s'engage à :"],
        list: [
          "Fournir les éléments nécessaires dans les délais convenus",
          "Valider ou refuser les livrables dans un délai de 7 jours ouvrés",
          "S'assurer que les contenus fournis ne violent aucun droit de tiers",
        ],
      },
      {
        title: "9. Résiliation",
        paragraphs: [
          "En cas de résiliation à l'initiative du client après démarrage, l'acompte de 60 % est acquis à ACTC au titre des travaux réalisés. Si la résiliation intervient après livraison du site, le solde reste dû intégralement.",
          "En cas de manquement grave de ACTC à ses obligations, le client peut résilier le contrat par lettre recommandée avec AR. ACTC remboursera la part des travaux non réalisés.",
        ],
      },
      {
        title: "10. Responsabilité",
        paragraphs: [
          "ACTC s'engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution de ses prestations (obligation de moyens). Sa responsabilité ne saurait être engagée pour des faits indépendants de sa volonté, notamment : pannes de fournisseurs tiers, modifications unilatérales des algorithmes de moteurs de recherche, défaillances d'hébergeurs.",
          "En tout état de cause, la responsabilité de ACTC est limitée au montant de la prestation concernée.",
        ],
      },
      {
        title: "11. Droit applicable et litiges",
        paragraphs: [
          "Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux français seront seuls compétents.",
        ],
      },
    ],
    contactTitle: "12. Contact",
    contactText: "Pour toute question relative aux présentes CGV : ",
    version: "Version en vigueur depuis juin 2026",
  },
  en: {
    metaTitle: "Terms and Conditions of Sale · ACTC",
    metaDescription:
      "Terms and conditions of sale for ACTC website creation services and digital services.",
    kicker: "Legal",
    h1: "Terms and Conditions of Sale",
    prevails:
      "This English translation is provided for convenience only. The French version prevails in the event of any discrepancy.",
    sections: [
      {
        title: "1. Purpose",
        paragraphs: [
          "These Terms and Conditions of Sale govern the contractual relationship between ACTC (Tom-Soa Cyprien and Andylane Chatenay, French micro-entreprise) and any client who has ordered a website creation, e-commerce store, design, copywriting or related digital service.",
        ],
      },
      {
        title: "2. Services offered",
        paragraphs: ["ACTC offers, in particular:"],
        list: [
          "Creation of showcase websites (Standard, Conversion and Premium packages)",
          "Creation of Shopify e-commerce stores",
          "Logo design and visual identity",
          "Copywriting and web content writing",
          "Management of Meta and Google advertising campaigns",
          "Monthly maintenance",
          "Any other digital service defined in the quote",
        ],
      },
      {
        title: "3. Formation of the contract",
        paragraphs: [
          "Every project starts once the client has accepted the quote (electronic signature or written confirmation by email) and the deposit has been received. The quote is valid for 30 days from its date of issue.",
        ],
      },
      {
        title: "4. Prices and payment",
        paragraphs: [
          "**Prices:** All prices are expressed in euros, exclusive of tax. VAT is not applicable (art. 293 B of the French General Tax Code).",
          "**Terms:** A 60% deposit is due upon ordering. The remaining 40% is due upon delivery, before the final transfer of files and the site going live.",
          "**Late payment:** Any late payment automatically triggers a penalty of 10% of the amount due, as well as the suspension of work until the situation is resolved.",
          "**Online payment:** Payments made through Stripe links are secure. ACTC does not store any banking data.",
        ],
      },
      {
        title: "5. Delivery timelines",
        paragraphs: [
          "Indicative timelines are specified in the quote (usually 14 to 21 business days). These timelines start upon receipt of the deposit and of all the elements required from the client (content, photos, access credentials). ACTC cannot be held responsible for delays caused by the client.",
        ],
      },
      {
        title: "6. Revisions and corrections",
        paragraphs: [
          "The client is entitled to two rounds of revisions on the mockup and one round on the developed website, as defined in the quote. Any request for substantial changes outside these rounds will be subject to an additional quote.",
        ],
      },
      {
        title: "7. Intellectual property and transfer",
        paragraphs: [
          "The rights to the deliverables (design, code, copy) are fully transferred to the client upon receipt of the final payment. Until that payment, ACTC retains all rights. ACTC reserves the right to feature completed projects in its portfolio, unless the client expressly objects.",
        ],
      },
      {
        title: "8. Client obligations",
        paragraphs: ["The client agrees to:"],
        list: [
          "Provide the required elements within the agreed timeframes",
          "Approve or reject deliverables within 7 business days",
          "Ensure that the content provided does not infringe any third-party rights",
        ],
      },
      {
        title: "9. Termination",
        paragraphs: [
          "If the client terminates the contract after the project has started, the 60% deposit is retained by ACTC for the work already performed. If termination occurs after delivery of the website, the remaining balance is due in full.",
          "In the event of a serious breach by ACTC of its obligations, the client may terminate the contract by registered letter with acknowledgment of receipt. ACTC will refund the portion of the work not performed.",
        ],
      },
      {
        title: "10. Liability",
        paragraphs: [
          "ACTC undertakes to use all reasonable means to properly perform its services (best-efforts obligation). It cannot be held liable for events beyond its control, in particular: third-party provider outages, unilateral changes to search engine algorithms, or hosting provider failures.",
          "In any event, ACTC's liability is limited to the amount of the service concerned.",
        ],
      },
      {
        title: "11. Governing law and disputes",
        paragraphs: [
          "These Terms and Conditions of Sale are governed by French law. In the event of a dispute, the parties will endeavour to reach an amicable solution. Failing that, the French courts will have exclusive jurisdiction.",
        ],
      },
    ],
    contactTitle: "12. Contact",
    contactText: "For any question regarding these Terms and Conditions of Sale: ",
    version: "Version in force since June 2026",
  },
};

// Rend un paragraphe dont l'éventuel préfixe **gras** devient un <strong>.
function Paragraph({ text, className }: { text: string; className?: string }) {
  const match = text.match(/^\*\*(.+?)\*\*\s?([^]*)$/);
  if (match) {
    return (
      <p className={className}>
        <strong className="text-midnight">{match[1]}</strong> {match[2]}
      </p>
    );
  }
  return <p className={className}>{text}</p>;
}

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

export default async function CGVPage({
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

          {t.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-lg font-bold text-midnight mb-3">{section.title}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <Paragraph key={i} text={paragraph} className={i > 0 ? "mt-3" : undefined} />
              ))}
              {section.list && (
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">{t.contactTitle}</h2>
            <p>
              {t.contactText}
              <a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a>
            </p>
          </section>

          <p className="text-[13px] text-steel/60">{t.version}</p>
        </div>
      </div>
    </main>
  );
}
