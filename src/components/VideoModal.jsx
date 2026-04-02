export default function VideoModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <button
        onClick={onClose}
        style={{ position: "absolute", top: 24, right: 30, fontSize: "2rem", border: "none", background: "none", color: "#fff", cursor: "pointer" }}
      >✕</button>
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: "#1a1a2e", borderRadius: 16, width: 640, maxWidth: "90vw", aspectRatio: "16/9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}
      >
        <div style={{ fontSize: "4rem" }}>🎬</div>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontFamily: "'Nunito', sans-serif" }}>
          Platform Demo Video
        </p>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", fontFamily: "'Nunito', sans-serif" }}>
          Replace this with a real &lt;video&gt; or YouTube embed
        </p>
      </div>
    </div>
  );
}
