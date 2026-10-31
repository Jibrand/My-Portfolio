import { useSeo } from "../hooks/useSeo";
import { PageHeader } from "../components/ui/PageHeader";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { experience } from "../content/experience";

export default function Experience() {
  useSeo({
    title: "Experience",
    description:
      "Where Muhammad Jibran has worked: founding, contract and remote engineering roles with small product teams.",
    path: "/experience",
  });

  return (
    <>
      <div className="container">
        <PageHeader
          eyebrow="Experience"
          title="Where I've worked"
          lead={`${experience.length} roles across founding work, contract engagements and remote positions — mostly companies where one engineer covers a lot of ground.`}
        />
      </div>

      <ExperienceSection />
    </>
  );
}
