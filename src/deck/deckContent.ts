/**
 * On-screen slide copy — edit here.
 * Spec reference: Instructions/Deck Content - General.md
 * Presenter notes: src/deck/deckMeta.ts
 */

export const stackTools = [
  { src: '/Slide Visuals/My Stack/Claude.svg', alt: 'Claude' },
  { src: '/Slide Visuals/My Stack/Cursor.svg', alt: 'Cursor', mono: true },
  { src: '/Slide Visuals/My Stack/Obsidian.svg', alt: 'Obsidian' },
  { src: '/Slide Visuals/My Stack/NotebookLM.svg', alt: 'NotebookLM', mono: true },
  { src: '/Slide Visuals/My Stack/Figma.svg', alt: 'Figma' },
] as const;

export const timelineMilestones = [
  {
    year: '2015',
    logoSrc: '/Slide Visuals/Timeline Logos/Shenkar logo.svg',
    logoAlt: 'Shenkar',
    title: 'Shenkar',
    body: 'After Shenkar, I studied front-end developement to help me build the products I wanted to build.',
  },
  {
    year: '2018',
    logoSrc: '/Slide Visuals/Timeline Logos/Vonage logo.svg',
    logoAlt: 'Vonage',
    mono: true,
    title: 'Vonage',
    body: 'I owned the UX/UI design for the R&D of Vonage.',
  },
  {
    year: '2019',
    logoSrc: '/Slide Visuals/Timeline Logos/Fiverr.svg',
    logoAlt: 'Fiverr',
    mono: true,
    title: 'Fiverr',
    body: 'Led design for native mobile apps, marketplace dashboards, and buyer/seller tools.',
  },
  {
    year: '2022',
    logoSrc: '/Slide Visuals/Timeline Logos/SF.svg',
    logoAlt: 'Salesforce',
    title: 'Salesforce',
    body: 'Led large-scale design efforts in Field Service including AI-Agent based Capacity Planning.',
  },
  {
    year: '2026',
    logoText: 'SD',
    title: 'Startup Designers',
    body: 'Bring clarity and trust to a technically complex product.',
    small: true,
  },
] as const;

