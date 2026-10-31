import { profile } from "../../content/profile";
import { GitHub, LinkedIn, Mail } from "../ui/Icons";
import { Ground } from "../ui/Ground";
import { Reveal } from "../ui/Reveal";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/muhammad-jibran220",
    href: profile.linkedin,
    Icon: LinkedIn,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Jibrand",
    href: profile.github,
    Icon: GitHub,
    external: true,
  },
];

/**
 * Contact — the deliberate conclusion rather than a footer with a form.
 * The email address is the primary action, set large enough to be the last
 * thing a visitor registers.
 */
export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <Ground />

      <div className="container contact__inner">
        <Reveal>
          <span className="eyebrow">Contact</span>

          <h1 className="contact__title">
            Have something <em>worth building?</em>
          </h1>

          <p className="contact__lead">
            I'm open to product engineering roles and contract work. Tell me what you're
            building and I'll tell you how I'd approach it.
          </p>

          <a className="contact__email" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            <span className="contact__email-text">{profile.email}</span>
          </a>
        </Reveal>

        <Reveal className="contact__channels" delay={80}>
          {channels.map(({ label, value, href, Icon, external }) => (
            <div key={label}>
              <p className="contact__channel-label">{label}</p>
              <a
                className="contact__channel-value"
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              >
                <Icon aria-hidden="true" />
                {value}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
