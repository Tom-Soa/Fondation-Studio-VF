// Genere les 12 slides HTML du carrousel services ACTC Studio (1080x1080).
// Tout est code : pas d'image, pas d'IA, pas de photo de stock.

const C = {
  alabaster: "#f9f9f7",
  midnight: "#0f172a",
  terra: "#c2410c",
  steel: "#64748b",
  grid: "#e5e5e1",
};

const FONTS =
  "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=IBM+Plex+Mono:wght@400;500&display=swap";

const base = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1080px;overflow:hidden}
body{font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.slide{position:relative;width:1080px;height:1080px;padding:96px;display:flex;flex-direction:column}
.dark{background:${C.midnight};color:${C.alabaster}}
.light{background:${C.alabaster};color:${C.midnight}}
.disp{font-family:"Inter Tight",sans-serif;font-weight:800;letter-spacing:-0.045em;line-height:0.92}
.ser{font-family:"Instrument Serif",serif;font-style:italic;font-weight:400;letter-spacing:-0.01em}
.mono{font-family:"IBM Plex Mono",monospace;text-transform:uppercase;letter-spacing:0.14em;font-size:26px;font-weight:500}
.terra{color:${C.terra}}
.wm{font-family:"Inter Tight",sans-serif;font-weight:800;letter-spacing:-0.04em;font-size:34px;text-transform:uppercase}
.top{display:flex;justify-content:space-between;align-items:baseline}
.rule{height:2px;width:100%}
.body{font-size:32px;line-height:1.45;font-weight:400}
.foot{margin-top:auto;display:flex;justify-content:space-between;align-items:flex-end}
`;

function wordmark(dark) {
  return `<div class="wm" style="color:${dark ? C.alabaster : C.midnight}">AC<span class="terra">TC</span></div>`;
}

function page(cls, inner) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS}" rel="stylesheet"><style>${base}</style></head>
<body><div class="slide ${cls}">${inner}</div></body></html>`;
}

const softDark = "rgba(249,249,247,0.60)";
const softLight = C.steel;

// Petite marque geometrique : bracket
function bracket(color) {
  return `<svg width="52" height="68" viewBox="0 0 52 68" fill="none"><path d="M50 2H2v64h48" stroke="${color}" stroke-width="3"/></svg>`;
}

function arrow(color) {
  return `<svg width="86" height="24" viewBox="0 0 86 24" fill="none"><path d="M0 12h80M70 3l11 9-11 9" stroke="${color}" stroke-width="3"/></svg>`;
}

// Liste de livrables avec filet fin
function items(list, color, lineColor) {
  return list
    .map(
      (t) =>
        `<li style="display:flex;gap:26px;align-items:baseline;padding:20px 0;border-top:1px solid ${lineColor}">
          <span class="mono" style="color:${C.terra};font-size:20px;flex:0 0 auto">/</span>
          <span style="font-size:32px;line-height:1.3;color:${color};font-weight:500">${t}</span>
        </li>`
    )
    .join("");
}

const slides = [];

/* ---------------- 01 COVER ---------------- */
slides.push(
  page(
    "dark",
    `<div class="top">${wordmark(true)}<div class="mono" style="color:${softDark}">ACTC Studio</div></div>
     <div class="mono" style="color:${C.terra};margin-top:72px">Ce que nous faisons</div>
     <div class="disp" style="font-size:190px;margin-top:40px">nos<br><span class="ser terra" style="font-size:200px">services</span>.</div>
     <div style="margin-top:44px;font-size:34px;line-height:1.4;color:${softDark};max-width:660px">Quatre façons de faire travailler le digital pour votre entreprise.</div>
     <div class="foot">
       <div class="mono" style="color:${softDark}">www.actcstudio.fr</div>
       <div style="display:flex;align-items:center;gap:20px">
         <span class="mono" style="color:${C.alabaster}">faites défiler</span>${arrow(C.terra)}
       </div>
     </div>`
  )
);

