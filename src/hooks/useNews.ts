import { NewsItem } from "../types/news";
import { transformNewsResponse } from "../utils/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

/**
 * Fetch all published news from the API.
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
    console.warn("[getNewsList] API unavailable:", error);
    return [];
  }
}

/**
 * Fetch a single news article by slug from the API.
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
    console.warn(`[getNewsBySlug] API unavailable for slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get all news slugs for static generation.
 */
export async function getNewsSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${API_URL}/administration/news/published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = (await res.json()) as { slug: string }[];
    return data.map((n) => n.slug);
  } catch {
    return [];
  }
}
