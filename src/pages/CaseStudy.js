import { Link, useParams } from "react-router-dom";
import { caseStudies, getCaseStudy } from "../content/projects";
import { profile } from "../content/profile";
import { useSeo } from "../hooks/useSeo";
import { Button } from "../components/ui/Button";
import { ArrowLeft, ArrowRight, ExternalLink } from "../components/ui/Icons";
import { Reveal } from "../components/ui/Reveal";
import NotFound from "./NotFound";

/** One case-study section: mono label rail plus content. */
function Section({ label, children }) {
  return (
    <Reveal className="case__body-grid">
      <h2 className="case__label">{label}</h2>
      <div className="case__content">{children}</div>
    </Reveal>
  );
}

function Bullets({ items, label }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="case__list" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  useSeo({
    title: study ? `${study.name} — ${study.title}` : "Case study not found",
    description: study
      ? study.tagline
      : "The case study you were looking for is not available.",
    path: `/work/${slug}`,
    image: study?.visual || undefined,
    type: "article",
  });

  if (!study) {
    return <NotFound />;
  }

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const previous = caseStudies[index - 1] || null;
  const next = caseStudies[index + 1] || null;

  const facts = [
    { label: "Role", value: study.role },
    { label: "Product", value: study.product },
    { label: "Period", value: study.period },
    { label: "Focus", value: study.discipline },
  ].filter((fact) => Boolean(fact.value));

  return (
    <article className="container case">
      <Link to="/projects" className="case__back">
        <ArrowLeft aria-hidden="true" />
        All projects
      </Link>

      <header className="case__head">
        <p className="work__meta">
          <span>{study.discipline}</span>
          <span className="work__meta-sep">/</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {study.status === "draft" ? (
            <>
              <span className="work__meta-sep">/</span>
              <span className="work__meta-flag">In progress</span>
            </>
          ) : null}
        </p>

        <h1 className="case__title">{study.title}</h1>
        <p className="case__tagline">{study.tagline}</p>

        <dl className="case__facts">
          {facts.map((fact) => (
            <div className="case__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        {study.links.length > 0 ? (
          <div className="case__actions">
            {study.links.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                variant={link.type === "live" ? "primary" : "secondary"}
              >
                <ExternalLink className="btn__icon" />
                {link.label}
              </Button>
            ))}
          </div>
        ) : null}
      </header>

      {study.visual ? (
        <figure className="case__lead-media">
          <div className="media media--16x9">
            <img
              src={study.visual}
              alt={study.visualAlt || ""}
              width="1440"
              height="900"
              decoding="async"
            />
          </div>
          {study.mediaCaption ? (
            <figcaption className="work__caption">{study.mediaCaption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      {study.status === "draft" ? (
        <Section label="Status">
          <div className="panel">
            <p className="panel__title">This case study is not finished yet</p>
            <p className="panel__body">
              The feature list below comes from Muhammad. The written sections are deliberately
              empty rather than filled with assumptions — nothing here has been invented to make
              the page look complete. The outstanding items are:
            </p>
            <Bullets items={study.missing} />
          </div>
        </Section>
      ) : null}

      <Section label="Overview">
        <p>{study.summary}</p>
      </Section>

      {study.problem ? (
        <Section label="The problem">
          <p>{study.problem}</p>
        </Section>
      ) : null}

      {study.responsibility ? (
        <Section label="My role">
          <p>{study.responsibility}</p>
        </Section>
      ) : null}

      <Section label="Technical implementation">
        <p>
          {study.status === "draft"
            ? "What the platform covers:"
            : "The work I did on this, roughly in the order it happened:"}
        </p>
        <Bullets items={study.built} />
      </Section>

      {study.features.length > 0 ? (
        <Section label="Key features">
          <ul className="case__tags">
            {study.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {study.decisions.length > 0 ? (
        <Section label="Decisions & trade-offs">
          <div className="case__decisions">
            {study.decisions.map((decision) => (
              <div className="case__decision" key={decision.title}>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {study.challenges.length > 0 ? (
        <Section label="Challenges">
          <Bullets items={study.challenges} />
        </Section>
      ) : null}

      {study.outcome || study.lessons.length > 0 ? (
        <Section label="Result & lessons">
          {study.outcome ? <p>{study.outcome}</p> : null}
          <Bullets items={study.lessons} />
        </Section>
      ) : null}

      {study.media.length > 0 ? (
        <Section label="Screenshots">
          <div className="case__figures">
            {study.media.map((item) => (
              <figure key={item.src}>
                <div className="media">
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                {item.caption ? <figcaption>{item.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      {study.tech.length > 0 ? (
        <Section label="Technology">
          <ul className="case__tags">
            {study.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section label="Links">
        {study.links.length > 0 ? (
          <Bullets
            items={study.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label}
              </a>
            ))}
          />
        ) : (
          <p>
            Nothing public for this project yet.{" "}
            <Link to="/contact" className="link">
              Ask me for details
            </Link>
            .
          </p>
        )}
      </Section>

      <nav className="case__nav" aria-label="Other case studies">
        {previous ? (
          <Link to={`/work/${previous.slug}`} className="link-arrow">
            <ArrowLeft aria-hidden="true" />
            {previous.name}
          </Link>
        ) : (
          <span />
        )}

        <a href={`mailto:${profile.email}`} className="link-arrow">
          Work with me
          <ArrowRight aria-hidden="true" />
        </a>

        {next ? (
          <Link to={`/work/${next.slug}`} className="link-arrow">
            {next.name}
            <ArrowRight aria-hidden="true" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
