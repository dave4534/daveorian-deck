import { useEffect } from 'react';
import { SLIDE_META, slideNotes } from './deckMeta';

const STORAGE_KEY = 'deck-state';

let presenterWin: Window | null = null;

function buildPresenterPayload() {
  return {
    slides: SLIDE_META.map((s) => ({
      title: s.title,
      partCount: s.partCount,
      notesByPart: Array.from({ length: s.partCount }, (_, part) => slideNotes(s, part)),
    })),
  };
}

export function openPresenterNotes(): void {
  if (presenterWin && !presenterWin.closed) {
    presenterWin.close();
  }

  const payload = buildPresenterPayload();
  const embeddedPayload = JSON.stringify(payload).replace(/</g, '\\u003c');

  const win = window.open('', 'PresenterNotes', 'width=900,height=720');
  if (!win) return;
  presenterWin = win;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Presenter Notes — Dave Orian</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html {
      color-scheme: light only;
    }
    body {
      font-family: 'Manrope', system-ui, sans-serif;
      background: #fafaf7;
      color: #18181b;
      padding: 28px 32px 120px;
      min-height: 100vh;
    }
    .pn-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(24, 24, 27, 0.10);
    }
    .pn-brand { font-family: 'Google Sans', sans-serif; font-weight: 500; font-size: 16px; color: #6366F1; letter-spacing: 0.01em; }
    .pn-count { font-size: 13px; color: rgba(24, 24, 27, 0.48); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; }
    .pn-notes {
      font-size: 24px;
      line-height: 1.65;
      color: #18181b;
      letter-spacing: 0.01em;
      width: 100%;
      max-width: 700px;
      margin-inline-start: auto;
      white-space: pre-wrap;
      text-align: right;
      direction: rtl;
    }
    .pn-footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      padding: 12px 32px 24px;
      background: #fafaf7;
      border-top: 1px solid rgba(24, 24, 27, 0.10);
    }
    .pn-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    .pn-nav-btn {
      padding: 12px 22px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #ffffff;
      border: 1px solid rgba(24, 24, 27, 0.18);
      border-radius: 999px;
      color: #18181b;
      font-family: 'Manrope', system-ui, sans-serif;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition: background 180ms, border-color 180ms, opacity 240ms;
    }
    .pn-nav-btn:hover:not(:disabled) {
      background: rgba(24, 24, 27, 0.045);
      border-color: rgba(24, 24, 27, 0.28);
    }
    .pn-nav-btn.hidden { display: none; }
    .pn-nav-hint {
      margin-bottom: 12px;
      text-align: center;
      font-size: 12px;
      color: rgba(24, 24, 27, 0.48);
      letter-spacing: 0.04em;
    }
  </style>
</head>
<body>
  <div class="pn-header">
    <div class="pn-brand">Dave Orian — Presenter Notes</div>
    <div class="pn-count" id="pnCount"></div>
  </div>
  <div class="pn-notes" id="pnNotes"></div>
  <footer class="pn-footer">
    <div class="pn-nav-hint">Use Previous / Next or ← → arrows to navigate</div>
    <div class="pn-nav">
      <button type="button" class="pn-nav-btn hidden" id="pnPrev">← Previous</button>
      <button type="button" class="pn-nav-btn" id="pnNext">Next →</button>
    </div>
  </footer>
  <script>
    const STORAGE_KEY = '${STORAGE_KEY}';
    function readState() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch (e) { return null; }
    }
    function readStateOrDefault() {
      const state = readState();
      if (state) return state;
      return { slide: 0, part: 0, total: window.__deckPayload.slides.length, ts: Date.now() };
    }
    function writeState(state) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
    }
    function resolveNotes(cur, part) {
      if (!cur) return '';
      if (cur.notesByPart && cur.notesByPart[part]) return cur.notesByPart[part];
      if (Array.isArray(cur.notes)) return cur.notes[part] || cur.notes[0] || '';
      if (typeof cur.notes === 'string') return cur.notes;
      return '';
    }
    function render(state, payload) {
      if (!state || !payload) return;
      const { slide, part, total } = state;
      const cur = payload.slides[slide] || {};
      const partCount = cur.partCount || 1;
      const countLabel = partCount > 1
        ? 'Slide ' + (slide + 1) + ' · Part ' + (part + 1) + ' of ' + partCount
        : 'Slide ' + (slide + 1) + ' of ' + total;
      document.getElementById('pnCount').textContent = countLabel;
      document.getElementById('pnNotes').textContent = resolveNotes(cur, part);
      const showPrev = slide > 0 || part > 0;
      const onLast = slide === total - 1 && part >= partCount - 1;
      document.getElementById('pnPrev').classList.toggle('hidden', !showPrev);
      document.getElementById('pnNext').textContent = onLast ? 'Start Over ↺' : 'Next →';
    }
    function goNext() {
      const state = readStateOrDefault();
      if (!window.__deckPayload) return;
      const total = state.total;
      const cur = window.__deckPayload.slides[state.slide];
      let { slide, part } = state;
      if (cur.partCount > 1 && part < cur.partCount - 1) { part++; }
      else if (slide < total - 1) { slide++; part = 0; }
      else { slide = 0; part = 0; }
      const nextState = { slide, part, total, ts: Date.now() };
      writeState(nextState);
      render(nextState, window.__deckPayload);
    }
    function goPrev() {
      const state = readStateOrDefault();
      if (!window.__deckPayload) return;
      const total = state.total;
      let { slide, part } = state;
      if (part > 0) { part--; }
      else if (slide > 0) {
        slide--;
        const prevCur = window.__deckPayload.slides[slide];
        part = Math.max(0, (prevCur.partCount || 1) - 1);
      } else {
        return;
      }
      const nextState = { slide, part, total, ts: Date.now() };
      writeState(nextState);
      render(nextState, window.__deckPayload);
    }
    window.__deckPayload = ${embeddedPayload};
    const initialState = readStateOrDefault();
    writeState(initialState);
    render(initialState, window.__deckPayload);
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'deck-payload' && e.data.payload && e.data.payload.slides && e.data.payload.slides[0] && e.data.payload.slides[0].notesByPart) {
        window.__deckPayload = e.data.payload;
        render(readStateOrDefault(), window.__deckPayload);
      }
    });
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) render(readStateOrDefault(), window.__deckPayload);
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      }
    });
    document.getElementById('pnPrev').addEventListener('click', goPrev);
    document.getElementById('pnNext').addEventListener('click', goNext);
  </script>
</body>
</html>`;

  win.document.open();
  win.document.write(html);
  win.document.close();
}

export function usePresenterPayload() {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type !== 'deck-payload-request') return;
      const source = e.source as Window | null;
      if (!source) return;

      const payload = buildPresenterPayload();

      try {
        source.postMessage({ type: 'deck-payload', payload }, '*');
      } catch {
        /* ignore */
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);
}
