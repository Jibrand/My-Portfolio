import { skillGroups } from "../../content/skills";
import { Reveal } from "../ui/Reveal";

/**
 * Technical capabilities as an editorial index: a label column and an inline
 * list per row, rather than a grid of pills.
 */
export function SkillsSection() {
  return (
    <section className="section section--alt" id="capabilities">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2 className="section-head__title">Technical capabilities</h2>
          </div>
          <div className="section-head__aside">
            <p>
              Grouped by what the work calls for. Everything listed has been used on a real
              project.
            </p>
          </div>
        </Reveal>

        <div className="skills">
          {skillGroups.map((group) => (
            <Reveal className="skills__row" key={group.label}>
              <h3 className="skills__label">{group.label}</h3>
              <ul className="skills__items" aria-label={`${group.label} technologies`}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
