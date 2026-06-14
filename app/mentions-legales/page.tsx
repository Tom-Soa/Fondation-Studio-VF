import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales · Fondation Studio",
  description: "Mentions légales, politique de confidentialité et politique de cookies de Fondation Studio.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-28 lg:pt-36 pb-24">
        <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-4">Légal</div>
        <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] text-midnight mb-12">
          Mentions légales
        </h1>

        <div className="space-y-12 text-[15px] leading-relaxed text-steel">

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">Éditeur du site</h2>
            <p>Le site fondationstudio.fr est édité par :</p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-midnight">Dénomination :</strong> Fondation Studio</li>
              <li><strong className="text-midnight">Fondateurs :</strong> Tom-Soa Cyprien et Andylane Chatenay</li>
              <li><strong className="text-midnight">Email :</strong> fondationstudio.fr@gmail.com</li>
              <li><strong className="text-midnight">Téléphone :</strong> +33 6 37 99 97 38</li>
              <li><strong className="text-midnight">Statut :</strong> Micro-entreprise</li>
              <li><strong className="text-midnight">Régime TVA :</strong> TVA non applicable, art. 293 B du CGI</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-midnight">Vercel Inc.</strong></li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">Propriété intellectuelle</h2>
            <p>L'ensemble des contenus présents sur ce site (textes, images, graphismes, code) est la propriété exclusive de Fondation Studio, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.</p>
          </section>

          <section id="rgpd">
            <h2 className="font-display text-xl font-bold text-midnight mb-4">Données personnelles (RGPD)</h2>
            <p>Fondation Studio collecte uniquement les données nécessaires au traitement de vos demandes (nom, email, téléphone, description du projet). Ces données ne sont jamais revendues ni transmises à des tiers sans votre consentement.</p>
            <p className="mt-3">Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : <a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a></p>
            <p className="mt-3">Durée de conservation : 3 ans à compter du dernier contact.</p>
            <p className="mt-3">Pour toute réclamation : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-terra underline underline-offset-2">cnil.fr</a></p>
          </section>

          <section id="politique-cookies">
            <h2 className="font-display text-xl font-bold text-midnight mb-4">Cookies</h2>
            <p>Ce site utilise des cookies fonctionnels strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement explicite.</p>
            <p className="mt-3">Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Certaines fonctionnalités du site pourraient alors être limitées.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-midnight mb-4">Liens externes</h2>
            <p>Ce site peut contenir des liens vers des sites tiers (Calendly, Stripe, etc.). Fondation Studio ne saurait être tenu responsable du contenu de ces sites ni de leurs pratiques en matière de confidentialité.</p>
          </section>

          <p className="text-[13px] text-steel/60">Dernière mise à jour : juin 2026</p>
        </div>
      </div>
    </main>
  );
}
