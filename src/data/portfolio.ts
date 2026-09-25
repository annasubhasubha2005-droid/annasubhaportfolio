/**
 * Single source of truth for every word, link and image on this site.
 * Edit this file to update the portfolio — no component changes needed.
 *
 * Links set to PLACEHOLDER render as a clearly-marked "coming soon" chip
 * instead of a dead link. Replace the string with a real URL to activate it.
 */

export const PLACEHOLDER = 'PLACEHOLDER'

export const profile = {
  name: 'Annasubha',
  role: 'UI/UX Designer',
  location: 'Tamil Nadu, India',
  availability: 'Open to junior UI/UX roles & internships',
  tagline: 'I design calm, usable interfaces.',
  intro:
    'A fresher UI/UX designer who turns messy problems into simple screens. I work in Figma from first user interview to final prototype, and I care most about the moment an interface stops needing explanation.',
  about: [
    'I am interested in creating simple, user-friendly and visually clear digital experiences. I enjoy understanding user needs, solving design problems and turning ideas into practical interfaces.',
    'Most of my work starts with questions rather than screens. I talk to people about how they already get things done, map where the flow breaks, and only then start sketching. Wireframes stay deliberately rough until the structure holds up, because it is cheaper to move a grey box than a finished component.',
    'I recently completed a UI/UX design course alongside my B.Tech in Information Technology, and built the two case studies on this site end to end — research, information architecture, wireframes, a component library, and a clickable prototype.',
  ],
  principles: [
    {
      title: 'Structure before surface',
      body: 'Information architecture and user flow get settled in greyscale. Colour and type come after the skeleton is defensible.',
    },
    {
      title: 'One clear action per screen',
      body: 'Every screen earns a single primary button. Everything else steps back in weight, size or contrast.',
    },
    {
      title: 'Systems, not screens',
      body: 'Components and variants keep spacing, states and type consistent, so a new screen takes minutes rather than hours.',
    },
  ],
} as const

/** Replace each `url` with your real profile links. */
export const socials = [
  { label: 'Email', handle: 'your.name@example.com', url: 'mailto:your.name@example.com', kind: 'mail' as const, note: 'Best way to reach me' },
  { label: 'Phone', handle: '+91 00000 00000', url: 'tel:+910000000000', kind: 'phone' as const, note: 'Weekdays, 10am – 7pm IST' },
  { label: 'LinkedIn', handle: '/in/annasubha', url: PLACEHOLDER, kind: 'linkedin' as const, note: 'Experience & recommendations' },
  { label: 'Figma', handle: '@annasubha', url: PLACEHOLDER, kind: 'figma' as const, note: 'Files, components & prototypes' },
  { label: 'GitHub', handle: '@annasubha', url: PLACEHOLDER, kind: 'github' as const, note: 'Design-to-code experiments' },
]

