export const SLIDE_PART_COUNTS = [1, 1, 1, 1, 3, 1, 2, 4, 4, 1, 1] as const;

export const TOTAL_SLIDES = SLIDE_PART_COUNTS.length;

export type SlideMeta = {
  title: string;
  notes: string;
  partCount: number;
};

export const SLIDE_META: SlideMeta[] = [
  {
    title: "Hi! I'm Dave.",
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.',
    partCount: 1,
  },
  {
    title: 'Leading the design for an AI-agent based workforce planning system',
    notes:
      'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.',
    partCount: 1,
  },
  {
    title: "What's a Planner?",
    notes:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
    partCount: 1,
  },
  {
    title: 'A feature that evolved into a Suite',
    notes:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    partCount: 1,
  },
  {
    title: 'My approach to understanding the Planner',
    notes:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.',
    partCount: 3,
  },
  {
    title: 'Deconstructing negotiation',
    notes:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur.',
    partCount: 1,
  },
  {
    title: 'Which entry point options are there for Autonomous Negotiation?',
    notes:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur.',
    partCount: 2,
  },
  {
    title: 'Approach #1: An AI agent-based approach to capacity gap detection and resolution',
    notes:
      'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    partCount: 4,
  },
  {
    title: 'Approach #2: A manual gap resolution approach',
    notes:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur.',
    partCount: 4,
  },
  {
    title: 'The Capacity Gap Agent and Wizard in the field',
    notes:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur.',
    partCount: 1,
  },
  {
    title: 'Thank you!',
    notes:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et.',
    partCount: 1,
  },
];
