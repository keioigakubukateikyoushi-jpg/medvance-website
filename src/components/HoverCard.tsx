"use client";
import { motion } from "framer-motion";

export default function HoverCard({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
