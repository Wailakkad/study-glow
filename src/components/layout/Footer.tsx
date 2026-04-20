"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Study Tips", path: "/category/study-tips" },
  { name: "Motivation", path: "/category/student-motivation" },
  { name: "Planners", path: "/category/study-planners" },
];

const CATEGORY_LINKS = [
  { name: "Study Aesthetic", path: "/category/study-aesthetic" },
  { name: "Student Motivation", path: "/category/student-motivation" },
  { name: "Study Planners", path: "/category/study-planners" },
  { name: "Study Tips", path: "/category/study-tips" },
  { name: "Productivity", path: "/category/productivity" },
  { name: "Study Notes", path: "/category/study-notes" },
];

const RESOURCE_LINKS = [
  { name: "Free Study Planner", path: "/blog/free-study-planner-printable" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Sitemap", path: "/sitemap.xml" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Column 1 - Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="flex items-center gap-1 group inline-block">
              <span className="font-sans font-light text-2xl tracking-tight text-white">Study</span>
              <span className="font-serif italic font-medium text-3xl text-primary">Glow</span>
              <span className="text-xl ml-0.5">✨</span>
            </Link>
            <p className="text-primary font-medium mt-2">
              Helping students study smarter, not harder
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Your ultimate resource for academic success, beautifully designed planners, and the daily motivation you need to achieve your biggest goals.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Icons Placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group" aria-label="Pinterest">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.102 0 7.304 2.923 7.304 6.837 0 4.08-2.57 7.365-6.141 7.365-1.199 0-2.327-.624-2.712-1.359l-.74 2.818c-.268 1.035-1.002 2.325-1.492 3.116 1.42.435 2.926.671 4.48.671 6.621 0 11.988-5.367 11.988-11.987C24 5.367 18.638 0 12.017 0z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Categories */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-serif text-xl mb-6">Categories</h3>
            <ul className="space-y-3">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-serif text-xl mb-6">Resources</h3>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Study Glow. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1 shadow-sm">
            Made with <span className="text-primary animate-pulse">❤️</span> for students everywhere
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
