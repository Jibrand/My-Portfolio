import { Link } from "react-router-dom";

const classNames = (variant, size, className) =>
  ["btn", `btn--${variant}`, size === "lg" ? "btn--lg" : null, className]
    .filter(Boolean)
    .join(" ");

/**
 * One button component covering three cases: internal route (react-router
 * `Link`), external/absolute URL (`<a>`), and a real `<button>` for actions.
 *
 * Renders an anchor whenever there is a destination, so keyboard and
 * middle-click behaviour come from the platform rather than being reimplemented.
 */
export function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}) {
  const classes = classNames(variant, size, className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

/** A minimal anchor for use inside prose, always externally safe. */
export function ExternalTextLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={className || "link"}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}
