import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  useSeo({
    title: "Page not found",
    description: "This page does not exist. Head back to the homepage to see the work.",
    path: "/404",
  });

  return (
    <div className="container notfound">
      <div>
        <span className="eyebrow">Error 404</span>
        <h1 className="page-head__title">That page doesn&rsquo;t exist</h1>
        <p className="prose" style={{ marginTop: "1.25rem", marginInline: "auto" }}>
          The link may be out of date, or the page may have moved.
        </p>
        <div className="notfound__actions">
          <Button to="/" variant="primary">
            Back to home
          </Button>
          <Button to="/projects" variant="secondary">
            View projects
          </Button>
        </div>
        <p className="hero__links" style={{ justifyContent: "center", marginTop: "2rem" }}>
          <Link className="link" to="/contact">
            Contact details
          </Link>
        </p>
      </div>
    </div>
  );
}
