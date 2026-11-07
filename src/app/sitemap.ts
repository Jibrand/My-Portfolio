import type { MetadataRoute } from "next";
import { profile, projects } from "@/lib/portfolio";
import { articles } from "@/lib/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/projects/", "/blog/", ...projects.map(({ slug }) => `/projects/${slug}/`)];
  return [
    ...pages.map((path) => ({ url: new URL(path, profile.site).href })),
    ...articles.map(({ slug, published }) => ({
      url: new URL(`/blog/${slug}/`, profile.site).href,
      lastModified: published,
    })),
  ];
}
