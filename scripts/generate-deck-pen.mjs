/**
 * Generates design/deck.pen scaffold with 16 named 1920×1080 frames.
 * Run: node scripts/generate-deck-pen.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DECK_CAPTURES, frameFileName } from './deck-captures.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'design', 'deck.pen');

const FRAME_W = 1920;
const FRAME_H = 1080;
const GAP_X = 80;
const GAP_Y = 80;
const COLS = 4;

const children = DECK_CAPTURES.map((c, i) => {
  const name = frameFileName(c.slide, c.part);
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const x = col * (FRAME_W + GAP_X);
  const y = row * (FRAME_H + GAP_Y);

  return {
    id: `frame-${name}`,
    type: 'frame',
    name,
    x,
    y,
    width: FRAME_W,
    height: FRAME_H,
    clip: true,
    fill: '#0c0c10',
    children: [
      {
        id: `label-${name}`,
        type: 'text',
        name: 'frame-label',
        x: 32,
        y: 32,
        content: `${name} · ${c.label}`,
        fontSize: 14,
        fill: '#6366F1',
        textGrowth: 'auto',
      },
      {
        id: `guide-${name}`,
        type: 'text',
        name: 'reference-guide',
        x: 32,
        y: 64,
        content: `Drop design/reference/${name}.png as locked guide layer`,
        fontSize: 12,
        fill: 'rgba(255,255,255,0.48)',
        textGrowth: 'auto',
      },
    ],
  };
});

const doc = {
  version: '2.13',
  themes: {
    mode: ['dark', 'light'],
  },
  variables: {
    accent: { type: 'color', value: '#6366F1' },
    bg: {
      type: 'color',
      value: [
        { value: '#0c0c10', theme: 'dark' },
        { value: '#fafaf7', theme: 'light' },
      ],
    },
    fg: {
      type: 'color',
      value: [
        { value: '#ffffff', theme: 'dark' },
        { value: '#000000', theme: 'light' },
      ],
    },
    'text-h1-size': { type: 'number', value: 36 },
    'text-h2-size': { type: 'number', value: 24 },
    'text-h3-size': { type: 'number', value: 20 },
    'text-body-size': { type: 'number', value: 16 },
    'text-small-body-size': { type: 'number', value: 14 },
    'text-eyebrow-size': { type: 'number', value: 14 },
    'media-border': {
      type: 'color',
      value: [
        { value: '#71717a', theme: 'dark' },
        { value: '#a1a1aa', theme: 'light' },
      ],
    },
  },
  children,
};

await mkdir(path.dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(doc, null, 2), 'utf8');
console.log(`Wrote ${OUT} (${children.length} frames)`);
