import { NewsContentBlock, NewsItem } from "../types/news";

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
  const image = normalizeImageUrl(raw.image as string);
  const contentWithUrls = parsedContent.map((block) => {
    if (block.type === "image" && block.src) {
      return { ...block, src: normalizeImageUrl(block.src) };
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
 * Normalize image URLs to relative paths so they are served same-origin
 * via the nginx /img proxy, avoiding cross-origin OpaqueResponseBlocking.
 */
function normalizeImageUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.startsWith("/image/")) return url;
  if (url.startsWith("/img")) return url;
  if (url.startsWith("http")) {
    try {
      const parsed = new URL(url);
      return parsed.pathname;
    } catch {
      return url;
    }
  }
  return url.startsWith("/") ? url : `/${url}`;
}
