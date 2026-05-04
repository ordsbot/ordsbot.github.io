import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { LinksPage } from "./pages/LinksPage";
import { NowPage } from "./pages/NowPage";
import { OtpForgePage } from "./pages/OtpForgePage";
import { RedirectToOtpForgePage } from "./pages/RedirectToOtpForgePage";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Now", to: "/now" },
  { label: "OTPForge", to: "/otpforge" },
  { label: "Links", to: "/links" },
];

export function App() {
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <main className="shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="panel nav-panel">
        <div className="nav-wrap">
          <p className="badge">Ordsbot Site</p>
          <nav className="top-nav" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`button ${active ? "button--primary" : "button--ghost"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <div id="content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/now" element={<NowPage />} />
          <Route path="/otpforge" element={<OtpForgePage />} />
          {/* legacy */}
          <Route path="/otpbridge" element={<RedirectToOtpForgePage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <footer className="panel panel-body site-footer">
        <p className="site-footer__row">
          <span>© {new Date().getFullYear()} Ords.</span>
          <a href="https://github.com/ordsbot" target="_blank" rel="me noopener noreferrer">
            GitHub
          </a>
          <a href="https://github.com/ordsbot/ordsbot.github.io" target="_blank" rel="noopener noreferrer">
            Site repo
          </a>
          <a href="https://ordsbot.github.io/" target="_blank" rel="noopener noreferrer">
            Live site
          </a>
        </p>
      </footer>
    </main>
  );
}
