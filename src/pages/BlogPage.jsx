import { useState } from "react";
import { BLOG_POSTS } from "../data/siteData";
import BlogCard from "../components/BlogCard";

const ALL_CATS = ["All", ...new Set(BLOG_POSTS.map(p => p.category))];

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active);

  return (
    <div style={{ minHeight: "70vh", background: "#fff" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", padding: "60px 60px 50px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "#FF6B35", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 14, letterSpacing: "0.04em" }}>Our Blog</span>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "#fff", marginBottom: 10 }}>Latest Articles & Insights</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
          Stay updated with trends in design, development, and online learning.
        </p>
      </div>

      {/* Category Pills */}
      <div style={{ padding: "28px 60px 0", display: "flex", gap: 10, flexWrap: "wrap" }}>
        {ALL_CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "8px 20px", borderRadius: 50, border: "2px solid",
              borderColor: active === cat ? "#00BFA6" : "#e0e0e0",
              background: active === cat ? "#00BFA6" : "#fff",
              color: active === cat ? "#fff" : "#555",
              fontWeight: 700, fontSize: "0.83rem",
              cursor: "pointer", fontFamily: "'Nunito', sans-serif",
              transition: "all .2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ padding: "32px 60px 70px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="blog-grid">
          {filtered.map(post => <BlogCard key={post.id} post={post} />)}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa", fontSize: "1rem" }}>No posts in this category yet.</div>
        )}
      </div>

      {/* Newsletter */}
      <div style={{ background: "#fdf8f4", padding: "54px 60px", textAlign: "center", borderTop: "1px solid #f0f0f0" }}>
        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#1a1a2e", marginBottom: 10 }}>
          Get Articles in Your Inbox
        </h3>
        <p style={{ color: "#888", fontSize: "0.95rem", marginBottom: 24 }}>Subscribe for weekly tips, tutorials, and industry news.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, maxWidth: 420, margin: "0 auto" }}>
          <input placeholder="your@email.com" style={{ flex: 1, padding: "12px 20px", border: "1.5px solid #e0e0e0", borderRadius: 50, fontFamily: "'Nunito', sans-serif", outline: "none", fontSize: "0.9rem" }} />
          <button
            style={{ background: "#00BFA6", color: "#fff", border: "none", padding: "12px 24px", borderRadius: 50, fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap" }}
            onMouseEnter={e => e.target.style.background = "#009e8c"}
            onMouseLeave={e => e.target.style.background = "#00BFA6"}
          >
            Subscribe
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){ .blog-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:600px){ .blog-grid{ grid-template-columns:1fr !important; } div{ padding-left:20px !important; padding-right:20px !important; } }
      `}</style>
    </div>
  );
}
