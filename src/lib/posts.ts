import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, Category } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export function getAllPosts(): BlogPost[] {
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Could not read posts directory", error);
    return [];
  }

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        content: matterResult.content,
        // matterResult.data includes the frontmatter
        ...matterResult.data,
      } as BlogPost;
    });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured === true);
}

export function getAllCategories(): Category[] {
  const allPosts = getAllPosts();
  const categoryCount: { [key: string]: number } = {};
  
  allPosts.forEach((post) => {
    if (post.category) {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
    }
  });

  return Object.keys(categoryCount).map((cat) => ({
    name: cat,
    slug: cat.toLowerCase().replace(/\s+/g, '-'),
    description: `All posts related to ${cat}`,
    count: categoryCount[cat],
    color: '#E8A4B8', // Default primary color based on theme
    icon: 'folder', // Default icon
  }));
}

export function getRelatedPosts(slug: string, category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.slug !== slug && post.category?.toLowerCase() === category?.toLowerCase())
    .slice(0, 3);
}
