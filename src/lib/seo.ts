import { BlogPost } from '@/types';
import { Metadata } from 'next';

const siteUrl = 'https://studyglow.blog';

export function generateBlogPostMetadata(post: BlogPost): Metadata {
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
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${siteUrl}${post.image}`],
    },
  };
}

export function generateCategoryMetadata(category: string): Metadata {
  const capCategory = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${capCategory} Posts | Study Glow`,
    description: `Browse all articles, guides, and tips related to ${category}.`,
    openGraph: {
      title: `${capCategory} Posts | Study Glow`,
      description: `Browse all articles, guides, and tips related to ${category}.`,
      url: `${siteUrl}/category/${category.toLowerCase()}`,
    },
  };
}

// JSON-LD Generators
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Study Glow',
    url: siteUrl,
    description: 'Free study planners, motivation tips, and aesthetic inspiration for students.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getBlogPostSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Study Glow',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
