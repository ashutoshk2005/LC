import { FOOTER_LINKS } from "../data/siteData";

export default function Footer({ navigate }) {
  const s = {
    footer: { background: "#0f0f1a", padding: "50px 60px 24px", fontFamily: "'Nunito', sans-serif" },
    grid: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 },
    logo: { fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "1.4rem", color: "#fff", marginBottom: 14, display: "block" },
    desc: { color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.75, maxWidth: 240 },
    colTitle: { color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, marginBottom: 16, fontSize: "0.95rem" },
    linkItem: { marginBottom: 10 },
    link: { color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", cursor: "pointer", transition: "color .2s" },
    bottom: { borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" },
    copy: { color: "rgba(255,255,255,0.3)", fontSize: "0.82rem" },
    socials: { display: "flex", gap: 10 },
    social: { width: 34, height: 34, background: "rgba(255,255,255,0.07)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", cursor: "pointer", transition: "all .2s", border: "none", fontFamily: "'Nunito', sans-serif" },
  };

  return (
    <footer style={s.footer}>
      <div style={s.grid}>
        {/* Brand */}
        <div>
          <span style={s.logo} onClick={() => navigate("home")}>
            Lakshya<span style={{ color: "#FF6B35" }}>Academy</span>
            <span style={{ color: "#FF6B35" }}>•</span>
          </span>
          <p style={s.desc}>Empowering learners worldwide with high-quality, accessible and engaging online education since 2000.</p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 style={s.colTitle}>{title}</h4>
            <ul style={{ listStyle: "none" }}>
              {links.map((lnk) => (
                <li key={lnk.label} style={s.linkItem}>
                  <span
                    style={s.link}
                    onClick={() => navigate(lnk.page)}
                    onMouseEnter={e => (e.target.style.color = "#00BFA6")}
                    onMouseLeave={e => (e.target.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {lnk.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={s.bottom}>
        <p style={s.copy}>© 2026 Lakshya Academy. All rights reserved.</p>
        <div style={s.socials}>
          {["in", "tw", "fb", "yt"].map((icon) => (
            <button key={icon} style={s.social}
              onMouseEnter={e => { e.target.style.background = "#00BFA6"; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.07)"; e.target.style.color = "rgba(255,255,255,0.4)"; }}>
              {icon}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
          footer { padding: 40px 20px 20px !important; }
        }
      `}</style>
    </footer>
  );
}
