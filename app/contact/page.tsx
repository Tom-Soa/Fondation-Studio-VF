import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Icon } from "@iconify/react";
import { CALENDLY_URL, WHATSAPP_URL, OFFERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact · Réservez un appel gratuit",
  description:
    "Réservez un appel gratuit de 20 minutes, démarrez directement en ligne, ou écrivez-nous. Maquette offerte avant tout engagement. Sites premium à partir de 1 400 €.",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-28 lg:pt-36 pb-20">

        {/* Intro */}
        <div className="max-w-2xl mb-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">
            Contact · La première étape
          </div>
          <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.04] text-midnight">
            Parlons de{" "}
            <span className="font-emphasis font-normal text-terra">votre projet.</span>
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-steel">
            Appel gratuit de 20 minutes, démarrage direct en ligne, ou simple message. Choisissez ce qui vous convient.
          </p>
        </div>

        {/* 3 options */}
        <div className="grid lg:grid-cols-3 gap-4 mb-16">

          {/* Option 1 : Appel — mise en avant */}
          <div className="lg:col-span-1 relative overflow-hidden rounded-3xl border-2 border-terra bg-white p-7 shadow-[0_8px_32px_rgba(194,65,12,0.15)]">
            <div className="absolute -top-16 -right-12 h-48 w-48 rounded-full bg-terra/8 blur-3xl pointer-events-none" aria-hidden />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-terra/10 px-3 py-1 text-[11px] font-semibold text-terra mb-5">
                <Icon icon="ph:star-duotone" width={13} height={13} aria-hidden />
                Recommandé
              </div>
              <h2 className="font-display text-xl font-bold text-midnight mb-2">
                Réserver un appel gratuit
              </h2>
              <p className="text-[14px] text-steel leading-relaxed mb-6">
                20 minutes pour parler de votre projet. On vous dit exactement ce qu'on peut faire et à quel tarif. Sans engagement.
              </p>
              <ul className="space-y-2 mb-7">
                {["Réponse immédiate", "Maquette offerte ensuite", "Zéro engagement"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[13.5px] text-steel">
                    <Icon icon="lucide:check" width={15} height={15} className="text-terra shrink-0" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full rounded-full bg-terra hover:bg-terra-hover px-6 py-3.5 text-white font-semibold text-[15px] transition-all glow-terra"
              >
                Choisir un créneau
                <Icon icon="lucide:arrow-right" width={15} height={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Option 2 : Acheter directement */}
          <div className="lg:col-span-1 rounded-3xl border border-grid-line bg-white p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-midnight/5 px-3 py-1 text-[11px] font-semibold text-midnight/60 mb-5">
              <Icon icon="ph:lightning-duotone" width={13} height={13} aria-hidden />
              Le plus rapide
            </div>
            <h2 className="font-display text-xl font-bold text-midnight mb-2">
              Démarrer directement
            </h2>
            <p className="text-[14px] text-steel leading-relaxed mb-6">
              Vous savez déjà ce qu'il vous faut ? Choisissez votre forfait, réglez l'acompte en ligne et votre dossier est traité sous 24 h.
            </p>
            <div className="space-y-2.5 mb-7">
              {OFFERS.filter((o) => !o.quoteOnly).map((offer) => (
                <a
                  key={offer.slug}
                  href={`/offres#${offer.slug}`}
                  className="flex items-center justify-between rounded-xl border border-grid-line bg-alabaster px-4 py-3 hover:border-terra/40 transition-colors group"
                >
                  <div>
                    <span className="text-[14px] font-semibold text-midnight">{offer.name}</span>
                    <span className="text-[12px] text-steel ml-2">{offer.price}</span>
                  </div>
                  <Icon icon="lucide:arrow-right" width={14} height={14} className="text-steel group-hover:text-terra transition-colors" aria-hidden />
                </a>
              ))}
              <a
                href="/offres#prestige"
                className="flex items-center justify-between rounded-xl border border-grid-line bg-alabaster px-4 py-3 hover:border-terra/40 transition-colors group"
              >
                <div>
                  <span className="text-[14px] font-semibold text-midnight">Prestige</span>
                  <span className="text-[12px] text-steel ml-2">Sur devis</span>
                </div>
                <Icon icon="lucide:arrow-right" width={14} height={14} className="text-steel group-hover:text-terra transition-colors" aria-hidden />
              </a>
            </div>
            <a
              href="/tarifs"
              className="flex items-center justify-center gap-2 w-full rounded-full border border-grid-line bg-white hover:border-terra/40 text-midnight px-6 py-3.5 text-[14px] font-medium transition-colors"
            >
              Voir tous les tarifs
            </a>
          </div>

          {/* Option 3 : Coordonnées directes */}
          <div className="lg:col-span-1 rounded-3xl border border-grid-line bg-white p-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-midnight/5 px-3 py-1 text-[11px] font-semibold text-midnight/60 mb-1">
              <Icon icon="ph:chat-duotone" width={13} height={13} aria-hidden />
              Nous écrire
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group rounded-2xl border border-grid-line p-4 hover:border-[#25D366]/40 transition-colors">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#1ebe5d]">
                <Icon icon="ph:whatsapp-logo-duotone" width={20} height={20} aria-hidden />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-steel">WhatsApp</div>
                <div className="text-[15px] font-medium text-midnight group-hover:text-[#1ebe5d] transition-colors">+33 6 37 99 97 38</div>
              </div>
            </a>
            <a href="mailto:fondationstudio.fr@gmail.com" className="flex items-center gap-4 group rounded-2xl border border-grid-line p-4 hover:border-terra/40 transition-colors">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white border border-grid-line text-terra">
                <Icon icon="ph:envelope-simple-duotone" width={20} height={20} aria-hidden />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-steel">Email</div>
                <div className="text-[14px] font-medium text-midnight group-hover:text-terra transition-colors">fondationstudio.fr@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-grid-line p-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white border border-grid-line text-terra">
                <Icon icon="ph:map-pin-duotone" width={20} height={20} aria-hidden />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-steel">Localisation</div>
                <div className="text-[14px] font-medium text-midnight">France · Projets dans le monde entier</div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-grid-line" />
            <span className="text-[13px] font-medium text-steel">ou remplissez le formulaire</span>
            <div className="h-px flex-1 bg-grid-line" />
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
