/**
 * Page header — one per page, and the only h1 on it.
 * Keeps every page opening with the same rhythm and hierarchy.
 */
export function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <header className="page-head">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="page-head__title">{title}</h1>
      {lead ? <p className="page-head__lead">{lead}</p> : null}
      {children}
    </header>
  );
}
