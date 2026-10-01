// Genere les 12 slides HTML du carrousel "Nos services" ACTC Studio.
// Tout est en HTML/CSS, une seule famille typographique (Archivo + Archivo Black).
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(join(here, "slides"), { recursive: true });

const CSS = `
@font-face{font-family:'ArchivoBlack';src:url('../assets/black-ext.woff2') format('woff2');font-weight:400;font-display:block;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'ArchivoBlack';src:url('../assets/black-lat.woff2') format('woff2');font-weight:400;font-display:block;}
@font-face{font-family:'ArchivoVF';src:url('../assets/archivo-ext.woff2') format('woff2');font-weight:100 900;font-display:block;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'ArchivoVF';src:url('../assets/archivo-lat.woff2') format('woff2');font-weight:100 900;font-display:block;}

*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:1080px;height:1080px;}
body{
  font-family:'ArchivoVF',sans-serif;
  -webkit-font-smoothing:antialiased;
  text-rendering:geometricPrecision;
  hyphens:none;-webkit-hyphens:none;
  overflow-wrap:normal;word-break:normal;
}
.slide{
  position:relative;width:1080px;height:1080px;overflow:hidden;
  display:flex;flex-direction:column;
}
.pad{position:absolute;inset:90px;display:flex;flex-direction:column;z-index:5;}

/* formes plates decoratives */
.shape{position:absolute;z-index:1;}
.circle{border-radius:50%;}
.qtr-tr{border-radius:0 0 0 100%;top:0;right:0;}
.qtr-bl{border-radius:0 100% 0 0;bottom:0;left:0;}
.qtr-br{border-radius:100% 0 0 0;bottom:0;right:0;}
.qtr-tl{border-radius:0 0 100% 0;top:0;left:0;}
.arc{border-style:solid;border-radius:50%;background:transparent;}

/* wordmark pure typo */
.mark{font-family:'ArchivoBlack',sans-serif;font-size:40px;letter-spacing:-0.01em;line-height:1;}

.label{
  font-family:'ArchivoVF',sans-serif;font-weight:700;
  font-size:30px;letter-spacing:0.09em;text-transform:uppercase;
}
h1{
  font-family:'ArchivoBlack',sans-serif;font-weight:400;
  text-transform:uppercase;letter-spacing:-0.02em;line-height:1.0;
}
.support{
  font-family:'ArchivoVF',sans-serif;font-weight:600;
  font-size:34px;line-height:1.38;max-width:830px;
}
.btn{
  display:inline-flex;align-items:center;justify-content:center;
  border-radius:999px;font-family:'ArchivoVF',sans-serif;font-weight:700;
  padding:30px 56px;font-size:33px;letter-spacing:-0.005em;align-self:flex-start;
}
.photo{
  position:absolute;border-radius:40px;overflow:hidden;z-index:4;
}
.photo img{width:100%;height:100%;object-fit:cover;display:block;}
.spacer{flex:1;}

/* mot cle en graisse legere, meme famille variable */
.lt{
  font-family:'ArchivoVF',sans-serif;font-weight:250;
  letter-spacing:0.005em;font-size:1.035em;
}

/* soulignement trace a la main : barre epaisse arrondie derriere le mot */
.uw{position:relative;display:inline-block;}
.uw > span{position:relative;z-index:2;}
.uw::after{
  content:"";position:absolute;z-index:1;
  left:var(--uwl,-0.06em);right:var(--uwr,-0.085em);bottom:var(--uwb,-0.035em);
  height:var(--uwh,0.145em);border-radius:999px;
  background:var(--uw);
  transform:rotate(-1.4deg);
  transform-origin:left center;
}
/* variante plus fine a droite pour l epaisseur irreguliere du trace */
.uw::before{
  content:"";position:absolute;z-index:1;
  left:26%;right:var(--uwr,-0.085em);bottom:calc(var(--uwb,-0.035em) + var(--uwh,0.145em) * 0.42);
  height:0.06em;border-radius:999px;
  background:var(--uw);opacity:.6;
  transform:rotate(-2.3deg);transform-origin:left center;
}

/* bloc surligne : rectangle plein derriere un mot, texte inverse */
.hl{
  position:relative;display:inline-block;z-index:2;
  padding:0 0.08em 0 0.07em;
}
.hl::before{
  content:"";position:absolute;z-index:-1;
  left:0;right:0;top:0.09em;bottom:0.055em;
  background:var(--hl);border-radius:10px;
  transform:rotate(-0.5deg);
}
`;

function mark(accent, base) {
  return `<div class="mark" style="color:${base}">AC<span style="color:${accent}">TC</span></div>`;
}

