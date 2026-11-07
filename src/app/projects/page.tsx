import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectCard } from "../project-card";
import { projects } from "@/lib/portfolio";
import { Archive } from "./archive";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { StructuredData } from "../structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Projects | Muhammad Jibran — Full-Stack & AI Engineer",
  description: "Explore Muhammad Jibran’s projects across AI automation, product engineering, and cloud infrastructure.",
  path: "/projects/",
});

export default function ProjectsPage() {
  const entries = projects.map((project) => ({
    id: project.id,
    category: project.category,
    search: [project.name, project.description, project.category, ...project.stack].join(" ").toLowerCase(),
    card: <ProjectCard project={project} />,
  }));

  return (
    <main id="main" className="wrap route">
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects/" }])} />
      <p className="eyebrow section-index">Portfolio / Project archive</p>
      <h1>All <em>projects.</em></h1>
      <p className="route-intro">Browse {projects.length} projects across SaaS, applied AI, and the infrastructure that runs them.</p>
      <Suspense fallback={<div className="filters" role="status"><p className="eyebrow">Loading filters…</p><h2 className="sr-only">Project archive</h2><div className="project-grid archive-preview">{entries.map(({ id, card }) => <div key={id}>{card}</div>)}</div></div>}>
        <Archive entries={entries} />
      </Suspense>
    </main>
  );
}
