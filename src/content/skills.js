/**
 * Skills, grouped by capability rather than shown as a wall of icons.
 *
 * Every entry is evidenced somewhere in the repository (a project description,
 * a package manifest, or the resume) or was supplied directly in the brief.
 * See CONTENT_TODO.md for the two items awaiting confirmation.
 */

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "Flask", "REST API design", "JWT auth"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Firebase", "SQL Server", "Sanity"],
  },
  {
    label: "AI",
    items: ["LLM APIs", "AI agents", "Voice AI", "RAG", "Pinecone", "Automation workflows"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Kubernetes", "Terraform"],
  },
];
