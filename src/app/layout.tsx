import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/portfolio";
import { PortfolioTheme, ThemeToggle } from "./theme-toggle";
import { MainNav } from "./main-nav";
import { Effects } from "./effects";
import { SocialLinks } from "./social-links";
import "./globals.css";

const description = "Muhammad Jibran is a product engineer and full-stack AI engineer building SaaS applications, voice AI, and workflow automation. Explore projects and engineering articles.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: `${profile.name} | Product Engineer & AI Engineer`, template: `%s | ${profile.name}` },
  description,
  authors: [{ name: profile.name, url: new URL("/#about", profile.site).href }],
  openGraph: { type: "website", title: `${profile.name} | Product Engineer & AI Engineer`, description, siteName: profile.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <PortfolioTheme>
          <div className="neon-backdrop" aria-hidden="true"><span /><span /></div>
          <a className="skip" href="#main">Skip to content</a>
          <header className="site-header">
            <div className="wrap header-inner">
              <Link href="/" className="brand" aria-label="Muhammad Jibran home">
                <span className="monogram" aria-hidden="true">MJ</span><span className="brand-name">{profile.name}</span>
              </Link>
              <MainNav />
              <ThemeToggle />
            </div>
          </header>
          <Effects>{children}</Effects>
          <footer className="wrap site-footer">
            <Link href="/" className="brand"><span className="monogram" aria-hidden="true">MJ</span>{profile.name}</Link>
            <Link className="project-action" href="/blog/">Engineering blog ↗</Link>
            <SocialLinks />
          </footer>
        </PortfolioTheme>
      </body>
    </html>
  );
}
