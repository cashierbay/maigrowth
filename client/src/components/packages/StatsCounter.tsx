import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { end: 500, suffix: "+", label: "Agencies Trust Us" },
  { end: 10000, suffix: "+", label: "Links Placed" },
  { end: 98, suffix: "%", label: "Client Retention" },
  { end: 5600, suffix: "%", label: "Record Traffic Increase" },
];

export default function StatsCounter() {
  return (
    <section className="bg-white py-10 border-b" style={{ borderColor: "#E2E0DC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className="text-4xl font-extrabold mb-1"
                style={{ color: "#FF6B35", fontFamily: "Syne, sans-serif" }}
              >
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
