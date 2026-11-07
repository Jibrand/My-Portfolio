"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export function MainNav() {
  const pathname = usePathname();
  const [section, setSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = items.flatMap(({ id }) => {
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
      {items.map(({ id, label }) => {
        const archive = (id === "work" && (pathname === "/projects" || pathname.startsWith("/projects/")))
          || (id === "blog" && pathname.startsWith("/blog"));
        const current = archive ? "page" : pathname === "/" && section === id ? "location" : undefined;

        return <Link key={id} href={id === "blog" ? "/blog/" : `/#${id}`} aria-current={current} className={id === "experience" ? "nav-experience" : undefined}>{label}</Link>;
      })}
    </nav>
  );
}
