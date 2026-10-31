/**
 * Featured case studies.
 *
 * Rules applied here:
 *  - Only facts that are verifiable from the repository/resume, the supplied
 *    brief, or the existing published site appear in the copy.
 *  - No metrics, revenue, growth or performance numbers are stated anywhere.
 *  - No customer names, user counts or "open-source" claims.
 *  - Where information is missing the entry is marked `status: "draft"` and the
 *    case study page shows exactly what still needs to be supplied.
 *
 * See CONTENT_TODO.md for the outstanding items per project.
 */

export const caseStudies = [
  {
    slug: "plutio-voice",
    status: "published",
    name: "Plutio",
    title: "Voice-driven productivity for a desktop SaaS app",
    tagline: "Voice capture, AI intent processing and hands-free actions inside a desktop business app.",
    discipline: "Desktop app · Voice AI",
    role: "AI Automation Engineer",
    period: null,
    product: "Desktop productivity platform (SaaS)",
    treatment: "flagship",
    visual: "/images/work/plutio.webp",
    visualAlt:
      "Plutio product cover showing the task planning and project setup boards.",
    mediaCaption: "Plutio — product cover.",
    visualFit: "cover",
    /* The wordmark sits centre-frame, so crop from the middle, not the top. */
    visualPosition: "center",
    summary:
      "Plutio is a desktop business-management application. The goal of this work was to let people trigger productivity actions by speaking instead of clicking through menus, so they could stay in flow while working.",
    problem:
      "The actions people repeat most in a business app are small: create a task, log something, start a timer. Reaching them means navigating away from whatever you are doing. The product opportunity was to make those actions available hands-free, without a permanent panel taking over the screen.",
    responsibility:
      "I built the voice layer end to end: capture inside the desktop app, transcription, intent processing, and the actions that get triggered from a spoken request.",
    built: [
      "A voice widget that stays available in the desktop app and is activated with a keyboard shortcut.",
      "Speech capture that records while the user keeps working, then processes the audio in the background.",
      "Intent processing that maps a spoken request onto a concrete productivity action.",
      "Notification bubbles that report status in real time — recording, processing, result — so the user gets feedback without opening anything.",
      "Node.js and Python workflows connecting the desktop client to the transcription and AI services.",
    ],
    decisions: [
      {
        title: "Feedback had to be visible without being intrusive",
        body: "Status updates went into temporary notification bubbles rather than a dedicated panel. Voice is meant to remove friction, so it should not permanently take screen space away from the task.",
      },
      {
        title: "Background processing instead of a blocking modal",
        body: "Capture and transcription run behind the app so the user can carry on working while a command executes. Nothing blocks the interface while it waits for a model response.",
      },
      {
        title: "Two runtimes with an explicit boundary",
        body: "Node.js handled the desktop-side integration while Python handled the AI and transcription workflow. Keeping that boundary clear meant each side could be developed and tested on its own.",
      },
    ],
    features: [
      "Keyboard-shortcut activation",
      "Background speech capture and transcription",
      "Intent → action mapping",
      "Real-time status notifications",
      "Desktop client ↔ AI service integration",
    ],
    challenges: [
      "Latency is the whole experience in voice. The interface had to stay responsive and honest about what was happening while a request was still processing.",
      "Voice input is noisy and imprecise, so the intent layer needed to handle requests that were partial or phrased differently from what was expected.",
    ],
    outcome:
      "The result was a hands-free control layer for the desktop app: a user can speak an action and have it carried out without leaving the current screen. It shipped as part of the product rather than as a prototype.",
    lessons: [
      "In voice interfaces the feedback loop matters as much as the recognition accuracy — users need to know whether they were understood.",
      "Keeping the AI workflow behind a clear service boundary made it far easier to iterate on the model side without destabilising the desktop client.",
    ],
    tech: ["Node.js", "Python", "Speech-to-text", "LLM intent processing", "Desktop app integration"],
    links: [
      {
        label: "Watch the demo",
        href: "https://drive.google.com/file/d/1swit7bEHdtBxDbvxnCgyRXbso_L2X2ts/view?usp=sharing",
        type: "demo",
      },
    ],
    media: [],
  },

  {
    slug: "hacker-verse",
    status: "published",
    name: "HACKERverse",
    title: "Cybersecurity competition platform",
    tagline: "Competition APIs, AI-assisted vendor workflows and the AWS infrastructure behind them.",
    discipline: "Platform · Infrastructure",
    role: "Lead Full-Stack & GenAI Engineer",
    period: "Mar 2024 – present",
    product: "Cybersecurity competition platform",
    treatment: "split",
    visual: null,
    visualAlt: null,
    mediaCaption:
      "Screenshot requested — a competition dashboard or challenge view would work best.",
    visualFit: "cover",
    summary:
      "HACKERverse runs cybersecurity competitions. The platform has to deliver challenges, score submissions and run leaderboards while staying secure and available during live events.",
    problem:
      "Competition platforms are judged on the worst moment, not the average one: a live event where scoring has to be correct and the site has to stay up. Alongside the product work there was a manual vendor process that did not scale.",
    responsibility:
      "I work across both layers — the application and the infrastructure it runs on. That covers backend APIs, competition features, AI features, and the AWS setup, pipelines and load balancing behind the platform.",
    built: [
      "Backend APIs for running hacking competitions.",
      "Competition-facing UI.",
      "An AI bot that replaced the manual vendor process, plus chatbots for vendors.",
      "Management of the AWS account hosting the frontend and backend.",
      "CI/CD pipelines and an Application Load Balancer for the deployed services.",
    ],
    decisions: [
      {
        title: "Owning infrastructure alongside product",
        body: "Being responsible for the AWS account and the pipelines meant features were designed with deployment, scaling and rollback in mind from the start, rather than being handed over after the fact.",
      },
      {
        title: "Automating a manual process rather than accelerating it",
        body: "The vendor workflow was repetitive and human-bound. Turning it into an AI bot removed a step from the loop entirely instead of making that step faster.",
      },
      {
        title: "Security as a product requirement",
        body: "On a platform whose entire purpose is security competitions, correctness of scoring, access control and safe handling of submissions are product requirements, not hardening tasks for later.",
      },
    ],
    features: [
      "Competition APIs",
      "Challenge and scoring flows",
      "Leaderboards",
      "AI vendor bot and chatbots",
      "AWS hosting, CI/CD pipelines and ALB",
    ],
    challenges: [
      "Live competitions create sharp, predictable spikes in load, so the deployment had to be sized and load-balanced for peak rather than average traffic.",
      "Correct scoring is unforgiving: an error during a live event is visible to every participant at once.",
    ],
    outcome:
      "The platform runs its competitions on infrastructure I help maintain end to end, with the vendor process handled by an AI bot rather than manual effort.",
    lessons: [
      "Working on the infrastructure as well as the product changes what you build — deployment and scaling stop being someone else's problem.",
      "The best automation target is usually the process nobody wants to do, not the one that is merely slow.",
    ],
    tech: ["Node.js", "React", "AWS", "CI/CD", "Application Load Balancer", "LLM chatbots"],
    links: [],
    media: [],
  },

  {
    slug: "salesguard",
    status: "published",
    name: "SalesGuard",
    title: "AI sales automation and seller intelligence",
    tagline: "Semantic search and document analysis to match buyers with the right sellers.",
    discipline: "Marketplace · AI matching",
    role: "Technical cofounder / Technical lead",
    period: null,
    product: "B2B marketplace platform",
    treatment: "split-reverse",
    visual: "/images/work/salesguard-page.webp",
    visualAlt:
      "The SalesGuard landing page: a hero with a buyer/vendor segmented control and the product headline.",
    mediaCaption: "SalesGuard — landing page.",
    visualFit: "cover",
    summary:
      "SalesGuard is an AI-assisted B2B marketplace. It helps buyers work out which sellers are actually relevant to them, using AI-generated seller insights and semantic search instead of manual reading.",
    problem:
      "Finding a supplier is mostly a reading exercise. Buyers had to work through long seller profiles and uploaded documents to judge relevance, and keyword search did not understand what they were actually asking for. The valuable information was locked inside unstructured documents.",
    responsibility:
      "I was the technical cofounder and owned the product architecture and the build. I planned the technical roadmap directly with the business cofounder and built the platform across frontend, backend and the AI layer.",
    built: [
      "Seller profile cards enriched with AI-generated insights.",
      "Document parsing and PDF analysis to pull structured information out of seller submissions.",
      "Semantic search over a Pinecone vector index, so buyer intent matched content rather than keywords.",
      "OpenAI-powered recommendations.",
      "A buyer dashboard with filtering and search.",
      "JWT authentication and role-based access control.",
    ],
    decisions: [
      {
        title: "Semantic search over keyword search",
        body: "The useful signal sat inside unstructured documents, so embedding the content and searching it by vector similarity matched buyer intent far better than filter-and-keyword approaches alone.",
      },
      {
        title: "A typed, component-driven frontend",
        body: "React with TypeScript, Vite and Radix UI gave typed components and fast builds, which kept the interface consistent and made the constant product iteration cheap.",
      },
      {
        title: "Apply AI where it removes reading, not everywhere",
        body: "Insight generation was pointed at the genuinely tedious part of the buyer workflow. AI features that do not remove real work add cost and noise.",
      },
    ],
    features: [
      "AI-generated seller insights",
      "PDF document analysis",
      "Pinecone vector search",
      "Buyer dashboard with filtering",
      "Role-based access control",
    ],
    challenges: [
      "Extracting reliable structure from arbitrary seller documents is messy work — the quality of everything downstream depends on it.",
      "Working as technical lead with a business cofounder meant translating commercial goals into engineering scope that could actually be delivered.",
    ],
    outcome:
      "SalesGuard shipped as a working platform with AI-assisted discovery at its core, built and maintained by a very small team.",
    lessons: [
      "With a small team, architectural decisions are also resourcing decisions — the boring, well-supported choice is usually the right one.",
      "Owning the product rather than a ticket list means deciding what not to build is part of the job.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Pinecone",
      "OpenAI API",
    ],
    /**
     * salesguards.com was linked from the previous site but now returns
     * "deployment not found". Replaced with the public landing-page repository
     * rather than shipping a broken link.
     */
    links: [
      {
        label: "SalesGuard landing page (GitHub)",
        href: "https://github.com/Jibrand/salesguard-LandingPage-V2-Next.js",
        type: "repo",
      },
    ],
    media: [],
  },

  {
    slug: "cyrenium",
    status: "draft",
    name: "Cyrenium",
    title: "Learning management platform",
    tagline: "Multi-role LMS covering courses, live bootcamps, payments and educator onboarding.",
    discipline: "Full-stack product",
    role: null,
    period: null,
    product: "Learning management platform",
    treatment: "stacked",
    visual: null,
    visualAlt: null,
    mediaCaption: "Screenshot requested — a student or educator view.",
    visualFit: "cover",
    summary:
      "Cyrenium is a full-stack learning management platform with several role-based applications: students, educators and administrators each get their own surface.",
    problem: null,
    responsibility: null,
    built: [
      "Multiple role-based applications within one platform.",
      "Courses and student access to learning content.",
      "Live sessions and bootcamps.",
      "Stripe payment and refund workflows.",
      "Educator onboarding.",
      "Administrative dashboards.",
    ],
    decisions: [],
    features: [
      "Role-based applications",
      "Courses and student access",
      "Live sessions and bootcamps",
      "Stripe payments and refunds",
      "Educator onboarding",
      "Administrative dashboards",
    ],
    challenges: [],
    outcome: null,
    lessons: [],
    tech: [],
    links: [],
    media: [],
    /**
     * Shown on the case study page so nothing is implied that hasn't been
     * confirmed. This list mirrors CONTENT_TODO.md.
     */
    missing: [
      "Your exact role and title on Cyrenium, and whether it was employment, contract or founding work.",
      "Dates for the engagement.",
      "The problem the platform was created to solve.",
      "Written detail on what you personally built versus the wider team.",
      "Two or three engineering decisions and the trade-offs behind them.",
      "One or two specific challenges and how they were resolved.",
      "Any result you are allowed to describe (a public link, a screenshot, what shipped).",
      "Screenshots or product visuals, if they are cleared for use.",
      "A public URL, if the product is accessible.",
    ],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((item) => item.slug === slug);

export const featuredCaseStudies = caseStudies;
