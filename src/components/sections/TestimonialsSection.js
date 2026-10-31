import { leadQuote, supportingQuotes } from "../../content/testimonials";
import { Reveal } from "../ui/Reveal";

function Person({ name, role, avatar }) {
  return (
    <div className="quote-person">
      {avatar ? (
        <img
          className="quote-person__avatar"
          src={avatar}
          alt=""
          width="160"
          height="160"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span
          className="quote-person__avatar quote-person__avatar--initials"
          aria-hidden="true"
        >
          {name.slice(0, 1).toUpperCase()}
        </span>
      )}
      <span>
        <span className="quote-person__name">{name}</span>
        <span className="quote-person__role">{role}</span>
      </span>
    </div>
  );
}

/**
 * Testimonials — one large serif pull-quote, then supporting quotes.
 * Only curated, company-attributed quotes are shown.
 */
export function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-head__title">What founders say</h2>
          </div>
          <div className="section-head__aside">
            <p>Quotes are reproduced as they were given.</p>
          </div>
        </Reveal>

        <Reveal as="figure" className="quote-lead">
          <blockquote className="quote-lead__text">{leadQuote.quote}</blockquote>
          <figcaption className="quote-lead__footer">
            <Person {...leadQuote} />
          </figcaption>
        </Reveal>

        <div className="quotes">
          {supportingQuotes.map((item, index) => (
            <Reveal as="figure" className="quote" key={item.name} delay={index * 70}>
              <blockquote className="quote__text">{item.quote}</blockquote>
              <figcaption className="quote__footer">
                <Person {...item} />
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
