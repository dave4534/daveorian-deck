import {
  Calendar,
  Clock,
  Home,
  TrendingUp,
  Users,
  Sprout,
  type LucideIcon,
} from 'lucide-react';
import { NEGOTIATION_CARD_ID } from '../deckContent';

const iconMap: Record<string, LucideIcon> = {
  'trending-up': TrendingUp,
  home: Home,
  calendar: Calendar,
  users: Users,
  sprout: Sprout,
  clock: Clock,
};

export type ThemeCardData = {
  id?: string;
  icon: keyof typeof iconMap;
  title: string;
  body: string;
};

type ThemeCardProps = {
  card: ThemeCardData;
  className?: string;
  hideWhenTransitioning?: boolean;
  negotiationTarget?: boolean;
  settled?: boolean;
  overlayClone?: boolean;
};

export function ThemeCard({
  card,
  className = '',
  hideWhenTransitioning = false,
  negotiationTarget = false,
  settled = false,
  overlayClone = false,
}: ThemeCardProps) {
  const Icon = iconMap[card.icon];
  const isNegotiation = card.id === NEGOTIATION_CARD_ID || card.title === 'Autonomous negotiation';

  return (
    <div
      className={`theme-card${className ? ` ${className}` : ''}${hideWhenTransitioning ? ' theme-card--hidden-transition' : ''}${settled ? ' theme-card--settled' : ''}`}
      data-transition-id={
        isNegotiation && !negotiationTarget && !overlayClone ? NEGOTIATION_CARD_ID : undefined
      }
      data-negotiation-destination={negotiationTarget ? 'true' : undefined}
    >
      <div className="theme-card-icon" aria-hidden="true">
        <Icon strokeWidth={1.75} />
      </div>
      <h3><strong>{card.title}</strong></h3>
      <p className="body">{card.body}</p>
    </div>
  );
}
