# Portfolio Audit — muhammadjibran.netlify.app

Audit of the existing portfolio repository (`My-Portfolio`, commit `75e607d` on `main`).
Scope: codebase, routing, content, styling, dependencies, assets, deployment, accessibility, SEO, performance.

No existing files were modified during the audit.

---

## 1. What the site is today

- **Stack:** Create React App (`react-scripts` 5.0.1), React 18.2, `react-router-dom` 6.3.
- **Routing:** `/`, `/project`, `/about`, `/resume`, `/homepay`, `/OpenAi`, `/meetings`, `*` → `/`.
- **Deployment:** Netlify, with an SPA fallback rule in `public/_redirects`.
- **Content:** a single-page hero, a testimonials marquee, a ~40-card projects grid, a skills icon wall, a PDF resume viewer.

### Content worth preserving

| Item | Where | Verdict |
|---|---|---|
| Founder/client testimonials (9) | `src/components/Home/Home3.js` | Preserve wording, curate, verify permission |
| Product screenshots (Plutio, SalesGuard, InboxHR, ChairBooked, Zocorp, Zayna, etc.) | `src/Assets/` | Preserve, optimize |
| Verified role + dates for HACKERverse, WebTose, BIOAMAZ, Alchimetis, Freelancing | `src/Assets/Muhammad Jibran_Resume.pdf` | Preserve as the source of truth for experience |
| Project-to-repository mapping (GitHub + demo links) | `src/components/Projects/Projects.js` | Preserve, restructure into data |
| Full-stack + AI project list | `src/components/Projects/Projects.js` | Preserve, re-rank by relevance |
| Real contact links (GitHub, LinkedIn) | `Navbar`, `Footer`, `Home2` | Preserve |

### Content that is outdated, unverifiable, or harmful to positioning

| Finding | Evidence | Impact |
|---|---|---|
| Hero says **"Full Stack Developer \| DevOps Engineer \| Gen AI Developer"** | `Home/Type.js`, `Home/Home.js` | Positions you as a DevOps engineer — the opposite of the Product Engineer target |
| **"Passionate about innovation"** in `<noscript>` | `public/index.html` | Explicitly on the avoid-list; also the only text non-JS visitors/crawlers see |
| Footer reads **"Copyright © 2026 SB"** | `components/Footer.js` | Wrong name — leftover template credit |
| An unverified metric: *"Increases client bookings by 10-15/month"* | `Projects.js` | Metrics must not appear unless verified |
| About section is a hobbies list (travelling, playing games, writing blogs) | `About/AboutCard.js` | Recruiters learn nothing about engineering |
| `manifest.json` name is **"MERN Stack Developer"**, `short_name` typo **"Jibran Porfolio"** | `public/manifest.json` | Inconsistent with positioning; visible on install/PWA |
| Objective on the published PDF: *"eager to secure freelance opportunities with tech giants"* | `Assets/Muhammad Jibran_Resume.pdf` | Contradicts the "hire me as a product engineer" goal |
| Typos in published copy: `Redit-Clone`, `Muhammad Ali Jinnnah Universty`, `Writting`, `Hotal`, `Maketing`, `Bussiness` | `Projects.js`, resume PDF, `AboutCard.js` | Credibility |
| **No content exists for Future Frame Solution, SalesGuard, Plutio or Cyrenium** anywhere in the repo | — | Cannot be published without your input (see `CONTENT_TODO.md`) |
| Testimonials attributed to first names only (`Leo`, `Seun`, `Idress`) and two to the same company | `Home3.js` | Attribution unverifiable |

---

## 2. Code quality and maintainability

