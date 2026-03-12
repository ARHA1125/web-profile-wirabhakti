import { NewsItem } from "../types/news";
import { transformNewsResponse } from "../utils/news";
import { NEWS_DATA } from "../constants/Index";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

/**
 * Convert static NEWS_DATA item to the API NewsItem shape.
 * The main difference: static id is number, API id is string.
 */
function staticToNewsItem(item: (typeof NEWS_DATA)[number]): NewsItem {
  return {
    ...item,
    id: String(item.id),
  };
}

/**
 * Fetch all published news from the API.
 * Falls back to static NEWS_DATA if the API is unavailable.
 */
export async function getNewsList(): Promise<NewsItem[]> {
  try {
    const res = await fetch(`${API_URL}/administration/news/published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = await res.json();
    return (data as Record<string, unknown>[]).map(transformNewsResponse);
  } catch (error) {
    console.warn("[getNewsList] API unavailable, using static fallback:", error);
    return NEWS_DATA.map(staticToNewsItem);
  }
}

/**
 * Fetch a single news article by slug from the API.
 * Falls back to static NEWS_DATA if the API is unavailable.
 */
export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const res = await fetch(`${API_URL}/administration/news/slug/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = await res.json();
    return transformNewsResponse(data);
  } catch (error) {
    console.warn(`[getNewsBySlug] API unavailable for slug "${slug}", using static fallback:`, error);
    const staticNews = NEWS_DATA.find((n) => n.slug === slug);
    return staticNews ? staticToNewsItem(staticNews) : null;
  }
}

/**
 * Get all news slugs for static generation.
 * Combines API slugs + static slugs to ensure all routes are generated.
 */
export async function getNewsSlugs(): Promise<string[]> {
  const staticSlugs = NEWS_DATA.map((n) => n.slug);

  try {
    const res = await fetch(`${API_URL}/administration/news/published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = (await res.json()) as { slug: string }[];
    const apiSlugs = data.map((n) => n.slug);

    // Merge: API slugs + static slugs (deduplicated)
    return [...new Set([...apiSlugs, ...staticSlugs])];
  } catch {
    return staticSlugs;
  }
}
