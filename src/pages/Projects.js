import { useSeo } from "../hooks/useSeo";
import { PageHeader } from "../components/ui/PageHeader";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { OtherWorkSection } from "../components/sections/OtherWorkSection";
import { caseStudies } from "../content/projects";

export default function Projects() {
  useSeo({
    title: "Projects",
    description: `${caseStudies.length} product case studies — SaaS platforms, AI features and backend systems built end to end, plus other products and deployment work.`,
    path: "/projects",
  });

  return (
    <>
      <div className="container">
        <PageHeader
          eyebrow="Projects"
          title="Products I've built and shipped"
          lead="Platforms and tools where I owned a substantial part of the engineering — from backend APIs and data models through to the interface and the deployment. Each has a full case study."
        />
      </div>

      <FeaturedWork />
      <OtherWorkSection />
    </>
  );
}
