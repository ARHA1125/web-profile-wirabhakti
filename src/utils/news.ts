import { NewsContentBlock, NewsItem } from "../types/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

/**
 * Transform raw API response (content as JSON string) → NewsItem (content as parsed array)
 */
export function transformNewsResponse(raw: Record<string, unknown>): NewsItem {
  let parsedContent: NewsContentBlock[] = [];
  try {
    parsedContent =
      typeof raw.content === "string" ? JSON.parse(raw.content) : (raw.content as NewsContentBlock[]) || [];
  } catch {
    parsedContent = [];
  }

  // Prefix image URLs with API_URL if they are relative paths
  const image = prefixImageUrl(raw.image as string);
  const contentWithUrls = parsedContent.map((block) => {
    if (block.type === "image" && block.src) {
      return { ...block, src: prefixImageUrl(block.src) };
    }
    return block;
  });

  return {
    id: raw.id as string,
    slug: raw.slug as string,
    title: raw.title as string,
    category: raw.category as string,
    date: raw.date as string,
    image,
    excerpt: raw.excerpt as string,
    author: raw.author as string,
    readTime: raw.readTime as string,
    content: contentWithUrls,
  };
}

/**
 * Prefix relative image paths with API base URL
 */
function prefixImageUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("/image/")) return url; // already absolute or local asset
  return `${API_URL}${url}`; // e.g. /img/news/xxx.jpg → http://localhost:3005/img/news/xxx.jpg
}
