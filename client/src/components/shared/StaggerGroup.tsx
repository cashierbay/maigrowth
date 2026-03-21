import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function StaggerGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  style,
  whileHover,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  whileHover?: Record<string, unknown>;
}) {
  return (
    <motion.div className={className} style={style} variants={item} whileHover={whileHover}>
      {children}
    </motion.div>
  );
}
