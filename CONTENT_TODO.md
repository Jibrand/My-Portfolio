# Content TODO — things only you can confirm

Everything below is something I deliberately did **not** invent. Where the site
was missing a fact, it either shows nothing, or is clearly marked as pending.

Work through these in order. Items in **Blocking** are visible to visitors right
now as gaps.

---

## Structure note (latest revision)

The site is now five focused pages plus case studies, rather than one long scroll:

| Route | Holds |
|---|---|
| `/` | Introduction + a directory of the site. No project showcase, by request. |
| `/projects` | The four case studies, then other products, then deployment work. |
| `/experience` | The professional timeline. |
| `/about` | Background, principles, capabilities, education. |
| `/contact` | Email, GitHub, LinkedIn. |
| `/work/:slug` | Individual case study. |

The homepage is intentionally ~1.7 screens tall. The other pages are longer,
which is expected — they are destinations rather than an introduction.

---

## Blocking — visible on the live site today

### 1. Missing dates for three roles

The Experience timeline shows **"Dates to confirm"** for these, because no date
appears anywhere in the repository, the CV, or your brief:

| Role | Needs |
|---|---|
| Future Frame Solution — Founder · Full-Stack & AI Engineer | Start and end dates (or "present") |
| SalesGuard — Technical Cofounder · Technical Lead | Start and end dates (or "present") |
| Plutio — AI Automation Engineer | Start and end dates (or "present") |

Also: **Future Frame Solution currently has no description at all** — no summary,
no bullet points, no stack. It renders as a bare entry. Give me two or three
sentences about what the company does and what you built, and I'll fill it in.

### 2. Cyrenium case study is published as a draft

`/work/cyrenium` shows your feature list (which you supplied) plus a visible
"this case study is not finished" panel. Nothing else has been written, because
none of it exists in the repository. I need:

1. Your exact role and title, and whether this was employment, contract or founding work.
2. Dates.
3. The problem the platform was built to solve.
4. What **you** built versus the wider team.
5. Two or three engineering decisions and the trade-offs behind them.
6. One or two real challenges and how they were resolved.
7. Any outcome you're allowed to describe.
8. Screenshots, if they're cleared for use.
9. A public URL, if there is one.

> Note: your public GitHub has a repo called **`AI-BASED-LMS`**. If that is
> Cyrenium, tell me and I can reference it.

### 3. Conflicting role titles

| Where | What it says |
|---|---|
| Your brief | HACKERverse — *Lead Full-Stack & GenAI Engineer* |
| Your CV (Apr 2024) | HACKERverse — *Full Stack Developer* |

I published the brief's version because it's more specific and more recent.
Confirm which one you want.

### 4. Which email should be public?

| Source | Address |
|---|---|
| Your brief | `muhammadjibran890@gmail.com` |
| Your CV (Apr 2024) | `muhammadjibrandev@gmail.com` |

I used the brief's address. The CV one still appears on the old PDF, so at least
one of these is stale.

### 4b. Education dates

The About page lists **BSc Software Engineering, Muhammad Ali Jinnah University,
Karachi** with no dates, because the CV (Apr 2024) shows the degree as ongoing and
I could not verify whether it has since been completed. Send me the graduation
year — or "expected 2026" — and I'll add it.

### 5. WebTose job title

Your CV lists **"Full Stack Developer"**, but the bullet says *"I started my own
small agency"*. I published **"Founder · Full-Stack Developer"**. Confirm that's
acceptable or I'll change it back.

### 6. SalesGuard positioning

Your brief describes SalesGuard as **"AI Sales Automation"**. The repository and
project description describe a **B2B marketplace with AI seller intelligence**.
I wrote the case study based on the repository, since that's what I could verify.
Which is accurate — and should the title change?

---

## Screenshots and visuals

The four featured cards need real visuals. Currently:

| Case study | Visual |
|---|---|
| Plutio | ✅ product screenshot in place |
| SalesGuard | ✅ product screenshot in place |
| HACKERverse | ❌ missing — card shows a placeholder reading "Screenshot to add" |
| Cyrenium | ❌ missing — placeholder |

For **HACKERverse** and **Cyrenium**, supply 1–3 screenshots each (PNG or JPG,
ideally ≥1600px wide). Anything that shows the product without exposing customer
data. I'll optimise them to WebP the same way I did the rest
(see the size reduction in the final summary).

Optional but valuable: a screenshot for Plutio showing the voice widget mid-command,
since the existing one is a general product shot.

---

## Testimonials — permission and names

All quotes are reproduced **verbatim** from the old site. I did not reword them.
Three are attributed to a first name only, which reads as unverified:

| Displayed | Attribution | Needs |
|---|---|---|
| Leo — Founder at Plutio | First name only | Full name + permission to publish |
| Seun — Founder at SalesGuard | First name only | Full name + permission to publish |
| Idress — CEO at Zayna | First name only | Full name + permission to publish |

Three more exist in `src/content/testimonials.js` as `additionalTestimonials` and
are **not** displayed (Adriano Meza, Aziz-ur Rehman, Idress) — the homepage shows
a curated six rather than all nine. Say the word and I'll swap them in.

Also confirm you have permission to publish all of these, including the six on the
homepage. Two of the displayed quotes are from the same company (HACKERverse).

Two quotes carried typos in the original (a stray space before a comma); I cleaned
only the whitespace, not the wording.

---

## Broken links I removed

These were all linked from your existing site and are **dead or not public**.
I removed them rather than shipping 404s, and the site now says so honestly where
relevant.

