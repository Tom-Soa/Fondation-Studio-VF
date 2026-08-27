/**
 * Décor du haut de page : halo terracotta statique.
 * Volontairement sans mouvement lié au scroll — la vidéo doit rester le point
 * d'attention, et rien ne doit bouger sous le lecteur pendant la lecture.
 */
export default function LpHeroDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]"
      style={{
        background:
          "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.14) 0%, transparent 70%)",
      }}
      aria-hidden
    />
  );
}
