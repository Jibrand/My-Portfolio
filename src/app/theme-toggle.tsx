"use client";

import { Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ReactNode } from "react";

export function PortfolioTheme({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="data-theme" storageKey="portfolio-theme" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>{children}</ThemeProvider>;
}

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button className="theme-toggle" type="button" onClick={() => setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light")} aria-label="Toggle light and dark theme">
      <Moon className="moon" size={17} aria-hidden="true" />
      <Sun className="sun" size={18} aria-hidden="true" />
    </button>
  );
}