/* --------- helper pour slides "ce que c'est" (denses) --------- */
function whatIs({ idx, title, serif, list, price, dark, titleSize, over }) {
  const ts = titleSize || 88;
  const cls = dark ? "dark" : "light";
  const soft = dark ? softDark : softLight;
  const line = dark ? "rgba(249,249,247,0.18)" : C.grid;
  const txt = dark ? C.alabaster : C.midnight;
  return page(
    cls,
    `<div class="top">${wordmark(dark)}<div class="mono" style="color:${soft}">${idx}/04 · ce que c'est</div></div>
     <div class="disp" style="font-size:${ts}px;margin-top:70px;max-width:920px">${title}${over ? " " + over : ""} <span class="ser terra" style="font-size:${ts + 6}px;white-space:nowrap;margin-left:0.06em">${serif}</span></div>
     <ul style="list-style:none;margin-top:58px">${items(list, txt, line)}</ul>
     <div class="foot">
       <div style="display:flex;align-items:baseline;gap:18px">
         <span class="mono" style="color:${soft};font-size:22px">Tarif</span>
         <span class="disp terra" style="font-size:44px;letter-spacing:-0.03em">${price}</span>
       </div>
       <div class="mono" style="color:${soft};font-size:22px">actcstudio.fr</div>
     </div>`
  );
}

/* --------- helper pour slides "a quoi ca sert" (aerees) --------- */
function whyMatters({ idx, kicker, big, serifWord, tail, para, dark, extra }) {
  const cls = dark ? "dark" : "light";
  const soft = dark ? softDark : softLight;
  const txt = dark ? C.alabaster : C.midnight;
  return page(
    cls,
    `<div class="top">${wordmark(dark)}<div class="mono" style="color:${soft}">${idx}/04 · à quoi ça sert</div></div>
     <div class="mono" style="color:${C.terra};margin-top:${extra ? 58 : 78}px">${kicker}</div>
     <div class="disp" style="font-size:${extra ? 96 : 104}px;margin-top:32px;max-width:900px">${big} <span class="ser terra" style="font-size:${extra ? 102 : 110}px;margin-left:0.06em">${serifWord}</span>${tail}</div>
     <div style="margin-top:${extra ? 38 : 48}px;max-width:790px;font-size:${extra ? 32 : 34}px;line-height:1.45;color:${dark ? softDark : C.steel}">${para}</div>
     ${extra || ""}
     <div class="foot" style="padding-top:34px">${bracket(C.terra)}<div class="mono" style="color:${soft};font-size:22px">actcstudio.fr</div></div>`
  );
}

/* ---------------- 02 / 03 : SITE INTERNET ---------------- */
slides.push(
  whatIs({
    idx: "01",
    title: "Création de site",
    serif: "internet",
    list: [
      "Design sur-mesure, pensé pour votre métier",
      "Référencement Google intégré dès la conception",
      "Site rapide et lisible sur téléphone",
      "Hébergement gratuit, aucun abonnement",
      "Le site vous appartient",
      "Livré en 21 jours, du contrat signé à la mise en ligne",
    ],
    price: "à partir de 1 400 euros",
    dark: false,
  })
);

slides.push(
  page(
    "dark",
    `<div class="top">${wordmark(true)}<div class="mono" style="color:${softDark}">01/04 · à quoi ça sert</div></div>
     <div class="mono" style="color:${C.terra};margin-top:56px">Être trouvé, puis être choisi</div>
     <div style="display:flex;align-items:flex-end;gap:48px;margin-top:10px">
       <div class="disp" style="font-size:392px;line-height:0.80;color:${C.terra};flex:0 0 auto">50</div>
       <div class="mono" style="color:${softDark};font-size:21px;line-height:1.75;padding-bottom:26px;max-width:330px">une cinquantaine<br>d'entreprises accompagnées,<br>tous secteurs</div>
     </div>
     <div style="height:1px;background:rgba(249,249,247,0.18);margin-top:62px"></div>
     <div style="display:flex;gap:56px;margin-top:46px">
       <div class="disp" style="font-size:64px;flex:0 0 470px;line-height:1.0">Visible sur <span class="ser terra" style="font-size:68px">Google</span>, crédible avant l'appel.</div>
       <div style="flex:1;font-size:30px;line-height:1.5;color:${softDark};padding-top:6px">Un prospect vous cherche avant de vous contacter. Un site clair transforme cette recherche en appel, puis en demande de devis.</div>
     </div>
     <div class="foot">${bracket(C.terra)}<div class="mono" style="color:${softDark};font-size:22px">actcstudio.fr</div></div>`
  )
);

