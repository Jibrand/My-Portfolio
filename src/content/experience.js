/**
 * Experience timeline.
 *
 * Titles and dates marked "verified" come from Muhammad Jibran_Resume.pdf
 * (src/Assets) or are unambiguous from the supplied brief.
 *
 * Entries with `period: null` have not had their dates confirmed anywhere in
 * the repository. They are shown without dates rather than with invented ones.
 * See CONTENT_TODO.md.
 */

export const experience = [
  {
    company: "Future Frame Solution",
    role: "Founder · Full-Stack & AI Engineer",
    period: null,
    location: null,
    verified: false,
    summary: null,
    points: [],
    stack: [],
  },
  {
    company: "SalesGuard",
    role: "Technical Cofounder · Technical Lead",
    period: null,
    location: null,
    verified: false,
    summary:
      "Technical cofounder of an AI-assisted B2B marketplace. Owned the product architecture and built the platform across frontend, backend and the AI layer, working directly with the business cofounder on scope and roadmap.",
    points: [
      "Designed and built the platform architecture for a very small team.",
      "Implemented AI-generated seller insights, PDF document analysis and vector search.",
      "Planned technical scope alongside the business cofounder.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Pinecone", "OpenAI API"],
  },
  {
    company: "Plutio",
    role: "AI Automation Engineer",
    period: null,
    location: null,
    verified: false,
    summary:
      "Built a voice-driven productivity feature for Plutio's desktop application: voice capture, transcription, intent processing and the actions triggered from a spoken request.",
    points: [
      "Shipped a keyboard-activated voice widget inside the desktop client.",
      "Connected the desktop app to transcription and AI services over Node.js and Python workflows.",
      "Added real-time status feedback so users know when a command has been understood.",
    ],
    stack: ["Node.js", "Python", "Speech-to-text", "LLM intent processing"],
  },
  {
    company: "HACKERverse",
    role: "Lead Full-Stack & GenAI Engineer",
    period: "Mar 2024 – present",
    location: "Silicon Valley, USA (remote)",
    verified: true,
    summary:
      "Lead full-stack and GenAI engineer on a cybersecurity competition platform, working across the application and the AWS infrastructure it runs on.",
    points: [
      "Built backend APIs for running hacking competitions.",
      "Replaced a manual vendor process with an AI bot and built vendor chatbots.",
      "Managed the AWS account hosting the frontend and backend.",
      "Set up CI/CD pipelines and an Application Load Balancer.",
    ],
    stack: ["Node.js", "React", "AWS", "CI/CD", "Application Load Balancer"],
  },
  {
    company: "WebTose",
    role: "Founder · Full-Stack Developer",
    period: "Oct 2023 – Mar 2024",
    location: "Pakistan",
    verified: true,
    summary:
      "Started and ran a small agency, delivering AI chatbots, websites and hosting for client businesses.",
    points: [
      "Owned client work end to end, from scoping through to delivery and hosting.",
      "Delivered AI chatbot integrations and marketing websites.",
    ],
    stack: ["React", "Node.js", "AI chatbots", "Hosting"],
  },
  {
    company: "BIOAMAZ",
    role: "Full-Stack Developer (Contract)",
    period: "Apr 2023 – Oct 2023",
    location: "Peru / Spain (remote)",
    verified: true,
    summary:
      "Contract full-stack work for an investment-based company, spanning both the technology and the financial operations side of the business.",
    points: [
      "Built MERN applications covering investment calculations and deposits.",
      "Integrated Stripe for payment flows.",
      "Used Sanity for content management.",
    ],
    stack: ["MERN", "Stripe", "Tailwind CSS", "React", "Sanity"],
  },
  {
    company: "Alchimetis",
    role: "MERN Developer",
    period: "Jun 2022 – Mar 2023",
    location: "Ontario, Canada (remote)",
    verified: true,
    summary:
      "Built SaaS applications on the MERN stack with CI/CD pipelines and cloud deployment. Led the team during this engagement.",
    points: [
      "Built and deployed SaaS applications with CI/CD pipelines.",
      "Used cloud services for scalable application deployment.",
      "Implemented modern interfaces using Material and Tailwind CSS design systems.",
    ],
    stack: ["MERN", "CI/CD", "Cloud deployment", "Material UI", "Tailwind CSS"],
  },
  {
    company: "Freelance (Fiverr & Upwork)",
    role: "Full-Stack Developer",
    period: "Oct 2020 – Jun 2022",
    location: "Remote",
    verified: true,
    summary:
      "Delivered web and desktop applications for clients worldwide, across a range of stacks and platforms.",
    points: [
      "Built client applications with the MERN stack, WordPress, Wix and Shopify.",
      "Worked directly with clients to scope and deliver projects.",
    ],
    stack: ["MERN", "WordPress", "Wix", "Shopify"],
  },
];
