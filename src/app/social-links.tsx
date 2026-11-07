import { AtSign, BriefcaseBusiness, Camera, CodeXml, type LucideIcon } from "lucide-react";
import { socialLinks } from "@/lib/testimonials";

const icons: Record<string, LucideIcon> = {
  LinkedIn: BriefcaseBusiness,
  GitHub: CodeXml,
  X: AtSign,
  Instagram: Camera,
};

export function SocialLinks() {
  return (
    <nav className="footer-links" aria-label="Social profiles">
      {socialLinks.map(({ platform, url }) => {
        const Icon = icons[platform] ?? AtSign;

        return (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${platform} (opens in a new tab)`}>
            <Icon size={16} aria-hidden="true" />{platform}
          </a>
        );
      })}
    </nav>
  );
}
