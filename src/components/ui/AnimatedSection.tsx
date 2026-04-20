"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getVariant = () => {
    switch (direction) {
      case "up":
        return { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
      case "down":
        return { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } };
      case "left":
        return { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } };
      case "right":
        return { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } };
      default:
        return { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
    }
  };

  const variants = getVariant();

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
