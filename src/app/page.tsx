import { getFeaturedPosts, getAllPosts } from "@/lib/posts";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import CategoryGrid from "@/components/home/CategoryGrid";
import BlogGrid from "@/components/blog/BlogGrid";
import NewsletterSection from "@/components/home/NewsletterSection";
import { getWebsiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 6);
  
  const schema = getWebsiteSchema();

  return (
    <>
      <JsonLd data={schema} />
      
      <HeroSection />
      <StatsBar />
      <FeaturedPosts posts={featuredPosts} />
      <CategoryGrid />
      <BlogGrid posts={latestPosts} />
      <NewsletterSection />
    </>
  );
}
