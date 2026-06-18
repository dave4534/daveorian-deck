import { useEffect } from 'react';

export function useCaptureMode() {
  const params = new URLSearchParams(window.location.search);
  const captureMode = params.get('capture') === 'true';

  useEffect(() => {
    if (!captureMode) return;

    document.documentElement.classList.add('capture-mode');

    const script = document.createElement('script');
    script.src = 'https://mcp.figma.com/mcp/html-to-design/capture.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.documentElement.classList.remove('capture-mode');
      script.remove();
    };
  }, [captureMode]);

  return captureMode;
}

export function useUrlDeckParams(): { slide: number; part: number; theme?: string } {
  const params = new URLSearchParams(window.location.search);
  const slide = parseInt(params.get('slide') ?? '0', 10);
  const part = parseInt(params.get('part') ?? '0', 10);
  const theme = params.get('theme');
  return {
    slide: Number.isNaN(slide) ? 0 : slide,
    part: Number.isNaN(part) ? 0 : part,
    theme: theme ?? undefined,
  };
}
