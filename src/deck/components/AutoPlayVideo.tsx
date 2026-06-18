import { useEffect, useRef } from 'react';

type AutoPlayVideoProps = {
  src: string;
  active: boolean;
  className?: string;
};

export function AutoPlayVideo({ src, active, className }: AutoPlayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (active) {
      video.play().catch(() => {
        /* autoplay may be blocked until user gesture */
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [active]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      controls
      muted
      playsInline
      autoPlay
      preload="metadata"
    />
  );
}
