import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/portfolio";
import { PortfolioTheme, ThemeToggle } from "./theme-toggle";
import { MainNav } from "./main-nav";
import { Effects } from "./effects";
import { SocialLinks } from "./social-links";
import { homeDescription, homeTitle, socialImage } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: homeTitle, template: `%s | ${profile.name}` },
  description: homeDescription,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: new URL("/#about", profile.site).href }],
  creator: profile.name,
  icons: { apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  category: "Software engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: { type: "website", title: homeTitle, description: homeDescription, url: "/", siteName: profile.name, locale: "en_US", images: [socialImage] },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription, creator: "@jibrandevm", images: [{ url: socialImage.url, alt: socialImage.alt }] },
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
