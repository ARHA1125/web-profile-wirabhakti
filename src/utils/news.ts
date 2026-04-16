import { NewsContentBlock, NewsItem } from "../types/news";
import { normalizeMediaUrl } from "./media";

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

  // Normalize image URLs to relative paths (same-origin via nginx proxy)
  const image = normalizeMediaUrl(raw.image as string);
  const contentWithUrls = parsedContent.map((block) => {
    if (block.type === "image" && block.src) {
      return { ...block, src: normalizeMediaUrl(block.src) };
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
