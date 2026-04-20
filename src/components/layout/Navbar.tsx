"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Study Tips", path: "/category/study-tips" },
  { name: "Motivation", path: "/category/student-motivation" },
  { name: "Planners", path: "/free-planner", badge: true },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b-[1px] border-primary/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px] md:h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-sans font-light text-xl tracking-tight text-text">Study</span>
            <span className="font-serif italic font-medium text-2xl text-primary">Glow</span>
            <span className="text-xl ml-0.5 group-hover:scale-110 transition-transform inline-block">✨</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative group py-2"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-primary-dark" : "text-text hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {link.badge && (
                      <span className="text-[10px] bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full font-bold ml-1 uppercase">
                        FREE
                      </span>
                    )}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-b border-primary/20 shadow-lg"
          >
            <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-lg font-medium py-2 border-b border-gray-100 ${
                      isActive ? "text-primary" : "text-text"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
