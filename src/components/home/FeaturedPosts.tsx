"use client";

import { BlogPost } from "@/types";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">
            ✨ Featured Posts
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Our most popular resources, hand-picked to jumpstart your productivity and academic success this semester.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0, 4).map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full flex flex-col">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-secondary/10 z-0" /> 
                  <Image 
                    src={post.image || '/images/og-image.jpg'} 
                    alt={post.title}
                    fill
                    className="object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent z-10" />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary px-3 py-1 text-xs font-bold text-white rounded-full uppercase tracking-widest backdrop-blur-md shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 leading-tight group-hover:text-primary-light transition-colors drop-shadow-md">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="px-2 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-600 line-clamp-2 md:line-clamp-3 mb-4 leading-relaxed flex-grow">
                    {post.description}
                  </p>
                  <span className="text-primary font-bold text-sm tracking-wide group-hover:text-primary-dark transition-colors flex items-center gap-1 mt-auto">
                    Read More <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
