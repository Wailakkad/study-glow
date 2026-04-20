"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadButtonProps {
  variant?: "primary" | "sidebar" | "inline" | "hero" | "banner";
  text?: string;
  className?: string;
}

export default function DownloadButton({ variant = "primary", text = "Download Free Planner", className = "" }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownload = () => {
    if (isLoading || isSuccess) return;
    setIsLoading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/downloads/study-glow-free-planner-2026.pdf";
      link.download = "StudyGlow-Free-Planner-2026.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 600);
  };

  const DownloadIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );

  const Spinner = () => (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </motion.svg>
  );

  const CheckIcon = () => (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </motion.svg>
  );

  const currentText = isLoading ? "Preparing download..." : isSuccess ? "Download Started! ✓" : text;

  // ─── VARIANT: hero ────────────────────────────────────
  if (variant === "hero") {
    return (
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`relative bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg py-5 px-10 rounded-full shadow-xl transition-all flex items-center justify-center gap-3 mx-auto lg:mx-0 ${isSuccess ? "!from-emerald-500 !to-emerald-600" : ""} ${className}`}
      >
        {/* Pulsing glow */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-primary/30 blur-xl -z-10"
        />
        <AnimatePresence mode="wait">
          <motion.span key={isLoading ? "load" : isSuccess ? "done" : "idle"} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-3">
            {isLoading ? <Spinner /> : isSuccess ? <CheckIcon /> : <DownloadIcon />}
            {currentText}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    );
  }

  // ─── VARIANT: sidebar ─────────────────────────────────
  if (variant === "sidebar") {
    return (
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full bg-white text-primary-dark border-2 border-primary font-bold py-4 px-6 rounded-xl shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2.5 ${isSuccess ? "!bg-emerald-500 !text-white !border-emerald-500" : ""} ${className}`}
      >
        <AnimatePresence mode="wait">
          <motion.span key={isLoading ? "load" : isSuccess ? "done" : "idle"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2.5">
            {isLoading ? <Spinner /> : isSuccess ? <CheckIcon /> : <DownloadIcon />}
            {currentText}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    );
  }

  // ─── VARIANT: inline ──────────────────────────────────
  if (variant === "inline") {
    return (
      <motion.button
        onClick={handleDownload}
        whileHover={{ x: 4 }}
        className={`text-primary font-bold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all flex items-center gap-2 ${isSuccess ? "!text-emerald-600 !decoration-emerald-400" : ""} ${className}`}
      >
        {isLoading ? <Spinner /> : isSuccess ? <CheckIcon /> : null}
        {currentText}
        {!isLoading && !isSuccess && <span className="transition-transform group-hover:translate-x-1">→</span>}
      </motion.button>
    );
  }

  // ─── VARIANT: banner ──────────────────────────────────
  if (variant === "banner") {
    return (
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`w-full bg-dark text-white font-bold py-4 px-8 rounded-xl border-l-4 border-primary shadow-lg flex items-center gap-4 hover:bg-dark-dark transition-all ${isSuccess ? "!border-emerald-500" : ""} ${className}`}
      >
        <AnimatePresence mode="wait">
          <motion.span key={isLoading ? "load" : isSuccess ? "done" : "idle"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
            {isLoading ? <Spinner /> : isSuccess ? <CheckIcon /> : <DownloadIcon />}
            {currentText}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    );
  }

  // ─── VARIANT: primary (default) ───────────────────────
  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.02, filter: "brightness(1.05)" }}
      whileTap={{ scale: 0.98 }}
      className={`w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl transition-all flex items-center justify-center gap-3 ${isSuccess ? "!from-emerald-500 !to-emerald-600 !shadow-emerald-200" : ""} ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span key={isLoading ? "load" : isSuccess ? "done" : "idle"} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-3">
          {isLoading ? <Spinner /> : isSuccess ? <CheckIcon /> : <DownloadIcon />}
          {currentText}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
