import { useEffect, useRef, useState } from "react";

/**
 * Single entrance-reveal mechanism for the whole site.
 *
 * Elements start slightly offset and settle once when they enter the viewport.
 * If IntersectionObserver is unavailable the content is shown immediately, and
 * `prefers-reduced-motion` is honoured in CSS (see .reveal in base.css), so the
 * content is never dependent on the animation running.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.04 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={{ "--reveal-delay": `${delay}ms` }}
      data-visible={visible ? "true" : "false"}
      {...rest}
    >
      {children}
    </Tag>
  );
}