- **`Projects.js` is ~700 lines** containing ~40 inline project objects *and* the JSX. Content and presentation are entangled — adding one project means editing a giant component. Needs structured data.
- **Duplicated component:** `ProjectCards.js` and `ProjectCardss.js` are near-identical copies (both implement the same card + modal). Two components, one behaviour.
- **Dead files:** `Projects_backup.js`, an empty `ProjectDetailModal.js`, `src/data/meetingImages.js` (empty), `About/Github.js` (renders one heading), two resume PDFs of which `Muhammad_Jibran_Resume.pdf` is empty.
- **`ResumeNew.js` uses `<style jsx>`**, a styled-jsx feature that does not exist in CRA — the styles silently do nothing.
- **`Navbar.js` registers a `scroll` listener inside the render body** with no `useEffect` and no cleanup. Every render adds another listener; they are never removed.
- **`<Navbar.Brand href="/">`** does a full page reload instead of a router navigation.
- **Unused data in project objects:** `dashboardLink`, `adminLink`, `imagePrompt` are defined and never rendered.
- **Styling is unstructured:** ~1000 lines of global CSS in `style.css` driven by `!important`, plus large inline `style={{}}` objects in `Home3.js` and `Techstack.js`. No design tokens.
- **Accent colour drift:** the CSS variable `--imp-text-color` is `#e27815`, but the code also hardcodes `#d36145`, `#975b1a`, `#c770f0`, `#dd6e13`, `#f5b25b`, `#e0730c`, `#d66f1a`, `#db8e45`. The variable is named `purple` and renders orange.
- **No light mode.** Backgrounds are hardcoded dark gradients (`index.css`, `--section-background-color`).
- **Tests:** `App.test.js` is the untouched CRA template (`expect(screen.getByText(/learn react/i))`) and fails against this app.

---

## 3. Routing problems

| Route | Status |
|---|---|
| `/` | In nav |
| `/project` | In nav |
| `/about` | In nav |
| `/resume` | **Orphan** — commented out of the nav, unreachable by UI |
| `/meetings` | **Orphan** — commented out of the nav |
| `/homepay` | **Orphan** — unexplained payment page, no nav entry, no inbound links |
| `/OpenAi` | **Orphan** — unexplained AI page, no nav entry, no inbound links |
| `*` | Redirects to `/`; no 404 state |

Also: no navigation entry for Contact, no primary call to action, no "Work" label, and 4 of 7 routes are dead weight that still ship in the bundle.

---

## 4. Accessibility

- **Content is gated behind a 1.2 s preloader** with `#no-scroll` locking the page — visitors cannot read the role until the animation ends. Directly contradicts the brief.
- **No `prefers-reduced-motion` handling.** Three continuous animations run regardless of user preference: the particle field, the 80 s testimonial marquee, and the waving-hand loop.
- **Particles (`react-tsparticles`) run on almost every page** — the brief lists heavy particle backgrounds as a thing to avoid.
- **Card image is a `<div onClick>`** in both `ProjectCards.js` and `ProjectCardss.js` — opens a modal but is not focusable, not keyboard-operable, has no `role`/`aria`. Screen readers announce an unlabelled image.
- **Generic alt text:** `alt="card-img"`, `alt="project-full"`, `alt="brand"`.
- **Heading structure is invalid:** the hero renders `<h3>Hi There</h3>` before `<h1>`, `Home3.js` uses `<h1>Testimonials</h1>` and `<h2>` for person names, and multiple `<h1>`s appear per page.
- **Hamburger toggle has no `aria-label`/`aria-expanded`** — the accessible name is empty.
- **No skip-to-content link.**
- **Images have no `width`/`height`** → cumulative layout shift.
- **Contrast:** body text `rgb(155 126 172)` on the near-black gradient is borderline; `#975b1a` card titles on `#1a1a2e` are well below AA.

---

## 5. SEO

- `<meta name="description">` is literally **"Web site created using create-react-app"**.
- **No Open Graph or Twitter card tags** → every shared link has no preview.
- **No canonical URL.**
- **No `sitemap.xml`**; `robots.txt` is the CRA default with no `Sitemap:` line.
- **No structured data** (no `Person`, no `Organization`).
- **Single-page app with one shared `<title>`** for every route; no per-route metadata.
- `<noscript>` copy is generic marketing language.
- No `lang`-appropriate content control; the above hold for the deployed build too.

---

## 6. Performance

