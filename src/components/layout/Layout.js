import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Masthead } from "./Masthead";
import { Footer } from "./Footer";
import { ScrollManager } from "./ScrollManager";

/**
 * Announces the current page to screen readers on navigation. Without this a
 * client-side route change is silent — focus stays where it was and nothing
 * tells the user the content changed.
 */
function RouteAnnouncer() {
  const { pathname } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const timer = setTimeout(() => {
      ref.current.textContent = document.title;
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <div ref={ref} className="route-announcer" aria-live="polite" />;
}

export function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Masthead />
      <main id="main">{children}</main>
      <Footer />
      <RouteAnnouncer />
    </>
  );
}
