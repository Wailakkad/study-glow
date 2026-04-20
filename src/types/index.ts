export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
  image: string;
  author: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
  color: string;
  icon: string;
}
