"use client";

import { BlogPost } from "@/types";
import BlogCard from "./BlogCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogGridProps {
  posts: BlogPost[];
  showFilters?: boolean;
}

const CATEGORIES = [
  "All Posts",
  "Study Aesthetic",
  "Student Motivation",
  "Study Planners",
  "Study Tips",
  "Productivity",
  "Study Notes"
];

export default function BlogGrid({ posts, showFilters = false }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const INITIAL_COUNT = 9;
  const [visibleCount, setVisibleCount] = useState(showFilters ? INITIAL_COUNT : posts.length);

  // Filter logic
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All Posts" || post.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // If this grid is embedded on the homepage (no filters)
  if (!showFilters) {
    if (!posts || posts.length === 0) return null;
    return (
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-3">
                🌟 Latest from the Blog
              </h2>
              <p className="text-gray-500 max-w-2xl text-lg">
                Fresh insights, free templates, and daily inspiration to keep you on track.
              </p>
            </div>
            <a href="/blog" className="text-primary font-bold hover:text-primary-dark transition-colors inline-block pb-1 border-b-[2px] border-primary/20 hover:border-primary-dark whitespace-nowrap">
              View All Posts →
            </a>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} direction="up" delay={index * 0.1}>
                <BlogCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Interactive Grid for the Blog Listing Page
  return (
    <section className="py-12 bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls: Search and Filter */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          {/* Categories Horizontal Scroll */}
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
            <div className="flex gap-3 min-w-max">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setVisibleCount(INITIAL_COUNT); }}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === category 
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-105" 
                    : "bg-white text-gray-500 border border-gray-200 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-80 relative flex-shrink-0">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(INITIAL_COUNT); }}
              className="w-full pl-12 pr-12 py-3.5 rounded-full border border-gray-200 bg-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm font-medium placeholder:font-normal"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors bg-gray-100 rounded-full p-1"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Posts Grid */}
        <motion.div layout className="min-h-[50vh]">
          <AnimatePresence mode="popLayout">
            {displayedPosts.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <motion.div
                    layout
                    key={post.slug}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Empty State */
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24 text-center px-4"
              >
                <div className="text-7xl mb-6 drop-shadow-md">📚</div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-3">
                  No posts found for this topic yet
                </h3>
                <p className="text-gray-500 text-lg max-w-md">
                  We couldn't find any articles matching your search or filter. Try a different term or browse all posts.
                </p>
                <button 
                  onClick={() => {setActiveCategory("All Posts"); setSearchQuery("");}}
                  className="mt-8 bg-white border-2 border-primary text-primary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination / Load More */}
        {hasMore && displayedPosts.length > 0 && (
          <div className="mt-16 text-center">
            <button 
              onClick={handleLoadMore}
              className="bg-dark text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-black transition-all hover:-translate-y-1"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
