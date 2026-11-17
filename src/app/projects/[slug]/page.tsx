import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/lib/portfolio";
import { ProjectArt } from "../../project-card";
import { articles } from "@/lib/articles";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { StructuredData } from "../../structured-data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.name} | Muhammad Jibran`,
    description: project.description,
    path: `/projects/${slug}/`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const relatedArticles = articles.filter((article) => article.relatedProjects.includes(project.id));

  return (
    <main id="main" className="wrap route">
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects/" }, { name: project.name, path: `/projects/${slug}/` }])} />
      <Link className="back" href="/projects/">← All projects</Link>
      <article>
        <p className="eyebrow section-index">{project.classification ?? project.category}</p>
        <h1>{project.name}</h1>
        <p className="route-intro">{project.description}</p>
        {project.stack.length > 0 && <ul className="tags" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>}
        <div className="detail-art"><ProjectArt project={project} /></div>
        {project.links.length > 0 && (
          <div className="actions detail-links">
            {project.links.map(({ label, href }) => (
              <a key={href} className="button secondary" href={href}>{label} <span aria-hidden="true">↗</span></a>
            ))}
          </div>
        )}
        {project.repositoryNote && <p className="detail-note">{project.repositoryNote}</p>}
        {project.overview && <section className="related-reading article-body" aria-labelledby="project-overview-title">
          <h2 id="project-overview-title">Project overview</h2>
          <p>{project.projectType}</p>
          <p>{project.overview}</p>
          {!!project.features?.length && <ul aria-label="Key features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
        </section>}
        {project.demoAccess && <section className="article-author article-body" aria-labelledby="demo-access-title">
          <h2 id="demo-access-title">Demo Access</h2>
          <a className="button secondary" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Demo access request: ${project.name}`)}`}>Request Demo Access</a>
        </section>}
        {!project.links.length && project.linkNote?.startsWith("Private repository") && <p className="detail-note">{project.linkNote}</p>}
        {relatedArticles.length > 0 && <section className="related-reading" aria-labelledby="related-reading-title">
          <h2 id="related-reading-title">Related engineering articles</h2>
          <ul>{relatedArticles.map(({ slug: articleSlug, title }) => <li key={articleSlug}><Link href={`/blog/${articleSlug}/`}>{title} →</Link></li>)}</ul>
        </section>}
      </article>
    </main>
  );
}
