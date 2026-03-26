import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import { submitTestimonial } from "@/lib/supabase";

interface FormData {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export default function SubmitTestimonial() {
  const [form, setForm] = useState<FormData>({
    name: "",
    role: "",
    quote: "",
    stars: 5,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.role.trim()) newErrors.role = "Role/company is required";
    if (!form.quote.trim() || form.quote.length < 20)
      newErrors.quote = "Review must be at least 20 characters";
    if (form.stars < 1 || form.stars > 5) newErrors.stars = "Rating must be 1-5 stars";
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
      await submitTestimonial(form);
      setSubmitted(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Submission error:", errorMessage);
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
      <SEO
        title="Leave a Review"
        description="Share your experience with MaiGrowth's link building services. Help other businesses discover our AI-optimized guest posts and link insertions."
      />

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
            SHARE YOUR EXPERIENCE
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
            Leave a Review
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            Your feedback helps other businesses discover the results we deliver.
          </motion.p>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      <section style={{ backgroundColor: "#F7F6F4", padding: "clamp(40px, 8vw, 112px) 0" }}>
        <div className="max-w-2xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                    onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                    data-testid="input-testimonial-name"
                  />
                  {errors.name && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                    Your Role/Company *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., SaaS Founder, Marketing Manager"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                    onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                    data-testid="input-testimonial-role"
                  />
                  {errors.role && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.role}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                    Your Review *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Share your experience with MaiGrowth..."
                    value={form.quote}
                    onChange={(e) => setForm({ ...form, quote: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                    onBlur={(e) => { e.target.style.borderColor = "#E2E0DC"; e.target.style.boxShadow = "none"; }}
                    data-testid="textarea-testimonial"
                  />
                  {errors.quote && <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>{errors.quote}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-3" style={{ color: "#0F0F0F", fontFamily: "DM Sans, sans-serif" }}>
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setForm({ ...form, stars: star })}
                        className="text-3xl transition-transform"
                        style={{ transform: form.stars >= star ? "scale(1.1)" : "scale(1)" }}
                        data-testid={`button-star-${star}`}
                      >
                        {form.stars >= star ? "⭐" : "☆"}
                      </button>
                    ))}
                  </div>
                </div>

                {serverError && (
                  <p className="text-sm text-center" style={{ color: "#EF4444" }}>{serverError}</p>
                )}

                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={submitting}
                  data-testid="button-submit-testimonial"
                  style={{ opacity: submitting ? 0.7 : 1 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,107,53,0.32)", transition: { duration: 0.18 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  {submitting ? "Submitting..." : "Submit Review →"}
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
                  Thank You!
                </h3>
                <p className="mt-3 text-[16px]" style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}>
                  Your review has been submitted and will appear on our site soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
