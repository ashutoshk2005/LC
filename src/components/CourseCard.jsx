import { useState } from "react";

export default function CourseCard({ course }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered ? "0 16px 45px rgba(0,0,0,0.14)" : "0 4px 20px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-6px)" : "none",
        transition: "all .25s ease",
        cursor: "pointer",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 170,
          background: course.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.5rem",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute", top: 12, left: 12,
            background: "rgba(255,255,255,0.92)", borderRadius: 50,
            padding: "3px 14px", fontSize: "0.72rem", fontWeight: 800,
            color: "#1a1a2e", textTransform: "capitalize",
          }}
        >
          {course.category}
        </span>
        {course.emoji}
      </div>

      {/* Body */}
      <div style={{ padding: "18px 18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div
            style={{
              width: 30, height: 30, borderRadius: "50%",
              background: course.color, display: "flex",
              alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: "0.7rem", fontWeight: 800,
            }}
          >
            {course.initials}
          </div>
          <span style={{ fontSize: "0.8rem", color: "#888" }}>{course.author}</span>
        </div>

        <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e", marginBottom: 14, lineHeight: 1.45 }}>
          {course.title}
        </h4>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f0f0f0", paddingTop: 12 }}>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#FF6B35" }}>
            {course.price}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.82rem", color: "#888", fontWeight: 600 }}>
            <span style={{ color: "#f6c90e" }}>★</span> {course.rating} ({course.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}
