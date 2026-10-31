import { useSeo } from "../hooks/useSeo";
import { Hero } from "../components/sections/Hero";
import { PageIndex } from "../components/sections/PageIndex";
import { profile } from "../content/profile";

/**
 * Home — a compact introduction and a directory of the site.
 *
 * Deliberately holds no project showcase, timeline or skills grid: those live on
 * their own pages. The page should feel complete without scrolling.
 */
export default function Home() {
  useSeo({
    title: "Product Engineer · Full-Stack & AI",
    description: `${profile.name} is a product engineer and full-stack developer who builds SaaS products, AI-powered features and backend systems end to end. ${profile.supporting}`,
    path: "/",
  });

  return (
    <>
      <Hero />
      <PageIndex />
    </>
  );
}
