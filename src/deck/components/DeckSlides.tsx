import { AutoPlayVideo } from './AutoPlayVideo';
import { EntryPointColumns } from './EntryPointColumns';
import { NegotiationDiagram } from './NegotiationDiagram';
import { SamWithTechnicians } from './SamWithTechnicians';
import { TakeawayStats } from './TakeawayStats';
import { ThemeCard } from './ThemeCard';
import {
  aiFlowImages,
  deckContent,
  manualFlowImages,
  themeChallenges,
  themeSolutions,
} from '../deckContent';
import { useNegotiationTransition } from '../hooks/useNegotiationTransition';

type DeckSlidesProps = {
  currentSlide: number;
  currentPart: number;
  captureMode: boolean;
};

function slideClass(index: number, current: number, extra = ''): string {
  const base = `slide slide-${index + 1}${extra ? ` ${extra}` : ''}`;
  return index === current ? `${base} active` : base;
}

function partClass(
  slideIdx: number,
  partIdx: number,
  currentSlide: number,
  currentPart: number,
  fadeOnly = false,
): string {
  const active = slideIdx === currentSlide && partIdx === currentPart;
  return `slide-part${fadeOnly ? ' slide-part--fade' : ''}${active ? ' active' : ''}`;
}

function Slide1Body() {
  const c = deckContent.slide1;
  return (
    <>
      <p className="lead">{c.bodyLead}</p>
      <p className="body">
        Most recently I&apos;ve worked at{' '}
        <a href={c.bodyLinks[0].href} target="_blank" rel="noopener noreferrer">
          {c.bodyLinks[0].label}
        </a>{' '}
        and{' '}
        <a href={c.bodyLinks[1].href} target="_blank" rel="noopener noreferrer">
          {c.bodyLinks[1].label}
        </a>
        . Proud to have mentored at{' '}
        <a href={c.bodyLinks[2].href} target="_blank" rel="noopener noreferrer">
          {c.bodyLinks[2].label}
        </a>
        ,{' '}
        <a href={c.bodyLinks[3].href} target="_blank" rel="noopener noreferrer">
          {c.bodyLinks[3].label}
        </a>{' '}
        and the{' '}
        <a href={c.bodyLinks[4].href} target="_blank" rel="noopener noreferrer">
          {c.bodyLinks[4].label}
        </a>{' '}
        community.
      </p>
    </>
  );
}

