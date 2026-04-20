import { getAllPosts } from "@/lib/posts";
import { CATEGORIES } from "@/data/categories";
import BlogGrid from "@/components/blog/BlogGrid";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const catData = CATEGORIES.find(c => c.slug === params.category);
  if (!catData) return {};

  return {
    title: `${catData.name} Posts | Study Glow`,
    description: catData.description,
    openGraph: {
      title: `${catData.name} | Study Glow`,
      description: catData.description,
      url: `https://studyglow.blog/category/${catData.slug}`,
      type: "website"
    }
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const catData = CATEGORIES.find(c => c.slug === params.category);
  if (!catData) return notFound();

  // Map category slug to string space match (study-tips -> Study Tips) inside posts filters
  const posts = getAllPosts().filter(p => p.category.toLowerCase().replace(/ /g, '-') === params.category);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://studyglow.blog" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://studyglow.blog/blog" },
      { "@type": "ListItem", "position": 3, "name": catData.name, "item": `https://studyglow.blog/category/${catData.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <JsonLd data={breadcrumbSchema} />
      
      {/* Category Hero Section */}
      <section className={`bg-gradient-to-br ${catData.color} py-20 md:py-32 relative overflow-hidden border-b border-gray-100`}>
        <div className="absolute top-10 md:top-20 right-10 md:right-32 text-[150px] opacity-10 pointer-events-none transform rotate-12 drop-shadow-xl">
          {catData.icon}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up">
            <div className="text-xs font-bold text-dark/70 mb-8 flex items-center justify-center gap-2 tracking-widest uppercase bg-white/40 backdrop-blur-md border border-white/50 w-max mx-auto px-5 py-2 rounded-full shadow-sm">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span className="text-gray-400">›</span>
              <span className="text-primary">{catData.name}</span>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-6 gap-4">
              <span className="text-6xl md:text-7xl drop-shadow-lg mb-2">{catData.icon}</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-extrabold text-dark tracking-tight">
                {catData.name}
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-dark/80 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              {catData.description}
            </p>
            
            <div className="inline-block bg-dark text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider shadow-xl hover:bg-black transition-colors">
              {posts.length} {posts.length === 1 ? 'Article' : 'Articles'} Available
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid of Posts referencing BlogGrid directly */}
      <div className="bg-gray-50 pb-12 pt-4">
        <BlogGrid posts={posts} showFilters={false} />
      </div>
    </div>
  );
}
