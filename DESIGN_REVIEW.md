# Design Review — critique of the first-pass build

Reviewed by rendering the running site and capturing it at desktop (1440×900) and
mobile (390×844), in both themes. Screenshots reviewed:

- `cur-desktop-light.png` — full page
- `cur-hero-desktop-light.png` — hero, desktop
- `cur-hero-mobile-light.png` — hero, mobile
- `cur-work-desktop-light.png` — featured work, desktop

I built the first version, so this is a critique of my own work. It is not as good
as it should be. The honest summary: **it is competent and it is generic.** It reads
like a well-organised documentation site, not the portfolio of an engineer who ships
products for startups.

---

## What is actually wrong

### 1. The hero has no counterweight

Measured at 1440px: the headline block ends around x≈805 and the content column
ends at x≈1232. The right ~45% of the height and ~55% of the width is empty. The
hero is a narrow left-hand column floating in a wide white field.

Nothing balances it. No supporting element, no composition, no anchor. The eye lands
on the headline and then finds nothing — there is no focal *point*, just a focal
*paragraph*.

The headline is also hard-broken mid-phrase ("I build products from / idea to
production."), so line 2 stops short of line 1 and leaves a ragged notch that makes
an already-empty area look accidental rather than composed.

### 2. Weak vertical rhythm and dead vertical space

The page is roughly **10,800px tall** at desktop width. Eight sections, each starting
with the same shape: small orange uppercase eyebrow → bold sentence → grey paragraph →
content. Four consecutive sections are row-lists with hairline dividers. The result is
that every section looks like every other section, and the page reads as a long
document you scroll rather than a sequence you experience.

Top-of-section space is consistently larger than the space inside the section, so each
section feels like it starts too far down and then gets cramped at the bottom.

### 3. Only one surface treatment for the whole page

Everything sits on flat white with 1px hairlines. There is no alternation, no depth,
no change of ground. A single accent colour appears in exactly three places (logo mark,
two buttons, some links). The page has no textural identity at all.

### 4. Type scale is too timid, and hierarchy collapses below h1

The h1 is genuinely large (~72–80px) but everything under it bunches up: section
headings top out around 2rem and body copy is 1rem. Worse, section headings and project
titles sit at similar weights, so the eye has to read to tell which is which. There is
one big type moment and then a long stretch of near-uniform type.

Body copy is `1rem` with `1.65` line-height in a 62ch measure — readable, but it reads
as a default rather than a decision.

### 5. Featured project cards are the weakest element on the page

Four identical bordered boxes, image left / text right, stacked. Measured problems:

- **Duplicated meta line.** The Plutio card renders `AI AUTOMATION · AI AUTOMATION
  ENGINEER` — the discipline and the role are the same words twice. That is a copy bug
  and it looks careless.
- **No composition variety.** Same box, same proportions, four times. This is the
  section the brief says matters most after the hero, and it is the most monotonous.
- **The border does all the work.** No shadow, no depth, no framing on the image, so
  the image and the text sit in a box rather than a composition.
- **Imagery is not framed.** The image fills its cell edge-to-edge with a small radius,
  so a marketing graphic and a real UI screenshot are presented identically.

### 6. The imagery problem is real, and partly an asset problem

I inspected each featured visual:

| Project | What the asset actually is | Verdict |
|---|---|---|
| Plutio | An indigo marketing **cover graphic** with a large "PLUTO" wordmark over a blurred, partly occluded mockup | Weak as a large visual — a viewer learns the name and nothing about the interface |
| SalesGuard | A **real, crisp landing-page screenshot**, monochrome, legible | Good — the strongest asset available |
| HACKERverse | Nothing | Must be a labelled placeholder |
| Cyrenium | Nothing | Must be a labelled placeholder |

I had been presenting a brand cover and a UI screenshot with the same treatment, which
flatters neither. The SalesGuard shot also has its bottom stat row ("30 min / 0-100")
clipped mid-glyph and a text caret left in the headline — visible sloppiness I should
have caught.

### 7. Mobile is compressed, not designed

At 390px the hero headline wraps without intended breaks, the meta row (LinkedIn /
email / location) runs long and tight, and section padding is the desktop value scaled
down. It is usable, and it is not designed.

### 8. Nav has no separation from content

The masthead is white-on-white with no rule until you scroll, so the nav floats
uncomfortably above the hero. The theme toggle is a square outline button sitting next
to a full-pill CTA — two different radii in a 60px row.

### 9. No microinteraction craft

There is one hover behaviour in the whole page (a link arrow nudging 3px). No entrance
transitions, no scroll affordance, no scroll cue, no sense that the page responds to
you.

---

## What to keep

- Information architecture, routes and the content model — all sound.
- The single-accent discipline and the verified contrast pairs.
- The honest placeholders and the "not finished" Cyrenium panel.
- The readable body measure and the light/dark token structure.

---

## The redesign plan

**Direction: editorial technical.** Warm-neutral grounds instead of flat white, a real
type system with three families doing three jobs, one accent used confidently, and
composition instead of symmetry.

1. **Type system.** Geist Variable for display and body; Instrument Serif for editorial
   accents (hero emphasis word, testimonial quotes, section numerals); JetBrains Mono
   for labels, meta and numbers. Self-hosted, latin subsets, no external requests.
   Establish a real scale: display / h1 / h2 / h3 / body-lg / body / caption / label.

2. **Hero.** Give it a counterweight: an asymmetric two-column composition where the
   headline spans wide and a right-hand "spec panel" (availability, base, focus,
   current work) anchors the composition in mono type. Add a hairline grid ground and a
   single soft warm glow for depth. No floating icons, no particles, no typewriter.

3. **Featured work.** Four distinct compositions — one full-width flagship, alternating
   splits, one wide two-column — unified by a shared media frame with a consistent
   aspect ratio and inner ring. Per-project accent tinting for the placeholder panels.
   Fix the duplicated meta line. Fix the SalesGuard crop.

4. **Give every section a different shape.** Experience as a year-railed timeline;
   Skills as an editorial two-column index (not pills); About as prose plus a concrete
   principles list; Testimonials as one large serif pull-quote plus supporting quotes;
   Contact as a large closing statement with the email as the primary action.

5. **Craft.** Staggered entrance reveals via IntersectionObserver, all gated behind
   `prefers-reduced-motion`. Hover states on media, rows and buttons. Visible focus
   rings. Theme transition that does not animate every element.

6. **Mobile first-class.** Re-designed breakpoints per section rather than a scaled
   desktop: hero stack order, specimen panel collapsing to a horizontal strip, project
   media at a shorter aspect, larger touch targets, explicit headline breaks.

7. **Verify by looking.** Screenshot after each pass at desktop and mobile, in both
   themes, and fix what still reads as generic.

---

## Revision: information architecture

The plan above rebuilt the *visual* layer but kept the previous site's structure —
one long homepage carrying the hero, a project showcase, other work, experience,
skills, testimonials, about and contact. Measured at 1440px that page ran to roughly
**10,800px**, and the review of the first rebuild confirmed the symptom: it read as a
long SaaS landing page rather than a personal portfolio.

Two things were wrong with it:

1. **Everything competed on one page.** Eight consecutive sections meant no page had a
   single purpose, and the four project case studies — the most valuable content —
   were buried after a hero that already asked for two screens of attention.
2. **Section rhythm lost meaning.** With eight alternating grounds and eight section
   headings, the alternation stopped signalling anything.

### What changed

The site is now five focused pages plus case studies:

| Route | Purpose | Desktop height |
|---|---|---|
| `/` | Introduction and a directory of the site | ~1,560px (1.7 screens) |
| `/projects` | The four case studies, other products, deployment work | long — a destination |
| `/experience` | Professional timeline | ~3,500px |
| `/about` | Background, principles, capabilities, education | ~3,000px |
| `/contact` | Email, GitHub, LinkedIn | ~1,080px (one screen) |
| `/work/:slug` | Individual case study | content-driven |

- **The homepage holds no project content at all.** It is the hero plus a four-row
  index of the pages. This is enforced by a test (`contains no project showcase`) so a
  showcase cannot creep back onto it under another name.
- **Navigation is page-based**, so the active state comes from the pathname instead of
  a scroll observer. That removed the scroll-spy hook entirely, and "Projects" stays
  active while reading a case study.
- **Section components no longer own their page headings.** Each page supplies one `h1`
  through a shared `PageHeader`; sections contribute `h2`s. This removed several
  duplicate headings that existed only because everything used to share one page.
- **"How I Build" was merged into About** as a principles column, and "Testimonials"
  was dropped from the critical path — both were near-duplicates of neighbouring
  content on a single-page layout.

The visual identity — type system, palette, media frames, the four project
compositions — is unchanged. This revision is structure only.