function page(body, extraCss = "") {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<style>${CSS}${extraCss}</style></head><body>${body}</body></html>`;
}

// couleurs
const INK = "#0b0d10";
const WHITE = "#ffffff";
const AMBER = "#fbbf24";
const LIME = "#d4f634";
const LIME2 = "#a3e635";
const BLUE = "#2563eb";
const BERRY = "#e11d48";
const NAVY = "#1e3a8a";
const ORANGE = "#f97316";
const VIOLET = "#7c3aed";
const TEAL = "#0f766e";
const CREAM = "#fef3c7";
const TERRA = "#c2410c";

const slides = [];

/* ---------- 01 COVER ---------- */
slides.push(page(`
<div class="slide" style="background:${LIME}">
  <div class="shape circle" style="width:620px;height:620px;background:${INK};opacity:.07;top:-130px;right:-120px;"></div>
  <div class="shape qtr-br" style="width:360px;height:360px;background:${TERRA};"></div>
  <div class="shape circle" style="width:200px;height:200px;background:${TERRA};left:-60px;top:430px;"></div>
  <div class="pad">
    ${mark(TERRA, INK)}
    <h1 style="color:${INK};font-size:162px;margin-top:100px;">NOS<br>SERVICES</h1>
    <div class="support" style="color:${INK};margin-top:56px;max-width:720px;">Quatre façons de faire travailler le digital pour votre entreprise.</div>
    <div class="spacer"></div>
    <div class="btn" style="background:${INK};color:${LIME};">Faites défiler</div>
  </div>
</div>`));

/* ---------- 02 SITE ---------- */
slides.push(page(`
<div class="slide" style="background:${BLUE}">
  <div class="shape qtr-tr" style="width:420px;height:420px;background:${AMBER};"></div>
  <div class="shape circle" style="width:260px;height:260px;background:#ffffff;opacity:.10;left:-90px;bottom:220px;"></div>
  <div class="pad">
    ${mark(AMBER, WHITE)}
    <div class="label" style="color:${AMBER};margin-top:74px;">CRÉATION DE SITE</div>
    <h1 style="color:${WHITE};font-size:112px;margin-top:28px;">UN SITE<br>QUI VOUS AMÈNE<br>DES <span class="lt">CLIENTS</span></h1>
    <div class="support" style="color:${WHITE};margin-top:46px;max-width:790px;">Design sur-mesure, référencement Google intégré, hébergement gratuit. Livré en 21 jours.</div>
    <div class="spacer"></div>
    <div class="btn" style="background:${AMBER};color:${INK};">À partir de 1 400 euros</div>
  </div>
</div>`));

/* ---------- 03 SITE PROOF (photo) ---------- */
slides.push(page(`
<div class="slide" style="background:${BLUE}">
  <div class="shape qtr-tr" style="width:300px;height:300px;background:${AMBER};opacity:.9;"></div>
  <div class="photo" style="width:360px;height:360px;right:90px;bottom:90px;"><img src="../assets/p03.jpg" alt=""></div>
  <div class="pad">
    ${mark(AMBER, WHITE)}
    <div style="display:flex;align-items:baseline;gap:30px;margin-top:58px;">
      <div style="font-family:'ArchivoBlack',sans-serif;font-size:190px;line-height:.86;color:${AMBER};letter-spacing:-0.03em;"><span class="uw" style="--uw:${WHITE};--uwb:-0.105em;--uwh:0.07em;--uwl:-0.01em;--uwr:-0.02em;"><span>50</span></span></div>
      <div class="label" style="color:${WHITE};letter-spacing:0.05em;max-width:290px;line-height:1.25;">ENTREPRISES<br>ACCOMPAGNÉES</div>
    </div>
    <h1 style="color:${WHITE};font-size:72px;margin-top:70px;max-width:900px;">VISIBLE SUR GOOGLE,<br>CRÉDIBLE<br>AVANT L'APPEL</h1>
    <div class="support" style="color:${AMBER};margin-top:44px;max-width:470px;">Vos futurs clients vous cherchent déjà.</div>
  </div>
</div>`));

/* ---------- 04 PUB ---------- */
slides.push(page(`
<div class="slide" style="background:${BERRY}">
  <div class="shape circle" style="width:520px;height:520px;background:${AMBER};right:-170px;top:-150px;"></div>
  <div class="shape arc" style="width:330px;height:330px;border-width:40px;border-color:${AMBER};left:-120px;bottom:60px;opacity:.85;"></div>
  <div class="pad">
    ${mark(AMBER, WHITE)}
    <div class="label" style="color:${AMBER};margin-top:74px;">PUBLICITÉ EN LIGNE</div>
    <h1 style="color:${WHITE};font-size:96px;margin-top:30px;max-width:900px;">DES DEMANDES<br>PENDANT QUE<br>VOUS <span class="lt">TRAVAILLEZ</span></h1>
    <div class="support" style="color:${WHITE};margin-top:44px;max-width:720px;">Campagnes Meta et Google. Visuels, ciblage, suivi mensuel.</div>
    <div class="spacer"></div>
    <div class="btn" style="background:${AMBER};color:${INK};">À partir de 500 euros par mois</div>
  </div>
</div>`));

/* ---------- 05 PUB CONTRAST (split) ---------- */
slides.push(page(`
<div class="slide" style="background:${ORANGE}">
  <div style="position:absolute;top:0;left:0;width:1080px;height:470px;background:${NAVY};z-index:2;"></div>
  <div class="shape circle" style="width:240px;height:240px;background:${AMBER};opacity:.16;right:70px;top:120px;z-index:3;"></div>
  <div class="shape qtr-br" style="width:300px;height:300px;background:${NAVY};opacity:.16;z-index:3;"></div>

  <div style="position:absolute;z-index:6;top:90px;left:90px;right:90px;">
    ${mark(AMBER, WHITE)}
    <div class="label" style="color:${AMBER};margin-top:58px;">BOOSTER UN POST</div>
    <h1 style="color:${WHITE};font-size:104px;margin-top:24px;">RÉSULTAT ZÉRO</h1>
  </div>

  <div style="position:absolute;z-index:6;top:560px;left:90px;right:90px;">
    <div class="label" style="color:${WHITE};">UNE VRAIE CAMPAGNE</div>
    <h1 style="color:${INK};font-size:116px;margin-top:22px;"><span class="uw" style="--uw:${WHITE}"><span>TOUT</span></span> CHANGE</h1>
    <div class="support" style="color:${INK};margin-top:44px;max-width:760px;">Cibler, tester, corriger chaque semaine.</div>
  </div>
</div>`));

/* ---------- 06 APP ---------- */
slides.push(page(`
<div class="slide" style="background:${VIOLET}">
  <div class="shape qtr-tr" style="width:320px;height:320px;background:${LIME2};opacity:.95;"></div>
  <div class="shape circle" style="width:380px;height:380px;background:#ffffff;opacity:.09;left:-140px;bottom:140px;"></div>
  <div class="pad">
    ${mark(LIME2, WHITE)}
    <div class="label" style="color:${LIME2};margin-top:74px;">APPLICATION WEB</div>
    <h1 style="color:${WHITE};font-size:104px;margin-top:30px;max-width:900px;">UN OUTIL FAIT<br>POUR VOTRE<br><span class="lt">MÉTIER</span></h1>
    <div class="support" style="color:${WHITE};margin-top:46px;max-width:780px;">Suivi clients, planning, devis et factures. Accessible partout, sans installation.</div>
    <div class="spacer"></div>
    <div class="btn" style="background:${LIME2};color:${INK};">Sur devis</div>
  </div>
</div>`));

/* ---------- 07 APP BENEFIT (photo) ---------- */
slides.push(page(`
<div class="slide" style="background:${VIOLET}">
  <div class="shape circle" style="width:300px;height:300px;background:${LIME2};right:-80px;top:-80px;"></div>
  <div class="shape arc" style="width:280px;height:280px;border-width:34px;border-color:${LIME2};opacity:.6;left:-130px;bottom:-60px;"></div>
  <div class="photo" style="width:310px;height:310px;right:90px;bottom:90px;"><img src="../assets/p07.jpg" alt=""></div>
  <div class="pad">
    ${mark(LIME2, WHITE)}
    <h1 style="color:${WHITE};font-size:118px;margin-top:84px;max-width:640px;">FINI LES<br><span class="hl" style="--hl:${LIME2};color:${INK}">FICHIERS</span><br>PARTOUT</h1>
    <div class="support" style="color:${WHITE};margin-top:50px;max-width:600px;">Un seul endroit où toute l'équipe travaille. Des heures gagnées chaque semaine.</div>
  </div>
</div>`));

/* ---------- 08 CONSEIL ---------- */
slides.push(page(`
<div class="slide" style="background:${TEAL}">
  <div class="shape qtr-tr" style="width:380px;height:380px;background:${AMBER};"></div>
  <div class="shape circle" style="width:220px;height:220px;background:${AMBER};opacity:.25;left:-70px;top:520px;"></div>
  <div class="pad">
    ${mark(AMBER, WHITE)}
    <div class="label" style="color:${AMBER};margin-top:74px;">CONSEIL SUR-MESURE</div>
    <h1 style="color:${WHITE};font-size:98px;margin-top:30px;max-width:900px;">SAVOIR<br>OÙ INVESTIR<br>AVANT DE <span class="lt">DÉPENSER</span></h1>
    <div class="support" style="color:${WHITE};margin-top:46px;max-width:800px;">Positionnement, offre, stratégie d'acquisition, choix des canaux.</div>
    <div class="spacer"></div>
    <div class="btn" style="background:${AMBER};color:${INK};">Sur devis</div>
  </div>
</div>`));

/* ---------- 09 CONSEIL BENEFIT ---------- */
slides.push(page(`
<div class="slide" style="background:${TEAL}">
  <div class="shape circle" style="width:640px;height:640px;background:${AMBER};opacity:.14;right:-200px;bottom:-180px;"></div>
  <div class="shape qtr-tr" style="width:280px;height:280px;background:${AMBER};"></div>
  <div class="pad">
    ${mark(AMBER, WHITE)}
    <h1 style="color:${WHITE};font-size:158px;margin-top:78px;">UN PLAN<br>TAILLÉ<br><span class="lt">POUR VOUS</span></h1>
    <div class="support" style="color:${AMBER};margin-top:46px;max-width:780px;">Développement commercial et marketing digital réunis. Éviter de construire la mauvaise chose.</div>
  </div>
</div>`));

/* ---------- 10 RECAP ---------- */
const rows = [
  ["Site internet", "dès 1 400 euros"],
  ["Site marchand", "dès 2 900 euros"],
  ["Publicité en ligne", "dès 500 euros par mois"],
  ["Application web", "sur devis"],
];
slides.push(page(`
<div class="slide" style="background:${CREAM}">
  <div class="shape qtr-tr" style="width:260px;height:260px;background:${TERRA};"></div>
  <div class="shape circle" style="width:170px;height:170px;background:${TERRA};opacity:.18;left:-50px;bottom:120px;"></div>
  <div class="pad">
    ${mark(TERRA, INK)}
    <h1 style="color:${INK};font-size:118px;margin-top:62px;">QUATRE<br>SERVICES</h1>
    <div style="margin-top:62px;">
      ${rows.map((r, i) => `
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:30px;padding:30px 0 30px;${i ? `border-top:3px solid rgba(11,13,16,.16);` : ``}">
        <div style="font-family:'ArchivoVF',sans-serif;font-weight:700;font-size:38px;color:${INK};">${r[0]}</div>
        <div style="font-family:'ArchivoVF',sans-serif;font-weight:700;font-size:38px;color:${TERRA};text-align:right;">${r[1]}</div>
      </div>`).join("")}
    </div>
  </div>
</div>`));

/* ---------- 11 ZONE ---------- */
const zone = ["Hébergement gratuit", "Aucun abonnement", "Le site vous appartient", "Livré en 21 jours"];
slides.push(page(`
<div class="slide" style="background:${BLUE}">
  <div class="shape circle" style="width:560px;height:560px;background:${AMBER};opacity:.14;left:-200px;top:-170px;"></div>
  <div class="shape qtr-br" style="width:300px;height:300px;background:${AMBER};"></div>
  <div class="pad">
    ${mark(AMBER, WHITE)}
    <h1 style="color:${WHITE};font-size:96px;margin-top:74px;"><span class="uw" style="--uw:${AMBER}"><span>FRANCE</span></span><br>SUISSE BELGIQUE<br>DOM-TOM</h1>
    <div style="margin-top:72px;display:flex;flex-direction:column;gap:38px;">
      ${zone.map((z) => `<div style="font-family:'ArchivoVF',sans-serif;font-weight:700;font-size:44px;color:${AMBER};display:flex;align-items:center;gap:26px;"><span style="width:20px;height:20px;border-radius:50%;background:${AMBER};display:inline-block;flex:none;"></span>${z}</div>`).join("")}
    </div>
  </div>
</div>`));

/* ---------- 12 CTA (photo) ---------- */
slides.push(page(`
<div class="slide" style="background:${TERRA}">
  <div class="shape qtr-tr" style="width:340px;height:340px;background:${CREAM};opacity:.9;"></div>
  <div class="shape circle" style="width:260px;height:260px;background:${CREAM};opacity:.15;left:-90px;top:520px;"></div>
  <div class="photo" style="width:280px;height:280px;right:90px;top:360px;"><img src="../assets/p12.jpg" alt=""></div>
  <div class="pad">
    ${mark(CREAM, WHITE)}
    <h1 style="color:${WHITE};font-size:96px;margin-top:92px;max-width:600px;">VOTRE PAGE<br>D'ACCUEIL<br><span class="lt">OFFERTE</span></h1>
    <div class="support" style="color:${WHITE};margin-top:46px;max-width:540px;">Une vraie maquette sur-mesure, avant tout engagement.</div>
    <div class="spacer"></div>
    <div class="btn" style="background:${WHITE};color:${TERRA};">www.actcstudio.fr</div>
  </div>
</div>`));

slides.forEach((html, i) => {
  const n = String(i + 1).padStart(2, "0");
  writeFileSync(join(here, "slides", `${n}.html`), html);
});
console.log("OK", slides.length, "slides");