- **`src/Assets` is 40.1 MB across 105 files.** Largest: `EJ.png` 6.93 MB, `3.jpg` 4.99 MB, `shooinn.PNG` 2.31 MB, `contactless.png` 1.80 MB. All are bundled/served untouched.
- **No lazy loading, no `srcset`, no explicit dimensions, no modern formats** (zero WebP/AVIF).
- **Particles** — 160 particles with `retina_detect` — on nearly every route.
- **Bootstrap CSS is loaded three times:** two `<link>` tags in `public/index.html` (one beta, one stable) and an `import "bootstrap/dist/css/bootstrap.min.css"` in `App.js`.
- **Bootstrap's JS bundle (~80 KB) is loaded in `index.html` and never used** — no Bootstrap JS APIs exist in the code.
- **No route-level code splitting.** `react-pdf` + a `pdf.js` worker fetched from `cdnjs` load only for `/resume`, but everything is in one bundle.
- **1.2 s artificial preloader delay** on first paint.

---

## 7. Dependencies

| Package | Used? | Recommendation |
|---|---|---|
| `react-bootstrap` + `bootstrap` | Yes (markup), CSS triple-loaded, JS unused | Replace with a small custom component layer; remove both |
| `react-tsparticles` | Yes (decorative) | Remove — brief excludes particle backgrounds |
| `typewriter-effect` | Only via CSS classes; not actually rendered | Remove — brief excludes typewriter animations |
| `react-parallax-tilt` | `Home2.js` avatar only | Remove — decorative |
| `react-pdf` (+ transitive `pdfjs-dist`) | `/resume` only | Remove — resume route is being dropped |
| `react-responsive` | **No** | Remove — never imported |
| `tailwindcss` | **No** — `tailwind.config.js` exists and `@tailwind` directives sit in the CSS, but there is no `postcss.config.js`/CRACO, so they are inert. Config's `content` points at `./index.html` which does not exist | Remove config + dep, or wire it properly — do not leave it half-configured |
| `react-icons` | Yes, widely | **Replaced** — a hand-written inline icon set gives consistent stroke weight and drops the dependency entirely |
| `web-vitals` | Yes (`index.js`) | Keep |
| `@testing-library/*` | Template test only | Keep — will be used for real tests |

Adding Tailwind was never completed. The site renders Bootstrap utilities, so the Tailwind config is dead code that misleads future work.

---

## 8. Deployment

- **`.github/workflows/node.js.yml` is broken:** `runs-on: self-hosted`, and `${{ matrix.node-version }}` is referenced with **no `strategy.matrix` defined**, so it resolves to an empty string. The job builds but publishes nothing, and cannot run on GitHub-hosted runners.
- **No `netlify.toml`** — build command, publish directory and Node version live only in the Netlify UI, so they are not reproducible.
- **No security headers** (CSP, `X-Content-Type-Options`, `Referrer-Policy`).
- `public/_redirects` correctly handles SPA deep links.

---

## 9. Prioritised action plan

### P0 — Credibility (must fix)
1. Remove the fabricated-sounding metric and every unverifiable claim.
2. Fix the wrong footer copyright, the `manifest.json` name, and the `noscript` copy.
3. Replace the DevOps-first positioning with **Product Engineer · Full-Stack & AI**.
4. Stop publishing the outdated resume PDF; do not invent case-study details.

### P1 — Positioning and information architecture
5. Rebuild the homepage around: Hero → Selected Work → Experience → How I Build → Skills → Testimonials → About → Contact.
6. Turn the four key products into real case studies with dedicated pages; demote the DevOps/k8s exercises to a secondary "Other work" list.
7. Move all content into structured data (`src/content/*`) so projects are data, not JSX.
8. Delete the four orphan routes.

### P2 — Design system
9. Build tokens (type scale, spacing, colour) with **one accent colour** and real light/dark themes.
10. Remove the preloader, particles, marquee-only testimonials and the icon wall; replace with typography-led layouts.
11. Reusable `Button`, `Card`, `Section`, `Tag`, `Timeline` components; no inline style objects.

