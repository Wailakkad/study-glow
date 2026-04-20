import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TableOfContents from "@/components/blog/TableOfContents";
import ProgressBar from "@/components/blog/ProgressBar";
import NewsletterSection from "@/components/home/NewsletterSection";
import BlogCard from "@/components/blog/BlogCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import DownloadButton from "@/components/ui/DownloadButton";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Study Glow`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://studyglow.blog/blog/${post.slug}`,
      images: [{ url: `https://studyglow.blog${post.image || '/images/og-image.jpg'}` }]
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const siteUrl = "https://studyglow.blog";

  // Split content into chunks for AdSense placeholders without mutating DOM string states
  const contentParagraphs = post.content.split('\n\n');
  const part1 = contentParagraphs.slice(0, 3).join('\n\n');
  const part2 = contentParagraphs.slice(3, Math.floor(contentParagraphs.length / 2)).join('\n\n');
  const part3 = contentParagraphs.slice(Math.floor(contentParagraphs.length / 2), contentParagraphs.length - 2).join('\n\n');
  const part4 = contentParagraphs.slice(contentParagraphs.length - 2).join('\n\n');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Organization", "name": post.author },
    "publisher": { "@type": "Organization", "name": "Study Glow" },
    "image": `${siteUrl}${post.image || '/images/og-image.jpg'}`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteUrl}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.category, "item": `${siteUrl}/category/${post.category.toLowerCase().replace(/ /g, '-')}` },
      { "@type": "ListItem", "position": 4, "name": post.title, "item": `${siteUrl}/blog/${post.slug}` }
    ]
  };

  const adPlaceholder = (label: string) => (
    <div className="my-12 flex flex-col justify-center min-h-[250px] bg-gray-50/80 border-[2px] border-dashed border-gray-200 rounded-xl items-center relative overflow-hidden group">
      {/* GOOGLE ADSENSE AD UNIT — Replace with actual ad code after approval */}
      <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">Advertisement</span>
      <span className="text-gray-400 text-xs text-center px-4">({label})<br/>AdSense placeholder block</span>
    </div>
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbSchema} />
      
      <ProgressBar />

      <main className="min-h-screen bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb List */}
          <nav className="flex items-center text-sm font-medium text-gray-500 mb-8 whitespace-nowrap overflow-x-auto pb-2 scrollbar-hide border-b border-gray-100/50">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">›</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="mx-2 text-gray-300">›</span>
            <Link href={`/category/${post.category?.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary transition-colors capitalize">{post.category}</Link>
            <span className="mx-2 text-gray-300">›</span>
            <span className="text-dark font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md" title={post.title}>{post.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
            
            {/* LEFT COLUMN - 70% content */}
            <article className="w-full lg:w-[68%] min-w-0">
              
              <AnimatedSection direction="up" className="mb-10">
                <span className="inline-flex bg-primary/10 text-primary-dark px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  {post.category}
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-dark leading-[1.15] mb-8">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-500 font-medium text-sm md:text-base border-b border-gray-100 pb-8 mb-10">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-serif italic font-bold">
                      {post.author.charAt(0)}
                    </span>
                    <span className="text-dark font-bold text-base">{post.author}</span>
                  </div>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md text-gray-600"><span role="img" aria-label="clock">⏱️</span> {post.readingTime}</span>
                </div>
                
                {/* Hero Image */}
                {post.image ? (
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16 border border-gray-100 bg-secondary/10">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16 border border-gray-100 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex flex-col items-center justify-center">
                    <span className="text-6xl mb-4 font-serif text-primary">✨</span>
                  </div>
                )}
              </AnimatedSection>

              {/* Prose Content Container formatted strictly to guidelines */}
              <AnimatedSection direction="up" delay={0.2} id="article-content" className="prose prose-lg prose-gray max-w-none 
                prose-headings:font-serif prose-headings:text-dark prose-headings:scroll-mt-[100px]
                prose-h2:text-3xl prose-h2:font-extrabold prose-h2:border-b-2 prose-h2:border-primary/30 prose-h2:pb-4 prose-h2:mt-12 prose-h2:mb-8
                prose-h3:font-sans prose-h3:font-bold prose-h3:text-2xl prose-h3:mt-10
                prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:text-dark prose-blockquote:shadow-sm prose-blockquote:italic
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-gray-100 prose-img:mx-auto
                marker:text-primary prose-li:my-2 prose-ul:font-medium text-gray-700
                prose-code:bg-pink-50 prose-code:text-pink-600 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{part1}</ReactMarkdown>
                {adPlaceholder("Top Ad Slot")}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{part2}</ReactMarkdown>
                {adPlaceholder("Middle Ad Slot")}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{part3}</ReactMarkdown>
                {adPlaceholder("Bottom Ad Slot")}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{part4}</ReactMarkdown>
              </AnimatedSection>

              {/* Tags Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-dark font-bold font-serif text-lg mr-2">Tags:</span>
                  {post.tags?.map(tag => (
                    <Link key={tag} href={`/search?q=${tag}`} className="bg-gray-50 border border-gray-200 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors">
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-gray-100 shadow-md">
                <span className="text-xl font-serif font-bold text-dark text-center md:text-left">Loved this study guide? <br className="hidden md:block"/><span className="text-primary font-sans text-base block mt-1">Share it with friends →</span></span>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-initial bg-[#E60023] hover:bg-[#ad081b] text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.102 0 7.304 2.923 7.304 6.837 0 4.08-2.57 7.365-6.141 7.365-1.199 0-2.327-.624-2.712-1.359l-.74 2.818c-.268 1.035-1.002 2.325-1.492 3.116 1.42.435 2.926.671 4.48.671 6.621 0 11.988-5.367 11.988-11.987C24 5.367 18.638 0 12.017 0z"/></svg>
                    Pin it
                  </button>
                  <button className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:-translate-y-1 shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                  <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:-translate-y-1 shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.405 0 .018 5.385.016 12.012c0 2.118.552 4.186 1.603 6.008z"/></svg>
                  </button>
                </div>
              </div>

            </article>

            {/* RIGHT COLUMN - Sticky Sidebar - 32% width */}
            <aside className="w-full lg:w-[32%] relative block">
              <div className="sticky top-28 space-y-10">
                
                <TableOfContents />

                {/* Free Planner CTA */}
                <div className="bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl p-6 border border-rose-200 sticky top-24">
                  <div className="text-3xl mb-3">📥</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 font-serif">
                    Get Your FREE Study Planner
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Download our ultimate weekly study planner template to skyrocket your productivity this semester.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 mb-5">
                    <li className="flex items-center gap-2">
                      <span className="text-rose-400">✓</span> Weekly planner
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-rose-400">✓</span> Monthly calendar
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-rose-400">✓</span> Daily schedule
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-rose-400">✓</span> Habit tracker
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-rose-400">✓</span> Goal setting page
                    </li>
                  </ul>
                  <DownloadButton variant="sidebar" text="Download Free →" />
                  <p className="text-xs text-gray-400 text-center mt-3">
                    ✓ Instant download &nbsp;•&nbsp; ✓ No email needed
                  </p>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-dark text-xl border-b border-gray-100 pb-4 mb-6">
                      You might also like
                    </h3>
                    <div className="space-y-6">
                      {relatedPosts.map(relPost => (
                        <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="group flex gap-4 items-center">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-primary/5 border border-gray-50">
                            <Image src={relPost.image || '/images/og-image.jpg'} alt={relPost.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="font-bold text-dark text-[15px] line-clamp-2 leading-snug group-hover:text-primary transition-colors mb-2 font-serif">{relPost.title}</h4>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">Read more →</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>
            
          </div>
        </div>
      </main>

      {/* BOTTOM FULL WIDTH SECTIONS */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="mb-12">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-4xl font-serif font-bold text-dark mb-2">Continue Reading</h2>
              <Link href="/blog" className="hidden sm:inline-block text-primary font-bold hover:text-primary-dark border-b-[2px] border-primary/20 hover:border-primary-dark pb-1 text-lg">View All Posts →</Link>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3).map((p, idx) => (
                  <AnimatedSection key={p.slug} delay={idx * 0.1}>
                    <BlogCard post={p} />
                  </AnimatedSection>
                ))}
             </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Reusing Newsletter Component */}
      <NewsletterSection />
    </>
  );
}
