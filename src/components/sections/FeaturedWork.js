import { caseStudies } from "../../content/projects";
import { WorkCard } from "../WorkCard";
import { Reveal } from "../ui/Reveal";

/**
 * The project list.
 *
 * Carries no heading of its own — the Projects page header provides the
 * introduction, so adding another would stack two headings with the same job.
 */
export function FeaturedWork() {
  return (
    <section className="section" id="work" aria-label="Case studies">
      <div className="container">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug}>
            <WorkCard study={study} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
