import { Button } from "../ui/Button";
import { ArrowRight, GitHub, LinkedIn, Mail } from "../ui/Icons";
import { Ground } from "../ui/Ground";
import { heroSpec, profile } from "../../content/profile";

/**
 * Home hero — the site's introduction.
 *
 * Name, positioning, a short description and the routes onward. No project
 * cards, no timeline, no skills grid: those are separate pages, and this one is
 * meant to be read in a single screen.
 */
export function Hero() {
  return (
    <section className="hero" id="home">
      <Ground />

      <div className="container hero__inner">
        <div className="hero__top">
          <p className="eyebrow hero__eyebrow">{profile.eyebrow}</p>

          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {profile.availabilityShort} · {profile.location}
          </p>

          <dl className="spec">
            {heroSpec.map((row) => (
              <div className="spec__row" key={row.key}>
                <dt className="spec__key">{row.key}</dt>
                <dd className="spec__value">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h1 className="hero__title">
          {profile.headline.lead} <em>{profile.headline.accent}</em>
        </h1>

        <div className="hero__bottom">
          <div className="hero__main">
            <p className="hero__lead">{profile.lead}</p>

            <div className="hero__actions">
              <Button to="/projects" variant="primary" size="lg">
                View projects
                <ArrowRight className="btn__icon" aria-hidden="true" />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </div>
          </div>

          <div className="hero__aside">
            <p className="hero__aside-label">Elsewhere</p>
            <div className="hero__links">
              <a
                className="hero__link"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHub aria-hidden="true" />
                GitHub
              </a>
              <a
                className="hero__link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedIn aria-hidden="true" />
                LinkedIn
              </a>
              <a className="hero__link" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
