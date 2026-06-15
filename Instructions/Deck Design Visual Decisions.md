


## Purpose & Usage

- **Type:** Portfolio / case study
- **Delivery:** Speaker-led, presented live
- **Slide count:** TBD — determined when content MD is provided

---

## Mood & Feel

- **Vibe:** Warm & human — approachable, story-driven, personal
- **Density:** Low density / speaker-led — big ideas, fewer words, generous breathing room

---

## Theme System

- **Default state:** Dark mode on load
- **Toggle:** Three-state pill in top-right corner — Sun / System / Moon icons (Lucide)
- **Dark mode:** Dark background, white body text
- **Light mode:** Light background, very dark gray body text
- **Accent color:** Indigo — single value used in both modes (suggested: `#6366F1`)
- **Header text:** "Dave Orian - Sr. Product Designer" — same indigo color in both modes
- **Ghost button border:** Subtle, low-opacity border
- **Ghost button text:** Mode-dependent subtle text color, minimum AAA contrast compliance

---

## Typography

All text is left aligned unless stated specifically.

- **Headings:** Google Sans Semi-Bold — via [Google Fonts](https://fonts.google.com/specimen/Google+Sans)
- **All other text:** Manrope — via Google Fonts
	- H1: 32px
	- H2: 24px
	- H3: 20px
	- Body: 14px medium - line height 1.6em, letter spacing 0.015em
		- Explainer text: Italics
- **Source:** Google Fonts CDN

---

## Color Palette

- **Accent:** Indigo only — minimal, single-accent palette
- **Dark mode text:** White
- **Light mode text:** Very dark gray
- **No secondary accent color**

---

## Background

- **Treatment:** Subtle grid pattern — barely visible, just enough to feel structured
- **Implementation:** Pure CSS (no image asset)
- **Function:** Also serves as a content alignment guide

---

## Shape Language

- **Style:** Rounded — soft cards, pill shapes

---

## Spacing

- **Feel:** Balanced — comfortable margins, content-forward
- **Column alignment:** Text columns anchor flush to their nearest edge (left text = left wall, right visual = right wall), with a gutter between

---

## Layout System

Two named patterns. Each slide in the content MD will specify which to use.
In both cases the content as a whole must be vertically centered. For example if the content is H3, body on the left side + image on the right, the container that contains both of them must be vertically centered.

### Pattern A: `two-column`

- Left column: text content, left-edge anchored
- Right column: visual (screenshot, UI mockup, video, GIF), right-edge anchored
- Column ratio: determined per slide based on content
- Columns may be swapped (visual left, text right) — indicated in content MD

### Pattern B: `context-driven`

- No fixed structure — Claude Code determines the best layout based on that slide's content
- Used for title slides, section breaks, statements, or any slide where two-column doesn't serve the content
- Should feel intentional and designed, not like a fallback

---

## Animation

- **Level:** Moderate — purposeful transitions and reveals
- **Slide transition:** Ease-in-out, 800ms
- **Element-level animation:** Decided collaboratively per slide when content is provided
- **Reduced motion:** Must respect `prefers-reduced-motion`

---

## Navigation

- **Input:** Keyboard arrows + footer button clicks
- **Footer — first slide:** Next (→) only
- **Footer — middle slides:** Previous (←) and Next (→)
- **Footer — last slide:** Previous (←) and Start Over
- **Button style:** Ghost button — outline only, subtle border, AAA-compliant text
- **Multi-part slides:** When Next is clicked on a slide that has `Part 1`, `Part 2`, etc., advance through parts first; only then go to the next slide

---

## Multi-part slides

If a slide in the content MD defines `Part 1`, `Part 2`, etc., follow that slide's part instructions and this behavior:

(for each `part` allow the headline to remain while switching out the rest of the content - "click-to-reveal" style. So that the user / viewer continues to have context of the headline while the content beneath it is replaced. When the "Next" button is clicked in the deck, the existing content fades away and the new content slides in ease-out for 800ms, from transparent to 100%)

---

## Slide Chrome

### Floating Header (all slides)

- No background fill — floats above content
- Content: "Dave Orian - Sr. Product Designer"
- Text color: Indigo (same in both modes)

### Footer (context-sensitive, all slides)

- Ghost buttons with Lucide arrow icons (← →)
- Behavior changes per slide position (see Navigation above)

### Theme Toggle

- Position: Top-right corner, in the floating header
- Form: Three small icon buttons inside a pill — Sun / System / Moon
- Icons: Lucide

### Three-dot Menu

- Position: Top-right corner, to the right of the theme toggle pill
- Form: Vertical three-dot icon (Lucide `MoreVertical`), opens a fly-out menu on click
- Menu items: "Presenter Notes" (only item for now)

### Presenter Notes Window

- Triggered by: "Presenter Notes" in the three-dot menu
- Opens via: `window.open()` — a separate detachable browser window (can be dragged to a second screen)
- Layout mirrors Google Slides speaker view:
    - Current slide preview (large)
    - Next slide preview (smaller)
    - Presenter notes for current slide (text, readable size)
    - Current slide number / total
- Sync: Bidirectional — navigating in either window updates the other
- Sync mechanism: `localStorage` events (cross-window communication without a server)
- Notes per slide: Specified in the content MD under `notes:` per slide

### No additional chrome

- No slide numbers
- No progress bar
- No logo lockup beyond the header text

---

## Icons

- **Library:** [Lucide](https://lucide.dev/) via CDN
- **Usage:** Theme toggle (sun/moon/system), footer navigation arrows

---

## Technical Notes for Claude Code

- Single self-contained HTML file, all CSS/JS inline
- Fixed 1920×1080 stage, scaled uniformly to viewport (frontend-slides skill rules)
- CSS custom properties (`--` variables) for all theme values
- Default theme: dark mode on load; System toggle reads `prefers-color-scheme` when selected
- Grid background implemented in CSS only
- Slide visibility controlled via `.active` / `visibility` + `opacity` — never `display: none`
- Google Sans + Manrope loaded via Google Fonts CDN
- Lucide loaded via CDN
- Presenter notes window uses `localStorage` for bidirectional cross-window sync
- Content MD specifies notes per slide under `notes:` field
- Layout pattern per slide specified in the content MD (`layout: two-column` or `layout: context-driven`)

___

Apply these defaults unless the user overrides them in conversation.

| Topic | Decision |
|-------|----------|
| **Build target** | Generic template — keep `[customize: …]` placeholders; do not fill company-specific content unless asked |
| **Default theme** | Dark mode on load (theme toggle Sun / System / Moon still available) |
| **Timeline (Slide 2)** | Visual horizontal timeline with subtle hover and entrance animation — not click-to-expand |
| **Video (Slide 5)** | Muted, with native player controls visible |
| **Presenter notes** | Placeholder lorem ipsum in content MD until user replaces with real notes (30 words max of lorem ipsum per slide presenter note)