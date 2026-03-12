// ── News Types ──
// Mirrors the backend News entity structure

export interface NewsContentBlock {
  type: "paragraph" | "heading" | "image" | "quote";
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  author: string;
  readTime: string;
  content: NewsContentBlock[];
}