| Link | Status | Action |
|---|---|---|
| `salesguards.com` | 404 — "deployment not found" | Replaced with your public landing-page repo |
| `inboxhr.cloud` | 525 — SSL handshake failure | Removed; InboxHR shows a note |
| `play.cloudsecuritybootcamp.com` | 504 / timeout | Removed; SecureCloud shows a note |
| `github.com/Jibrand/chairbooked` | 404 (not public) | Removed |
| `github.com/Jibrand/Zayna` | 404 (not public) | Removed |
| `github.com/Jibrand/MernPOS` | 404 (not public) | Removed |
| `github.com/Jibrand/EduJourney` | 404 (not public) | Removed (demo video kept) |
| `github.com/Jibrand/postRight` | 404 (not public) | Removed (live site kept) |
| `github.com/Jibrand/-v3cn4` | 404 (not public) | Removed (live site kept) |
| `github.com/Jibrand/Pasha-Project` | 404 (not public) | Removed |
| `github.com/Jibrand/Email-automation` | 404 (not public) | Removed |
| `github.com/Jibrand/ViteLandingPageGenieEngage` | 404 (not public) | Removed |
| `github.com/Jibrand/CloudSecurityBootcampCDashboard` | 404 (not public) | Removed |

**For each one, pick one:** make the repo public (then I'll restore the link), or
send me a working URL, or leave it. Every other link on the site was verified
reachable.

One leftover typo worth fixing in GitHub: `Redit-Clone-Deployment-with-Kubernetes`
is missing an "d" in *Reddit*.

---

## Candidate additions — repos on your GitHub that aren't on the site

Your public profile has repositories that would strengthen the Product Engineer /
AI positioning, but I don't know what they do, so I didn't write descriptions.
Give me a one-line summary for any of these and they go straight in:

**Most relevant to your positioning:**
- `Vapi-AI-Calling-Receptionist-Agent` — looks like voice AI; directly supports the "Voice AI" skill claim
- `AI-BASED-LMS` — possible Cyrenium link
- `Edujoourney-New-Backend` — an EduJourney backend, if the React Native app has a server side
- `leadgon` (TypeScript, MIT) and `Lead-Scraper` (Python) — plausible sales-automation pieces
- `salesguard-LandingPage-V2-Next.js` — already linked from the SalesGuard case study

**Possible, lower priority:**
- `Biladi-Coffee-All-in-one-Dashbaord`, `Habib-Law`, `Habib-Print-Pack`,
  `dog_grooming__Module`, `Expense_Tracker`, `Webtrow-Nextjs-Agency-Template`,
  `Jenkins-Shared-Library`, `React-Native-BoilerPlate-SDK-50`, `plant-dataset`

---

## Skills to confirm

| Item | Question |
|---|---|
| **FastAPI** | You listed it under Backend, but the only Python service in the repo is a **Flask** app (`AiBankerPython`). I published both. Confirm FastAPI is real work. |
| **PostgreSQL / Prisma** | You listed these under Data. The repository only evidences MongoDB, Firebase, SQL Server and Sanity. I published your list plus Firebase and SQL Server. Confirm Postgres and Prisma are accurate. |
| **Next.js** | Listed under Frontend. Evidenced by `Story2Sleep`, `salesguard-LandingPage-V2-Next.js` and `Webtrow-Nextjs-Agency-Template`. Fine — just flagging that Story2Sleep is no longer on the site. |
| **Vue** | Not in your brief, but `v3cn` is a Vue 3 project. I left Vue out of the skills panel and mention it in the V3CN entry instead. Tell me if you'd rather it be a headline skill. |

---

## Content I removed — say if you want any of it back

| Removed | Why |
|---|---|
| ~20 further project cards (WordPress/Wix/Shopify marketing sites, C# desktop apps, crypto wallet) | They compete with the product-engineering positioning. The strongest 19 products and 9 deployment projects remain. |
| `/meetings` page and its Google Meet screenshots | Orphan route, unreachable from the nav, unclear purpose for a recruiter. Files still in `public/Meetings/`. |
| `/homepay` and `/OpenAi` pages | Orphan routes with no nav entry and no explanation of what they are. |
| `/resume` page | The published PDF is from Apr 2024 and says *"eager to secure freelance opportunities"* — it contradicts the new positioning. Tell me when an updated CV exists and I'll add a download. |
| "Increases client bookings by 10-15/month" | An unverified metric. It must not appear unless you can stand behind it. |

---

## Housekeeping (not urgent, but worth doing)

1. **40 MB of unused images in `src/Assets`.** Only the images the site renders are optimised. ~90 files are now unreferenced. Safe to delete, or move to a `brand-assets` repo if you want to keep them.
2. **Two resume PDFs**, one of which is an older image-only export with no text layer. Neither is used by the site.
3. **Stray files at the repo root:** `test.txt` (`"heelo ap kese ho"`), `sasas` (empty), `test1.py` (`print ("hello")`). These are committed and publicly visible on GitHub.
4. **The `untitled-project/` folder** inside the repo is an empty nested project with its own git folder. It shows as untracked. Delete it.
5. **A professional headshot** would help the About section — the current design is deliberately typographic, so nothing looks missing without one. Supply one and I'll add it.
6. **A Content Security Policy** is the one security header I left out, because the app needs an inline theme script and React injects inline styles. Adding a strict CSP needs build-time hashes; worth doing if you want the extra hardening.
7. **`caniuse-lite` is outdated** — run `npx update-browserslist-db@latest` occasionally to keep browser targeting current.
8. **Consider a custom domain.** `muhammadjibran.netlify.app` works, but a personal domain looks better on a CV. If you set one up, tell me and I'll update the canonical URL, sitemap and Open Graph tags in one pass.
