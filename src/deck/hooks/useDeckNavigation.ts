import { useCallback, useEffect, useState } from 'react';
import { SLIDE_PART_COUNTS, TOTAL_SLIDES } from '../deckMeta';

const STORAGE_KEY = 'deck-state';

export type DeckState = {
  slide: number;
  part: number;
  total: number;
  ts: number;
};

function partCount(slideIdx: number): number {
  return SLIDE_PART_COUNTS[slideIdx] ?? 1;
}

function clampSlide(slide: number): number {
  return Math.max(0, Math.min(TOTAL_SLIDES - 1, slide));
}

function clampPart(slide: number, part: number): number {
  const max = Math.max(0, partCount(slide) - 1);
  return Math.max(0, Math.min(max, part));
}

export function useDeckNavigation(initialSlide = 0, initialPart = 0) {
  const [currentSlide, setCurrentSlide] = useState(() => clampSlide(initialSlide));
  const [currentPart, setCurrentPart] = useState(() =>
    clampPart(clampSlide(initialSlide), initialPart),
  );

  const syncToPresenter = useCallback(() => {
    const state: DeckState = {
      slide: currentSlide,
      part: currentPart,
      total: TOTAL_SLIDES,
      ts: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [currentSlide, currentPart]);

  const applySlide = useCallback((slideIdx: number, partIdx: number) => {
    const slide = clampSlide(slideIdx);
    const part = clampPart(slide, partIdx);
    setCurrentSlide(slide);
    setCurrentPart(part);
  }, []);

  useEffect(() => {
    syncToPresenter();
  }, [currentSlide, currentPart, syncToPresenter]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        const state = JSON.parse(e.newValue) as DeckState;
        if (state.slide !== currentSlide || state.part !== currentPart) {
          applySlide(state.slide, state.part);
        }
      } catch {
        /* ignore */
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [currentSlide, currentPart, applySlide]);

  const next = useCallback(() => {
    const pCount = partCount(currentSlide);
    if (pCount > 1 && currentPart < pCount - 1) {
      setCurrentPart((p) => p + 1);
      return;
    }
    if (currentSlide < TOTAL_SLIDES - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      setCurrentPart(0);
    } else {
      setCurrentSlide(0);
      setCurrentPart(0);
    }
  }, [currentSlide, currentPart]);

  const prev = useCallback(() => {
    if (currentPart > 0) {
      setCurrentPart((p) => p - 1);
      return;
    }
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      setCurrentPart(Math.max(0, partCount(newSlide) - 1));
    }
  }, [currentSlide, currentPart]);

  const goHome = useCallback(() => applySlide(0, 0), [applySlide]);

  const goEnd = useCallback(() => {
    const last = TOTAL_SLIDES - 1;
    applySlide(last, Math.max(0, partCount(last) - 1));
  }, [applySlide]);

  const onLastSlide = currentSlide === TOTAL_SLIDES - 1;
  const onLastPart = currentPart >= Math.max(0, partCount(currentSlide) - 1);
  const showPrev = currentSlide > 0 || currentPart > 0;
  const partPipCount = partCount(currentSlide);

  return {
    currentSlide,
    currentPart,
    next,
    prev,
    goHome,
    goEnd,
    applySlide,
    onLastSlide,
    onLastPart,
    showPrev,
    partPipCount,
    syncToPresenter,
  };
}
