"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";

const CATEGORIES = [
  { name: "Study Aesthetic", slug: "study-aesthetic", icon: "🎨", count: 3, colors: "from-pink-100 to-rose-50", text: "text-rose-600", desc: "Build a beautiful workspace." },
  { name: "Student Motivation", slug: "student-motivation", icon: "💪", count: 3, colors: "from-purple-100 to-lavender-50", text: "text-purple-600", desc: "Stay driven and focused." },
  { name: "Study Planners", slug: "study-planners", icon: "📅", count: 1, colors: "from-green-100 to-emerald-50", text: "text-emerald-600", desc: "Organize your academic life." },
  { name: "Study Tips", slug: "study-tips", icon: "💡", count: 3, colors: "from-amber-100 to-yellow-50", text: "text-amber-600", desc: "Science-backed techniques." },
  { name: "Productivity", slug: "productivity", icon: "⚡", count: 2, colors: "from-blue-100 to-indigo-50", text: "text-blue-600", desc: "Get more done in less time." },
  { name: "Study Notes", slug: "study-notes", icon: "📝", count: 1, colors: "from-teal-100 to-cyan-50", text: "text-teal-600", desc: "Aesthetic note-taking systems." },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">
            📚 Browse by Topic
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find exactly what you need to elevate your study sessions and academic performance.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, index) => (
            <AnimatedSection key={cat.name} delay={index * 0.1}>
              <Link href={`/category/${cat.slug}`} className="block h-full">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${cat.colors} rounded-2xl p-8 flex flex-col items-center text-center h-full border border-white/50 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden`}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{cat.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${cat.text}`}>{cat.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{cat.desc}</p>
                  
                  <div className="mt-auto flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                      {cat.count} Posts
                    </span>
                    <span className={`font-bold text-lg ${cat.text}`}>→</span>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
