import { useState } from "react";

export default function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered ? "0 14px 40px rgba(0,0,0,0.12)" : "0 4px 20px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-5px)" : "none",
        transition: "all .25s",
        cursor: "pointer",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 180,
          background: post.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute", top: 12, right: 12,
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            borderRadius: 50, padding: "3px 12px",
            fontSize: "0.7rem", fontWeight: 800, color: "#fff",
          }}
        >
          {post.category}
        </span>
        {post.emoji}
      </div>

      {/* Body */}
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", gap: 10, fontSize: "0.77rem", color: "#aaa", marginBottom: 8 }}>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>
        <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.98rem", color: "#1a1a2e", marginBottom: 8, lineHeight: 1.45 }}>
          {post.title}
        </h4>
        <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.65, marginBottom: 14 }}>
          {post.excerpt}
        </p>
        <span
          style={{ color: "#00BFA6", fontWeight: 700, fontSize: "0.85rem" }}
          onMouseEnter={e => (e.target.style.textDecoration = "underline")}
          onMouseLeave={e => (e.target.style.textDecoration = "none")}
        >
          Read More →
        </span>
      </div>
    </div>
  );
}
