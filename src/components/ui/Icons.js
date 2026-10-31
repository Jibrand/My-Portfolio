/**
 * A small, deliberately consistent icon set.
 *
 * Hand-written rather than pulled from an icon library so stroke weight,
 * sizing and alignment stay uniform, and so the bundle only carries the icons
 * actually used.
 *
 * All icons are decorative by default (aria-hidden) — the adjacent text or the
 * link's accessible name carries the meaning.
 */

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const ArrowRight = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (props) => (
  <svg {...base} {...props}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const ExternalLink = (props) => (
  <svg {...base} {...props}>
    <path d="M14 4h6v6M20 4l-8.5 8.5" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export const GitHub = (props) => (
  <svg {...base} {...props}>
    <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 5.9-1.4 5.9-6.3a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C4.9 1 3.7 1.4 3.7 1.4a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 2.2 8.4c0 4.9 2.9 6 5.9 6.3a3.4 3.4 0 0 0-.9 2.6V21" />
  </svg>
);

export const LinkedIn = (props) => (
  <svg {...base} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2.5 6.5 9.5 7 9.5-7" />
  </svg>
);

export const Sun = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Moon = (props) => (
  <svg {...base} {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const Menu = (props) => (
  <svg {...base} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Close = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const MapPin = (props) => (
  <svg {...base} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
