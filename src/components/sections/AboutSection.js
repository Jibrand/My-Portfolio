import { about, principles } from "../../content/profile";
import { Reveal } from "../ui/Reveal";

/**
 * About — prose beside engineering principles, with the key facts underneath.
 * The page header supplies the h1.
 */
export function AboutSection() {
  return (
    <section className="section" id="about-body">
      <div className="container">
        <div className="about">
          <Reveal className="prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="about__principles" delay={80}>
            <h2 className="eyebrow">How I work</h2>

            {principles.map((principle, index) => (
              <div className="principle" key={principle.title}>
                <span className="principle__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="principle__title">{principle.title}</h3>
                  <p className="principle__body">{principle.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <dl className="about__facts">
            {about.highlights.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
