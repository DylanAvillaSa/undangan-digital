// components/AnimateOnScroll.js
"use client";
import { motion } from "framer-motion";

export default function AnimateOnScroll({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  once = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
