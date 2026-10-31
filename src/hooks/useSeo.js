import { useEffect } from "react";
import { site } from "../content/profile";

const ensureMeta = (selector, create) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMetaName = (name, content) => {
  const el = ensureMeta(`meta[name="${name}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    return m;
  });
  el.setAttribute("content", content);
};

const setMetaProperty = (property, content) => {
  const el = ensureMeta(`meta[property="${property}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("property", property);
    return m;
  });
  el.setAttribute("content", content);
};

/**
 * Per-route document metadata.
 *
 * This is a client-side app, so titles and meta tags are applied on hydration
 * and on every route change. Crawlers that execute JavaScript pick these up;
 * the static tags in public/index.html cover the homepage for those that don't.
 */
export function useSeo({ title, description, path, image, type = "website" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — Product Engineer`;
    const url = `${site.url}${path || ""}`;
    const previewImage = `${site.url}${image || "/og-image.png"}`;

    document.title = fullTitle;
    setMetaName("description", description);
    setMetaProperty("og:title", fullTitle);
    setMetaProperty("og:description", description);
    setMetaProperty("og:type", type);
    setMetaProperty("og:url", url);
    setMetaProperty("og:image", previewImage);
    setMetaProperty("og:site_name", site.name);
    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", fullTitle);
    setMetaName("twitter:description", description);
    setMetaName("twitter:image", previewImage);

    const canonical = ensureMeta('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    canonical.setAttribute("href", url);
  }, [title, description, path, image, type]);
}
