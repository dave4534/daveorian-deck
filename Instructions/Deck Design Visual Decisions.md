


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

## Typography + Text

All text is left aligned unless stated specifically.

- **Headings:** Google Sans Semi-Bold — via [Google Fonts](https://fonts.google.com/specimen/Google+Sans)
- **All other text:** Manrope — via Google Fonts
	- H1: 32px
	- H2: 26px
	- H3: 20px
	- Body: 15px medium - line height 1.6em, letter spacing 0.015em
		- Explainer text: Italics
	- Eyebrow: The small indigo colored text, often used above H1 or H2 - must used the body font in all caps
	- Small-body: 13px medium
- **Source:** Google Fonts CDN



##### Containers with multiple elements of text

- Max width 400px

---

## Color Palette

- **Accent:** Indigo only — minimal, single-accent palette
- **Dark mode text:** White
- **Light mode text:** Black
- **No secondary accent color**

___

## Images, Videos + SVGs

- If displayed in a container, display in container with 5% lighter color in dark mode, and 5% darker color for light mode
- Avoid the BG of the container being transparent
- Image should fill 100% of the container with padding of 24px on all 4 sides of image
- Image should center vertically and horizontally within container
- Border radius 8px
- Border: 1px, gray in light mode and dark gray in dark mode
- Images and videos containers should be 40% width 
- For images that are on the right side of a two column view. And there is a container for the right column. The image should have a minimum width of 700px.

---

## Background

- **Treatment:** Subtle grid pattern — barely visible, just enough to feel structured. Should span the entire view-width and view-height of the web page.
- **Implementation:** Pure CSS (no image asset)
- **Function:** Also serves as a content alignment guide

---

## Shape Language

- **Style:** Rounded — soft cards, pill shapes

---

## Layout System

Two named patterns. Each slide in the content MD will specify which to use.
In both cases the content as a whole must be vertically centered. For example if the content is H3, body on the left side + image on the right, the container that contains both of them must be vertically centered.

Left wall == The left most part of the slideshow container
Right wall == The rightmost part of the container

## Responsiveness
## Layout & responsiveness (required)

**Do not** use a fixed 1920×1080 slide canvas with `transform: scale()` to fit the viewport.
Ignore `Instructions/frontend-slides.md` fixed-stage rules for this project.

Build the deck as a **normal responsive web app**:

- Layout fills the viewport and reflows at breakpoints — no letterboxing/zooming of a slide stage.
- Use fluid sizing: `max-width`, `%`, `fr`, `clamp()`, and CSS custom properties — not a single fixed design canvas.
- Slide **navigation state** (slide index, multi-part states, URL params `?slide=&part=`, keyboard nav) is separate from layout — keep stateful deck behavior, but not fixed-stage scaling.
- Author typography and spacing for a **content column** (e.g. `max-width: 1200–1400px`, centered), not for 1920×1080 coordinates.
- Add breakpoints for dense slides (timeline, two-column, multi-part) so narrow viewports stack instead of shrinking uniformly.
- When eyebrow is followed by H1 or H2 and then body, spacing between them should be 16px


**Before calling the deck done, verify at:** desktop (1440px+), laptop (~1280px), and tablet (~768px) — layout should reflow, not scale.

---

## Spacing

- **Feel:** Balanced — comfortable margins, content-forward
- **Column alignment:** Text columns anchor flush to their nearest edge (left text = left wall, right visual = right wall), with a gutter between

### Pattern A: `two-column`

- Left column: text content, left-edge anchored
- Right column: visual (screenshot, UI mockup, video, GIF), right-edge anchored
- Column ratio: determined per slide based on content
- Columns may be swapped (visual left, text right) — indicated in content MD
-  In two-column layouts the left content container must align with the top-left of the header bar 
-  Right side content must align to the rightmost part of the header bar

### Pattern B: `context-driven`

- No fixed structure — Claude Code determines the best layout based on that slide's content
- Used for title slides, section breaks, statements, or any slide where two-column doesn't serve the content
- Should feel intentional and designed, not like a fallback

---

## Interactivity

- Avoid progress bars for showing reveal steps within a slide

___

## Animation

- **Level:** Moderate — purposeful transitions and reveals
- **Slide transition:** Ease-in-out, 800ms
- **Element-level animation:** Decided collaboratively per slide when content is provided
- **Reduced motion:** Must respect `prefers-reduced-motion`


---

## Multi-part slides

If a slide in the content MD defines `Part 1`, `Part 2`, etc., follow that slide's part instructions and this behavior:

(for each `part` allow the headline to remain while switching out the rest of the content - "click-to-reveal" style. So that the user / viewer continues to have context of the headline while the content beneath it is replaced. When the "Next" button is clicked in the deck, the existing content fades away and the new content slides in ease-out for 800ms, from transparent to 100%)

---

## Slide Chrome

### Floating Header/Header Bar (all slides)

No background fill — floats above content
#### Left side of header bar
- Content: "Dave Orian - Sr. Product Designer" (aligned left)
- Text color: Indigo (same in both modes)
#### 




### Footer (context-sensitive, all slides)

- Ghost buttons with Lucide arrow icons (← →)
- Behavior changes per slide position (see Navigation above)

### No additional chrome

- No slide numbers
- No progress bar
- No logo lockup beyond the header text

---

## Icons

- **Library:** [Lucide](https://lucide.dev/) via CDN

---

## Technical Notes for Claude Code

- Responsive React/Vite app (or single self-contained HTML file for legacy decks)
- Responsive flex/grid layout with CSS custom properties — no `transform: scale()` stage
- CSS custom properties (`--` variables) for all theme values
- Default theme: dark mode on load; System toggle reads `prefers-color-scheme` when selected
- Grid background implemented in CSS only
- Slide visibility controlled via `.active` / `visibility` + `opacity` — never `display: none`
- Google Sans + Manrope loaded via Google Fonts CDN
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