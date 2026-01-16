export interface BlogPostCardItem {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface BlogPostCardProps {
  posts: BlogPostCardItem[];
}
