"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import DownloadButton from "@/components/ui/DownloadButton";

export default function HeroSection() {
  const headline = "Study Smarter, Glow Brighter.";
  const words = headline.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const wordAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-accent via-white to-secondary/30 flex items-center overflow-hidden pt-20">
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-[40px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/25 rounded-full blur-[30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 py-12">
        
        {/* Left Side (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col items-center text-center lg:items-start lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            ✨ Your Study Companion
          </motion.div>

          <motion.h1 
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-dark leading-[1.1] mb-6"
          >
            {words.map((word, index) => (
              <motion.span 
                key={index} 
                variants={wordAnim} 
                className={`inline-block mr-[2%] ${word.includes('Smarter') || word.includes('Brighter') ? 'text-primary' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 font-sans max-w-2xl mb-8 leading-relaxed"
          >
            Free study planners, motivation tips, and aesthetic inspiration for students who are serious about their academic glow up.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
          >
            <DownloadButton variant="hero" text="Get Free Study Planner" />
            <Link 
              href="/blog" 
              className="border-[1.5px] border-primary text-primary font-medium px-8 py-3.5 rounded-full hover:bg-primary/5 transition-all text-center flex items-center justify-center"
            >
              Explore Blog
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm text-gray-500 font-medium flex items-center justify-center lg:justify-start gap-2"
          >
            <span>📌 247K+ monthly views</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>🎓 Helping students worldwide</span>
          </motion.div>
        </div>

        {/* Right Side (40%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-[40%] hidden lg:flex justify-center relative"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-md aspect-[3/4] bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 flex flex-col transform -rotate-3"
          >
            {/* Planner UI Mockup */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <div className="font-serif text-3xl font-bold text-dark">Weekly Plan</div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Week 4</div>
            </div>
            <div className="space-y-5 flex-grow">
              <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-primary" />
                <div className="flex-1 h-2 bg-gray-200 rounded" />
              </div>
              <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 gap-3">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                   <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded max-w-[60%]" />
              </div>
              <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-primary" />
                <div className="flex-1 h-2 bg-gray-200 rounded max-w-[80%]" />
              </div>
              <div className="h-28 bg-primary/5 rounded-xl border border-primary/20 mt-6 p-5 flex flex-col gap-3">
                <div className="w-24 h-2 bg-primary/50 rounded" />
                <div className="w-full h-2 bg-gray-200 rounded" />
                <div className="w-3/4 h-2 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl shadow-xl rounded-full bg-white leading-none p-1">✨</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
