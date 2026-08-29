"use client";

import { Icon } from "@iconify/react";

/**
 * Petite enveloppe autour d'Iconify.
 *
 * Iconify ne fonctionne que côté client : cette enveloppe permet d'afficher une
 * icône depuis une page rendue côté serveur sans transformer la page entière en
 * composant client.
 */
export default function Icone({
  nom,
  taille = 20,
  className,
}: {
  nom: string;
  taille?: number;
  className?: string;
}) {
  return <Icon icon={nom} width={taille} height={taille} className={className} aria-hidden />;
}
