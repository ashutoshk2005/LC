import { useState } from "react";

export default function JoinModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.password || form.password.length < 6) e.password = "Password must be 6+ characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setDone(true);
    setTimeout(onClose, 2000);
  };

  const inp = (extra = {}) => ({
    width: "100%", padding: "12px 16px",
    border: "1.5px solid #e0e0e0", borderRadius: 10,
    fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem",
    outline: "none", marginBottom: 4, ...extra,
  });

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", maxWidth: 440, width: "100%", position: "relative", boxShadow: "0 24px 60px rgba(0,0,0,0.2)", animation: "fadeUp .3s ease" }}
      >
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, fontSize: "1.3rem", border: "none", background: "none", cursor: "pointer", color: "#888" }}>✕</button>

        {done ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: 14 }}>🎉</div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", marginBottom: 8 }}>Welcome to DevSkill!</h3>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>Your account has been created successfully.</p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 6, fontSize: "2rem" }}>🎓</div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.4rem", fontWeight: 800, marginBottom: 6 }}>Join DevSkill Today!</h3>
            <p style={{ color: "#888", fontSize: "0.88rem", marginBottom: 24 }}>Create your free account and start learning.</p>

            {[
              { key: "name", label: "Full Name", type: "text", ph: "Your full name" },
              { key: "email", label: "Email Address", type: "email", ph: "you@example.com" },
              { key: "password", label: "Password", type: "password", ph: "Min. 6 characters" },
            ].map(({ key, label, type, ph }) => (
              <div key={key} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, marginBottom: 5, color: "#444" }}>{label}</label>
                <input
                  type={type}
                  placeholder={ph}
                  value={form[key]}
                  onChange={e => { setForm({ ...form, [key]: e.target.value }); setErrors({ ...errors, [key]: "" }); }}
                  style={inp(errors[key] ? { borderColor: "#e74c3c" } : {})}
                />
                {errors[key] && <span style={{ color: "#e74c3c", fontSize: "0.76rem" }}>{errors[key]}</span>}
              </div>
            ))}

            <button
              onClick={handleSubmit}
              style={{ width: "100%", background: "#00BFA6", color: "#fff", border: "none", padding: "13px", borderRadius: 50, fontWeight: 800, fontSize: "1rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif", marginTop: 6, transition: "all .2s" }}
              onMouseEnter={e => e.target.style.background = "#009e8c"}
              onMouseLeave={e => e.target.style.background = "#00BFA6"}
            >
              Create Free Account
            </button>
            <p style={{ textAlign: "center", marginTop: 14, fontSize: "0.82rem", color: "#888" }}>
              Already have an account?{" "}
              <span style={{ color: "#00BFA6", fontWeight: 700, cursor: "pointer" }}>Sign In</span>
            </p>
          </>
        )}
      </div>
      <style>{`@keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }`}</style>
    </div>
  );
}
