import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Replaces the old component that registered a scroll listener on every
 * render. Here the listener is attached once, removed on unmount, and the
 * state only changes when the threshold is actually crossed.
 */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Router-level scroll behaviour:
 *  - navigating to a new page scrolls to the top
 *  - navigating to /#section scrolls that section into view, accounting for the
 *    sticky masthead so headings are never hidden underneath it
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function useMasthead() {
  return useScrolled();
}
