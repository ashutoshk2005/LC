import { useState } from "react";
import { NAV_LINKS } from "../data/siteData";

const s = {
  nav: {
    position: "sticky", top: 0, zIndex: 1000,
    background: "#fff",
    boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
    height: 70,
    display: "flex", alignItems: "center",
    padding: "0 60px",
    justifyContent: "space-between",
    fontFamily: "'Nunito', sans-serif",
  },
  logo: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 900, fontSize: "1.5rem",
    color: "#1a1a2e", cursor: "pointer",
    letterSpacing: "-0.5px",
    display: "flex", alignItems: "center", gap: 2,
  },
  links: { display: "flex", gap: 32, listStyle: "none", alignItems: "center" },
  link: (active) => ({
    fontWeight: 700, fontSize: "0.9rem", cursor: "pointer",
    color: active ? "#FF6B35" : "#555",
    padding: "4px 0",
    borderBottom: active ? "2px solid #FF6B35" : "2px solid transparent",
    transition: "all .2s",
  }),
  right: { display: "flex", alignItems: "center", gap: 14 },
  joinBtn: {
    background: "#00BFA6", color: "#fff", border: "none",
    padding: "10px 24px", borderRadius: 50,
    fontWeight: 800, fontSize: "0.88rem", cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    transition: "all .2s",
  },
  hamburger: {
    display: "none", flexDirection: "column", gap: 5,
    cursor: "pointer", border: "none", background: "none", padding: 4,
  },
  mobileMenu: {
    position: "absolute", top: 70, left: 0, right: 0,
    background: "#fff", padding: "20px 30px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
    display: "flex", flexDirection: "column", gap: 0,
    zIndex: 999,
  },
  mobileLink: {
    padding: "12px 0", fontWeight: 700, fontSize: "0.95rem",
    color: "#555", borderBottom: "1px solid #f0f0f0",
    cursor: "pointer",
  },
};

export default function Navbar({ currentPage, navigate, onJoin }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={s.nav}>
      {/* Logo */}
      <div style={s.logo} onClick={() => navigate("home")}>
        <span>Lakshya</span>
        <span style={{ color: "#FF6B35" }}>Academy</span>
        <span style={{ color: "#FF6B35", fontSize: "1.8rem", lineHeight: 0, verticalAlign: "-4px" }}>•</span>
      </div>

      {/* Desktop Links */}
      <ul style={s.links} className="nav-desktop">
        {NAV_LINKS.map((lnk) => (
          <li
            key={lnk.page}
            style={s.link(currentPage === lnk.page)}
            onClick={() => navigate(lnk.page)}
          >
            {currentPage === lnk.page && <span style={{ color: "#FF6B35" }}>+ </span>}
            {lnk.label}
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div style={s.right}>
        <button style={s.joinBtn} onClick={onJoin}
          onMouseEnter={e => { e.target.style.background = "#009e8c"; e.target.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.target.style.background = "#00BFA6"; e.target.style.transform = "none"; }}>
          Join Us
        </button>
        {/* Hamburger – shown via media query in global.css via inline responsive hack */}
        <button
          style={s.hamburger}
          className="hamburger-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ width: 24, height: 2, background: "#1a1a2e", borderRadius: 2, display: "block" }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={s.mobileMenu}>
          {NAV_LINKS.map((lnk) => (
            <div
              key={lnk.page}
              style={s.mobileLink}
              onClick={() => { navigate(lnk.page); setMobileOpen(false); }}
            >
              {lnk.label}
            </div>
          ))}
          <button style={{ ...s.joinBtn, margin: "12px 0 0", width: "100%", padding: "12px" }} onClick={onJoin}>
            Join Us
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
