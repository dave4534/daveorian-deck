import { useCallback, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'deck-theme-mode';

function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return mode;
}

export function useTheme(initialMode?: ThemeMode) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (initialMode) return initialMode;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    } catch {
      /* ignore */
    }
    return 'dark';
  });

  const resolvedTheme = resolveTheme(themeMode);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme-mode', themeMode);
    root.setAttribute('data-theme', resolvedTheme);
  }, [themeMode, resolvedTheme]);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => {
      if (themeMode === 'system') {
        document.documentElement.setAttribute('data-theme', resolveTheme('system'));
      }
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [themeMode]);

  return { themeMode, resolvedTheme, setThemeMode };
}
