import { Link } from "react-router-dom";
import { deploymentWork, otherProducts } from "../../content/otherWork";
import { ExternalLink } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";

/**
 * Other work — deliberately lighter than the featured showcase.
 *
 * Two different shapes: a compact two-column index for the products, and a
 * condensed inline list for the deployment projects. The previous version made
 * both into 28 identical full-width rows, which is why the page ran to ~10,800px.
 */
export function OtherWorkSection() {
  return (
    <>
      <section className="section section--alt" id="other-work">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">Also built</span>
              <h2 className="section-head__title">Other products and platforms</h2>
            </div>
            <div className="section-head__aside">
              <p>
                Smaller products and side projects. Narrower scope, same approach — each one
                built to be used rather than demonstrated.
              </p>
            </div>
          </Reveal>

          <div className="index">
            {otherProducts.map((item, index) => (
              <Reveal className="index__item" key={item.name} delay={(index % 2) * 60}>
                <h3 className="index__name">{item.name}</h3>
                <p className="index__desc">{item.description}</p>

                {item.links.length > 0 ? (
                  <p className="index__links">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${item.name} — ${link.label} (opens in a new tab)`}
                      >
                        <ExternalLink aria-hidden="true" />
                        {link.label}
                      </a>
                    ))}
                  </p>
                ) : null}

                {item.linkNote ? <p className="index__note">{item.linkNote}</p> : null}

                {item.stack && item.stack.length > 0 ? (
                  <p className="index__stack">{item.stack.join(" · ")}</p>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="infrastructure">
        <div className="container">
          <header className="section-head">
            <div>
              <span className="eyebrow">Deployment &amp; infrastructure</span>
              <h2 className="section-head__title">
                Projects for how software gets shipped
              </h2>
            </div>
            <div className="section-head__aside">
              <p>
                Self-contained projects built to work through deployment, scaling and release
                automation properly — the same ground I cover in production, explored without
                the pressure of a live product.
              </p>
            </div>
          </header>

          <Reveal>
            <ul className="inline-list">
              {deploymentWork.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.links[0].href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${item.name} on GitHub (opens in a new tab)`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="index__note" style={{ marginTop: "1.5rem" }}>
            All of the above is on{" "}
            <a
              className="link"
              href="https://github.com/Jibrand"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            . <Link className="link" to="/projects">Back to case studies</Link>
          </p>
        </div>
      </section>
    </>
  );
}
