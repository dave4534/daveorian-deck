import { useEffect, useState } from 'react';

type CounterStatProps = {
  target: number;
  suffix?: string;
  active: boolean;
  captureMode?: boolean;
};

export function CounterStat({ target, suffix = '', active, captureMode = false }: CounterStatProps) {
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!active) {
      setDisplay(`0${suffix}`);
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || captureMode) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, target, suffix, captureMode]);

  return <h1 className="stat-num">{display}</h1>;
}
