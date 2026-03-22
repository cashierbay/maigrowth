import { ShieldCheck, Lock, BarChart2, Bot, Banknote } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "100% White-Hat Methods" },
  { icon: Lock, label: "12-Month Link Guarantee" },
  { icon: BarChart2, label: "1,000+ Monthly Traffic Min" },
  { icon: Bot, label: "AI & LLM Optimized" },
  { icon: Banknote, label: "Money-Back Guarantee" },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-8 border-b" style={{ borderColor: "#E2E0DC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2" data-testid={`badge-trust-${label.toLowerCase().replace(/\W+/g, '-')}`}>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#FFF0EB" }}
              >
                <Icon size={14} style={{ color: "#FF6B35" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#0F0F0F" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
