/**
 * Shared deck navigation states for Figma capture and Pencil reference export.
 */

export const DECK_CAPTURES = [
  { slide: 0, part: 0, label: 'Slide 1' },
  { slide: 1, part: 0, label: 'Slide 2' },
  { slide: 2, part: 0, label: 'Slide 3' },
  { slide: 3, part: 0, label: 'Slide 4' },
  { slide: 4, part: 0, label: 'Slide 5' },
  { slide: 5, part: 0, label: 'Slide 6 — Part 1' },
  { slide: 5, part: 1, label: 'Slide 6 — Part 2' },
  { slide: 5, part: 2, label: 'Slide 6 — Part 3' },
  { slide: 5, part: 3, label: 'Slide 6 — Part 4' },
  { slide: 6, part: 0, label: 'Slide 7 — Part 1' },
  { slide: 6, part: 1, label: 'Slide 7 — Part 2' },
  { slide: 6, part: 2, label: 'Slide 7 — Part 3' },
  { slide: 6, part: 3, label: 'Slide 7 — Part 4' },
  { slide: 7, part: 0, label: 'Slide 8 — Part 1' },
  { slide: 7, part: 1, label: 'Slide 8 — Part 2' },
  { slide: 8, part: 0, label: 'Slide 9' },
];

/** Pencil frame name + reference PNG filename (e.g. slide-05, slide-06-part-02). */
export function frameFileName(slide, part) {
  const slideNum = slide + 1;
  const slideStr = String(slideNum).padStart(2, '0');
  if (slideNum <= 5 || slideNum === 9) {
    return `slide-${slideStr}`;
  }
  const partStr = String(part + 1).padStart(2, '0');
  return `slide-${slideStr}-part-${partStr}`;
}

export function buildDeckUrl(port, slide, part, { theme = 'dark' } = {}) {
  const base = `http://localhost:${port}/`;
  const qs = `capture=true&theme=${theme}&slide=${slide}&part=${part}`;
  return `${base}?${qs}`;
}
