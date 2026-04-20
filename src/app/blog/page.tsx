import { getAllPosts } from "@/lib/posts";
import BlogGrid from "@/components/blog/BlogGrid";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Study Blog — Study Tips, Motivation & Free Planners for Students",
  description: "Browse all study tips, motivation articles, free printable planners, and aesthetic inspiration for students. New posts added weekly."
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://studyglow.blog" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://studyglow.blog/blog" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <JsonLd data={breadcrumbSchema} />
      {/* Header Section */}
      <section className="bg-gradient-to-b from-accent to-secondary/20 py-20 relative overflow-hidden">
        {/* Soft floating background circles */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/20 rounded-full blur-[30px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up">
            <div className="text-sm font-medium text-gray-500 mb-6 flex items-center justify-center gap-2 tracking-wide uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-gray-300">›</span>
              <span className="text-primary font-bold">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-6 tracking-tight">
              📚 The Study Glow Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Study tips, motivation, free planners & aesthetic inspiration for students who are serious about their academic glow up.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Blog Grid with Filters */}
      <BlogGrid posts={allPosts} showFilters={true} />
    </div>
  );
}
