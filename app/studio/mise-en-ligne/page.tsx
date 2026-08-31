import type { Metadata } from "next";
import GenerateurMiseEnLigne from "@/components/studio/GenerateurMiseEnLigne";

export const metadata: Metadata = {
  title: "Générateur de visuel de mise en ligne · ACTC",
  description:
    "Compose le visuel carré à envoyer au client quand son site part en ligne.",
  robots: { index: false, follow: false },
};

/**
 * Outil interne : génère le visuel carré de célébration à remettre au client
 * le jour de la mise en ligne. Le client le publie sur ses réseaux, ce qui
 * fait connaître ACTC auprès de son audience.
 *
 * Page non indexée, sans lien depuis le site : elle n'a pas vocation à être
 * trouvée par un visiteur.
 */
export default function PageMiseEnLigne() {
  return <GenerateurMiseEnLigne />;
}