/* ---------------- 04 / 05 : PUBLICITE EN LIGNE ---------------- */
slides.push(
  whatIs({
    idx: "02",
    title: "Publicité",
    serif: "en ligne",
    list: [
      "Création et gestion des campagnes Meta Ads et Google Ads",
      "Conception des visuels et des messages publicitaires",
      "Ciblage des audiences qui comptent pour vous",
      "Mise en place du suivi des résultats",
      "Optimisation mensuelle des campagnes",
    ],
    price: "sur devis",
    dark: true,
  })
);

slides.push(
  whyMatters({
    idx: "02",
    kicker: "Investir de l'argent plutôt que du temps",
    big: "Les demandes arrivent pendant que vous",
    serifWord: "travaillez",
    tail: ".",
    para:
      "Des demandes de devis pour les entreprises de services, des ventes récurrentes pour les boutiques en ligne. Dans les DOM-TOM, la concurrence sur les espaces publicitaires est plus faible, donc le coût pour toucher quelqu'un y est plus bas.",
    dark: false,
    extra: `<div style="margin-top:34px;display:flex;align-items:center;gap:22px;border-top:1px solid ${C.grid};padding-top:26px">
      <span class="mono" style="color:${C.terra};font-size:20px">Note</span>
      <span style="font-size:27px;color:${C.midnight};font-weight:500">ACTC Studio diffuse ses propres publicités.</span></div>`,
  })
);

/* ---------------- 06 / 07 : APPLICATIONS WEB ---------------- */
slides.push(
  whatIs({
    idx: "03",
    title: "Applications web",
    serif: "sur-mesure",
    titleSize: 76,
    list: [
      "Suivi de vos clients et de vos dossiers",
      "Planning et prise de rendez-vous",
      "Devis et factures",
      "Outils internes adaptés à votre organisation",
      "Accessible depuis n'importe quel navigateur, sans installation",
    ],
    price: "sur devis",
    dark: false,
  })
);

slides.push(
  whyMatters({
    idx: "03",
    kicker: "Fini les tableurs éparpillés",
    big: "Un seul endroit où toute l'équipe",
    serifWord: "travaille",
    tail: ".",
    para:
      "Remplacer les fichiers dispersés et le papier, gagner des heures chaque semaine, et disposer d'un outil façonné pour votre métier plutôt que d'adapter votre métier à un logiciel générique.",
    dark: true,
  })
);

/* ---------------- 08 / 09 : CONSEIL ---------------- */
slides.push(
  whatIs({
    idx: "04",
    title: "Conseil",
    serif: "sur-mesure",
    list: [
      "Accompagnement stratégique de votre développement",
      "Travail sur le positionnement et sur l'offre",
      "Stratégie d'acquisition de nouveaux clients",
      "Choix des bons canaux, au bon moment",
      "Développement commercial et marketing digital réunis",
    ],
    price: "sur devis",
    dark: true,
  })
);

slides.push(
  whyMatters({
    idx: "04",
    kicker: "Savoir où investir avant de dépenser",
    big: "Un plan taillé pour votre",
    serifWord: "entreprise",
    tail: ".",
    para:
      "Éviter de construire la mauvaise chose, puis avancer avec une direction claire. Tom-Soa Cyprien travaille le développement business et commercial, Andylane Chatenay le marketing digital : deux compétences complémentaires sur le même projet.",
    dark: false,
  })
);