export const deckContent = {
  slide1: {
    eyebrow: 'Case Study',
    titleLine1: 'Giving planners an AI based warning system',
    greeting: 'Hi there, thanks for taking the time to meet with me!',
    stackLabel: 'My daily tool-stack',
    portraitAlt: 'Dave Orian',
  },
  slide2: {
    headline: 'A bit about me',
    intro:
      'I discovered my passion for technology after founding a restaurant business with my brother in Oregon. I flew to India to try and assemble a team (and to grow a huge mustache) and realized that I need to join the best of the best at Shenkar.',
  },
  slide3: {
    eyebrow: 'Capacity Planning',
    headline: 'Leading the design for an AI-agent based workforce planning system',
    subhead:
      'How I helped Salesforce Field Service Planners see capacity gaps before they became emergencies.',
    meta: 'Product Designer  ·  Salesforce  ·  2025',
    visualAlt: 'Capacity Planning dashboard',
  },
  slide4: {
    eyebrow: 'The user',
    headline: "What's a Planner?",
    meetLabel: 'Meet Sam, the Planner.',
    body1:
      'Salesforce Field Service powers enterprise companies including telecom crews and HVAC fleets with tools for their end-to-end operations.',
    body2:
      'Within large organizations, Operations Planners are responsible for making sure there are enough people to do the work in 1–3 months.',
    samAlt: 'Sam, the Planner',
  },
  slide5: {
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
    explainer:
      "The Capacity Limits dashboard was Sam's first real signal. It proved the concept before we built the system.",
    videoSrc: 'https://portfolio-vids.b-cdn.net/Capacity%20Limits%20Video%203.mov',
  },
  slide6: {
    eyebrow: 'Discovery & synthesis',
    headline: 'My approach to understanding the Planner',
    part1: {
      title: 'I gathered existing research data',
      body: 'First I gathered existing research within the UX research organization as well as research done by an external third party and fed over 20 documents into a NotebookLM.',
      workshopTitle: 'I also ran an affinity-mapping workshop',
      workshopBody:
        'I gathered domain experts and users to understand how planners in specific industries were experiencing pains with planning.',
      affinityAlt: 'Affinity mapping workshop',
    },
    part2: {
      title: 'Synthesis with Claude',
      body: 'I extracted user stories as well as a flowchart using Claude, and the Figma MCP within Claude.',
      flowchartAlt: 'Capacity flowchart synthesized in Claude',
    },
    part3: {
      intro: 'To put the problem in clear terms:',
      stats: [
        {
          value: 30,
          suffix: '%',
          icon: 'siren',
          bold: '30% of total work hours',
          body: ' are spent handling unplanned emergencies, disrupting planned work and reducing capacity.',
        },
        {
          value: 25,
          suffix: '%',
          icon: 'wrench',
          bold: '25% of companies',
          body: ' still use spreadsheets for job scheduling, leading to error rates and information silos.',
        },
      ],
    },
    part4: {
      intro:
        'After synthesizing the data, I found the layered themes from each pointing to a design approach.',
      divider: 'How Sam is expected to fix it',
      challenges: [
        {
          icon: 'trending-up',
          title: 'Power outages during storms',
          body: 'Mutual aid agreements between utilities share resources but spike demand.',
        },
        {
          icon: 'home',
          title: 'Humanitarian aid during crises',
          body: 'Companies respond to worldwide SOS crises, such as climate emergencies.',
        },
        {
          icon: 'calendar',
          title: 'Annual, advertised events',
          body: 'Marketing campaigns and holiday shopping cause service demand spikes.',
        },
      ],
      solutions: [
        {
          icon: 'users',
          title: 'Autonomous negotiation',
          body: 'Enable AI agents to interact as planners who negotiate between organizations.',
        },
        {
          icon: 'sprout',
          title: 'Upskill management',
          body: 'Identify skill gaps and training needs; provide pathways for upskilling.',
        },
        {
          icon: 'clock',
          title: 'Allocation based on urgency',
          body: 'Measure and prioritize according to urgency of work and service needs.',
        },
      ],
    },
  },
  slide7: {
    eyebrow: 'Solution',
    headline: 'An AI agent-based approach to capacity gap detection and resolution',
    parts: [
      {
        bodyBefore: 'I concluded that Sam should be able to land, understand her situation, and take action without friction. I designed an ',
        bold: 'AI Gap Resolution Agent',
        bodyAfter: ' that can be entrusted to handle gap resolutions.',
        image: '/Slide Visuals/AI Flow/AI - 1.png',
        imageAlt: 'AI flow — step 1',
      },
      {
        bodyBefore: 'I concluded that Sam should be able to land, understand her situation, and take action without friction. I designed an ',
        bold: 'AI Gap Resolution Agent',
        bodyAfter: ' that can be entrusted to handle gap resolutions.',
        image: '/Slide Visuals/AI Flow/AI - 2.png',
        imageAlt: 'AI flow — step 2',
      },
      {
        body: 'Because AI patterns hadn\'t been established at Salesforce, I used the design system and emerging market patterns and best practices to design AI patterns for an exceptional user experience.',
        image: '/Slide Visuals/AI Flow/AI - 3.png',
        imageAlt: 'AI flow — step 3',
      },
      {
        body: 'Because AI patterns hadn\'t been established at Salesforce, I used the design system and emerging market patterns and best practices to design AI patterns for an exceptional user experience.',
        image: '/Slide Visuals/AI Flow/AI - 4.png',
        imageAlt: 'AI flow — step 4',
      },
    ],
  },
  slide8: {
    eyebrow: 'Process',
    headline:
      'I worked hand in hand with the Product, Design and Development teams in a continuous iteration cycle',
    parts: [
      {
        body: 'Design concepts are continuously communicated with product and development teams.',
        image: '/Slide Visuals/UX Process.svg',
        imageAlt: 'Continuous UX process flow',
      },
      {
        body: 'UX best practices and component updates were continuously aligned and validated with several UX bodies within the organization, including the field service design team, Tableau analytics and the Salesforce Lightning Design System teams.',
        image: '/Slide Visuals/Design Stakeholders.png',
        imageAlt: 'Design stakeholders map',
      },
    ],
  },
  slide9: {
    headline: 'Thank you!',
    body: 'I appreciate you coming along this brief journey with me.',
    avatarAlt: 'Dave Orian',
  },
} as const;
