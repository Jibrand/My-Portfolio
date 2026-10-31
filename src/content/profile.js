/**
 * Site-wide identity, contact details and page copy.
 *
 * Single source of truth for anything that appears in more than one place.
 * Every claim here is either drawn from the existing site/resume or supplied
 * by Muhammad directly. Nothing is invented — see CONTENT_TODO.md for items
 * still awaiting verification.
 */

export const site = {
  url: "https://muhammadjibran.netlify.app",
  name: "Muhammad Jibran",
  locale: "en",
};

export const profile = {
  name: "Muhammad Jibran",
  initials: "MJ",
  role: "Product Engineer",
  roleLine: "Product Engineer · Full-Stack & AI Engineer",
  eyebrow: "Product Engineer · Full-Stack & AI",
  /**
   * The headline is split so the final word can be set in the editorial serif.
   * Rendered as: "I build products from idea to production."
   */
  headline: {
    lead: "I build products from idea to",
    accent: "production.",
  },
  lead: "I'm Muhammad Jibran, a full-stack and AI engineer who enjoys turning ideas into working products. I've worked with startup founders on SaaS platforms, AI integrations, backend systems, and everything needed to get software into users' hands.",
  supporting:
    "I build and ship SaaS products, AI-powered features, and full-stack applications.",
  location: "Karachi, Pakistan",
  availability: "Open to product engineering roles and contract work.",
  availabilityShort: "Open to new work",
  email: "muhammadjibran890@gmail.com",
  github: "https://github.com/Jibrand",
  linkedin: "https://www.linkedin.com/in/muhammad-jibran220/",
};

/**
 * The hero's specimen panel — technical facts in mono type. This is the visual
 * counterweight to the headline: it gives the right-hand column a purpose
 * instead of leaving it empty.
 */
export const heroSpec = [
  { key: "Status", value: "Open to new work" },
  { key: "Base", value: "Karachi, Pakistan · remote" },
  { key: "Focus", value: "SaaS products · AI features · backends" },
  { key: "Stack", value: "React · TypeScript · Node · Python · AWS" },
  { key: "Languages", value: "English · Urdu" },
];

export const about = {
  heading: "About",
  title: "Software that people actually use",
  paragraphs: [
    "I'm a full-stack and AI engineer based in Karachi. For the last few years I've been building software for startups and their founders: SaaS platforms, AI-powered features, and the backends and infrastructure that keep them running.",
    "Most of that work has been end-to-end. I've worked with small, mostly remote teams in the US, Canada and Europe, which has meant owning large parts of a product and making engineering decisions without much supervision.",
    "What matters to me is shipping software people use, rather than demos that only work in a README.",
  ],
  highlights: [
    { label: "Focus", value: "End-to-end product development" },
    { label: "Works with", value: "Startup founders and small teams" },
    { label: "Ships", value: "SaaS platforms and AI features" },
    { label: "Based in", value: "Karachi, Pakistan (remote)" },
  ],
};

/**
 * Education, taken from the CV. The CV lists the degree as ongoing, so no
 * completion date is published here — see CONTENT_TODO.md.
 */
export const education = [
  {
    qualification: "BSc Software Engineering",
    institution: "Muhammad Ali Jinnah University",
    location: "Karachi, Pakistan",
  },
];

/**
 * "How I build" — practical engineering principles, shown beside the About copy
 * rather than as a separate section, so the page has one fewer near-identical
 * block to scroll past.
 */
export const principles = [
  {
    title: "Understand the problem first",
    body: "I start with what the product has to do and who it's for, before choosing a framework or a schema. Most expensive mistakes happen before any code exists.",
  },
  {
    title: "Design the whole system together",
    body: "Data model, APIs, interface and deployment get decided as one decision, because each one constrains the others.",
  },
  {
    title: "Use AI, then review it",
    body: "AI tools are a real speed-up on implementation and debugging. I read and test what they produce — the responsibility for correctness stays with me.",
  },
  {
    title: "Ship it, then keep it running",
    body: "Tests, security, migrations and monitoring are part of the work, not a later phase. Software nobody maintains isn't finished software.",
  },
];
