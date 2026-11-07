import type { MetadataRoute } from "next";
import { profile, projects } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects", ...projects.map(({ slug }) => `/projects/${slug}`)]
    .map((path) => ({ url: new URL(path, profile.site).href }));
}
