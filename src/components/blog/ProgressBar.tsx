"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-[60px] md:top-[70px] left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-dark origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
