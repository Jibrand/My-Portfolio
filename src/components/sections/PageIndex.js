import { Link } from "react-router-dom";
import { pages } from "../../content/navigation";
import { ArrowRight } from "../ui/Icons";

/**
 * The homepage index.
 *
 * A compact directory of the site — one row per page — so the homepage is a
 * complete, self-contained introduction rather than the first screen of a long
 * scroll. It deliberately holds no project content.
 */
export function PageIndex() {
  return (
    <section className="section section--tight">
      <div className="container">
        <nav className="page-index" aria-label="Site index">
          {pages.map((page) => (
            <Link className="page-index__item" to={page.to} key={page.to}>
              <span className="page-index__label">{page.label}</span>
              <span className="page-index__desc">{page.description}</span>
              <ArrowRight className="page-index__arrow" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
