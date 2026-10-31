import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../content/navigation";
import { profile } from "../../content/profile";
import { useMasthead } from "./ScrollManager";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Close, Menu } from "../ui/Icons";

/**
 * Masthead.
 *
 * Navigation is page-based, so the active item is derived from the pathname
 * rather than a scroll observer. Case-study pages keep "Projects" active, since
 * that is the section the visitor is inside.
 */
export function Masthead() {
  const scrolled = useMasthead();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (item) => {
    if (item.to === "/") return pathname === "/";
    if (item.to === "/projects") {
      return pathname === "/projects" || pathname.startsWith("/work/");
    }
    return pathname === item.to;
  };

  return (
    <header className="masthead" data-scrolled={scrolled ? "true" : "false"}>
      <div className="container masthead__inner">
        <Link to="/" className="brand" aria-label={`${profile.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span>{profile.name}</span>
          <span className="brand__divider" aria-hidden="true">
            /
          </span>
          <span className="brand__role">{profile.role}</span>
        </Link>

        <nav
          className="masthead__nav"
          id="primary-navigation"
          data-open={open ? "true" : "false"}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="masthead__link"
              aria-current={isActive(item) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="masthead__cta-mobile">
            <Button to="/contact" variant="primary" onClick={() => setOpen(false)}>
              Get in touch
            </Button>
          </div>
        </nav>

        <div className="masthead__actions">
          <ThemeToggle />
          <div className="masthead__cta-desktop">
            <Button to="/contact" variant="primary">
              Get in touch
            </Button>
          </div>
          <button
            type="button"
            ref={toggleRef}
            className="masthead__toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
