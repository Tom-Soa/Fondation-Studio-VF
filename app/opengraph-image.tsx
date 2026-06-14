import { ImageResponse } from "next/og";

// Image Open Graph officielle : vignette affichée dans les résultats Google
// et lors du partage du lien (réseaux sociaux, WhatsApp...).
// Reprend l'identité Fondation Studio : fond alabaster, emphase terracotta.
export const alt =
  "Fondation Studio : on crée des sites web qui captent vos futurs clients";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ALABASTER = "#f9f9f7";
const MIDNIGHT = "#0f172a";
const TERRA = "#c2410c";
const STEEL = "#64748b";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ALABASTER,
          padding: "72px 96px",
          position: "relative",
        }}
      >
        {/* Logo F en haut */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "absolute",
            top: 56,
            left: 72,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: ALABASTER,
              border: `2px solid ${TERRA}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: TERRA,
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            F
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: MIDNIGHT }}>
            Fondation{" "}
            <span style={{ color: TERRA }}>Studio</span>
          </span>
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#ffffff",
            border: `1px solid ${TERRA}33`,
            borderRadius: 999,
            padding: "10px 22px",
            color: MIDNIGHT,
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 4,
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  backgroundColor: TERRA,
                }}
              />
            ))}
          </div>
          <span>Places limitées chaque mois</span>
        </div>

        {/* Titre principal */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            color: MIDNIGHT,
            letterSpacing: "-0.02em",
            maxWidth: 980,
          }}
        >
          On crée des sites web qui{" "}
          <span style={{ color: TERRA, fontStyle: "italic", fontWeight: 600 }}>
            &nbsp;captent vos futurs clients
          </span>
          .
        </div>

        {/* Sous-titre */}
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 30,
            color: STEEL,
            textAlign: "center",
          }}
        >
          Sites premium pour PME et artisans. À partir de 1 400 €.
        </div>
      </div>
    ),
    { ...size }
  );
}