### P3 — Technical quality
12. Per-route titles, meta description, canonical, OG/Twitter tags; `sitemap.xml`; fix `robots.txt`; JSON-LD `Person`.
13. Accessibility: skip link, valid heading order, keyboard-operable controls, focus styles, `prefers-reduced-motion`, explicit image dimensions.
14. Performance: optimized/WebP case-study images, lazy loading, route-level code splitting, remove the double Bootstrap load and the unused Bootstrap JS.
15. Fix the GitHub Actions workflow and add `netlify.toml`.
16. Replace the template test with real tests; verify `build` and `lint` pass.

---

## 10. Recommendations intentionally NOT actioned

- **No framework migration.** CRA is deprecated and Next.js would give better SEO and image handling, but the brief says not to migrate without a clear technical benefit, and the design system, content model and metadata work all carry across. **Recommend revisiting:** moving to Next.js or Vite would cut build time substantially and remove the `react-scripts` maintenance risk.
- **No image compression of the full 40 MB asset library.** Only the images the new site renders were optimized; the rest are documented in `CONTENT_TODO.md`.
- **No testimonial rewriting.** Wording is preserved verbatim; permission and full names are flagged for you to confirm.

---

## 11. Appendix — dead links and long-form findings

Found by checking every published URL in the content during the rebuild. All of
these were already live on the existing site, so visitors were hitting them
before this work started.

### Broken or non-public links (13)

| URL | Result | Note |
|---|---|---|
| `salesguards.com` | 404 | Vercel "deployment not found" |
| `inboxhr.cloud` | 525 | SSL handshake failure |
| `play.cloudsecuritybootcamp.com` | 504 / timeout | Unreachable |
| `github.com/Jibrand/chairbooked` | 404 | Repository not public |
| `github.com/Jibrand/Zayna` | 404 | Repository not public |
| `github.com/Jibrand/MernPOS` | 404 | Repository not public |
| `github.com/Jibrand/EduJourney` | 404 | Repository not public |
| `github.com/Jibrand/postRight` | 404 | Repository not public |
| `github.com/Jibrand/-v3cn4` | 404 | Repository not public |
| `github.com/Jibrand/Pasha-Project` | 404 | Repository not public |
| `github.com/Jibrand/Email-automation` | 404 | Repository not public |
| `github.com/Jibrand/ViteLandingPageGenieEngage` | 404 | Repository not public |
| `github.com/Jibrand/CloudSecurityBootcampCDashboard` | 404 | Repository not public |

GitHub returns 404 for private repositories when unauthenticated, so these are
either private or deleted. Either way they were unusable to a visitor.

All remaining links on the rebuilt site were verified reachable (the only
non-200 is LinkedIn's anti-bot `999`, which is expected).

### Missing favicon file

`public/index.html` referenced `%PUBLIC_URL%/favicon.ico` and `manifest.json`
referenced `favicon.ico`, but **no `favicon.ico` exists in `public/`** — only
`favicon.png`. Every browser request for the tab icon was a 404. The rebuilt site
references generated PNG icons that exist.

### Duplicate and dead files confirmed

- `Muhammad_Jibran_Resume.pdf` is an ImageMagick image-only export (Jan 2024) with
  **no text layer** — 810 KB and not machine-readable. `Muhammad Jibran_Resume.pdf`
  (Enhancv, Apr 2024) is the authoritative one and was used as the source for the
  experience timeline.
- The CV confirms the dates now published for HACKERverse, WebTose, BIOAMAZ,
  Alchimetis and Freelancing, and confirms that **no record of Future Frame
  Solution, SalesGuard, Plutio or Cyrenium exists in the repository** — which is
  why those are flagged rather than written.

### Repository hygiene

`test.txt` (containing `"heelo ap kese ho"`), an empty `sasas` file, `test1.py`
(`print ("hello")`) and an empty nested `untitled-project/` directory are all
committed to a public repository.

### Status

The prioritised action plan in section 9 has been implemented. See the final
summary for changed files and verification results.
