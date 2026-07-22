import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Icon } from "@iconify/react";
import { WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact · Réservez un appel gratuit",
  description:
    "Réservez un appel gratuit de 20 minutes, démarrez directement en ligne, ou écrivez-nous. Maquette offerte avant tout engagement.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Fondation Studio",
    description:
      "Réservez un appel gratuit de 20 minutes ou écrivez-nous. Maquette offerte avant tout engagement.",
  },
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

        {/* Formulaire en premier */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-grid-line" />
          <span className="text-[13px] font-medium text-steel">ou choisissez une autre option</span>
          <div className="h-px flex-1 bg-grid-line" />
        </div>

        {/* 2 options */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Option 1 : Appel, mise en avant */}
          <div className="lg:col-span-1 relative overflow-hidden rounded-3xl border-2 border-terra bg-white p-8 shadow-[0_8px_32px_rgba(194,65,12,0.15)]">
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
            </div>
          </div>

          {/* Option 2 : Coordonnées directes */}
          <div className="lg:col-span-1 rounded-3xl border border-grid-line bg-white p-8 flex flex-col gap-4">
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
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-steel">Email</div>
                <div className="text-[14px] font-medium text-midnight group-hover:text-terra transition-colors break-all">fondationstudio.fr@gmail.com</div>
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

      </div>
    </main>
  );
}
