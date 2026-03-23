import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Globe2, Clock, CheckCircle2, Linkedin, Twitter } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { submitContact } from "@/lib/supabase";

const serviceOptions = [
  "Guest Posts",
  "Link Insertions",
  "Full Campaign Package (Both)",
  "Not Sure Yet",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.message.trim()) newErrors.message = "Please tell us about your goals";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    try {
      await submitContact(form);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setServerError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E0DC",
    borderRadius: 12,
    padding: "12px 16px",
    color: "#0F0F0F",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 15,
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const inputFocus = {
    borderColor: "#FF6B35",
    boxShadow: "0 0 0 3px rgba(255,107,53,0.1)",
  };

  return (
    <>
      <title>Free Strategy Call — MaiGrowth</title>

      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          backgroundColor: "#12153D",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "160px 24px 100px",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] block mb-6"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 62px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Let's Build Your Link Strategy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            Tell us about your website and goals. We will recommend the right service and package for your situation.
          </motion.p>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      <section style={{ backgroundColor: "#F7F6F4", padding: "112px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                          onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                          data-testid="input-name"
                        />
                        {errors.name && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                          onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                          data-testid="input-email"
                        />
                        {errors.email && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your company"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                          onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                          data-testid="input-company"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                          Website URL
                        </label>
                        <input
                          type="text"
                          placeholder="https://yourwebsite.com"
                          value={form.website}
                          onChange={(e) => setForm({ ...form, website: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                          onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                          data-testid="input-website"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                        Service Interested In
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                        onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                        onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                        data-testid="select-service"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                        Tell Us About Your Goals *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your website, current situation, and what you want to achieve..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: "vertical" }}
                        onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                        onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                        data-testid="textarea-message"
                      />
                      {errors.message && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.message}</p>}
                    </div>

                    {serverError && (
                      <p className="text-sm text-center" style={{ color: "#EF4444" }}>{serverError}</p>
                    )}

                    <motion.button
                      type="submit"
                      className="btn-primary w-full justify-center"
                      disabled={submitting}
                      data-testid="button-submit-contact"
                      style={{ opacity: submitting ? 0.7 : 1 }}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)", transition: { duration: 0.18 } }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {submitting ? "Sending..." : "Send Message →"}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 size={72} style={{ color: "#FF6B35" }} />
                    </motion.div>
                    <h3
                      className="mt-6 text-2xl"
                      style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-[16px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                      We'll reply within 24 business hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="space-y-6"
              >
                <motion.div variants={fadeUp} className="mg-card">
                  <h3
                    className="text-lg mb-5"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, text: "contact@maigrowth.com" },
                      { icon: Globe2, text: "Remote · Global · Worldwide" },
                      { icon: Clock, text: "Within 24 business hours" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <Icon size={18} style={{ color: "#FF6B35", flexShrink: 0 }} />
                        <span className="text-[15px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mg-card">
                  <h3
                    className="text-lg mb-5"
                    style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#0F0F0F" }}
                  >
                    What You Get
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Free consultation — no cost",
                      "No commitment required",
                      "Expert visibility analysis",
                      "Clear, actionable roadmap",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={16} style={{ color: "#FF6B35", flexShrink: 0 }} />
                        <span className="text-[14px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-5 pt-5 flex items-center gap-4"
                    style={{ borderTop: "1px solid #E2E0DC" }}
                  >
                    <a href="#" aria-label="LinkedIn">
                      <Linkedin size={18} style={{ color: "#767676" }} />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <Twitter size={18} style={{ color: "#767676" }} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
