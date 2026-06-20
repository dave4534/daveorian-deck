import { CounterStat } from './CounterStat';
import { takeawayStats } from '../deckContent';

type TakeawayStatsProps = {
  active: boolean;
  captureMode: boolean;
};

export function TakeawayStats({ active, captureMode }: TakeawayStatsProps) {
  return (
    <div className="takeaway-stats">
      {takeawayStats.map((stat) => (
        <div key={stat.eyebrow} className="takeaway-stat">
          <div className="takeaway-stat__rule" aria-hidden="true" />
          <div className="takeaway-stat__content">
            <span className="eyebrow">{stat.eyebrow}</span>
            <CounterStat
              target={stat.value}
              suffix={stat.suffix}
              active={active}
              captureMode={captureMode}
              className="takeaway-stat__num"
              as="p"
            />
            <p className="body">{stat.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
