"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto relative z-10">
        
        <motion.div
           animate={{ y: [0, -15, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           className="text-8xl md:text-[180px] font-serif font-black text-primary leading-none mb-6 drop-shadow-xl"
        >
          404
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl mb-10"
        >
          📚
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6 leading-tight"
        >
          Oops! This page went <br className="hidden md:block"/>to study instead
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-lg md:text-xl xl:text-2xl mb-12 font-medium max-w-xl mx-auto"
        >
          The page you&apos;re looking for seems to have taken a study break, moved, or never existed in the first place.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/" className="bg-dark text-white font-bold px-10 py-4 rounded-full hover:bg-black hover:shadow-xl transition-all shadow-lg shadow-dark/20 text-center text-lg hover:-translate-y-1">
            Go Home
          </Link>
          <Link href="/blog" className="bg-primary/5 text-primary-dark font-bold px-10 py-4 rounded-full border border-primary/20 hover:bg-primary/10 transition-all text-center text-lg hover:-translate-y-1 hover:shadow-md">
            Browse Blog
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
