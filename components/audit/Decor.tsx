/**
 * Décors d'arrière-plan de la page audit.
 *
 * La page était posée sur un aplat uni : le premier plan portait tout, et le
 * fond ne racontait rien. Ces décors donnent de la profondeur sans jamais
 * gêner la lecture, et restent immobiles au défilement.
 */

/** Grille technique très pâle, façon papier millimétré. */
export function Grille({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
      aria-hidden
    />
  );
}

/** Halo coloré, posé derrière le contenu. */
export function Halo({
  couleur = "rgba(194,65,12,0.16)",
  position = "50% 0%",
  taille = "60% 50%",
  className = "",
}: {
  couleur?: string;
  position?: string;
  taille?: string;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        background: `radial-gradient(${taille} at ${position}, ${couleur} 0%, transparent 70%)`,
      }}
      aria-hidden
    />
  );
}

/**
 * Formes géométriques floues, dans l'esprit des visuels publicitaires : deux
 * disques de couleur très diffus qui animent les grands aplats vides.
 */
export function Formes({
  variante = "terra",
  className = "",
}: {
  variante?: "terra" | "nuit" | "mixte";
  className?: string;
}) {
  const couleurs =
    variante === "nuit"
      ? ["rgba(15,23,42,0.07)", "rgba(194,65,12,0.10)"]
      : variante === "mixte"
        ? ["rgba(194,65,12,0.12)", "rgba(15,23,42,0.06)"]
        : ["rgba(194,65,12,0.13)", "rgba(194,65,12,0.07)"];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: couleurs[0] }}
      />
      <div
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: couleurs[1] }}
      />
    </div>
  );
}

/**
 * Trait de séparation en pointillé terracotta, pour marquer le passage d'une
 * section à l'autre sans poser un filet plein de plus.
 */
export function Couture({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 h-px ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(194,65,12,0.35) 0 8px, transparent 8px 20px)",
      }}
      aria-hidden
    />
  );
}
