/**
 * On-screen slide copy — edit here.
 * Spec reference: Instructions/Deck Content - General 2.md
 * Presenter notes: src/deck/deckMeta.ts
 */

export const NEGOTIATION_CARD_ID = 'autonomous-negotiation';

export const autonomousNegotiationCard = {
  id: NEGOTIATION_CARD_ID,
  icon: 'users' as const,
  title: 'Autonomous negotiation',
  body: 'Enable AI agents to interact as planners who negotiate between organizations.',
};

export const themeChallenges = [
  {
    icon: 'trending-up' as const,
    title: 'Power outages during storms',
    body: 'Mutual aid agreements between utilities share resources but spike demand.',
  },
  {
    icon: 'home' as const,
    title: 'Humanitarian aid during crises',
    body: 'Companies respond to worldwide SOS crises, such as climate emergencies.',
  },
  {
    icon: 'calendar' as const,
    title: 'Annual, advertised events',
    body: 'Marketing campaigns and holiday shopping cause service demand spikes.',
  },
] as const;

export const themeSolutions = [
  autonomousNegotiationCard,
  {
    icon: 'sprout' as const,
    title: 'Upskill management',
    body: 'Identify skill gaps and training needs; provide pathways for upskilling.',
  },
  {
    icon: 'clock' as const,
    title: 'Allocation based on urgency',
    body: 'Measure and prioritize according to urgency of work and service needs.',
  },
] as const;

export const technicianOrbitImages = [
  '/Slide Visuals/Technicians/1.png',
  '/Slide Visuals/Technicians/2.png',
  '/Slide Visuals/Technicians/3.png',
  '/Slide Visuals/Technicians/4.png',
  '/Slide Visuals/Technicians/5.png',
  '/Slide Visuals/Technicians/6.png',
  '/Slide Visuals/Technicians/7.png',
  '/Slide Visuals/Technicians/8.png',
] as const;

export const entryPointColumns = [
  {
    body: 'Daily brief (compacted)',
    image: '/Slide Visuals/Autonomous negotiation/Entry point - 1.png',
    imageAlt: 'Entry point — compacted daily brief',
    imagePart2: '/Slide Visuals/Autonomous negotiation/Entry point - 1.2.png',
  },
  {
    body: 'Daily brief (detailed)',
    image: '/Slide Visuals/Autonomous negotiation/Entry point - 2.png',
    imageAlt: 'Entry point — detailed daily brief',
    imagePart2: '/Slide Visuals/Autonomous negotiation/Entry point - 2.2.png',
  },
  {
    body: 'Daily brief (banner)',
    image: '/Slide Visuals/Autonomous negotiation/Entry point - 3.png',
    imageAlt: 'Entry point — banner daily brief',
    imagePart2: '/Slide Visuals/Autonomous negotiation/Entry point - 3.2.png',
  },
] as const;

export const aiFlowImages = [
  '/Slide Visuals/AI Flow/AI - 1.png',
  '/Slide Visuals/AI Flow/AI - 2.png',
  '/Slide Visuals/AI Flow/AI - 3.png',
  '/Slide Visuals/AI Flow/AI - 4.png',
] as const;

export const manualFlowImages = [
  '/Slide Visuals/Manual Flow/Manual - 1.png',
  '/Slide Visuals/Manual Flow/Manual - 2.png',
  '/Slide Visuals/Manual Flow/Manual - 3.png',
  '/Slide Visuals/Manual Flow/Manual - 4.png',
] as const;

export const takeawayStats = [
  {
    eyebrow: 'Reactive scheduling',
    value: 15,
    suffix: '%',
    body: 'of total overtime is attributed to reactive adjustments from unplanned work and under-optimized routes',
  },
  {
    eyebrow: 'Repeat visits',
    value: 28,
    suffix: '%',
    body: 'of scheduled appointments require a second visit, likely resulting from poor triage or under-skilling.',
  },
  {
    eyebrow: 'Outdated tools',
    value: 25,
    suffix: '%',
    body: 'of companies still used spreadsheets for job scheduling, leading to increased error rates and information silos.',
    metricTag: 'h3' as const,
  },
  {
    eyebrow: 'Disrupted work',
    value: 30,
    suffix: '%',
    body: 'of total work hours are spent handling unplanned emergencies, disrupting planned work and reducing capacity.',
  },
] as const;

