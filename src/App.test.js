import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { caseStudies } from "./content/projects";
import { profile } from "./content/profile";
import { pages } from "./content/navigation";

const renderAt = (path) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

describe("Home", () => {
  it("states the role and headline without requiring an animation", () => {
    renderAt("/");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /i build products from idea to production/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/product engineer · full-stack & ai/i, { selector: ".eyebrow" })
    ).toBeInTheDocument();
  });

  /**
   * The homepage is an introduction, not a showcase. This is the requirement
   * that no project gallery creeps back onto it under any name.
   */
  it("contains no project showcase", () => {
    renderAt("/");

    expect(screen.queryAllByRole("link", { name: /read case study/i })).toHaveLength(0);

    for (const study of caseStudies) {
      expect(screen.queryByText(study.title)).not.toBeInTheDocument();
    }

    expect(screen.queryByText(/selected work/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/featured/i)).not.toBeInTheDocument();
  });

  it("links to every page in the site index", () => {
    renderAt("/");
    const index = screen.getByRole("navigation", { name: "Site index" });

    for (const page of pages) {
      const link = within(index).getByRole("link", { name: new RegExp(page.label, "i") });
      expect(link).toHaveAttribute("href", page.to);
    }
  });

  it("does not present the site as a DevOps or design portfolio", () => {
    renderAt("/");
    const body = document.body.textContent;

    expect(body).not.toMatch(/devops engineer/i);
    expect(body).not.toMatch(/passionate about innovation/i);
    expect(body).not.toMatch(/turning dreams into reality/i);
    expect(body).not.toMatch(/technology enthusiast/i);
  });
});

describe("Navigation", () => {
  it("exposes the five primary destinations", () => {
    renderAt("/");
    const nav = screen.getByRole("navigation", { name: "Primary" });

    for (const label of ["Home", "Projects", "Experience", "About", "Contact"]) {
      expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("marks the current page as active", () => {
    renderAt("/experience");
    const nav = screen.getByRole("navigation", { name: "Primary" });

    expect(within(nav).getByRole("link", { name: "Experience" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(within(nav).getByRole("link", { name: "About" })).not.toHaveAttribute(
      "aria-current"
    );
  });

  it("keeps Projects active while reading a case study", () => {
    renderAt("/work/plutio-voice");
    const nav = screen.getByRole("navigation", { name: "Primary" });

    expect(within(nav).getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("offers a primary call to action and the verified contact links", () => {
    renderAt("/");

    expect(screen.getAllByRole("link", { name: /get in touch/i }).length).toBeGreaterThan(0);

    const hrefs = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

    expect(hrefs).toContain(profile.github);
    expect(hrefs).toContain(profile.linkedin);
    expect(hrefs).toContain(`mailto:${profile.email}`);
  });

  it("has a skip link that targets the main landmark", () => {
    renderAt("/");

    expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute(
      "href",
      "#main"
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});

describe("Projects page", () => {
  it.each(caseStudies.map((study) => [study.name, study.slug, study.title]))(
    "shows %s with a link to its case study",
    (_name, slug, title) => {
      renderAt("/projects");

      expect(screen.getByRole("heading", { level: 3, name: title })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: `Read case study: ${title}` })
      ).toHaveAttribute("href", `/work/${slug}`);
    }
  );

  it("renders every case study route with its overview", async () => {
    for (const study of caseStudies) {
      const { unmount } = renderAt(`/work/${study.slug}`);

      expect(
        await screen.findByRole("heading", { level: 1, name: study.title })
      ).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: /overview/i })).toBeInTheDocument();

      unmount();
    }
  });

  it("marks the unfinished case study as in progress instead of inventing detail", async () => {
    renderAt("/work/cyrenium");

    expect(await screen.findByText(/case study is not finished yet/i)).toBeInTheDocument();
    expect(screen.getByText(/nothing here has been invented/i)).toBeInTheDocument();
  });

  it("never publishes percentage or currency metrics", () => {
    renderAt("/projects");

    expect(document.body.textContent).not.toMatch(/\b\d+\s?%/);
    expect(document.body.textContent).not.toMatch(/[$£€]\s?\d/);
  });
});

describe("Experience page", () => {
  it("shows verified roles with their dates", () => {
    renderAt("/experience");

    expect(
      screen.getByRole("heading", { name: /lead full-stack & genai engineer/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/mar 2024 – present/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/jun 2022 – mar 2023/i).length).toBeGreaterThan(0);
  });

  it("shows dates to confirm rather than inventing dates", () => {
    renderAt("/experience");
    expect(screen.getAllByText(/dates to confirm/i).length).toBeGreaterThan(0);
  });
});

describe("About page", () => {
  it("covers background, capabilities and education", () => {
    renderAt("/about");

    expect(
      screen.getByRole("heading", { level: 1, name: /software that people actually use/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /technical capabilities/i })).toBeInTheDocument();
    expect(screen.getByText(/muhammad ali jinnah university/i)).toBeInTheDocument();
    expect(screen.getByText(/how i work/i)).toBeInTheDocument();
  });
});

describe("Contact page", () => {
  it("offers email, GitHub and LinkedIn", () => {
    renderAt("/contact");

    const hrefs = screen.getAllByRole("link").map((link) => link.getAttribute("href"));

    expect(hrefs).toContain(`mailto:${profile.email}`);
    expect(hrefs).toContain(profile.github);
    expect(hrefs).toContain(profile.linkedin);
  });
});

describe("Error handling", () => {
  it("renders a 404 for unknown routes", async () => {
    renderAt("/this-page-does-not-exist");
    expect(
      await screen.findByRole("heading", { level: 1, name: /that page doesn.t exist/i })
    ).toBeInTheDocument();
  });

  it("redirects legacy routes to their new location", () => {
    renderAt("/project");
    expect(
      screen.getByRole("heading", { level: 1, name: /products i.ve built and shipped/i })
    ).toBeInTheDocument();
  });
});

describe("Theme", () => {
  it("toggles the theme attribute on the document element", async () => {
    const user = userEvent.setup();
    renderAt("/");

    await user.click(screen.getByRole("button", { name: /switch to dark theme/i }));

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(
      screen.getByRole("button", { name: /switch to light theme/i })
    ).toBeInTheDocument();
  });
});
