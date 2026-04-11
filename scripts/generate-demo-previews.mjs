/**
 * generate-demo-previews.mjs
 *
 * Renders each portfolio demo HTML in headless Chromium and saves a
 * static screenshot to public/demos/<slug>/preview.webp. The portfolio
 * section swaps the iframe for this image on mobile, avoiding the cost
 * of mounting 3 full sub-documents on low-end phones.
 *
 * Re-run whenever a demo changes:
 *   node scripts/generate-demo-previews.mjs
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '..', 'public');

// Keep in sync with Portfolio.astro. Each entry is the demo folder slug
// under public/demos/. crop.h controls how much of the top of the demo
// is captured — 2x the viewport height produces a tall "hero + next
// section" shot that reads as a scroll-down preview on mobile.
const demos = [
  { slug: 'westbury-plumbing',  vw: 1280, vh: 800 },
  { slug: 'bright-smile-dental', vw: 390,  vh: 844 }, // mobile viewport — it's the iPhone frame preview
  { slug: 'redwood-and-co',     vw: 1280, vh: 800 },
];

const browser = await chromium.launch({ headless: true });

for (const demo of demos) {
  const filePath = path.join(publicDir, 'demos', demo.slug, 'index.html');
  // .jpg not .webp — Playwright's screenshot API only supports png/jpeg.
  // 82% JPEG is plenty for these at the small sizes we serve on mobile.
  const outPath  = path.join(publicDir, 'demos', demo.slug, 'preview.jpg');
  const fileUrl  = 'file:///' + filePath.replace(/\\/g, '/');

  const context = await browser.newContext({
    viewport: { width: demo.vw, height: demo.vh },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log(`[preview] ${demo.slug} → ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: 'load' });
  // Let fonts / lazy assets settle before snapping.
  await page.waitForTimeout(1500);

  await page.screenshot({
    path: outPath,
    type: 'jpeg',
    quality: 82,
    clip: { x: 0, y: 0, width: demo.vw, height: demo.vh },
  });

  console.log(`[preview]   → wrote ${outPath}`);
  await context.close();
}

await browser.close();
console.log('[preview] done.');
