import { useState } from "react";

export default function MentorCard({ mentor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fdf8f4",
        borderRadius: 16,
        padding: "28px 20px",
        textAlign: "center",
        transform: hovered ? "translateY(-5px)" : "none",
        boxShadow: hovered ? "0 12px 35px rgba(0,0,0,0.1)" : "none",
        transition: "all .25s",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 80, height: 80, borderRadius: "50%",
          background: mentor.gradient,
          margin: "0 auto 14px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "2rem",
        }}
      >
        {mentor.emoji}
      </div>
      <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#1a1a2e", marginBottom: 4 }}>
        {mentor.name}
      </h4>
      <p style={{ fontSize: "0.82rem", color: "#888", marginBottom: 12 }}>{mentor.role}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 14, fontSize: "0.78rem", color: "#888" }}>
        <span>📚 {mentor.courses} Courses</span>
        <span>👥 {mentor.students} Students</span>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {["in", "tw", "fb"].map((icon) => (
          <a
            key={icon}
            href="#"
            onClick={e => e.preventDefault()}
            style={{
              width: 30, height: 30, borderRadius: "50%",
              border: "1.5px solid #e0e0e0",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.72rem", color: "#888",
              textDecoration: "none", transition: "all .2s",
            }}
            onMouseEnter={e => { e.target.style.background = "#00BFA6"; e.target.style.color = "#fff"; e.target.style.borderColor = "#00BFA6"; }}
            onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = "#888"; e.target.style.borderColor = "#e0e0e0"; }}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
