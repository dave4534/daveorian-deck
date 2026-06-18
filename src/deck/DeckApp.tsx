import { useEffect } from 'react';
import { useDeckNavigation } from './hooks/useDeckNavigation';
import { useTheme, type ThemeMode } from './hooks/useTheme';
import { useCaptureMode, useUrlDeckParams } from './hooks/useUrlParams';
import { usePresenterPayload } from './presenterNotes';
import { DeckFooter, DeckHeader } from './components/DeckChrome';
import { DeckSlides } from './components/DeckSlides';

export function DeckApp() {
  const captureMode = useCaptureMode();
  const urlParams = useUrlDeckParams();
  const initialTheme =
    urlParams.theme === 'light' || urlParams.theme === 'dark' || urlParams.theme === 'system'
      ? (urlParams.theme as ThemeMode)
      : undefined;

  const { themeMode, setThemeMode } = useTheme(initialTheme);
  usePresenterPayload();

  const nav = useDeckNavigation(urlParams.slide, urlParams.part);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nav.next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        nav.prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        nav.goHome();
      } else if (e.key === 'End') {
        e.preventDefault();
        nav.goEnd();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [nav]);

  return (
    <div className="deck-viewport">
      <div className="deck-stage" id="stage">
        {!captureMode && (
          <DeckHeader
            themeMode={themeMode}
            onThemeChange={setThemeMode}
            onGoHome={nav.goHome}
          />
        )}

        <div className="deck-main">
          <DeckSlides
            currentSlide={nav.currentSlide}
            currentPart={nav.currentPart}
            captureMode={captureMode}
          />
        </div>

        {!captureMode && (
          <DeckFooter
            showPrev={nav.showPrev}
            onLastSlide={nav.onLastSlide}
            onLastPart={nav.onLastPart}
            onPrev={nav.prev}
            onNext={nav.next}
          />
        )}
      </div>
    </div>
  );
}
