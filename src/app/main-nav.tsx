"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { id: "projects", label: "Projects", href: "/projects/" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog", href: "/blog/" },
  { id: "contact", label: "Contact" },
];

export function MainNav() {
  const pathname = usePathname();
  const [section, setSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = items.flatMap(({ id, href }) => {
      if (href) return [];
      const target = document.getElementById(id);
      return target ? [target] : [];
    });
    const observer = new IntersectionObserver(() => {
      const visible = sections.findLast((target) => target.getBoundingClientRect().top <= 160);
      setSection(visible?.id ?? "");
    }, { rootMargin: "-130px 0px -45% 0px" });

    sections.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="main-nav" aria-label="Main navigation">
      {items.map(({ id, label, href }) => {
        const activeRoute = href && (pathname === href.slice(0, -1) || pathname.startsWith(href));
        const current = activeRoute ? "page" : pathname === "/" && section === id ? "location" : undefined;

        return <Link key={id} href={href ?? `/#${id}`} aria-current={current} className={id === "experience" ? "nav-experience" : undefined}>{label}</Link>;
      })}
    </nav>
  );
}
