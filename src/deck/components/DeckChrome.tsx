import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  Moon,
  MoreVertical,
  NotebookPen,
  RotateCcw,
  Sun,
} from 'lucide-react';
import type { ThemeMode } from '../hooks/useTheme';
import { openPresenterNotes } from '../presenterNotes';

type ThemeProps = {
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  onGoHome: () => void;
};

export function DeckHeader({ themeMode, onThemeChange, onGoHome }: ThemeProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  return (
    <header className="deck-header">
      <button type="button" className="brand" onClick={onGoHome} aria-label="Back to first slide">
        <img className="brand-avatar" src="/Slide Visuals/dave.png" alt="" aria-hidden="true" />
        <span>Dave Orian — Sr. Product Designer</span>
      </button>
      <div className="header-controls">
        <div className="theme-toggle" role="group" aria-label="Theme">
          <button
            type="button"
            className={themeMode === 'light' ? 'active' : ''}
            aria-label="Light theme"
            title="Light"
            onClick={() => onThemeChange('light')}
          >
            <Sun size={16} />
          </button>
          <button
            type="button"
            className={themeMode === 'system' ? 'active' : ''}
            aria-label="System theme"
            title="System"
            onClick={() => onThemeChange('system')}
          >
            <Monitor size={16} />
          </button>
          <button
            type="button"
            className={themeMode === 'dark' ? 'active' : ''}
            aria-label="Dark theme"
            title="Dark"
            onClick={() => onThemeChange('dark')}
          >
            <Moon size={16} />
          </button>
        </div>

        <div className="more-wrap" ref={menuRef}>
          <button
            type="button"
            className="more-btn"
            aria-label="More options"
            title="More"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((o) => !o);
            }}
          >
            <MoreVertical size={16} />
          </button>
          <div className={`more-menu${menuOpen ? ' open' : ''}`} role="menu">
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                setMenuOpen(false);
                openPresenterNotes();
              }}
            >
              <NotebookPen size={16} />
              Presenter Notes
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

type DeckFooterProps = {
  showPrev: boolean;
  onLastSlide: boolean;
  onLastPart: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export function DeckFooter({
  showPrev,
  onLastSlide,
  onLastPart,
  onPrev,
  onNext,
}: DeckFooterProps) {
  return (
    <footer className="deck-footer">
      <div className="deck-nav">
        <button type="button" className={`nav-btn${showPrev ? '' : ' hidden'}`} onClick={onPrev}>
          <ArrowLeft size={16} /> Previous
        </button>
        <button type="button" className="nav-btn" onClick={onNext}>
          {onLastSlide && onLastPart ? (
            <>
              Start Over <RotateCcw size={16} />
            </>
          ) : (
            <>
              Next <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </footer>
  );
}
