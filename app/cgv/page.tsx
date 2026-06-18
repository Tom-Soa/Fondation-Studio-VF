import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente · Fondation Studio",
  description: "Conditions générales de vente des prestations de création de sites web et services digitaux de Fondation Studio.",
  robots: { index: false },
};

export default function CGVPage() {
  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-28 lg:pt-36 pb-24">
        <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-4">Légal</div>
        <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] text-midnight mb-12">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-10 text-[15px] leading-relaxed text-steel">

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">1. Objet</h2>
            <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Fondation Studio (Tom-Soa Cyprien et Andylane Chatenay, micro-entreprise) et tout client ayant commandé une prestation de création de site web, boutique e-commerce, design, copywriting ou service digital connexe.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">2. Prestations proposées</h2>
            <p>Fondation Studio propose notamment :</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Création de sites vitrines (forfaits Standard, Conversion, Premium)</li>
              <li>Création de boutiques e-commerce Shopify</li>
              <li>Création de logo et identité visuelle</li>
              <li>Copywriting et rédaction web</li>
              <li>Gestion de campagnes publicitaires Meta & Google</li>
              <li>Maintenance mensuelle</li>
              <li>Tout autre service digital défini dans le devis</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">3. Formation du contrat</h2>
            <p>Tout projet démarre après acceptation du devis par le client (signature électronique ou confirmation écrite par email) et réception de l'acompte. Le devis est valable 30 jours à compter de sa date d'émission.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">4. Tarifs et paiement</h2>
            <p><strong className="text-midnight">Tarifs :</strong> Tous les tarifs sont exprimés en euros hors taxes. La TVA n'est pas applicable (art. 293 B du CGI).</p>
            <p className="mt-3"><strong className="text-midnight">Modalités :</strong> Un acompte de 60 % est exigible à la commande. Le solde de 40 % est dû à la livraison, avant transfert définitif des fichiers et mise en ligne.</p>
            <p className="mt-3"><strong className="text-midnight">Retard de paiement :</strong> Tout retard de paiement entraîne de plein droit l'application d'une pénalité de 10 % du montant dû, ainsi que l'arrêt des travaux jusqu'à régularisation.</p>
            <p className="mt-3"><strong className="text-midnight">Paiement en ligne :</strong> Les paiements effectués via les liens Stripe sont sécurisés. Fondation Studio ne conserve aucune donnée bancaire.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">5. Délais de livraison</h2>
            <p>Les délais indicatifs sont précisés dans le devis (généralement 14 à 21 jours ouvrés). Ces délais courent à compter de la réception de l'acompte et de la fourniture par le client de tous les éléments nécessaires (contenus, photos, accès). Fondation Studio ne peut être tenu responsable des retards causés par le client.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">6. Retours et corrections</h2>
            <p>Le client dispose de deux tours de retours sur la maquette et d'un tour sur le site développé, tels que définis dans le devis. Toute demande de modification substantielle en dehors de ces tours fera l'objet d'un devis complémentaire.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">7. Propriété intellectuelle et transfert</h2>
            <p>Les droits sur les créations (design, code, textes) sont intégralement cédés au client à la réception du paiement final. Avant ce paiement, Fondation Studio conserve l'intégralité des droits. Fondation Studio se réserve le droit de présenter les projets réalisés dans son portfolio, sauf refus express du client.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">8. Obligations du client</h2>
            <p>Le client s'engage à :</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Fournir les éléments nécessaires dans les délais convenus</li>
              <li>Valider ou refuser les livrables dans un délai de 7 jours ouvrés</li>
              <li>S'assurer que les contenus fournis ne violent aucun droit de tiers</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">9. Résiliation</h2>
            <p>En cas de résiliation à l'initiative du client après démarrage, l'acompte de 60 % est acquis à Fondation Studio au titre des travaux réalisés. Si la résiliation intervient après livraison du site, le solde reste dû intégralement.</p>
            <p className="mt-3">En cas de manquement grave de Fondation Studio à ses obligations, le client peut résilier le contrat par lettre recommandée avec AR. Fondation Studio remboursera la part des travaux non réalisés.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">10. Responsabilité</h2>
            <p>Fondation Studio s'engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution de ses prestations (obligation de moyens). Sa responsabilité ne saurait être engagée pour des faits indépendants de sa volonté, notamment : pannes de fournisseurs tiers, modifications unilatérales des algorithmes de moteurs de recherche, défaillances d'hébergeurs.</p>
            <p className="mt-3">En tout état de cause, la responsabilité de Fondation Studio est limitée au montant de la prestation concernée.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">11. Droit applicable et litiges</h2>
            <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux français seront seuls compétents.</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-midnight mb-3">12. Contact</h2>
            <p>Pour toute question relative aux présentes CGV : <a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a></p>
          </section>

          <p className="text-[13px] text-steel/60">Version en vigueur depuis juin 2026</p>
        </div>
      </div>
    </main>
  );
}