/* ---------------- 10 RECAPITULATIF ---------------- */
{
  const rows = [
    ["01", "Création de site internet", "à partir de 1 400 euros"],
    ["02", "Publicité en ligne, Meta et Google", "sur devis"],
    ["03", "Applications web sur-mesure", "sur devis"],
    ["04", "Conseil sur-mesure", "sur devis"],
  ];
  const html = rows
    .map(
      ([n, t, p]) => `<div style="display:flex;align-items:baseline;gap:34px;padding:34px 0;border-top:1px solid ${C.grid}">
        <span class="mono terra" style="font-size:24px;flex:0 0 58px">${n}</span>
        <span class="disp" style="font-size:52px;flex:1;letter-spacing:-0.035em">${t}</span>
        <span style="font-size:27px;color:${C.steel};font-weight:500;text-align:right;flex:0 0 275px">${p}</span>
      </div>`
    )
    .join("");
  slides.push(
    page(
      "light",
      `<div class="top">${wordmark(false)}<div class="mono" style="color:${C.steel}">Récapitulatif</div></div>
       <div class="disp" style="font-size:96px;margin-top:66px">Quatre <span class="ser terra" style="font-size:102px;margin-left:0.06em">services</span>.</div>
       <div style="margin-top:14px;font-size:30px;color:${C.steel}">E-commerce à partir de 2 900 euros.</div>
       <div style="margin-top:40px">${html}<div style="border-top:1px solid ${C.grid}"></div></div>
       <div class="foot"><div class="mono" style="color:${C.steel};font-size:22px">Capture d'écran bienvenue</div><div class="mono" style="color:${C.steel};font-size:22px">actcstudio.fr</div></div>`
    )
  );
}

/* ---------------- 11 ZONE ET REASSURANCE ---------------- */
{
  const zones = ["France", "Suisse", "Belgique", "DOM-TOM"];
  const zoneHtml = zones
    .map(
      (z) =>
        `<span class="disp" style="font-size:96px;letter-spacing:-0.045em">${z}<span class="terra">.</span></span>`
    )
    .join(" ");
  const trust = [
    "Hébergement gratuit",
    "Aucun abonnement",
    "Le site vous appartient",
    "Livré en 21 jours",
  ]
    .map(
      (t) => `<div style="border-top:1px solid rgba(249,249,247,0.20);padding:30px 0;display:flex;gap:22px;align-items:baseline">
        <span class="mono terra" style="font-size:20px">+</span>
        <span style="font-size:33px;font-weight:500;line-height:1.3">${t}</span></div>`
    )
    .join("");
  slides.push(
    page(
      "dark",
      `<div class="top">${wordmark(true)}<div class="mono" style="color:${softDark}">Où et comment</div></div>
       <div class="mono" style="color:${C.terra};margin-top:74px">Nous intervenons sur toute la zone</div>
       <div style="margin-top:36px;display:flex;flex-wrap:wrap;gap:6px 30px;max-width:920px">${zoneHtml}</div>
       <div style="margin-top:80px;display:grid;grid-template-columns:1fr 1fr;gap:0 60px">${trust}</div>
       <div class="foot">${bracket(C.terra)}<div class="mono" style="color:${softDark};font-size:22px">actcstudio.fr</div></div>`
    )
  );
}

/* ---------------- 12 CALL TO ACTION ---------------- */
slides.push(
  page(
    "light",
    `<div class="top">${wordmark(false)}<div class="mono" style="color:${C.steel}">Pour commencer</div></div>
     <div class="mono" style="color:${C.terra};margin-top:86px">Avant tout engagement</div>
     <div class="disp" style="font-size:118px;margin-top:34px;max-width:900px">La maquette de votre page d'accueil <span class="ser terra" style="font-size:124px;margin-left:0.10em">offerte</span>.</div>
     <div style="margin-top:44px;font-size:34px;line-height:1.45;color:${C.steel};max-width:780px">Vous la voyez avant de décider. Écrivez-nous en message privé, ou passez par le site.</div>
     <div class="foot" style="align-items:flex-end">
       <div>
         <div class="wm" style="font-size:88px;letter-spacing:-0.05em">AC<span class="terra">TC</span></div>
         <div class="mono" style="color:${C.steel};font-size:20px;margin-top:14px">Studio</div>
       </div>
       <div style="text-align:right">
         ${arrow(C.terra)}
         <div class="disp" style="font-size:44px;margin-top:20px;letter-spacing:-0.03em">www.actcstudio.fr</div>
       </div>
     </div>`
  )
);

export default slides;
