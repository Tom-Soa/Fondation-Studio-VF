// Rend les 12 slides en PNG 1080x1080 dans ./out
import puppeteer from "puppeteer";
import slides from "/Users/tomchazoule/Documents/Fondation Studio/Création de site/Fondation Studio/reseaux-sociaux/carrousel-services/slides.mjs";
import { mkdirSync, writeFileSync } from "fs";

const OUT = "/Users/tomchazoule/Documents/Fondation Studio/Création de site/Fondation Studio/reseaux-sociaux/carrousel-services/out";
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

const overflows = [];
for (let i = 0; i < slides.length; i++) {
  const n = String(i + 1).padStart(2, "0");
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  await page.setContent(slides[i], { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 700));
  const info = await page.evaluate(() => {
    const s = document.querySelector(".slide");
    return { sh: s.scrollHeight, sw: s.scrollWidth, bh: document.body.scrollHeight };
  });
  if (info.sh > 1081 || info.sw > 1081) overflows.push(n + " " + JSON.stringify(info));
  const buf = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: 1080, height: 1080 } });
  writeFileSync(OUT + "/" + n + ".png", buf);
  await page.close();
  console.log("OK", n, JSON.stringify(info));
}
await browser.close();
console.log(overflows.length ? "OVERFLOW:\n" + overflows.join("\n") : "no overflow");
