import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { autonomousNegotiationCard, NEGOTIATION_CARD_ID } from '../deckContent';
import { ThemeCard } from '../components/ThemeCard';

type TransitionPhase = 'idle' | 'animating' | 'done';

type UseNegotiationTransitionProps = {
  currentSlide: number;
  currentPart: number;
};

const TRANSITION_MS = 800;
const TRANSITION_COMPLETE_MS = TRANSITION_MS + 20;
const TRANSITION_EASE = 'var(--ease-out-expo)';

function runCardTransition(
  from: DOMRect,
  to: DOMRect,
  onFrame: (style: React.CSSProperties) => void,
  onMotionStart?: () => void,
) {
  onFrame({
    position: 'fixed',
    left: from.left,
    top: from.top,
    width: from.width,
    height: from.height,
    zIndex: 100,
    transition: 'none',
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      onFrame({
        position: 'fixed',
        left: to.left,
        top: to.top,
        width: to.width,
        height: to.height,
        zIndex: 100,
        transition: `left ${TRANSITION_MS}ms ${TRANSITION_EASE}, top ${TRANSITION_MS}ms ${TRANSITION_EASE}, width ${TRANSITION_MS}ms ${TRANSITION_EASE}, height ${TRANSITION_MS}ms ${TRANSITION_EASE}`,
      });
      onMotionStart?.();
    });
  });
}

export function useNegotiationTransition({ currentSlide, currentPart }: UseNegotiationTransitionProps) {
  const prevRef = useRef({ slide: currentSlide, part: currentPart });
  const sourceRectRef = useRef<DOMRect | null>(null);
  const targetRectRef = useRef<DOMRect | null>(null);
  const [phase, setPhase] = useState<TransitionPhase>('idle');
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties | null>(null);
  const [hideSource, setHideSource] = useState(false);
  const [hideTarget, setHideTarget] = useState(false);
  const [sourceSettled, setSourceSettled] = useState(false);
  const [diagramRevealed, setDiagramRevealed] = useState(currentSlide !== 5);
  const [transitionDirection, setTransitionDirection] = useState<'forward' | 'backward' | null>(
    null,
  );

  useEffect(() => {
    if (currentSlide === 4 && currentPart === 2 && phase === 'idle') {
      const timer = window.setTimeout(() => setSourceSettled(true), 750);
      return () => window.clearTimeout(timer);
    }
  }, [currentSlide, currentPart, phase]);

  useEffect(() => {
    if (currentSlide === 4 && currentPart === 2) {
    const source = document.querySelector(
      `.slide-5 [data-transition-id="${NEGOTIATION_CARD_ID}"]`,
    ) as HTMLElement | null;
      if (source) {
        sourceRectRef.current = source.getBoundingClientRect();
      }
    }
  }, [currentSlide, currentPart]);

  useEffect(() => {
    if (currentSlide === 5) {
      const target = document.querySelector(
        '[data-negotiation-destination="true"]',
      ) as HTMLElement | null;
      if (target) {
        targetRectRef.current = target.getBoundingClientRect();
      }
    }
  }, [currentSlide, phase]);

  useLayoutEffect(() => {
    const prev = prevRef.current;
    const forward = prev.slide === 4 && prev.part === 2 && currentSlide === 5;
    const backward = prev.slide === 5 && currentSlide === 4 && currentPart === 2;

    if (!forward && !backward) {
      if (currentSlide === 5) {
        setPhase('done');
        setDiagramRevealed(true);
        setHideSource(false);
        setHideTarget(false);
        setOverlayStyle(null);
        setTransitionDirection(null);
      } else if (currentSlide === 4 && currentPart === 2) {
        setPhase('idle');
        setDiagramRevealed(false);
        setHideSource(false);
        setHideTarget(false);
        setOverlayStyle(null);
        setTransitionDirection(null);
      }
      prevRef.current = { slide: currentSlide, part: currentPart };
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let sourceRect = sourceRectRef.current;
    let targetRect = targetRectRef.current;

    if (forward) {
      setSourceSettled(true);
      setTransitionDirection('forward');
      const targetEl = document.querySelector(
        '[data-negotiation-destination="true"]',
      ) as HTMLElement | null;
      if (targetEl) {
        targetRect = targetEl.getBoundingClientRect();
        targetRectRef.current = targetRect;
      }
    }

    if (backward) {
      setTransitionDirection('backward');
      const targetEl = document.querySelector(
        '[data-negotiation-destination="true"]',
      ) as HTMLElement | null;
      if (targetEl) {
        targetRect = targetEl.getBoundingClientRect();
        targetRectRef.current = targetRect;
      }
      const sourceEl = document.querySelector(
        `.slide-5 [data-transition-id="${NEGOTIATION_CARD_ID}"]`,
      ) as HTMLElement | null;
      if (sourceEl) {
        sourceRect = sourceEl.getBoundingClientRect();
        sourceRectRef.current = sourceRect;
      }
      setSourceSettled(true);
    }

    if (reduced || !sourceRect || !targetRect) {
      setPhase('done');
      setDiagramRevealed(currentSlide === 5);
      setHideSource(false);
      setHideTarget(false);
      setOverlayStyle(null);
      setTransitionDirection(null);
      prevRef.current = { slide: currentSlide, part: currentPart };
      return;
    }

    const from = forward ? sourceRect : targetRect;
    const to = forward ? targetRect : sourceRect;

    setHideSource(true);
    setHideTarget(true);
    setDiagramRevealed(false);
    setPhase('animating');

    runCardTransition(from, to, setOverlayStyle, () => {
      if (forward) {
        setDiagramRevealed(true);
      }
    });

    const timer = window.setTimeout(() => {
      if (backward) {
        setSourceSettled(true);
      }
      setOverlayStyle(null);
      setHideSource(false);
      setHideTarget(false);
      setPhase('done');
      setDiagramRevealed(currentSlide === 5);
      setTransitionDirection(null);
    }, TRANSITION_COMPLETE_MS);

    prevRef.current = { slide: currentSlide, part: currentPart };
    return () => window.clearTimeout(timer);
  }, [currentSlide, currentPart]);

  const overlay =
    overlayStyle && phase === 'animating' ? (
      <div className="negotiation-card-overlay" style={overlayStyle}>
        <ThemeCard card={autonomousNegotiationCard} className="theme-card--transition" settled overlayClone />
      </div>
    ) : null;

  return {
    overlay,
    hideNegotiationOnSource: hideSource,
    hideNegotiationOnTarget: hideTarget || currentSlide !== 5,
    diagramRevealed: currentSlide === 5 && diagramRevealed,
    sourceSettled,
    isAnimating: phase === 'animating',
    transitionDirection,
  };
}
