import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { LinksPage } from "./pages/LinksPage";
import { NowPage } from "./pages/NowPage";
import { OtpBridgePage } from "./pages/OtpBridgePage";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Now", to: "/now" },
  { label: "OTP Bridge", to: "/otpbridge" },
  { label: "Links", to: "/links" },
];

export function App() {
  const location = useLocation();

  return (
    <main className="shell">
      <header className="panel nav-panel">
        <div className="nav-wrap">
          <p className="badge">Ordsbot Site</p>
          <nav className="top-nav" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`button ${active ? "button--primary" : "button--ghost"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="/otpbridge" element={<OtpBridgePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
