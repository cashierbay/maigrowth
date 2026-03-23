"use client"

import { motion, MotionProps, HTMLMotionProps } from "framer-motion"
import { ReactNode } from "react"

interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function StaggerGroup({ children, className = "", ...props }: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "", style, ...props }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  )
}
