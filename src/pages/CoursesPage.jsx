import { useState } from "react";
import { COURSES, CATEGORIES } from "../data/siteData";
import CourseCard from "../components/CourseCard";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = COURSES.filter(c => {
    const matchSearch = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.author.toLowerCase().includes(search.toLowerCase());
    const matchCat = !category || c.category === category;
    return matchSearch && matchCat;
  });

  const inp = { padding: "11px 20px", border: "1.5px solid #e0e0e0", borderRadius: 50, fontFamily: "'Nunito', sans-serif", fontSize: "0.88rem", outline: "none", background: "#fff" };

  return (
    <div style={{ minHeight: "70vh", background: "#fdf8f4" }}>
      {/* Page Header */}
      <div style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", padding: "60px 60px 50px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "#FF6B35", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 14, letterSpacing: "0.04em" }}>Our Courses</span>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "#fff", marginBottom: 10 }}>Explore All Courses</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
          Choose from {COURSES.length}+ expert-led courses across design, development, marketing, and more.
        </p>
      </div>

      {/* Filters */}
      <div style={{ background: "#fff", padding: "22px 60px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <input
          style={{ ...inp, width: 260 }}
          placeholder="🔍  Search courses or instructors…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select style={{ ...inp, cursor: "pointer" }} value={category} onChange={e => setCategory(e.target.value)}>
          {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
        </select>
        <span style={{ marginLeft: "auto", color: "#888", fontSize: "0.85rem", fontFamily: "'Nunito', sans-serif" }}>
          Showing <strong style={{ color: "#1a1a2e" }}>{filtered.length}</strong> courses
        </span>
      </div>

      {/* Grid */}
      <div style={{ padding: "40px 60px 60px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#aaa" }}>
            <div style={{ fontSize: "4rem", marginBottom: 16 }}>🔍</div>
            <p style={{ fontSize: "1.1rem", fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#888" }}>No courses found</p>
            <p style={{ fontSize: "0.9rem", marginTop: 8 }}>Try a different search term or category.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="courses-grid">
            {filtered.map(course => <CourseCard key={course.id} course={course} />)}
          </div>
        )}
      </div>

      <style>{`
        @media(max-width:1024px){ .courses-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:600px){ .courses-grid{ grid-template-columns:1fr !important; } }
        @media(max-width:768px){ div{ padding-left:20px !important; padding-right:20px !important; } }
      `}</style>
    </div>
  );
}
