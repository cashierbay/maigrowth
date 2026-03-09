import { motion } from "framer-motion";
import { Link } from "wouter";
import { getAllPosts, type PostMeta } from "@/lib/posts";
import { fadeUp, stagger } from "@/lib/animations";

function categoryStyles(color: string) {
  switch (color) {
    case "orange":
      return { backgroundColor: "#FFF0EB", color: "#FF6B35" };
    case "navy":
      return { backgroundColor: "rgba(18,21,61,0.08)", color: "#12153D" };
    case "green":
      return { backgroundColor: "#F0FDF4", color: "#15803d" };
    case "purple":
      return { backgroundColor: "#F5F3FF", color: "#7C3AED" };
    default:
      return { backgroundColor: "#EFEFED", color: "#767676" };
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post }: { post: PostMeta }) {
  const catStyle = categoryStyles(post.categoryColor);
  return (
    <Link href={`/blog/${post.slug}`} data-testid={`link-post-${post.slug}`}>
      <div className="mg-card flex flex-col h-full cursor-pointer group">
        <span
          className="text-[12px] font-semibold px-3 py-1 rounded-full inline-block self-start mb-3"
          style={{ fontFamily: "DM Sans, sans-serif", ...catStyle }}
        >
          {post.category}
        </span>
        <h3
          className="text-xl mb-2 leading-snug transition-colors"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            color: "#0F0F0F",
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </h3>
        <p
          className="text-[14px] leading-relaxed line-clamp-2 flex-1 mb-5"
          style={{ color: "#3D3D3D", fontFamily: "DM Sans, sans-serif" }}
        >
          {post.excerpt}
        </p>
        <div
          className="flex items-center justify-between pt-4 mt-auto"
          style={{ borderTop: "1px solid #E2E0DC" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              {formatDate(post.date)}
            </span>
            <span className="text-xs" style={{ color: "#A8A8A8" }}>·</span>
            <span className="text-xs" style={{ color: "#767676", fontFamily: "DM Sans, sans-serif" }}>
              {post.readTime}
            </span>
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: "#FF6B35", fontFamily: "DM Sans, sans-serif" }}
          >
            Read Article →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <title>Blog — AI Search & Link Building Insights | MaiGrowth</title>

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
            THE MAIGROWTH BLOG
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5.5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Insights for the AI Search Era
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
          >
            Link building, AEO, GEO, and the future of search visibility.
          </motion.p>
        </div>
      </section>

      <div style={{ height: 64, background: "linear-gradient(to bottom, #12153D, #F7F6F4)" }} />

      <section style={{ backgroundColor: "#F7F6F4", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
