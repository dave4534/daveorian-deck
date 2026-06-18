/**
 * Export 1920×1080 reference PNGs for each deck state into design/reference/.
 *
 * Prerequisite: dev server running — npm run dev (port 5173) or npm run preview (4173).
 *
 * Usage:
 *   npm run export:refs
 *   PORT=4173 npm run export:refs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { DECK_CAPTURES, buildDeckUrl, frameFileName } from './deck-captures.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'design', 'reference');
const PORT = Number(process.env.PORT) || 5173;
const THEME = process.env.THEME || 'dark';

async function waitForServer(port) {
  const url = `http://localhost:${port}/`;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(
    `Dev server not reachable at ${url}. Start with: npm run dev (or PORT=4173 npm run preview)`,
  );
}

await mkdir(OUT_DIR, { recursive: true });
await waitForServer(PORT);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1920, height: 1080 });

const manifest = {
  generatedAt: new Date().toISOString(),
  port: PORT,
  theme: THEME,
  viewport: { width: 1920, height: 1080 },
  frames: [],
};

for (const c of DECK_CAPTURES) {
  const fileName = `${frameFileName(c.slide, c.part)}.png`;
  const filePath = path.join(OUT_DIR, fileName);
  const url = buildDeckUrl(PORT, c.slide, c.part, { theme: THEME });
  const frameName = frameFileName(c.slide, c.part);

  console.log(`Exporting: ${c.label} → ${fileName}`);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(1500);
    const stage = page.locator('#stage');
    await stage.screenshot({ path: filePath });
    manifest.frames.push({
      frameName,
      fileName,
      label: c.label,
      slide: c.slide,
      part: c.part,
      url,
    });
    console.log(`  OK`);
  } catch (err) {
    console.error(`  FAIL: ${err.message}`);
    manifest.frames.push({
      frameName,
      fileName,
      label: c.label,
      slide: c.slide,
      part: c.part,
      url,
      error: err.message,
    });
  }
}

await writeFile(
  path.join(OUT_DIR, 'manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf8',
);

await browser.close();
console.log(`\nWrote ${manifest.frames.length} entries to design/reference/manifest.json`);
