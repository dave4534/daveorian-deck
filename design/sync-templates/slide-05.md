# Sync template: slide-05 (`slide-05` frame)

Use this as the pattern for syncing any Pencil frame back into code.

## Pencil frame

- **Name:** `slide-05`
- **URL state:** `?slide=4&part=0`
- **React:** `.slide-5` in [`DeckSlides.tsx`](../../src/deck/components/DeckSlides.tsx)
- **Layout:** `two-column`

## Layer → code mapping

| Pencil layer (suggested name) | Code target | Sync what |
|-------------------------------|-------------|-----------|
| `eyebrow` | `.slide-5 .eyebrow` | font size, color, letter-spacing → `tokens.css` or `.eyebrow` |
| `headline` | `.slide-5 h2` | size, weight, max-width |
| `bullet-list` | `.slide-5 ul` | gap between items (`gap: 14px`) |
| `bullet-item` | `.slide-5 li` | padding-left, line-height |
| `explainer` | `.slide-5 .explainer` | margin-top, max-width (`520px`) |
| `video` | `.slide-5 .slide-media--video` | width (`117%`), `border`, `border-radius` |
| `text-col` | `.slide-5 .text-col` | max-width, gap |
| `two-col` | `.slide-5 .two-col` | column gap → `--text-two-col-gap` |

## CSS files to touch

1. [`src/deck/tokens.css`](../../src/deck/tokens.css) — if colors or type sizes changed
2. [`src/deck/deck.css`](../../src/deck/deck.css) — slide-5 layout rules only (lines under `/* SLIDE 5 */`)

## Do NOT change when syncing layout

- `.slide-5 li::before` (accent bullet) — behavior/decoration
- `AutoPlayVideo` component logic
- `deckContent.slide5` copy (unless you intentionally move copy to Pencil)

## Agent prompt (copy/paste)

```
Sync Pencil frame slide-05 to the React deck:
1. Read Pencil variables → update src/deck/tokens.css where they differ
2. Read slide-05 frame layout (spacing, column widths, video size/border)
3. Update only .slide-5 rules in src/deck/deck.css
4. Do not change animations, navigation, or deckContent.ts
5. npm run build must pass
```

## Verify

- [ ] Slide 5 at 1920×1080 (`?capture=true&slide=4`) matches Pencil frame
- [ ] Responsive: 1440, 1280, 768, 390 — two-col stacks on narrow
- [ ] Video autoplays when slide is active
- [ ] Explainer uses `.explainer` (italic body)

Duplicate this file for other frames: `design/sync-templates/slide-NN.md`
