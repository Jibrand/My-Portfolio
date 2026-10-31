import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "./ui/Icons";

/**
 * Clearly-labelled stand-in for a screenshot that has not been supplied.
 *
 * It is deliberately not dressed up as a product interface — no fake chrome, no
 * invented UI. It states that the asset is outstanding.
 */
function MediaPlaceholder({ name }) {
  return (
    <div className="media__placeholder">
      <span className="media__placeholder-mark" aria-hidden="true">
        {name.slice(0, 1)}
      </span>
      <span className="media__placeholder-label">Screenshot requested</span>
      <span className="media__placeholder-note">
        This visual has not been supplied yet.
      </span>
    </div>
  );
}

function WorkMedia({ study }) {
  const aspect =
    study.treatment === "split" || study.treatment === "split-reverse"
      ? "media--4x3"
      : study.treatment === "flagship"
      ? "media--cinema"
      : "media--16x10";

  return (
    <figure className="work__media">
      {/* Pointer-only shortcut to the case study; keyboard and screen readers use
          the labelled "Read case study" link below, so this one is hidden. */}
      <Link
        to={`/work/${study.slug}`}
        className="work__media-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className={`media ${aspect}`} data-position={study.visualPosition || "top"}>
          {study.visual ? (
            <img
              src={study.visual}
              alt=""
              loading="lazy"
              decoding="async"
              width="1440"
              height="900"
            />
          ) : (
            <MediaPlaceholder name={study.name} />
          )}
        </div>
      </Link>

      {study.mediaCaption ? (
        <figcaption className="work__caption">{study.mediaCaption}</figcaption>
      ) : null}
    </figure>
  );
}

export function WorkCard({ study, index }) {
  const points = study.built.slice(0, 3);
  const external = study.links.find(
    (link) => link.type === "live" || link.type === "demo" || link.type === "repo"
  );

  return (
    <article className={`work work--${study.treatment || "flagship"}`}>
      <p className="work__number">
        <span className="work__number-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="work__number-name">{study.name}</span>
      </p>

      <div className="work__row">
        <WorkMedia study={study} />

        <div className="work__body">
          <div>
            <p className="work__meta">
              <span>{study.discipline}</span>
              {study.role ? (
                <>
                  <span className="work__meta-sep">/</span>
                  <span>{study.role}</span>
                </>
              ) : null}
              {study.status === "draft" ? (
                <>
                  <span className="work__meta-sep">/</span>
                  <span className="work__meta-flag">In progress</span>
                </>
              ) : null}
            </p>

            <h3 className="work__title">{study.title}</h3>
            <p className="work__tagline">{study.tagline}</p>
          </div>

          <div>
            <ul className="work__points">
              {points.map((point) => (
                <li key={point}>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {study.tech.length > 0 ? (
              <p className="work__stack">{study.tech.slice(0, 6).join(" · ")}</p>
            ) : null}

            <div className="work__foot">
              <Link
                to={`/work/${study.slug}`}
                className="link-arrow"
                aria-label={`Read case study: ${study.title}`}
              >
                Read case study
                <ArrowRight aria-hidden="true" />
              </Link>

              {external ? (
                <a
                  href={external.href}
                  className="work__external"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${study.name} — ${external.label} (opens in a new tab)`}
                >
                  <ExternalLink aria-hidden="true" />
                  {external.label}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
