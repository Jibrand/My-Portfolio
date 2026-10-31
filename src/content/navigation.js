/**
 * Primary navigation — one entry per page.
 *
 * The site is a set of focused pages rather than one long scroll: each page has
 * a single purpose, and the navigation is the same everywhere.
 */
export const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

/**
 * The homepage index. A compact directory of the site rather than a showcase —
 * the homepage introduces, these pages hold the detail.
 */
export const pages = [
  {
    label: "Projects",
    to: "/projects",
    description: "Products and platforms I've built, with case studies.",
  },
  {
    label: "Experience",
    to: "/experience",
    description: "Where I've worked, and what I owned.",
  },
  {
    label: "About",
    to: "/about",
    description: "Background, education and how I work.",
  },
  {
    label: "Contact",
    to: "/contact",
    description: "Email, GitHub and LinkedIn.",
  },
];
