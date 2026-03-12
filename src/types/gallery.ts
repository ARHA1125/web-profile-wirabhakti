// ── Gallery Types ──
// Mirrors the backend Gallery entity structure

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryAlbum {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  cover: string;
  description: string;
  photos: GalleryPhoto[];
}
