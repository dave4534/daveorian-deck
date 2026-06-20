import { autonomousNegotiationCard } from '../deckContent';
import { ThemeCard } from './ThemeCard';

type NegotiationDiagramProps = {
  showDetails: boolean;
  hideCenterCard?: boolean;
};

export function NegotiationDiagram({ showDetails, hideCenterCard = false }: NegotiationDiagramProps) {
  return (
    <div className={`negotiation-diagram${showDetails ? ' negotiation-diagram--revealed' : ''}`}>
      <div className="negotiation-diagram__side negotiation-diagram__side--left">
        <div className="negotiation-diagram__planner-group">
          <div className="negotiation-diagram__avatar-row">
            <img
              className="negotiation-diagram__tech-strip"
              src="/Slide Visuals/Autonomous negotiation/Technicians - Left.png"
              alt=""
            />
            <div className="negotiation-diagram__planner-stack">
              <img
                className="negotiation-diagram__avatar"
                src="/Slide Visuals/Autonomous negotiation/Avatar - Planner.png"
                alt="Planner, Mountain View"
              />
              <div className="negotiation-diagram__label negotiation-diagram__label--left">
                <span className="body"><strong>Planner</strong></span>
                <span className="small-body">Mountain View</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="negotiation-diagram__hub">
        <div className="negotiation-diagram__connector negotiation-diagram__connector--left" aria-hidden="true">
          <svg className="negotiation-diagram__line" viewBox="0 0 100 4" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100" y2="2" />
          </svg>
        </div>

        <div className="negotiation-diagram__center">
          {!hideCenterCard && (
            <ThemeCard
              card={autonomousNegotiationCard}
              className="negotiation-diagram__card"
              negotiationTarget
            />
          )}
        </div>

        <div className="negotiation-diagram__connector negotiation-diagram__connector--right" aria-hidden="true">
          <svg className="negotiation-diagram__line" viewBox="0 0 100 4" preserveAspectRatio="none">
            <line x1="0" y1="2" x2="100" y2="2" />
          </svg>
        </div>
      </div>

      <div className="negotiation-diagram__side negotiation-diagram__side--right">
        <div className="negotiation-diagram__planner-group">
          <div className="negotiation-diagram__avatar-row">
            <div className="negotiation-diagram__planner-stack">
              <img
                className="negotiation-diagram__avatar"
                src="/Slide Visuals/Autonomous negotiation/Avatar - Sam.png"
                alt="Planner, San Jose"
              />
              <div className="negotiation-diagram__label negotiation-diagram__label--right">
                <span className="body"><strong>Planner</strong></span>
                <span className="small-body">San Jose</span>
              </div>
            </div>
            <img
              className="negotiation-diagram__tech-strip"
              src="/Slide Visuals/Autonomous negotiation/Technicians - Right.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
