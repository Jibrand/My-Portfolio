import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck2, Crosshair, Database, Fingerprint, GitFork, Layers3, ScanLine, Workflow } from "lucide-react";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Project } from "@/lib/portfolio";
import { Spotlight } from "./effects";

const featuredArt = {
  inboxhr: Workflow,
  chairbooked: CalendarCheck2,
  ocorpai: ScanLine,
  "privacyguard-piifuse": Fingerprint,
  "toolstalk-admin": Layers3,
  zayna: Crosshair,
};

export function ProjectArt({ project }: { project: Project }) {
  const image = project.image && existsSync(join(process.cwd(), "public", project.image)) ? project.image : null;
  const Icon = featuredArt[project.id as keyof typeof featuredArt] ?? (project.category === "Infrastructure & Delivery" ? GitFork : Database);

  return (
    <div className={`project-art ${image ? "project-art-image" : ""} visual-${project.number % 3}`} aria-hidden="true">
      {image ? (
        <Image src={image} alt="" fill sizes="(max-width: 740px) 100vw, (max-width: 1100px) 50vw, 650px" />
      ) : (
        <>
          <span className="art-index">MJ / {String(project.number).padStart(2, "0")}</span>
          <div className="art-sculpture">
            <span /><span /><span />
            <Icon strokeWidth={1.15} />
          </div>
          <span className="art-label">Project illustration</span>
          <span className="art-cross">+</span>
        </>
      )}
    </div>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  return project.links.map(({ label, href }) => (
    <a key={href} className="project-action" href={href} aria-label={`${label} for ${project.name}`}>
      {label}<ArrowUpRight size={15} aria-hidden="true" />
    </a>
  ));
}

export function ProjectCard({ project, lead = false }: { project: Project; lead?: boolean }) {
  const href = `/projects/${project.slug}`;
  return (
    <Spotlight feature={lead}>
      <Link className="project-cover" href={href} aria-label={`View ${project.name} project`}>
        <ProjectArt project={project} />
        <span className="cover-arrow"><ArrowUpRight size={21} aria-hidden="true" /></span>
      </Link>
      <div className="project-copy">
        <div className="project-meta eyebrow"><span>{project.category}</span>{lead && <span className="lead-label">Featured project</span>}</div>
        <h3><Link href={href}>{project.name}</Link></h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-actions">
          <Link className="project-action" href={href}>Project details<ArrowUpRight size={15} aria-hidden="true" /></Link>
          <ProjectLinks project={project} />
        </div>
      </div>
    </Spotlight>
  );
}
