import { Quote } from "lucide-react";
import { fallbackImage, imageBasePath, testimonials } from "@/lib/testimonials";
import { Reveal } from "./effects";
import { TestimonialAvatar } from "./testimonial-avatar";
import { TestimonialCarousel } from "./testimonial-carousel";

export function Testimonials() {
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-title">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow section-index">05 / Testimonials</p>
            <h2 id="testimonials-title">Client <em>feedback.</em></h2>
          </div>
        </div>
      </Reveal>
      {!testimonials.length && <p className="empty-state">Client reviews are coming soon.</p>}
      {testimonials.length > 0 && <TestimonialCarousel cards={testimonials.map(({ id, name, quote, role, company, project, image }) => {
          const filename = image.trim();
          const portrait = filename && !/[\\/]/.test(filename) && filename !== "." && filename !== ".."
            ? `${imageBasePath}/${encodeURIComponent(filename)}`
            : null;

          return (
              <figure className="testimonial-card" key={id}>
                <div className="testimonial-top">
                  <Quote size={23} strokeWidth={1.5} aria-hidden="true" />
                  {project.trim() && <span className="eyebrow">{project.trim()}</span>}
                </div>
                <blockquote><p>{quote.trim()}</p></blockquote>
                <figcaption>
                  <TestimonialAvatar src={portrait} fallback={fallbackImage} />
                  <div>
                    <span className="testimonial-name">{name.trim()}</span>
                    <span className="testimonial-role">{[role.trim(), company.trim()].filter(Boolean).join(" · ")}</span>
                  </div>
                </figcaption>
              </figure>
          );
        })} />}
    </section>
  );
}
