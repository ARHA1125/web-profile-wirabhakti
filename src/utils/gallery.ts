import { GalleryPhoto, GalleryAlbum } from "../types/gallery";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

/**
 * Transform raw API response (photos as JSON string) → GalleryAlbum (photos as parsed array)
 */
export function transformGalleryResponse(raw: Record<string, unknown>): GalleryAlbum {
  let parsedPhotos: GalleryPhoto[] = [];
  try {
    parsedPhotos =
      typeof raw.photos === "string" ? JSON.parse(raw.photos) : (raw.photos as GalleryPhoto[]) || [];
  } catch {
    parsedPhotos = [];
  }

  const cover = prefixImageUrl(raw.cover as string);
  const photosWithUrls = parsedPhotos.map((photo) => ({
    ...photo,
    src: prefixImageUrl(photo.src),
  }));

  return {
    id: raw.id as string,
    slug: raw.slug as string,
    title: raw.title as string,
    category: raw.category as string,
    date: raw.date as string,
    cover,
    description: raw.description as string,
    photos: photosWithUrls,
  };
}

/**
 * Prefix relative image paths with API base URL
 */
function prefixImageUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("/image/")) return url;
  return `${API_URL}${url}`;
}
