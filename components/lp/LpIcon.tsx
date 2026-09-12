// Icones de la landing page, tracees en SVG dans le bundle.
//
// @iconify/react va chercher chaque icone sur le reseau au moment du rendu :
// sur une connexion lente, les listes s'affichaient sans leurs puces, et
// chaque icone coutait une requete. Les douze icones de la page sont donc
// ecrites ici une fois pour toutes.

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "plus"
  | "x"
  | "microphone"
  | "speaker"
  | "waveform"
  | "key"
  | "cloud"
  | "sliders"
  | "seal-check";

// Traces au format 24x24. Les contours suivent le style de lucide
// (trait de 2, extremites arrondies) pour rester coherents avec l'existant.
const PATHS: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m4 12 5 5L20 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  microphone: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  speaker: (
    <>
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M17 9a4 4 0 0 1 0 6" />
    </>
  ),
  waveform: <path d="M4 10v4M8 6v12M12 8v8M16 5v14M20 10v4" />,
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M17 12v4M20 12v3" />
    </>
  ),
  cloud: <path d="M7 18a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.5 1.5A3.5 3.5 0 0 1 17 18H7Z" />,
  sliders: <path d="M5 6h14M5 12h14M5 18h14M9 4v4M15 10v4M11 16v4" />,
  "seal-check": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
};

export default function LpIcon({
  name,
  size = 18,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
