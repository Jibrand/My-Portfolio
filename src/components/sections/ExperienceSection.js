import { experience } from "../../content/experience";
import { Reveal } from "../ui/Reveal";

/**
 * Experience timeline. The page header supplies the h1, so this renders the
 * timeline itself and labels the list for assistive tech.
 */
export function ExperienceSection() {
  return (
    <section className="section section--alt" id="roles">
      <div className="container">
        <ol className="timeline" aria-label="Roles and contributions">
          {experience.map((job) => (
            <Reveal as="li" className="timeline__item" key={`${job.company}-${job.role}`}>
              <div className="timeline__rail">
                <span className="timeline__year">
                  {job.period || <span className="timeline__pending">Dates to confirm</span>}
                </span>
                {job.location ? (
                  <span className="timeline__place">{job.location}</span>
                ) : null}
              </div>

              <div>
                <h2 className="timeline__role">{job.role}</h2>
                <p className="timeline__company">{job.company}</p>

                {job.summary ? <p className="timeline__summary">{job.summary}</p> : null}

                {job.points.length > 0 ? (
                  <ul className="timeline__points">
                    {job.points.map((point) => (
                      <li key={point}>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {job.stack.length > 0 ? (
                  <p className="timeline__stack">{job.stack.join(" · ")}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
