import { GalleryAlbum } from "../types/gallery";
import { transformGalleryResponse } from "../utils/gallery";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

/**
 * Fetch all published gallery albums from the API.
 */
export async function getGalleryList(): Promise<GalleryAlbum[]> {
  try {
    const res = await fetch(`${API_URL}/administration/gallery/published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = await res.json();
    return (data as Record<string, unknown>[]).map(transformGalleryResponse);
  } catch (error) {
    console.warn("[getGalleryList] API unavailable:", error);
    return [];
  }
}

/**
 * Fetch a single gallery album by slug from the API.
 */
export async function getGalleryBySlug(slug: string): Promise<GalleryAlbum | null> {
  try {
    const res = await fetch(`${API_URL}/administration/gallery/slug/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = await res.json();
    return transformGalleryResponse(data);
  } catch (error) {
    console.warn(`[getGalleryBySlug] API unavailable for slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get all gallery slugs for static generation.
 */
export async function getGallerySlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${API_URL}/administration/gallery/published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = (await res.json()) as { slug: string }[];
    return data.map((a) => a.slug);
  } catch {
    return [];
  }
}
