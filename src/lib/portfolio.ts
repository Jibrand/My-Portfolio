import catalog from "../../portfolio-data.json";

export const profile = {
  name: catalog.profile.name,
  location: catalog.profile.location,
  headline: catalog.profile.headline,
  summary: catalog.profile.summary,
  education: catalog.profile.education,
  site: process.env.SITE_URL || "https://muhammadjibran.netlify.app",
  email: "muhammadjibran890@gmail.com",
  booking: "https://cal.com/muhammad-jibran/ai-automation-business-systems-strategy-call",
};

export const projects = catalog.projects.map((project, index) => ({
  ...project,
  slug: project.id.replaceAll("/", "-"),
  number: index + 1,
}));
export type Project = (typeof projects)[number];
export const featured = catalog.featuredProjectIds.flatMap((id) =>
  projects.filter((project) => project.id === id),
);

export const experience = [
  { company: "Future Frame Solution", role: "Founder", dates: "Apr 2024 – Present", location: "United States", summary: "Lead architecture, development, and deployment of AI voice receptionists, follow-up workflows, appointment automation, and custom agents." },
  { company: "SalesGuard", role: "Technical Lead & AI Automation Engineer", dates: "Nov 2025 – Mar 2026", location: "London, UK · Remote", summary: "Co-founded the startup through YC Startup School and owned its technical architecture, product development, and AI automation for sales workflows." },
  { company: "Plutio", role: "AI Automation Engineer", dates: "Oct 2025 – Nov 2025", location: "United Kingdom · Remote", summary: "Built a voice command system for the Electron desktop app, connecting Whisper transcription and AI intent parsing to actions like invoicing, messaging, and task assignment." },
  { company: "HACKERverse®", role: "Lead Full-Stack & GenAI Engineer", dates: "Mar 2024 – Oct 2025", location: "California, US · Remote", summary: "Led engineering for a cybersecurity competition platform. Built competition APIs, managed AWS infrastructure and CI/CD, and automated vendor workflows with AI." },
  { company: "WebTose", role: "Founder", dates: "Oct 2023 – Mar 2024", location: "Pakistan" },
  { company: "BIOAMAZ", role: "Full-Stack Developer", dates: "Apr 2023 – Oct 2023", location: "Peru · Remote", summary: "Built a MERN platform for investment management and client accounts, with Stripe payments and Sanity CMS." },
  { company: "Alchimetis", role: "MERN Stack Developer", dates: "Jun 2022 – Mar 2023", location: "Ontario, Canada · Remote", summary: "Promoted from intern to full engineer. Helped build a web application that digitized patient records and contributed to reviews and deployments." },
  { company: "Fiverr", role: "Freelance Full-Stack Developer", dates: "Oct 2020 – Jun 2022", location: "Worldwide · Remote", summary: "Delivered 50+ web development projects for international clients, including custom applications and e-commerce sites." },
];

export const skills = [
  { title: "AI & Automation", items: ["AI agents", "Voice AI", "LLM integration", "RAG", "Whisper", "LangChain", "Ollama", "CrewAI", "AWS Bedrock"] },
  { title: "Product Engineering", items: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Express", "Electron", ".NET", "MongoDB", "MySQL", "Stripe"] },
  { title: "Infrastructure & Delivery", items: ["AWS", "Docker", "Terraform", "GitHub Actions", "CI/CD", "AWS Lambda", "Application Load Balancer"] },
];
