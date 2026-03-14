import { Sponsor } from "../types/sponsor";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

/**
 * Prefix relative image paths with API base URL
 */
function prefixImageUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("/image/")) return url;
  return `${API_URL}${url}`;
}

/**
 * Transform raw API sponsor → Sponsor with prefixed logo URL
 */
function transformSponsor(raw: Record<string, unknown>): Sponsor {
  return {
    id: raw.id as string,
    name: raw.name as string,
    logoUrl: prefixImageUrl(raw.logoUrl as string),
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
