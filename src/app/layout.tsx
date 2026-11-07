import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/portfolio";
import { PortfolioTheme, ThemeToggle } from "./theme-toggle";
import { MainNav } from "./main-nav";
import { Effects } from "./effects";
import { SocialLinks } from "./social-links";
import "./globals.css";

const description = "Muhammad Jibran is a product, full-stack, and AI engineer building SaaS products, voice AI, and workflow automation.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: `${profile.name} | Product & AI Engineer`, template: `%s | ${profile.name}` },
  description,
  openGraph: { type: "website", title: `${profile.name} | Product & AI Engineer`, description, siteName: profile.name },
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
            <SocialLinks />
          </footer>
        </PortfolioTheme>
      </body>
    </html>
  );
}