export function DeckSlides({ currentSlide, currentPart, captureMode }: DeckSlidesProps) {
  const c = deckContent;
  const transition = useNegotiationTransition({ currentSlide, currentPart });

  return (
    <>
      {transition.overlay}
      <div className="slides">
        {/* Slide 1 */}
        <section className={slideClass(0, currentSlide)} data-layout="two-column">
          <div className="two-col">
            <div className="text-col text-col--tight">
              <span className="eyebrow">{c.slide1.eyebrow}</span>
              <h1>{c.slide1.title}</h1>
              <Slide1Body />
            </div>
            <div className="visual-col">
              <div className="portrait">
                <img src={c.slide1.portraitSrc} alt={c.slide1.portraitAlt} />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2 */}
        <section className={slideClass(1, currentSlide)} data-layout="two-column">
          <div className="two-col">
            <div className="text-col text-col--tight">
              <span className="eyebrow">{c.slide2.eyebrow}</span>
              <h1>{c.slide2.headline}</h1>
              <p className="body">{c.slide2.subhead}</p>
              <dl className="key-value-list">
                {c.slide2.meta.map((row) => (
                  <div key={row.key} className="key-value-row">
                    <dt className="body"><strong>{row.key}</strong></dt>
                    <dd className="small-body">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="visual-col">
              <div className="visual-frame">
                <img
                  src="/Slide Visuals/Capacity Planing Dashboard.png"
                  alt={c.slide2.visualAlt}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3 */}
        <section className={slideClass(2, currentSlide)} data-layout="two-column">
          <div className="two-col">
            <div className="text-col text-col--tight">
              <span className="eyebrow">{c.slide3.eyebrow}</span>
              <h1>{c.slide3.headline}</h1>
              <p className="body planner-meet">
                <strong>{c.slide3.meetLabel}</strong>
              </p>
              <ul className="bullet-list">
                <li>{c.slide3.body1}</li>
                <li>{c.slide3.body2}</li>
              </ul>
            </div>
            <div className="visual-col visual-col--center">
              <SamWithTechnicians samAlt={c.slide3.samAlt} />
            </div>
          </div>
        </section>

        {/* Slide 4 */}
        <section className={slideClass(3, currentSlide)} data-layout="two-column">
          <div className="two-col">
            <div className="text-col">
              <h1>{c.slide4.headline}</h1>
              <ul className="bullet-list">
                {c.slide4.bullets.map((bullet) => (
                  <li key={bullet.bold}>
                    {bullet.before}
                    <strong>{bullet.bold}</strong>
                    {bullet.after}
                  </li>
                ))}
              </ul>
            </div>
            <div className="visual-col">
              <AutoPlayVideo
                className="slide-media slide-media--video slide-media--standard slide-media--flush"
                src={c.slide4.videoSrc}
                active={currentSlide === 3}
              />
            </div>
          </div>
        </section>

        {/* Slide 5 — Discovery (3 parts) */}
        <section
          className={`${slideClass(4, currentSlide, 'multi-part')}${transition.isAnimating && transition.transitionDirection === 'forward' ? ' slide-5--transition-out' : ''}`}
          data-layout="two-column"
        >
          <div className="persist-headline">
            <span className="eyebrow">{c.slide5.eyebrow}</span>
          </div>
          <div className="part-region">
            <div className={partClass(4, 0, currentSlide, currentPart, true)}>
              <div className="two-col slide-part-two-col">
                <div className="text-col">
                  <h2>{c.slide5.part1.title1}</h2>
                  <ul className="bullet-list">
                    <li>{c.slide5.part1.body1}</li>
                    <li>{c.slide5.part1.title2}</li>
                  </ul>
                  <p className="small-body tools-used-label">Tools used</p>
                  <div className="tool-badge tool-badge--labeled">
                    <img
                      className="theme-mono-icon"
                      src="/Slide Visuals/My Stack/NotebookLM.svg"
                      alt=""
                    />
                    <span className="small-body">NotebookLM</span>
                  </div>
                </div>
                <div className="visual-col">
                  <div className="visual-frame">
                    <img
                      src="/Slide Visuals/Affinity Mapping.png"
                      alt={c.slide5.part1.affinityAlt}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={partClass(4, 1, currentSlide, currentPart, true)}>
              <div className="two-col slide-part-two-col">
                <div className="text-col">
                  <h2>{c.slide5.part2.title}</h2>
                  <p className="body">{c.slide5.part2.body}</p>
                  <ul className="bullet-list">
                    {c.slide5.part2.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="small-body tools-used-label">Tools used</p>
                  <div className="tool-row">
                    <div className="tool-badge tool-badge--labeled">
                      <img src="/Slide Visuals/My Stack/Claude.svg" alt="" />
                      <span className="small-body">Claude</span>
                    </div>
                    <div className="tool-badge tool-badge--labeled">
                      <img src="/Slide Visuals/My Stack/Figma.svg" alt="" />
                      <span className="small-body">Figma MCP</span>
                    </div>
                  </div>
                </div>
                <div className="visual-col">
                  <div className="visual-frame visual-frame--flush">
                    <img
                      src="/Slide Visuals/Capacity Flowchart.png"
                      alt={c.slide5.part2.flowchartAlt}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={partClass(4, 2, currentSlide, currentPart, true)}>
              <div className="themes-block">
                <h2>{c.slide5.part3.intro}</h2>
                <div className="themes-matrix">
                  <p className="eyebrow themes-section-label">{c.slide5.part3.challengesHeader}</p>
                  <div className="themes-row">
                    {themeChallenges.map((card) => (
                      <ThemeCard key={card.title} card={card} />
                    ))}
                  </div>
                  <p className="eyebrow themes-section-label">{c.slide5.part3.solutionsHeader}</p>
                  <div className="themes-row">
                    {themeSolutions.map((card) => (
                      <ThemeCard
                        key={card.title}
                        card={card}
                        hideWhenTransitioning={
                          transition.hideNegotiationOnSource && card.title === 'Autonomous negotiation'
                        }
                        settled={transition.sourceSettled && card.title === 'Autonomous negotiation'}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6 — Negotiation */}
        <section
          className={`${slideClass(5, currentSlide, 'multi-part')}${transition.diagramRevealed ? ' slide-6--revealed' : ''}${transition.isAnimating && transition.transitionDirection === 'forward' ? ' slide-6--card-transition' : ''}${transition.isAnimating && transition.transitionDirection === 'backward' ? ' slide-6--transition-out' : ''}`}
          data-layout="context-driven"
        >
          <div className="persist-headline persist-headline--center">
            <span className="eyebrow">{c.slide6.eyebrow}</span>
            <h1>{c.slide6.headline}</h1>
          </div>
          <NegotiationDiagram
            showDetails={transition.diagramRevealed}
            hideCenterCard={transition.hideNegotiationOnTarget}
          />
        </section>

        {/* Slide 7 — Entry points */}
        <section className={slideClass(6, currentSlide, 'multi-part')} data-layout="context-driven">
          <div className="persist-headline persist-headline--center">
            <span className="eyebrow">{c.slide7.eyebrow}</span>
            <h1>{c.slide7.headline}</h1>
          </div>
          <div className="part-region">
            <div className={partClass(6, 0, currentSlide, currentPart, true)}>
              <EntryPointColumns part={0} />
            </div>
            <div className={partClass(6, 1, currentSlide, currentPart, true)}>
              <EntryPointColumns part={1} />
            </div>
          </div>
        </section>

        {/* Slide 8 — AI flow */}
        <section className={slideClass(7, currentSlide, 'multi-part')} data-layout="two-column">
          <div className="solution-slide">
            <div className="solution-slide__text">
              <span className="eyebrow">{c.slide8.eyebrow}</span>
              <h2>{c.slide8.headline}</h2>
              <ul className="bullet-list">
                {c.slide8.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="part-region solution-slide__visuals">
              {aiFlowImages.map((src, i) => (
                <div key={src} className={partClass(7, i, currentSlide, currentPart)}>
                  <div className="solution-visual visual-frame visual-frame--flush">
                    <img src={src} alt={`AI flow step ${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 9 — Manual flow */}
        <section className={slideClass(8, currentSlide, 'multi-part')} data-layout="two-column">
          <div className="solution-slide">
            <div className="solution-slide__text">
              <span className="eyebrow">{c.slide9.eyebrow}</span>
              <h2>{c.slide9.headline}</h2>
              <ul className="bullet-list">
                {c.slide9.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="part-region solution-slide__visuals">
              {manualFlowImages.map((src, i) => (
                <div key={src} className={partClass(8, i, currentSlide, currentPart)}>
                  <div className="solution-visual visual-frame visual-frame--flush">
                    <img src={src} alt={`Manual flow step ${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 10 — Takeaways */}
        <section className={slideClass(9, currentSlide)} data-layout="context-driven">
          <div className="takeaways-slide">
            <span className="eyebrow">{c.slide10.eyebrow}</span>
            <h1>{c.slide10.headline}</h1>
            <p className="body">{c.slide10.body}</p>
            <TakeawayStats active={currentSlide === 9} captureMode={captureMode} />
          </div>
        </section>

        {/* Slide 11 — Thank you */}
        <section className={slideClass(10, currentSlide)} data-layout="context-driven">
          <div className="closing">
            <div className="closing-avatar">
              <img src="/Slide Visuals/dave.png" alt={c.slide11.avatarAlt} />
            </div>
            <h2>{c.slide11.headline}</h2>
            <p className="body">{c.slide11.body}</p>
          </div>
        </section>
      </div>
    </>
  );
}
