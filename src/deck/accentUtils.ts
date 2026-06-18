type Rgb = { r: number; g: number; b: number };

export function hexToRgb(hex: string): Rgb | null {
  const clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    return {
      r: parseInt(clean[0] + clean[0], 16),
      g: parseInt(clean[1] + clean[1], 16),
      b: parseInt(clean[2] + clean[2], 16),
    };
  }
  if (clean.length >= 6) {
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16),
    };
  }
  return null;
}

function clampChannel(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value)));
}

export function darkenHex(hex: string, amount = 0.14): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const factor = 1 - amount;
  const r = clampChannel(rgb.r * factor);
  const g = clampChannel(rgb.g * factor);
  const b = clampChannel(rgb.b * factor);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
    .toString(16)
    .padStart(2, '0')}`;
}

export function applyAccentTokens(root: HTMLElement, hex: string): void {
  const rgb = hexToRgb(hex);
  if (!rgb) return;

  root.style.setProperty('--accent', hex);
  root.style.setProperty('--accent-strong', darkenHex(hex));
  root.style.setProperty('--accent-soft', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.14)`);
  root.style.setProperty('--accent-line', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.30)`);
}
