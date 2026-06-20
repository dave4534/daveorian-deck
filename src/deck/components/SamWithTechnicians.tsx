import { technicianOrbitImages } from '../deckContent';

type SamWithTechniciansProps = {
  samSrc?: string;
  samAlt: string;
};

const ORBIT_ANGLES = Array.from({ length: 8 }, (_, i) => i * 45);

export function SamWithTechnicians({
  samSrc = '/Slide Visuals/Sam.png',
  samAlt,
}: SamWithTechniciansProps) {
  return (
    <div className="sam-orbit" aria-hidden="true">
      {technicianOrbitImages.map((src, i) => (
        <img
          key={`${src}-${i}`}
          className="sam-orbit__tech"
          src={src}
          alt=""
          style={{ '--orbit-angle': `${ORBIT_ANGLES[i]}deg` } as React.CSSProperties}
        />
      ))}
      <img className="sam-orbit__sam" src={samSrc} alt={samAlt} />
    </div>
  );
}
