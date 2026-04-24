import { MetadataRoute } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studyglow.blog';

  // Get all blog posts
  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Get all category pages
  const categories = getAllCategories();
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/disclaimer',
    '/blog',
    '/free-planner',
    '/blog/senior-year-graduation-guide-2026',
    '/blog/student-council-campaign-poster-ideas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : route === '/free-planner' ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...postUrls, ...categoryUrls];
}
