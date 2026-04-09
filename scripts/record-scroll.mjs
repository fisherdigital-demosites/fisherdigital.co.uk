import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2, // 2x for crisp quality
});
const page = await context.newPage();

await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });

// Wait for loader to finish
await page.waitForTimeout(3000);

// Scroll to "Your competitors are open for business" (Problem section heading)
await page.evaluate(() => {
  const el = document.getElementById('problem');
  if (el) el.scrollIntoView({ behavior: 'instant' });
});
await page.waitForTimeout(500);

// Start recording
await page.video; // not available in screenshot mode, use manual approach

// Take a full-page screenshot first for the Spline texture (high quality)
await page.screenshot({
  path: 'C:/Projects/Website Builder/apps/website/public/images/agency-screenshot-hq.png',
  clip: { x: 0, y: 0, width: 1440, height: 900 },
});

// Now record a scroll sequence as individual frames
const outputDir = 'C:/Projects/Website Builder/apps/website/scripts/frames';
const fs = await import('fs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Scroll to problem section start
const problemTop = await page.evaluate(() => {
  const el = document.getElementById('problem');
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
});

// Scroll to just before portfolio "Our work"
const portfolioTop = await page.evaluate(() => {
  const el = document.getElementById('portfolio');
  return el ? el.getBoundingClientRect().top + window.scrollY : 0;
});

console.log(`Recording from ${problemTop}px to ${portfolioTop}px`);

const totalScroll = portfolioTop - problemTop;
const fps = 24;
const durationSeconds = 8;
const totalFrames = fps * durationSeconds;
const scrollPerFrame = totalScroll / totalFrames;

// Set starting position
await page.evaluate((y) => window.scrollTo(0, y), problemTop);
await page.waitForTimeout(200);

for (let i = 0; i < totalFrames; i++) {
  const currentY = problemTop + (scrollPerFrame * i);
  await page.evaluate((y) => window.scrollTo(0, y), currentY);
  await page.waitForTimeout(10); // small settle
  await page.screenshot({
    path: `${outputDir}/frame-${String(i).padStart(4, '0')}.png`,
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  if (i % 24 === 0) console.log(`Frame ${i}/${totalFrames}`);
}

console.log('Frames captured. Stitching with ffmpeg...');
await browser.close();
