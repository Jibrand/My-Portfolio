import { Link } from "react-router-dom";
import { profile } from "../../content/profile";
import { navItems } from "../../content/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__note">
            © {year} {profile.name}
          </p>
          <p className="footer__note">{profile.roleLine}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