export const skillGroups = [
  {
    id: 'ux',
    label: 'UX Design',
    caption: 'Understanding the problem before drawing the answer.',
    items: [
      'User Research',
      'User Flow',
      'Information Architecture',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Journey Mapping',
      'Design Thinking',
    ],
  },
  {
    id: 'ui',
    label: 'UI Design',
    caption: 'Making the answer clear, consistent and pleasant.',
    items: [
      'Visual Design',
      'Typography',
      'Color Theory',
      'Responsive Design',
      'Design Systems',
      'Components & Variants',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    caption: 'Where the work actually happens.',
    items: ['Figma', 'FigJam', 'Adobe XD', 'Canva'],
  },
]

export const education = [
  {
    title: 'B.Tech, Information Technology',
    org: 'PSN Engineering College, Melathidiyoor',
    period: '2026',
    detail:
      'Four-year undergraduate degree in Information Technology, with coursework in software engineering, databases and human–computer interaction.',
  },
]

export const certifications = [
  {
    title: 'UI/UX Design Course',
    org: 'GUVI',
    period: 'Completed 2026',
    detail:
      'End-to-end product design track covering user research, wireframing, design systems, prototyping in Figma and usability testing.',
  },
]

export const experience = [
  {
    title: 'UI/UX Design Projects',
    org: 'Academic & personal work',
    period: '2025 — 2026',
    detail:
      'Designed two complete mobile app concepts, MealEz and Z’Bazaar, from research through to interactive prototype. Built a reusable component library and ran informal usability sessions to validate each flow.',
  },
  {
    title: 'Self-directed practice',
    org: 'Daily UI & redesign studies',
    period: '2025 — 2026',
    detail:
      'Regular interface studies focused on typography, colour systems and responsive layout, collected in the gallery on this site.',
  },
]

export type GalleryItem = {
  src: string
  title: string
  caption: string
  category: 'Case Study' | 'Interface' | 'Research' | 'System'
  ratio: string
}

export const gallery: GalleryItem[] = [
  {
    src: '/img/mealez-screens.png',
    title: 'MealEz — ordering flow',
    caption: 'Search, dish detail, cart, checkout and live order tracking, side by side.',
    category: 'Case Study',
    ratio: '16 / 9',
  },
  {
    src: '/img/zbazaar-screens.png',
    title: 'Z’Bazaar — discovery flow',
    caption: 'Browse grid, filter drawer, product detail, bag and confirmation.',
    category: 'Case Study',
    ratio: '16 / 9',
  },
  {
    src: '/img/gallery-design-system.png',
    title: 'Component library',
    caption: 'Buttons, inputs, chips and toggles with every state defined as a variant.',
    category: 'System',
    ratio: '4 / 3',
  },
  {
    src: '/img/gallery-type-color.png',
    title: 'Type & colour specimen',
    caption: 'A five-step type scale and a six-tone palette checked for contrast.',
    category: 'System',
    ratio: '4 / 3',
  },
  {
    src: '/img/gallery-journey-map.png',
    title: 'Journey map',
    caption: 'Where ordering food goes from mildly annoying to genuinely frustrating.',
    category: 'Research',
    ratio: '16 / 9',
  },
  {
    src: '/img/gallery-research-board.png',
    title: 'Affinity mapping',
    caption: 'Interview notes clustered in FigJam until four themes showed up.',
    category: 'Research',
    ratio: '4 / 3',
  },
  {
    src: '/img/gallery-prototype-flow.png',
    title: 'Prototype wiring',
    caption: 'Hotspots and transitions connecting seven screens into one clickable path.',
    category: 'System',
    ratio: '16 / 9',
  },
  {
    src: '/img/mealez-wireframes.png',
    title: 'Low-fidelity wireframes',
    caption: 'Structure first — grey boxes, no colour, nothing precious.',
    category: 'Interface',
    ratio: '16 / 9',
  },
  {
    src: '/img/zbazaar-wireframes.png',
    title: 'Mid-fidelity wireframes',
    caption: 'Filter drawer and product grid tested before any visual design.',
    category: 'Interface',
    ratio: '16 / 9',
  },
  {
    src: '/img/hero-studio.png',
    title: 'Working setup',
    caption: 'Printed flows, sticky notes and one very patient plant.',
    category: 'Interface',
    ratio: '4 / 5',
  },
]

export type CaseStudy = {
  slug: string
  index: string
  title: string
  kind: string
  year: string
  summary: string
  overview: string
  role: string
  tools: string[]
  platform: string
  duration: string
  cover: string
  screens: string
  wireframes: string
  wireframeNote: string
  accent: 'forest' | 'bronze'
  problem: string
  problemPoints: string[]
  goal: string
  goalPoints: string[]
  research: { method: string; detail: string }[]
  insights: { stat: string; label: string }[]
  flow: string[]
  features?: { title: string; body: string }[]
  decisions: { title: string; body: string }[]
  prototypeUrl: string
  figmaFileUrl: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mealez',
    index: '01',
    title: 'MealEz',
    kind: 'Food Delivery Mobile App',
    year: '2026',
    summary:
      'A food delivery app concept that gets you from hungry to ordered in under a minute.',
    overview:
      'MealEz is a food delivery mobile app concept designed to make the food ordering process simple and easy for users. The whole design is built around one question: how few decisions can stand between opening the app and confirming an order?',
    role: 'UI/UX Designer — research, IA, UI, prototype',
    tools: ['Figma', 'FigJam'],
    platform: 'iOS & Android — mobile',
    duration: 'Self-directed concept project',
    cover: '/img/mealez-cover.png',
    screens: '/img/mealez-screens.png',
    wireframes: '/img/mealez-wireframes.png',
    wireframeNote:
      'Six low-fidelity frames covering the full order path. Everything stayed greyscale until the structure survived three walkthroughs.',
    accent: 'forest',
    problem:
      'Ordering food should take a minute, but most delivery apps turn it into a scavenger hunt. People scroll long unfiltered lists, lose track of what is already in the cart, and then have no idea where their order actually is.',
    problemPoints: [
      'Menus bury the dish detail people actually need — portion size, spice level, delivery time.',
      'Cart and checkout are split across so many steps that people abandon halfway.',
      'After paying, order status is a single vague line of text with no sense of progress.',
    ],
    goal:
      'Design a mobile ordering experience where finding a dish, understanding it, and paying for it each take one screen — and where tracking the order afterwards needs no explanation.',
    goalPoints: [
      'Cut the path from home screen to confirmed order to six taps.',
      'Make dish detail answer every question before the add-to-cart button.',
      'Give order tracking a visible, honest sense of progress.',
    ],
    research: [
      {
        method: 'User interviews',
        detail:
          'Nine short conversations with people who order food at least twice a week, focused on the last order they placed and what annoyed them about it.',
      },
      {
        method: 'Competitive review',
        detail:
          'Walked the ordering flow of four existing delivery apps and counted taps, screens and dead ends from home to confirmation.',
      },
      {
        method: 'Affinity mapping',
        detail:
          'Clustered interview notes in FigJam into four themes: decision fatigue, hidden cost, cart confusion, and post-order anxiety.',
      },
      {
        method: 'Usability testing',
        detail:
          'Five participants completed a "order lunch for two under ₹400" task on the clickable prototype while talking through their choices.',
      },
    ],
    insights: [
      { stat: '7 of 9', label: 'decided what to eat by photo before reading any dish name' },
      { stat: '4 of 9', label: 'had abandoned an order because checkout felt too long' },
      { stat: '38 s', label: 'median time to a confirmed order on the tested prototype' },
      { stat: '2 of 5', label: 'testers tapped the wrong filter chip before it was enlarged' },
    ],
    flow: [
      'Home',
      'Search',
      'Food Details',
      'Cart',
      'Checkout',
      'Order Confirmation',
      'Order Tracking',
    ],
    decisions: [
      {
        title: 'Photo-led cards, not text lists',
        body: 'Since most people chose by image, dish cards lead with a large photo and put the name, price and delivery estimate underneath in one compact line.',
      },
      {
        title: 'Single-screen checkout',
        body: 'Address, payment method and order summary live on one scrollable screen with a sticky pay button, replacing the three-step wizard other apps use.',
      },
      {
        title: 'Cart that never hides',
        body: 'A persistent bar shows item count and running total from the moment the first dish is added, so the total is never a surprise at the end.',
      },
      {
        title: 'Tracking as a stepper',
        body: 'Order status became a four-step progress indicator with timestamps — confirmed, preparing, on the way, delivered — instead of one ambiguous status line.',
      },
      {
        title: 'Bigger filter targets',
        body: 'Filter chips grew to a 44px tap height after two testers hit the wrong one, and the active chip now inverts to solid green rather than changing only its border.',
      },
    ],
    prototypeUrl: https://www.figma.com/design/geBNtIXmSScDGs8ORqxpYB/MealEz-Food-Delivery-App?node-id=0-1&t=gBSTLacyWFiVBOCq-1,
    figmaFileUrl: https://www.figma.com/design/geBNtIXmSScDGs8ORqxpYB/MealEz-Food-Delivery-App?node-id=0-1&t=gBSTLacyWFiVBOCq-1,
  },
  {
    slug: 'zbazaar',
    index: '02',
    title: 'Z’Bazaar',
    kind: 'Fashion Shopping App',
    year: '2026',
    summary:
      'A fashion shopping app concept built around filters that actually narrow things down.',
    overview:
      'Z’Bazaar is a fashion shopping app concept designed to make online product discovery and shopping simple and convenient. Where MealEz optimises for speed, this one optimises for confidence — helping people find something they will keep.',
    role: 'UI/UX Designer — research, IA, UI, design system, prototype',
    tools: ['Figma', 'FigJam'],
    platform: 'iOS & Android — mobile',
    duration: 'Self-directed concept project',
    cover: '/img/zbazaar-cover.png',
    screens: '/img/zbazaar-screens.png',
    wireframes: '/img/zbazaar-wireframes.png',
    wireframeNote:
      'Mid-fidelity frames for the browse grid and filter drawer, the two screens that carry the whole discovery experience.',
    accent: 'bronze',
    problem:
      'Fashion apps show thousands of products and almost no useful way to narrow them. Shoppers filter, lose their place, cannot compare two options, and give up somewhere between the grid and the bag.',
    problemPoints: [
      'Filters reset or vanish when you go back, so browsing restarts from scratch.',
      'Product pages skip the details that decide a purchase — fabric, fit, return window.',
      'Saving something for later is buried, so people use the bag as a wishlist and then abandon it.',
    ],
    goal:
      'Design a discovery experience where filters persist, product detail answers the fit question honestly, and saving for later is a first-class action rather than a workaround.',
    goalPoints: [
      'Keep active filters visible and editable at every step of browsing.',
      'Make wishlist and bag two clearly separate, equally easy actions.',
      'Reduce the decision to a single scroll: image, fit, fabric, price, action.',
    ],
    research: [
      {
        method: 'User interviews',
        detail:
          'Eight conversations with online clothing shoppers about the last item they returned, and what the product page had failed to tell them.',
      },
      {
        method: 'Competitive audit',
        detail:
          'Compared filter and wishlist behaviour across five shopping apps, noting where filter state was lost on back-navigation.',
      },
      {
        method: 'Card sorting',
        detail:
          'Participants grouped sixty product attributes, which set the category structure and decided which filters earn a place on the first screen.',
      },
      {
        method: 'Usability testing',
        detail:
          'Five testers were asked to find a shirt under ₹1,200 in their size and save it for later, then check out.',
      },
    ],
    insights: [
      { stat: '6 of 8', label: 'had returned an item because the fit was not what they expected' },
      { stat: '5 of 8', label: 'used the shopping bag as a wishlist because saving was hard to find' },
      { stat: '3 of 5', label: 'expected filters to survive going back to the grid' },
      { stat: '11', label: 'attribute groups reduced to 5 primary filters after card sorting' },
    ],
    flow: [
      'Home',
      'Search',
      'Filter',
      'Product Details',
      'Wishlist / Cart',
      'Checkout',
      'Confirmation',
    ],
    features: [
      {
        title: 'Persistent filter bar',
        body: 'Active filters sit as removable chips above the grid and survive navigation, so refining a search never means starting over.',
      },
      {
        title: 'Fit-first product detail',
        body: 'Size chips, a model-height note and fabric composition appear above the fold, directly under the image carousel.',
      },
      {
        title: 'Wishlist as a peer to the bag',
        body: 'A heart on every card and a dedicated tab make saving a real action rather than a hidden one.',
      },
      {
        title: 'Honest bag summary',
        body: 'Delivery, returns window and total are shown together before the pay button, with no late additions.',
      },
    ],
    decisions: [
      {
        title: 'Two-column grid, not three',
        body: 'Garment texture matters more than density. Two columns give each product enough pixels to judge fabric, which three did not.',
      },
      {
        title: 'Five filters, not eleven',
        body: 'Card sorting collapsed eleven attribute groups into size, price, colour, category and brand. The rest moved into a secondary sheet.',
      },
      {
        title: 'Bronze for save, green for buy',
        body: 'The two actions needed different colours so they could never be confused — bronze marks saving, forest green always means commit.',
      },
      {
        title: 'Filter drawer over full page',
        body: 'Filtering happens in a bottom sheet above the grid, so results stay partially visible and the context is never lost.',
      },
    ],
    prototypeUrl: https://www.figma.com/design/SOI9iTTqs6NqDRwNcZz072/Z--Bazaar-Fashion-Shopping-App?t=7hc9wKvPbJ5ptOsu-1,
    figmaFileUrl: https:https://www.figma.com/design/SOI9iTTqs6NqDRwNcZz072/Z--Bazaar-Fashion-Shopping-App?t=7hc9wKvPbJ5ptOsu-1,
  },
]

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
] as const
