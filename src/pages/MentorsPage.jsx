import { MENTORS } from "../data/siteData";
import MentorCard from "../components/MentorCard";

export default function MentorsPage() {
  return (
    <div style={{ minHeight: "70vh", background: "#fff" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", padding: "60px 60px 50px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "#00BFA6", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 14, letterSpacing: "0.04em" }}>Our Team</span>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "#fff", marginBottom: 10 }}>Meet Our Expert Mentors</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
          Learn from {MENTORS.length}+ industry-leading professionals who bring real-world expertise to every lesson.
        </p>
      </div>

      {/* Grid */}
      <div style={{ padding: "54px 60px 70px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="mentors-grid">
          {MENTORS.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)}
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ background: "#fdf8f4", padding: "54px 60px", textAlign: "center", borderTop: "1px solid #f0f0f0" }}>
        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#1a1a2e", marginBottom: 10 }}>
          Want to Teach on DevSkill?
        </h3>
        <p style={{ color: "#888", fontSize: "0.95rem", marginBottom: 24, maxWidth: 460, margin: "0 auto 24px" }}>
          Share your expertise with thousands of students worldwide and earn while doing what you love.
        </p>
        <button
          style={{ background: "#FF6B35", color: "#fff", border: "none", padding: "13px 32px", borderRadius: 50, fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all .2s" }}
          onMouseEnter={e => { e.target.style.background = "#e55a25"; e.target.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.target.style.background = "#FF6B35"; e.target.style.transform = "none"; }}
        >
          Become an Instructor →
        </button>
      </div>

      <style>{`
        @media(max-width:1024px){ .mentors-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @media(max-width:768px){ .mentors-grid{ grid-template-columns:repeat(2,1fr) !important; } div{ padding-left:20px !important; padding-right:20px !important; } }
        @media(max-width:480px){ .mentors-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  );
}
