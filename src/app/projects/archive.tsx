"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

const categories = [
  { key: "all", label: "All projects" },
  { key: "ai", label: "AI & Automation" },
  { key: "product", label: "Product Engineering" },
  { key: "infrastructure", label: "Infrastructure & Delivery" },
];

type Entry = { id: string; category: string; search: string; card: ReactNode };

export function Archive({ entries }: { entries: Entry[] }) {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const active = categories.find(({ key }) => key === params.get("category")) ?? categories[0];
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = entries.filter(({ category, search }) =>
    (active.key === "all" || category === active.label) && terms.every((term) => search.includes(term)),
  );

  function update(key: string, value: string) {
    const next = new URLSearchParams(window.location.search);
    if (value) next.set(key, value);
    else next.delete(key);
    const search = next.toString();
    window.history.replaceState(null, "", search ? `/projects?${search}` : "/projects");
  }

  return (
    <>
      <div className="filters" role="search" aria-label="Project archive">
        <label className="search-box">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input type="search" placeholder="Search by project, technology, or keyword" value={query} onChange={(event) => update("q", event.target.value)} />
        </label>
        <div className="filter-options" role="group" aria-label="Filter by category">
          {categories.map(({ key, label }) => (
            <button key={key} type="button" className="button secondary" aria-pressed={active.key === key} onClick={() => update("category", key === "all" ? "" : key)}>{label}</button>
          ))}
        </div>
      </div>
      <section aria-labelledby="results-heading">
        <h2 id="results-heading" className="eyebrow result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "project" : "projects"}</h2>
        {filtered.length ? <div className="project-grid">{filtered.map(({ id, card }) => <div key={id}>{card}</div>)}</div> : (
          <p className="empty-state">No projects match those filters. Try a different keyword or category.</p>
        )}
      </section>
    </>
  );
}
