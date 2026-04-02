import { STATS, COURSES, WHY_FEATURES } from "../data/siteData";
import CourseCard from "../components/CourseCard";

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection({ navigate, onJoin, onVideo }) {
  return (
    <section style={{ background: "#fdf3ec", minHeight: 560, display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "60px 60px 0" }}>
      {/* Content */}
      <div style={{ maxWidth: 480, zIndex: 2, animation: "fadeUp .7s ease both" }}>
        <span style={{ display: "inline-block", background: "#00BFA6", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 20, letterSpacing: "0.04em" }}>
          eLearning Platform
        </span>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.12, color: "#1a1a2e", marginBottom: 18 }}>
          Smart Learning<br />Deeper & More<br />
          <span style={{ color: "#FF6B35" }}>-Amazing</span>
        </h1>
        <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 32, maxWidth: 380 }}>
          Phosfluorescently display unique intellectual capital without enterprise-after bricks &amp; clicks synergy. Enthusiastically revolutionize intuitive.
        </p>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("courses")}
            style={{ background: "#00BFA6", color: "#fff", border: "none", padding: "13px 28px", borderRadius: 50, fontWeight: 800, fontSize: "0.92rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all .2s" }}
            onMouseEnter={e => { e.target.style.background = "#009e8c"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.background = "#00BFA6"; e.target.style.transform = "none"; }}
          >
            Start Free Trial ↗
          </button>
          <button
            onClick={onVideo}
            style={{ display: "flex", alignItems: "center", gap: 12, border: "none", background: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "#1a1a2e" }}
          >
            <span style={{ width: 42, height: 42, borderRadius: "50%", background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.9rem", transition: "transform .2s" }}>▶</span>
            How It Work
          </button>
        </div>
      </div>

      {/* Decorative right side */}
      <div style={{ position: "absolute", right: 0, bottom: 0, width: 480, height: 520, pointerEvents: "none" }}>
        {/* Teal blob */}
        <div style={{ position: "absolute", right: 80, bottom: 0, width: 300, height: 380, background: "#00BFA6", borderRadius: "60% 60% 0 0", opacity: 0.12 }} />
        {/* Orange triangle */}
        <div style={{ position: "absolute", right: 20, bottom: 0, width: 200, height: 240, background: "#FF6B35", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", opacity: 0.15 }} />
        {/* Big emoji person */}
        <div style={{ position: "absolute", right: 90, bottom: 0, fontSize: "9rem", lineHeight: 1 }}>🧑‍🎓</div>
        {/* Floating cards */}
        <div style={{ position: "absolute", top: 80, right: 70, background: "#fff", borderRadius: 14, boxShadow: "0 8px 28px rgba(0,0,0,0.12)", padding: "14px 18px", fontSize: "1.5rem", animation: "float 3s ease-in-out infinite" }}>🔍</div>
        <div style={{ position: "absolute", top: 170, right: 200, background: "#fff", borderRadius: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.1)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, animation: "float 3.5s 0.5s ease-in-out infinite" }}>
          <span style={{ width: 26, height: 26, background: "#00BFA6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.75rem" }}>✓</span>
          <span style={{ fontWeight: 700, fontSize: "0.8rem", color: "#00BFA6", fontFamily: "'Nunito', sans-serif" }}>Completed!</span>
        </div>
        <div style={{ position: "absolute", bottom: 200, right: 40, background: "rgba(0,191,166,0.1)", border: "2px solid #00BFA6", borderRadius: 12, padding: "10px 20px", fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "#00BFA6", animation: "float 4s 1s ease-in-out infinite" }}>
          Learn
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @media(max-width:768px){
          section > div:first-child { max-width:100% !important; }
          section > div:last-child { display:none !important; }
          section { padding: 40px 24px 40px !important; }
        }
      `}</style>
    </section>
  );
}

// ─── About / Stats Section ───────────────────────────────────────────────────
function AboutSection() {
  return (
    <section style={{ background: "#fff", padding: "64px 60px", textAlign: "center", borderBottom: "1px solid #f0f0f0" }}>
      <span style={{ display: "inline-block", background: "#00BFA6", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 18, letterSpacing: "0.04em" }}>
        About Us
      </span>
      <p style={{ fontSize: "1.1rem", color: "#1a1a2e", fontWeight: 600, maxWidth: 680, margin: "0 auto 44px", lineHeight: 1.75, fontFamily: "'Nunito', sans-serif" }}>
        We are passionate about <strong>empowering learners</strong> Worldwide with high-quality, accessible &amp; engaging education. Our mission offering a diverse range of courses.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap" }}>
        {STATS.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.6rem", fontWeight: 900, color: "#1a1a2e", lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "0.82rem", color: "#888", marginTop: 6, maxWidth: 120, lineHeight: 1.5 }}>{stat.label}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:600px){ section { padding:40px 20px !important; } }`}</style>
    </section>
  );
}

// ─── Featured Courses ────────────────────────────────────────────────────────
function FeaturedCourses({ navigate }) {
  const featured = COURSES.slice(0, 6);
  return (
    <section style={{ padding: "64px 60px", background: "#fdf8f4" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
        <div>
          <span style={{ display: "inline-block", background: "#FF6B35", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 10, letterSpacing: "0.04em" }}>Our Course</span>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#1a1a2e" }}>Explore Our Course</h2>
        </div>
        <button
          onClick={() => navigate("courses")}
          style={{ background: "transparent", color: "#00BFA6", border: "2px solid #00BFA6", padding: "11px 28px", borderRadius: 50, fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all .2s" }}
          onMouseEnter={e => { e.target.style.background = "#00BFA6"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#00BFA6"; }}
        >
          View All →
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="courses-grid">
        {featured.map(course => <CourseCard key={course.id} course={course} />)}
      </div>
      <style>{`
        @media(max-width:1024px){ .courses-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:600px){ .courses-grid{ grid-template-columns:1fr !important; } section{ padding:40px 20px !important; } }
      `}</style>
    </section>
  );
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────
function WhySection() {
  return (
    <section style={{ padding: "64px 60px", background: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <span style={{ display: "inline-block", background: "#00BFA6", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 10, letterSpacing: "0.04em" }}>Why Choose Us</span>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#1a1a2e" }}>Learn Smarter, Not Harder</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="why-grid">
        {/* Visual */}
        <div style={{ background: "linear-gradient(135deg,#ffecd2,#fcb69f)", borderRadius: 24, height: 380, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "7rem" }}>
          🎓
        </div>
        {/* Features */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {WHY_FEATURES.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div style={{ width: 50, height: 50, minWidth: 50, borderRadius: 14, background: f.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                {f.icon}
              </div>
              <div>
                <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1a1a2e", marginBottom: 5, fontSize: "1rem" }}>{f.title}</h4>
                <p style={{ fontSize: "0.86rem", color: "#888", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .why-grid{ grid-template-columns:1fr !important; } }
        @media(max-width:600px){ section{ padding:40px 20px !important; } }
      `}</style>
    </section>
  );
}

// ─── HomePage (assembles all sections) ───────────────────────────────────────
export default function HomePage({ navigate, onJoin, onVideo }) {
  return (
    <>
      <HeroSection navigate={navigate} onJoin={onJoin} onVideo={onVideo} />
      <AboutSection />
      <FeaturedCourses navigate={navigate} />
      <WhySection />
    </>
  );
}
