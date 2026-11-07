import type { Metadata } from "next";
import { profile } from "./portfolio";

export const homeTitle = "Muhammad Jibran | Full-Stack & AI Engineer";
export const homeDescription = "Muhammad Jibran is a Full-Stack and AI Engineer in Pakistan with 5+ years of experience building SaaS platforms, AI agents, and automation systems.";
export const socialImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Muhammad Jibran — Full-Stack & AI Engineer and Product Engineer",
};

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const summary = description.length <= 160
    ? description
    : description.slice(0, 157).replace(/\s+\S*$/, "") + "…";
  return {
    title: { absolute: title },
    description: summary,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: summary,
      url: path,
      type: "website",
      siteName: profile.name,
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: new URL(path, profile.site).href,
    })),
  };
}
