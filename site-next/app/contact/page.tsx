import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Maquette gratuite sous 24 h",
  description:
    "Parlez-nous de votre projet. Réponse sous 24 h, maquette gratuite avant tout engagement. Sites premium à partir de 1 400 €.",
};

const REASSURE = [
  { k: "24 h", v: "Réponse garantie" },
  { k: "Gratuit", v: "Maquette sans engagement" },
  { k: "1 400 €", v: "Tarif de départ tout compris" },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative bg-alabaster text-midnight pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,14,26,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,14,26,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-5">
                Contact · Maquette gratuite
              </div>
              <h1 className="font-sans font-medium tracking-[-0.035em] text-[clamp(2.5rem,6vw,5rem)] leading-[0.98]">
                Parlez-nous
                <br />
                de votre projet.
                <br />
                <span className="text-terra">On répond sous 24 h.</span>
              </h1>
              <p className="mt-8 max-w-lg text-[clamp(1rem,1.15vw,1.1rem)] leading-relaxed text-steel">
                Vous remplissez le formulaire. On vous propose une maquette
                gratuite, sans engagement. Si elle vous plaît, on démarre.
                Sinon, on en reste là.
              </p>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9 self-end">
              <div className="rounded-3xl border border-midnight/10 bg-white/60 backdrop-blur-sm p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel mb-4">
                  Joignez-nous directement
                </div>
                <ul className="space-y-3 text-[14px]">
                  <li>
                    <a
                      href="mailto:contact@fondationstudio.fr"
                      className="flex items-center gap-2.5 text-midnight hover:text-terra transition-colors"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      contact@fondationstudio.fr
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+262692000000"
                      className="flex items-center gap-2.5 text-midnight hover:text-terra transition-colors"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l.91-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                      </svg>
                      +262 6 92 00 00 00
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          {/* Form card + side reassurance */}
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-midnight/10 bg-white p-7 sm:p-10 shadow-[0_8px_24px_rgba(15,23,42,0.07)]">
                <ContactForm />
              </div>
            </div>
            <aside className="lg:col-span-4 space-y-4">
              {REASSURE.map((r) => (
                <div
                  key={r.k}
                  className="rounded-2xl border border-midnight/10 bg-white p-5"
                >
                  <div className="text-terra text-[clamp(1.75rem,2.5vw,2.25rem)] leading-none font-medium tracking-[-0.02em]">
                    {r.k}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-steel">
                    {r.v}
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-midnight/10 bg-midnight text-white p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-terra mb-3">
                  Ce que vous recevez
                </div>
                <ul className="space-y-2.5 text-[13.5px] text-white/80">
                  {[
                    "Maquette visuelle sur-mesure",
                    "Présentation en appel vidéo (30 min)",
                    "Devis détaillé sans surprise",
                    "Zéro frais si vous ne donnez pas suite",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 shrink-0 text-terra"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
