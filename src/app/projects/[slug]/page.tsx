import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolio";
import { ProjectArt } from "../../project-card";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.name, description: project.description, url: `/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="main" className="wrap route">
      <Link className="back" href="/projects">← All projects</Link>
      <article>
        <p className="eyebrow section-index">{project.category}</p>
        <h1>{project.name}</h1>
        <p className="route-intro">{project.description}</p>
        <ul className="tags" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="detail-art"><ProjectArt project={project} /></div>
        {project.links.length > 0 && (
          <div className="actions detail-links">
            {project.links.map(({ label, href }) => (
              <a key={href} className="button secondary" href={href}>{label} <span aria-hidden="true">↗</span></a>
            ))}
          </div>
        )}
        {!project.links.length && project.linkNote?.startsWith("Private repository") && <p className="detail-note">{project.linkNote}</p>}
      </article>
    </main>
  );
}
