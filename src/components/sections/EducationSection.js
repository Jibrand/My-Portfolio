import { education } from "../../content/profile";
import { Reveal } from "../ui/Reveal";

export function EducationSection() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Education</span>
            <h2 className="section-head__title">Where I studied</h2>
          </div>
        </Reveal>

        <dl className="education">
          {education.map((item) => (
            <div className="education__item" key={item.qualification}>
              <dt className="education__qualification">{item.qualification}</dt>
              <dd className="education__detail">
                {item.institution}
                <span className="education__location">{item.location}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
