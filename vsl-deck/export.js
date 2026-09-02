/**
 * Export des 18 slides en JPG 1920 x 1080.
 *
 * Deux modes, au choix :
 *
 *   1. Playwright (le plus simple si vous l'installez) :
 *        npm i -D playwright && npx playwright install chromium
 *        node export.js
 *
 *   2. Sans rien installer, via le Chrome déjà présent sur le Mac :
 *        ./export.sh
 *
 * Les fichiers sortent dans out/slide-01.jpg, out/slide-02.jpg, etc.
 */

const path = require("node:path");
const fs = require("node:fs");

const DOSSIER = path.join(__dirname, "out");
const FICHIER = "file://" + path.join(__dirname, "deck.html");
const QUALITE = 95;

async function main() {
  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch {
    console.error(
      "Playwright n'est pas installé.\n" +
        "  npm i -D playwright && npx playwright install chromium\n" +
        "Ou utilisez ./export.sh, qui passe par le Chrome déjà présent sur la machine.",
    );
    process.exit(1);
  }

  fs.mkdirSync(DOSSIER, { recursive: true });

  const navigateur = await chromium.launch();
  const page = await navigateur.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });

  await page.goto(FICHIER, { waitUntil: "networkidle" });

  // Masque l'aide de navigation, qui n'a rien à faire dans l'export.
  await page.evaluate(() => document.body.classList.add("export"));

  const total = await page.evaluate(() => window.nbSlides);

  for (let i = 0; i < total; i++) {
    await page.evaluate((n) => window.allerA(n), i);
    await page.waitForTimeout(120);

    const nom = `slide-${String(i + 1).padStart(2, "0")}.jpg`;
    await page.screenshot({
      path: path.join(DOSSIER, nom),
      type: "jpeg",
      quality: QUALITE,
    });
    console.log("exporté :", nom);
  }

  await navigateur.close();
  console.log(`\n${total} slides dans ${DOSSIER}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
