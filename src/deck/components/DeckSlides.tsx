import {
  Calendar,
  Clock,
  Home,
  Siren,
  Sprout,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { CounterStat } from './CounterStat';
import { AutoPlayVideo } from './AutoPlayVideo';
import { deckContent, stackTools, timelineMilestones } from '../deckContent';

const statIcons: Record<string, LucideIcon> = {
  siren: Siren,
  wrench: Wrench,
};

const themeIcons: Record<string, LucideIcon> = {
  'trending-up': TrendingUp,
  home: Home,
  calendar: Calendar,
  users: Users,
  sprout: Sprout,
  clock: Clock,
};

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
): string {
  return slideIdx === currentSlide && partIdx === currentPart
    ? 'slide-part active'
    : 'slide-part';
}

export function DeckSlides({ currentSlide, currentPart, captureMode }: DeckSlidesProps) {
  const statsActive = currentSlide === 5 && currentPart === 2;
  const c = deckContent;

  return (
    <div className="slides">
      {/* Slide 1 — Title */}
      <section className={slideClass(0, currentSlide)} data-layout="two-column">
        <div className="two-col">
          <div className="text-col">
            <div className="name-line">
              <span className="eyebrow">{c.slide1.eyebrow}</span>
              <h1>{c.slide1.titleLine1}</h1>
            </div>
            <p className="body">{c.slide1.greeting}</p>
            <div className="stack-block">
              <p className="small-body">{c.slide1.stackLabel}</p>
              <div className="stack-row">
                {stackTools.map((tool) => (
                  <div key={tool.alt} className="stack-icon">
                    <img
                      className={'mono' in tool && tool.mono ? 'theme-mono-icon' : undefined}
                      src={tool.src}
                      alt={tool.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="visual-col">
            <div className="portrait">
              <img src="/Slide Visuals/dave.png" alt={c.slide1.portraitAlt} />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 — Timeline */}
      <section className={slideClass(1, currentSlide)} data-layout="context-driven">
        <div className="intro-row">
          <div>
            <h1>{c.slide2.headline}</h1>
          </div>
          <p className="body">{c.slide2.intro}</p>
        </div>
        <div className="timeline-wrap">
          <div className="timeline">
            {timelineMilestones.map((ms) => (
              <div key={ms.year} className="milestone">
                <p className="small-body year">{ms.year}</p>
                <div className="dot" />
                <div className="logo">
                  {'logoSrc' in ms ? (
                    <img
                      className={'mono' in ms && ms.mono ? 'theme-mono-icon' : undefined}
                      src={ms.logoSrc}
                      alt={ms.logoAlt}
                    />
                  ) : (
                    ms.logoText
                  )}
                </div>
                <h3>{ms.title}</h3>
                <p className="small-body">{ms.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3 — Hero */}
      <section className={`${slideClass(2, currentSlide)} two-col`} data-layout="two-column">
        <div className="text-col">
          <span className="eyebrow">{c.slide3.eyebrow}</span>
          <h1>{c.slide3.headline}</h1>
          <p className="body">{c.slide3.subhead}</p>
          <p className="small-body">{c.slide3.meta}</p>
        </div>
        <div className="visual-col">
          <div className="visual-frame">
            <img
              src="/Slide Visuals/Capacity Planing Dashboard.png"
              alt={c.slide3.visualAlt}
            />
          </div>
        </div>
      </section>

      {/* Slide 4 — Planner */}
      <section className={slideClass(3, currentSlide)} data-layout="two-column">
        <div className="two-col">
          <div className="text-col">
            <span className="eyebrow">{c.slide4.eyebrow}</span>
            <h1>{c.slide4.headline}</h1>
            <p className="body planner-meet">
              <strong>{c.slide4.meetLabel}</strong>
            </p>
            <p className="body">{c.slide4.body1}</p>
            <p className="body">{c.slide4.body2}</p>
          </div>
          <div className="visual-col">
            <img
              className="slide-media slide-media--plain"
              src="/Slide Visuals/Sam.png"
              alt={c.slide4.samAlt}
            />
          </div>
        </div>
      </section>

      {/* Slide 5 — Feature to Suite */}
      <section className={slideClass(4, currentSlide)} data-layout="two-column">
        <div className="two-col">
          <div className="text-col">
            <h2>{c.slide5.headline}</h2>
            <ul>
              {c.slide5.bullets.map((bullet) => (
                <li key={bullet.bold}>
                  {bullet.before}
                  <strong>{bullet.bold}</strong>
                  {bullet.after}
                </li>
              ))}
            </ul>
            <p className="explainer">{c.slide5.explainer}</p>
          </div>
          <div className="visual-col">
            <AutoPlayVideo
              className="slide-media slide-media--video"
              src={c.slide5.videoSrc}
              active={currentSlide === 4}
            />
          </div>
        </div>
      </section>

      {/* Slide 6 — Approach (4 parts) */}
      <section className={slideClass(5, currentSlide, 'multi-part')} data-layout="context-driven">
        <div className="persist-headline">
          <span className="eyebrow">{c.slide6.eyebrow}</span>
          <h1 style={{ marginTop: 12 }}>{c.slide6.headline}</h1>
        </div>
        <div className="part-region">
          <div className={partClass(5, 0, currentSlide, currentPart)}>
            <div className="research-grid research-grid--part1">
              <div className="research-text-stack">
                <div className="research-card">
                  <div className="tool-badge">
                    <img
                      className="theme-mono-icon"
                      src="/Slide Visuals/My Stack/NotebookLM.svg"
                      alt="NotebookLM"
                    />
                  </div>
                  <h3>{c.slide6.part1.title}</h3>
                  <p className="body">{c.slide6.part1.body}</p>
                </div>
                <div className="research-workshop-block">
                  <h3>{c.slide6.part1.workshopTitle}</h3>
                  <p className="body">{c.slide6.part1.workshopBody}</p>
                </div>
              </div>
              <div className="research-image">
                <img
                  src="/Slide Visuals/Affinity Mapping.png"
                  alt={c.slide6.part1.affinityAlt}
                />
              </div>
            </div>
          </div>
          <div className={partClass(5, 1, currentSlide, currentPart)}>
            <div className="synthesis-grid">
              <div>
                <div className="tool-badge">
                  <img src="/Slide Visuals/My Stack/Claude.svg" alt="Claude" />
                </div>
                <h3 style={{ marginTop: 18 }}>{c.slide6.part2.title}</h3>
                <p className="body" style={{ marginTop: 14 }}>
                  {c.slide6.part2.body}
                </p>
              </div>
              <img
                className="synthesis-image"
                src="/Slide Visuals/Capacity Flowchart.png"
                alt={c.slide6.part2.flowchartAlt}
              />
            </div>
          </div>
          <div className={partClass(5, 2, currentSlide, currentPart)}>
            <div className="stats-block">
              <p className="body">{c.slide6.part3.intro}</p>
              <div className="stats-rows">
                {c.slide6.part3.stats.map((stat) => {
                  const StatIcon = statIcons[stat.icon];
                  return (
                  <div key={stat.bold} className="stat-row">
                    <div className="stat-icon" aria-hidden="true">
                      <StatIcon strokeWidth={1.75} />
                    </div>
                    <CounterStat
                      target={stat.value}
                      suffix={stat.suffix}
                      active={statsActive}
                      captureMode={captureMode}
                    />
                    <p className="body">
                      <strong>{stat.bold}</strong>
                      {stat.body}
                    </p>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={partClass(5, 3, currentSlide, currentPart)}>
            <div className="themes-block">
              <p className="body">{c.slide6.part4.intro}</p>
              <div className="themes-matrix">
                <div className="themes-row">
                  {c.slide6.part4.challenges.map((theme) => {
                    const ThemeIcon = themeIcons[theme.icon];
                    return (
                      <div key={theme.title} className="theme-card">
                        <div className="theme-card-icon" aria-hidden="true">
                          <ThemeIcon strokeWidth={1.75} />
                        </div>
                        <h3>{theme.title}</h3>
                        <p className="body">{theme.body}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="themes-divider eyebrow">// {c.slide6.part4.divider}</p>
                <div className="themes-row">
                  {c.slide6.part4.solutions.map((theme) => {
                    const ThemeIcon = themeIcons[theme.icon];
                    return (
                      <div key={theme.title} className="theme-card">
                        <div className="theme-card-icon" aria-hidden="true">
                          <ThemeIcon strokeWidth={1.75} />
                        </div>
                        <h3>{theme.title}</h3>
                        <p className="body">{theme.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 7 — AI Flow (4 parts) */}
      <section className={slideClass(6, currentSlide, 'multi-part')} data-layout="two-column">
        <div className="persist-headline">
          <span className="eyebrow">{c.slide7.eyebrow}</span>
          <h2 style={{ marginTop: 12, maxWidth: 1100 }}>{c.slide7.headline}</h2>
        </div>
        <div className="part-region">
          {c.slide7.parts.map((part, i) => (
            <div key={part.image} className={partClass(6, i, currentSlide, currentPart)}>
              <div className="ai-grid">
                <p className="body">
                  {'body' in part ? (
                    part.body
                  ) : (
                    <>
                      {part.bodyBefore}
                      <strong>{part.bold}</strong>
                      {part.bodyAfter}
                    </>
                  )}
                </p>
                <div className="ai-visual">
                  <img src={part.image} alt={part.imageAlt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 8 — Iteration (2 parts) */}
      <section className={slideClass(7, currentSlide, 'multi-part')} data-layout="context-driven">
        <div className="persist-headline">
          <span className="eyebrow">{c.slide8.eyebrow}</span>
          <h2 style={{ marginTop: 12, maxWidth: 1300 }}>{c.slide8.headline}</h2>
        </div>
        <div className="part-region">
          {c.slide8.parts.map((part, i) => (
            <div key={part.image} className={partClass(7, i, currentSlide, currentPart)}>
              <div className="iter-grid">
                <p className="body">{part.body}</p>
                <img src={part.image} alt={part.imageAlt} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 9 — Thank You */}
      <section className={slideClass(8, currentSlide)} data-layout="context-driven">
        <div className="closing">
          <div className="closing-avatar">
            <img src="/Slide Visuals/dave.png" alt={c.slide9.avatarAlt} />
          </div>
          <h2>{c.slide9.headline}</h2>
          <p className="body">{c.slide9.body}</p>
        </div>
      </section>
    </div>
  );
}