export const deckContent = {
  slide1: {
    eyebrow: 'Case Study',
    title: "Hi! I'm Dave.",
    bodyLead:
      "I'm curious about how to use design, code & AI to create meaningful experiences as humans and machines find new ways of communicating.",
    bodyLinks: [
      { label: 'Fiverr', href: 'https://www.fiverr.com/' },
      { label: 'Salesforce Field Service', href: 'https://www.salesforce.com/eu/service/field-service-management/' },
      { label: 'Designlab', href: 'https://designlab.com/' },
      { label: 'CareerFoundry', href: 'https://careerfoundry.com/en/' },
      { label: 'Startup Designers', href: 'https://www.startupdesigners.co/' },
    ],
    videoSrc: '/Slide Visuals/Capacity Animation Compressed.mov',
    portraitSrc: '/Slide Visuals/dave.png',
    portraitAlt: 'Dave Orian',
  },
  slide2: {
    eyebrow: 'Capacity Planning',
    headline: 'Leading the design for an AI-agent based workforce planning system',
    subhead:
      'How I helped Salesforce Field Service Planners see capacity gaps before they became emergencies.',
    meta: [
      { key: 'Company', value: 'Salesforce' },
      { key: 'Role', value: 'Product Designer' },
    ],
    visualAlt: 'Capacity Planning dashboard',
  },
  slide3: {
    eyebrow: 'The User',
    headline: "What's a Planner?",
    meetLabel: 'Meet Sam, the Planner.',
    body1:
      'Salesforce Field Service powers enterprise companies including telecom crews and HVAC fleets with tools for their end-to-end operations.',
    body2:
      'Within large organizations, Operations Planners are responsible for making sure there are enough people to do the work in 1–3 months.',
    samAlt: 'Sam, the Planner',
  },
  slide4: {
    headline: 'A feature that evolved into a Suite',
    bullets: [
      {
        before: 'I owned the design for ',
        bold: 'Capacity Limits',
        after: ' at Salesforce Field Service.',
      },
      {
        before: 'The feature was showcased across the company and prioritized to evolve into a more holistic ',
        bold: 'Planning Suite',
        after: '.',
      },
    ],
    videoSrc: 'https://portfolio-vids.b-cdn.net/Capacity%20Limits%20Video%203.mov',
  },
  slide5: {
    eyebrow: 'Understanding the Planner',
    part1: {
      title1: 'We wanted to know: How did Planners resolve gaps today?',
      body1:
        'First I gathered existing research within the UX research organization as well as research done by an external third party and fed over 20 documents into a notebook LM.',
      title2:
        'I gathered domain experts and users into an affinity mapping workshop to understand how planners in specific industries were experiencing pains with planning.',
      affinityAlt: 'Affinity mapping workshop',
    },
    part2: {
      title: "Mapping out Planners' actual behavior",
      body: 'I extracted user stories as well as a flowchart using Claude, and the Figma MCP within Claude. We learned the domain-specific language used in Planners\' workflow',
      bullets: [
        'Reactive: Hiring, Up-Skilling, Capacity Limits',
        'Reactive: Rescheduling, Reallocation, Cross-Skilling',
      ],
      flowchartAlt: 'Capacity flowchart synthesized in Claude',
    },
    part3: {
      intro:
        'After synthesizing the data, I found the layered themes from each pointing to a design approach.',
      challengesHeader: 'What Planners face',
      solutionsHeader: "How they're expected to fix it",
    },
  },
  slide6: {
    eyebrow: 'Design exploration',
    headline: 'Deconstructing negotiation',
    leftPlanner: { role: 'Planner', location: 'Mountain View' },
    rightPlanner: { role: 'Planner', location: 'San Jose' },
  },
  slide7: {
    eyebrow: 'Design Exploration',
    headline: 'Which entry point options are there for Autonomous Negotiation?',
  },
  slide8: {
    eyebrow: 'Solution',
    headline: 'Approach #1: An AI agent-based approach to capacity gap detection and resolution',
    bullets: [
      'I designed An AI Gap Resolution Agent that can be entrusted to handle gap resolutions.',
      "Because AI patterns hadn't been established at Salesforce, I used the design system and emerging market patterns and best practices to design AI patterns for an exceptional user experience.",
    ],
  },
  slide9: {
    eyebrow: 'Solution',
    headline: 'Approach #2: A manual gap resolution approach',
    bullets: [
      'Manual control enables the Planner to select specifically which Technicians are best to help fill the workforce gap.',
      'Candidates are automatically pre-qualified and displayed according to match percentage.',
    ],
  },
  slide10: {
    eyebrow: 'Takeaways',
    headline: 'The Capacity Gap Agent and Wizard in the field',
    body: 'Our research showed a meaningful impact could be made when empowering Planners with these tools',
  },
  slide11: {
    headline: 'Thank you!',
    body: 'I appreciate you coming along this brief adventure with me.',
    avatarAlt: 'Dave Orian',
  },
} as const;
