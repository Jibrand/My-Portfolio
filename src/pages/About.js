import { useSeo } from "../hooks/useSeo";
import { PageHeader } from "../components/ui/PageHeader";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { EducationSection } from "../components/sections/EducationSection";
import { about } from "../content/profile";

export default function About() {
  useSeo({
    title: "About",
    description:
      "Muhammad Jibran — full-stack and AI engineer. Background, education, engineering principles and technical capabilities.",
    path: "/about",
  });

  return (
    <>
      <div className="container">
        <PageHeader
          eyebrow="About"
          title={about.title}
          lead="A full-stack and AI engineer working with startup founders on products that need to actually ship."
        />
      </div>

      <AboutSection />
      <SkillsSection />
      <EducationSection />
    </>
  );
}
