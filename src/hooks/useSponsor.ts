import { Sponsor } from "../types/sponsor";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

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

/**
 * Transform raw API sponsor → Sponsor with normalized logo URL
 */
function transformSponsor(raw: Record<string, unknown>): Sponsor {
  return {
    id: raw.id as string,
    name: raw.name as string,
    logoUrl: normalizeImageUrl(raw.logoUrl as string),
  };
}

/**
 * Fetch all sponsors from the API.
 * Falls back to static partner data if the API is unavailable.
 */
export async function getSponsorList(): Promise<Sponsor[]> {
  try {
    const res = await fetch(`${API_URL}/administration/sponsors/public`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = await res.json();
    const sponsors = (data as Record<string, unknown>[]).map(transformSponsor);
    // Only return sponsors that have a logo
    return sponsors.filter((s) => s.logoUrl);
  } catch (error) {
    console.warn("[getSponsorList] API unavailable, using static fallback:", error);
    return [];
  }
}

