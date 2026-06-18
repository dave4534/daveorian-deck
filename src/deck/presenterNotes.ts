import { useEffect } from 'react';
import { SLIDE_META } from './deckMeta';

const STORAGE_KEY = 'deck-state';

export function openPresenterNotes(): void {
  const win = window.open('', 'PresenterNotes', 'width=900,height=720');
  if (!win) return;

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
    body {
      font-family: 'Manrope', system-ui, sans-serif;
      background: #0c0c10;
      color: #fff;
      padding: 28px 32px 32px;
      min-height: 100vh;
    }
    .pn-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .pn-brand { font-family: 'Google Sans', sans-serif; font-weight: 500; font-size: 16px; color: #6366F1; letter-spacing: 0.01em; }
    .pn-count { font-size: 13px; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; }
    .pn-current {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 22px 24px;
      margin-bottom: 20px;
    }
    .pn-eyebrow { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #6366F1; font-weight: 700; margin-bottom: 10px; }
    .pn-title-current { font-family: 'Google Sans', sans-serif; font-weight: 700; font-size: 26px; line-height: 1.18; color: #fff; }
    .pn-part-label { font-size: 13px; color: rgba(255,255,255,0.55); margin-top: 8px; }
    .pn-next {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 14px 18px;
      margin-bottom: 24px;
    }
    .pn-title-next { font-family: 'Google Sans', sans-serif; font-weight: 500; font-size: 16px; color: rgba(255,255,255,0.78); line-height: 1.25; }
    .pn-notes {
      font-size: 16px;
      line-height: 1.65;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.01em;
      max-width: 700px;
    }
    .pn-nav-hint {
      margin-top: 28px; padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.06);
      font-size: 12px; color: rgba(255,255,255,0.4);
      letter-spacing: 0.04em;
    }
  </style>
</head>
<body>
  <div class="pn-header">
    <div class="pn-brand">Dave Orian — Presenter Notes</div>
    <div class="pn-count" id="pnCount"></div>
  </div>
  <div class="pn-current">
    <div class="pn-eyebrow">Current</div>
    <div class="pn-title-current" id="pnCurrent"></div>
    <div class="pn-part-label" id="pnPart"></div>
  </div>
  <div class="pn-next">
    <div class="pn-eyebrow" style="color: rgba(255,255,255,0.4); margin-bottom: 6px;">Next</div>
    <div class="pn-title-next" id="pnNext"></div>
  </div>
  <div class="pn-notes" id="pnNotes"></div>
  <div class="pn-nav-hint">← → arrows to navigate from this window</div>
  <script>
    const STORAGE_KEY = '${STORAGE_KEY}';
    function readState() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch (e) { return null; }
    }
    function writeState(state) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
    }
    function render(state, payload) {
      if (!state || !payload) return;
      const { slide, part, total } = state;
      const cur = payload.slides[slide] || {};
      const nxt = payload.slides[slide + 1];
      document.getElementById('pnCount').textContent = 'Slide ' + (slide + 1) + ' of ' + total;
      document.getElementById('pnCurrent').textContent = cur.title || ('Slide ' + (slide + 1));
      document.getElementById('pnPart').textContent = cur.partCount > 1 ? ('Part ' + (part + 1) + ' of ' + cur.partCount) : '';
      document.getElementById('pnNext').textContent = nxt ? nxt.title : '— End of deck —';
      document.getElementById('pnNotes').textContent = cur.notes || '';
    }
    window.__deckPayload = null;
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'deck-payload') {
        window.__deckPayload = e.data.payload;
        render(readState(), window.__deckPayload);
      }
    });
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) render(readState(), window.__deckPayload);
    });
    window.addEventListener('keydown', (e) => {
      const state = readState();
      if (!state || !window.__deckPayload) return;
      const total = state.total;
      const cur = window.__deckPayload.slides[state.slide];
      let { slide, part } = state;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (cur.partCount > 1 && part < cur.partCount - 1) { part++; }
        else if (slide < total - 1) { slide++; part = 0; }
        else { slide = 0; part = 0; }
        writeState({ slide, part, total, ts: Date.now() });
        render({ slide, part, total }, window.__deckPayload);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (part > 0) { part--; }
        else if (slide > 0) {
          slide--;
          const prevCur = window.__deckPayload.slides[slide];
          part = Math.max(0, (prevCur.partCount || 1) - 1);
        }
        writeState({ slide, part, total, ts: Date.now() });
        render({ slide, part, total }, window.__deckPayload);
      }
    });
    if (window.opener) {
      window.opener.postMessage({ type: 'deck-payload-request' }, '*');
    }
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

      const payload = {
        slides: SLIDE_META.map((s) => ({
          title: s.title,
          notes: s.notes,
          partCount: s.partCount,
        })),
      };

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
