# Pencil hybrid workflow

Visual polish happens in **Pencil** (`design/deck.pen`). The live deck stays **React** for navigation, animations, video, and presenter notes.

## Architecture

| Layer | Location | You edit when… |
|-------|----------|----------------|
| Design tokens | [`src/deck/tokens.css`](../src/deck/tokens.css) + Pencil variables | Colors, type sizes, spacing |
| Layout + motion | [`src/deck/deck.css`](../src/deck/deck.css) | Grid, slide layout, **animations** |
| Copy | [`src/deck/deckContent.ts`](../src/deck/deckContent.ts) | Wording |
| Structure | [`src/deck/components/DeckSlides.tsx`](../src/deck/components/DeckSlides.tsx) | Rare — after major layout sync |
| Behavior | `useDeckNavigation`, `AutoPlayVideo`, `CounterStat`, `DeckChrome` | Never in Pencil |

---

## Phase 0 — One-time setup (you)

Per [Pencil Installation](https://docs.pencil.dev/getting-started/installation):

- [ ] Install **Pencil** extension in Cursor (Extensions → search “Pencil”)
- [ ] Complete activation (email)
- [ ] Open [`design/deck.pen`](../design/deck.pen) — confirm Pencil canvas icon appears
- [ ] **Settings → Tools & MCP** — verify Pencil MCP server is connected (Pencil app/extension must be running)
- [ ] Optional: `npx pencil login` for CLI features

CLI only (`@pencil.dev/cli`) does not replace the extension for visual editing.

---

## Phase 1 — Reference screenshots

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run export:refs
```

Writes PNGs to `design/reference/` and updates `design/reference/manifest.json`.  
PNG files are gitignored; regenerate anytime the React deck changes.

Options:

- `PORT=4173 npm run export:refs` if using `npm run preview`
- `THEME=light npm run export:refs` for light-mode references

---

## Phase 2 — Build frames in Pencil (you)

1. Open `design/deck.pen` in Cursor (16 frames pre-scaffolded at 1920×1080)
2. For each frame (e.g. `slide-05`):
   - Drag `design/reference/slide-05.png` onto canvas as a **locked guide** layer
   - Rebuild layout with Pencil primitives on top
   - Bind colors/type to **variables** (mirror `tokens.css`)
   - Use only: **h1, h2, h3, body, explainer, small-body, eyebrow**
3. Name layers clearly for animated regions: `stack-icon-1`, `milestone-2015`, etc.
4. **Do not animate in Pencil** — motion stays in CSS (`stackSlideIn`, `msReveal`, etc.)

Regenerate scaffold after changing frame list:

```bash
npm run generate:pen
```

---

## Phase 3 — Sync Pencil → code (repeat)

When a frame looks right:

1. **Tokens** — Ask agent: *“Sync Pencil variables to `tokens.css`”*
2. **Layout** — Ask agent: *“Apply `slide-05` frame layout to slide 5”* (see [`design/sync-templates/slide-05.md`](../design/sync-templates/slide-05.md))
3. **Copy** — Still edit [`deckContent.ts`](../src/deck/deckContent.ts) unless you explicitly pull text from Pencil
4. **Verify** — `npm run dev`; check 1440px, 1280px, 768px, 390px

---

## Frame index (16 states)

| Frame name | slide | part | Label |
|------------|-------|------|-------|
| slide-01 | 0 | 0 | Slide 1 |
| slide-02 | 1 | 0 | Slide 2 |
| slide-03 | 2 | 0 | Slide 3 |
| slide-04 | 3 | 0 | Slide 4 |
| slide-05 | 4 | 0 | Slide 5 |
| slide-06-part-01 … 04 | 5 | 0–3 | Slide 6 parts |
| slide-07-part-01 … 04 | 6 | 0–3 | Slide 7 parts |
| slide-08-part-01 … 02 | 7 | 0–1 | Slide 8 parts |
| slide-09 | 8 | 0 | Slide 9 |

Shared capture list: [`scripts/deck-captures.mjs`](../scripts/deck-captures.mjs)

---

## What stays in code only

- Slide transitions (`.slide.active` opacity)
- Stack icon slide-in (`stackSlideIn`)
- Timeline milestone reveal (`msReveal`)
- Theme card reveal (`themeReveal`)
- Counter stat animation (`CounterStat`)
- Video autoplay (`AutoPlayVideo`)
- Header, footer, keyboard nav

---

## Related scripts

| Command | Purpose |
|---------|---------|
| `npm run export:refs` | PNG references for Pencil guides |
| `npm run generate:pen` | Regenerate `design/deck.pen` scaffold |
| `node scripts/capture-deck-to-figma.mjs` | Legacy Figma html-to-design capture |
