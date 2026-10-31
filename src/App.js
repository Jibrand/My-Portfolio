import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";

/*
 * The five primary pages are imported eagerly — they are small, and between them
 * they cover almost every first visit. Only the case-study pages, which are the
 * heaviest route and never the entry point, are code-split.
 */
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="container route-fallback">
      <p className="eyebrow">Loading</p>
      <p className="section-head__lead">One moment…</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/:slug" element={<CaseStudy />} />

            {/* Legacy routes from the previous site, kept so old links resolve. */}
            <Route path="/project" element={<Navigate to="/projects" replace />} />
            <Route path="/resume" element={<Navigate to="/experience" replace />} />
            <Route path="/homepay" element={<Navigate to="/" replace />} />
            <Route path="/OpenAi" element={<Navigate to="/" replace />} />
            <Route path="/meetings" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
