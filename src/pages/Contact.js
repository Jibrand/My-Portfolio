import { useSeo } from "../hooks/useSeo";
import { ContactSection } from "../components/sections/ContactSection";
import { profile } from "../content/profile";

export default function Contact() {
  useSeo({
    title: "Contact",
    description: `Get in touch with ${profile.name} — email, GitHub and LinkedIn.`,
    path: "/contact",
  });

  return <ContactSection />;
}
