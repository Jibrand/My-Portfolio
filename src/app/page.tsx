import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, AudioLines, Braces, ChevronDown, Command, Layers3, MoveUpRight, ScanLine, Waypoints } from "lucide-react";
import { experience, featured, profile, projects, skills } from "@/lib/portfolio";
import { ProjectCard } from "./project-card";
import { Reveal } from "./effects";
import { Testimonials } from "./testimonials";
import { socialLinks } from "@/lib/testimonials";
import { articles } from "@/lib/articles";
import { ArticleCard } from "./blog/article-card";
import { homeDescription, homeTitle, pageMetadata } from "@/lib/seo";
import { StructuredData } from "./structured-data";

export const metadata: Metadata = pageMetadata({ title: homeTitle, description: homeDescription, path: "/" });

const focus = [
  { icon: Braces, title: "Product engineering", detail: "SaaS · Full-stack" },
  { icon: AudioLines, title: "Applied AI", detail: "Voice · Agents · Automation" },
  { icon: Waypoints, title: "Cloud & delivery", detail: "AWS · CI/CD" },
];
const skillIcons = [Command, Layers3, Waypoints];

export default function Home() {
  const person = {
    "@context": "https://schema.org", "@type": "Person", "@id": new URL("/#person", profile.site).href, name: profile.name,
    url: profile.site, image: new URL("/portrait.jpg", profile.site).href, jobTitle: profile.headline,
    description: homeDescription,
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    sameAs: socialLinks.map(({ url }) => url),
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education[0].institution },
    knowsAbout: ["Product engineering", "Full-stack web development", "AI agents", "Generative AI", "Voice AI", "Workflow automation", "SaaS development", "Next.js", "React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "RAG systems"],
  };

  return (
    <main id="main" className="wrap home">
      <StructuredData data={{
        "@context": "https://schema.org",
        "@graph": [
          person,
          { "@type": "WebSite", "@id": new URL("/#website", profile.site).href, name: profile.name, url: profile.site, inLanguage: "en", publisher: { "@id": person["@id"] } },
          { "@type": "ProfilePage", "@id": new URL("/#profile", profile.site).href, url: profile.site, name: homeTitle, description: homeDescription, mainEntity: { "@id": person["@id"] }, isPartOf: { "@id": new URL("/#website", profile.site).href } },
        ],
      }} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-intro">Muhammad Jibran <span>/</span> Product Engineer & AI Engineer</p>
          <h1 id="hero-title">Ideas into<br /><em>working products.</em></h1>
          <p className="hero-description">I’m a full-stack product engineer building SaaS applications, voice AI, and workflow automation, from the first technical decision to production.</p>
          <div className="actions">
            <Link className="button primary" href="/#work">Explore my work <ArrowDown size={17} aria-hidden="true" /></Link>
            <a className="button secondary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-rail eyebrow"><span><ScanLine size={16} aria-hidden="true" /> Profile / MJ</span><span>01</span></div>
          <div className="portrait-image">
            <Image src="/portrait.jpg" alt="Portrait of Muhammad Jibran" fill preload sizes="(max-width: 740px) 90vw, (max-width: 1000px) 38vw, 480px" />
            <span className="portrait-frame" aria-hidden="true" />
          </div>
          <figcaption className="eyebrow"><span>Muhammad Jibran</span></figcaption>
        </figure>
      </section>

      <div className="focus-grid" aria-label="Engineering focus">
        {focus.map(({ icon: Icon, title, detail }, index) => (
          <div className="focus-item" key={title}>
            <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
            <div><p>{title}</p><span>{detail}</span></div>
            <span className="eyebrow focus-number">0{index + 1}</span>
          </div>
        ))}
      </div>

      <section className="proof-grid" aria-label="Engineering achievements">
        <div><strong>{profile.experienceYears}</strong><span>Years building software</span><p>Full-stack engineering, applied AI, and cloud delivery.</p></div>
        <div><strong>50+</strong><span>Freelance projects delivered</span><p>Web applications and e-commerce for international clients.</p></div>
        <div><strong>{projects.length}</strong><span>Projects in the archive</span><p>Explore the work, technology, and available demos.</p><Link href="/projects/">Explore projects <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <Reveal><div className="section-heading">
          <div><p className="eyebrow section-index">01 / Featured projects</p><h2 id="work-title">Built to <em>ship.</em></h2></div>
          <p>SaaS, applied AI, and the tools people use to get their work done.</p>
        </div></Reveal>
        <div className="project-grid featured">
          {featured.map((project, index) => <Reveal key={project.id} delay={index % 2 * .08}><ProjectCard project={project} lead={index === 0} /></Reveal>)}
        </div>
        <div className="archive-cta">
          <span className="eyebrow">The full project archive</span>
          <Link className="button secondary" href="/projects/">View all {projects.length} projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <Reveal><div className="about-panel">
          <div className="about-heading">
            <p className="eyebrow section-index">02 / About</p>
            <h2 id="about-title">From idea to <em>production.</em></h2>
            <div className="about-stat"><strong>{profile.experienceYears}</strong><span className="eyebrow">Years in<br />software engineering</span></div>
          </div>
          <div className="about-copy">
            <p>I work directly with founders and small engineering teams to turn rough ideas into products people can use. My work spans architecture, interface design, integrations, and the infrastructure that keeps it all running.</p>
            <p>That has meant building voice commands that can create invoices and assign tasks, automating sales workflows, and running the backend of a cybersecurity competition platform.</p>
            {profile.education.map((entry) => (
              <div className="education" key={entry.institution}>
                <p className="eyebrow">Education / {entry.graduationYear}</p>
                <h3>{entry.degree}</h3>
                <p>{entry.institution} · {entry.cgpa} CGPA</p>
              </div>
            ))}
          </div>
        </div></Reveal>
      </section>

      <section className="section experience-layout" id="experience" aria-labelledby="experience-title">
        <div>
          <p className="eyebrow section-index">03 / Experience</p>
          <h2 id="experience-title">Engineering <em>in practice.</em></h2>
          <p className="section-aside">From full-stack delivery to owning architecture and AI automation.</p>
        </div>
        <ol className="timeline">
          {experience.map((job, index) => (
            <li key={job.company}>
              <details open={index === 0}>
                <summary>
                  <div><p className="eyebrow">{job.dates}</p><h3>{job.company}</h3><p className="job-role">{job.role}</p></div>
                  <span className="timeline-toggle"><ChevronDown size={19} aria-hidden="true" /></span>
                </summary>
                <div className="job-detail"><p className="eyebrow">{job.location}</p>{job.summary && <p>{job.summary}</p>}</div>
              </details>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <Reveal><div className="section-heading"><div><p className="eyebrow section-index">04 / Technical skills</p><h2 id="skills-title">My <em>toolkit.</em></h2></div></div></Reveal>
        <div className="skill-grid">
          {skills.map(({ title, items }, index) => {
            const Icon = skillIcons[index];
            return <Reveal key={title} delay={index * .07}>
              <article className="skill-card">
                <div className="skill-top"><span className="skill-icon"><Icon size={24} strokeWidth={1.4} aria-hidden="true" /></span><span className="eyebrow">0{index + 1} / Stack</span></div>
                <h3>{title}</h3>
                <ul className="skill-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </Reveal>;
          })}
        </div>
      </section>

      <section className="section" id="blog" aria-labelledby="journal-title">
        <div className="section-heading">
          <div><p className="eyebrow section-index">Engineering journal</p><h2 id="journal-title">Inside the <em>work.</em></h2></div>
          <Link className="button secondary" href="/blog/">Explore the blog <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>

      <Testimonials />

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-decoration" aria-hidden="true"><MoveUpRight strokeWidth={.48} /></div>
        <Reveal><div className="contact-copy">
          <p className="eyebrow section-index">06 / Contact</p><h2 id="contact-title">Let’s build<br /><em>something.</em></h2>
          <p>Have a SaaS product to ship, a workflow to automate, or an engineering role in mind?</p>
          <div className="actions">
            <a className="button primary" href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a className="button secondary" href={profile.booking} target="_blank" rel="noopener noreferrer">Book a call on Cal.com <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div></Reveal>
      </section>
    </main>
  );
}
