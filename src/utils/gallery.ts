import { GalleryPhoto, GalleryAlbum } from "../types/gallery";

export function transformGalleryResponse(raw: Record<string, unknown>): GalleryAlbum {
  let parsedPhotos: GalleryPhoto[] = [];
  try {
    parsedPhotos =
      typeof raw.photos === "string" ? JSON.parse(raw.photos) : (raw.photos as GalleryPhoto[]) || [];
  } catch {
    parsedPhotos = [];
  }

  const cover = normalizeImageUrl(raw.cover as string);
  const photosWithUrls = parsedPhotos.map((photo) => ({
    ...photo,
    src: normalizeImageUrl(photo.src),
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
