import { GalleryAlbum } from "../types/gallery";
import { transformGalleryResponse } from "../utils/gallery";
import { GALLERY_DATA } from "../constants/Index";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

/**
 * Convert static GALLERY_DATA item to the API GalleryAlbum shape.
 * Static id is number, API id is string.
 */
function staticToGalleryAlbum(item: (typeof GALLERY_DATA)[number]): GalleryAlbum {
  return {
    ...item,
    id: String(item.id),
  };
}

/**
 * Fetch all published gallery albums from the API.
 * Falls back to static GALLERY_DATA if the API is unavailable.
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
    console.warn("[getGalleryList] API unavailable, using static fallback:", error);
    return GALLERY_DATA.map(staticToGalleryAlbum);
  }
}

/**
 * Fetch a single gallery album by slug from the API.
 * Falls back to static GALLERY_DATA if the API is unavailable.
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
    console.warn(`[getGalleryBySlug] API unavailable for slug "${slug}", using static fallback:`, error);
    const staticAlbum = GALLERY_DATA.find((a) => a.slug === slug);
    return staticAlbum ? staticToGalleryAlbum(staticAlbum) : null;
  }
}

/**
 * Get all gallery slugs for static generation.
 * Combines API slugs + static slugs.
 */
export async function getGallerySlugs(): Promise<string[]> {
  const staticSlugs = GALLERY_DATA.map((a) => a.slug);

  try {
    const res = await fetch(`${API_URL}/administration/gallery/published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = (await res.json()) as { slug: string }[];
    const apiSlugs = data.map((a) => a.slug);

    return [...new Set([...apiSlugs, ...staticSlugs])];
  } catch {
    return staticSlugs;
  }
}
