import { useState } from "react";
import { CONTACT_DETAILS } from "../data/siteData";

const INITIAL = { firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => { setForm({ ...form, [k]: v }); setErrors({ ...errors, [k]: "" }); };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Please write a message";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inp = (err) => ({
    width: "100%", padding: "13px 16px",
    background: "rgba(255,255,255,0.08)", border: `1.5px solid ${err ? "#e74c3c" : "rgba(255,255,255,0.15)"}`,
    borderRadius: 10, color: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", outline: "none",
  });

  return (
    <div style={{ minHeight: "70vh", background: "#fff" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", padding: "60px 60px 50px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "#00BFA6", color: "#fff", padding: "5px 18px", borderRadius: 50, fontSize: "0.75rem", fontWeight: 800, marginBottom: 14, letterSpacing: "0.04em" }}>Get In Touch</span>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "#fff", marginBottom: 10 }}>Let's Start Your Journey</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
          Have questions about our courses? We're here to help you every step of the way.
        </p>
      </div>

      {/* Two-col layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 0, minHeight: 600 }} className="contact-grid">
        {/* Left – info */}
        <div style={{ background: "linear-gradient(160deg,#1a1a2e,#16213e)", padding: "54px 50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#fff", marginBottom: 14 }}>Contact Information</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: 36 }}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          {CONTACT_DETAILS.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 22 }}>
              <div style={{ width: 44, height: 44, minWidth: 44, background: "rgba(255,255,255,0.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                {d.icon}
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginBottom: 2, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>{d.label}</span>
                <strong style={{ color: "#fff", fontSize: "0.9rem" }}>{d.value}</strong>
              </div>
            </div>
          ))}

          {/* Decorative blobs */}
          <div style={{ marginTop: "auto", display: "flex", gap: 10, paddingTop: 30 }}>
            {["in","tw","fb","yt"].map(s => (
              <button key={s} style={{ width: 36, height: 36, background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 8, color: "rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "0.78rem", cursor: "pointer" }}
                onMouseEnter={e => { e.target.style.background = "#00BFA6"; e.target.style.color = "#fff"; }}
                onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.08)"; e.target.style.color = "rgba(255,255,255,0.5)"; }}
              >{s}</button>
            ))}
          </div>
        </div>

        {/* Right – form */}
        <div style={{ background: "#fdf8f4", padding: "54px 50px" }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 14 }}>
              <div style={{ fontSize: "4rem" }}>✅</div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#1a1a2e" }}>Message Sent!</h3>
              <p style={{ color: "#888", fontSize: "0.9rem", maxWidth: 320 }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button
                onClick={() => { setForm(INITIAL); setSubmitted(false); }}
                style={{ marginTop: 10, background: "#00BFA6", color: "#fff", border: "none", padding: "11px 28px", borderRadius: 50, fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#1a1a2e", marginBottom: 24 }}>Send Us a Message</h3>

              {/* First / Last */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 0 }}>
                {[["firstName","First Name"],["lastName","Last Name"]].map(([k, label]) => (
                  <div key={k} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#444", marginBottom: 5 }}>{label} *</label>
                    <input value={form[k]} onChange={e => set(k, e.target.value)} placeholder={label} style={{ ...inp(errors[k]), border: `1.5px solid ${errors[k] ? "#e74c3c" : "#e0e0e0"}`, background: "#fff", color: "#333" }} />
                    {errors[k] && <span style={{ color: "#e74c3c", fontSize: "0.75rem" }}>{errors[k]}</span>}
                  </div>
                ))}
              </div>

              {/* Email */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#444", marginBottom: 5 }}>Email Address *</label>
                <input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@example.com" style={{ ...inp(errors.email), border: `1.5px solid ${errors.email ? "#e74c3c" : "#e0e0e0"}`, background: "#fff", color: "#333", width: "100%" }} />
                {errors.email && <span style={{ color: "#e74c3c", fontSize: "0.75rem" }}>{errors.email}</span>}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#444", marginBottom: 5 }}>Phone Number</label>
                <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+1 (000) 000-0000" style={{ ...inp(false), border: "1.5px solid #e0e0e0", background: "#fff", color: "#333", width: "100%" }} />
              </div>

              {/* Interest */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#444", marginBottom: 5 }}>Course Interest</label>
                <select value={form.interest} onChange={e => set("interest", e.target.value)} style={{ ...inp(false), border: "1.5px solid #e0e0e0", background: "#fff", color: form.interest ? "#333" : "#aaa", width: "100%", cursor: "pointer" }}>
                  <option value="">Select a category</option>
                  {["UI/UX Design","Web Development","Data Science","Digital Marketing","Mobile Development","Other"].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#444", marginBottom: 5 }}>Message *</label>
                <textarea
                  value={form.message}
                  onChange={e => set("message", e.target.value)}
                  placeholder="Tell us how we can help you…"
                  rows={4}
                  style={{ ...inp(errors.message), border: `1.5px solid ${errors.message ? "#e74c3c" : "#e0e0e0"}`, background: "#fff", color: "#333", width: "100%", resize: "vertical", minHeight: 110 }}
                />
                {errors.message && <span style={{ color: "#e74c3c", fontSize: "0.75rem" }}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                style={{ width: "100%", background: "#00BFA6", color: "#fff", border: "none", padding: "14px", borderRadius: 50, fontWeight: 800, fontSize: "1rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all .2s" }}
                onMouseEnter={e => { e.target.style.background = "#009e8c"; e.target.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.target.style.background = "#00BFA6"; e.target.style.transform = "none"; }}
              >
                Send Message 🚀
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .contact-grid{ grid-template-columns:1fr !important; } }
        @media(max-width:600px){ div{ padding-left:20px !important; padding-right:20px !important; } }
      `}</style>
    </div>
  );
}
