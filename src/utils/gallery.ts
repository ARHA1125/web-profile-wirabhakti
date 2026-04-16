import { GalleryPhoto, GalleryAlbum } from "../types/gallery";
import { normalizeMediaUrl } from "./media";

export function transformGalleryResponse(raw: Record<string, unknown>): GalleryAlbum {
  let parsedPhotos: GalleryPhoto[] = [];
  try {
    parsedPhotos =
      typeof raw.photos === "string" ? JSON.parse(raw.photos) : (raw.photos as GalleryPhoto[]) || [];
  } catch {
    parsedPhotos = [];
  }

  const cover = normalizeMediaUrl(raw.cover as string);
  const photosWithUrls = parsedPhotos.map((photo) => ({
    ...photo,
    src: normalizeMediaUrl(photo.src),
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
