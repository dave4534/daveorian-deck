/**
 * One-shot script: open each deck state in headless Chromium and trigger
 * Figma html-to-design capture via URL hash params.
 */
import { chromium } from 'playwright';
import { DECK_CAPTURES, buildDeckUrl } from './deck-captures.mjs';

const PORT = 5173;

const FIGMA_IDS = [
  '7879902c-d906-4db6-9069-49619bcd4e30',
  'db76ba7e-42af-4943-b157-efa5217ed283',
  'b646db01-49df-4766-9a27-effef9cc4c72',
  '0c965316-c73d-464e-84d3-c61f11421790',
  '7e069ca6-d621-411b-9fc5-5684c59b5a00',
  'ee53f657-1480-4b4b-876c-b27d78767fe5',
  '5294928f-cd26-49ce-bceb-2176657dcb7f',
  '530d6dff-5a67-4717-9254-d82d46931450',
  '1aa13c22-ff02-433f-9be5-0d8c9ab72478',
  'c9d585e9-58a5-4548-888b-f9746843c0ef',
  'e1e9e427-00db-4512-9a56-c77dbc6d24d0',
  'b0d27d41-313b-4fcf-a343-42589b17621e',
  '0e1b7357-8ff1-4b26-ac43-b9c4413adf0e',
  '95a9435e-920c-4071-9129-537dc3214c23',
  'f97a4e67-d21a-4661-9e24-f0d7ac2fb206',
  'f4bffda1-5f2c-461a-87bf-e0f90f946f00',
];

function buildFigmaUrl(c, figmaId) {
  const endpoint = encodeURIComponent(
    `https://mcp.figma.com/mcp/capture/${figmaId}/submit`,
  );
  const base = buildDeckUrl(PORT, c.slide, c.part, { theme: 'light' });
  const hash = `figmacapture=${figmaId}&figmaendpoint=${endpoint}&figmadelay=2500&figmaselector=%23stage`;
  return `${base}#${hash}`;
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1920, height: 1080 });

for (let i = 0; i < DECK_CAPTURES.length; i++) {
  const c = DECK_CAPTURES[i];
  const url = buildFigmaUrl(c, FIGMA_IDS[i]);
  console.log(`Capturing: ${c.label} …`);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });
    await page.waitForTimeout(6000);
    console.log(`  OK: ${c.label}`);
  } catch (err) {
    console.error(`  FAIL: ${c.label}`, err.message);
  }
}

await browser.close();
console.log('All capture URLs visited.');
