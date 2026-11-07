import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectCard } from "../project-card";
import { projects } from "@/lib/portfolio";
import { Archive } from "./archive";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Muhammad Jibran’s projects across AI automation, product engineering, and cloud infrastructure.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: "SaaS, AI & Full-Stack Projects | Muhammad Jibran",
    description: "Explore 28 projects across product engineering, AI automation, and cloud infrastructure.",
    url: "/projects/",
    type: "website",
  },
};

export default function ProjectsPage() {
  const entries = projects.map((project) => ({
    id: project.id,
    category: project.category,
    search: [project.name, project.description, project.category, ...project.stack].join(" ").toLowerCase(),
    card: <ProjectCard project={project} />,
  }));

  return (
    <main id="main" className="wrap route">
      <p className="eyebrow section-index">Portfolio / Project archive</p>
      <h1>All <em>projects.</em></h1>
      <p className="route-intro">Browse {projects.length} projects across SaaS, applied AI, and the infrastructure that runs them.</p>
      <Suspense fallback={<div className="filters" role="status"><p className="eyebrow">Loading filters…</p><div className="project-grid archive-preview">{entries.map(({ id, card }) => <div key={id}>{card}</div>)}</div></div>}>
        <Archive entries={entries} />
      </Suspense>
    </main>
  );
}
