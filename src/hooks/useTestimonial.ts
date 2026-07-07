const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005";

export interface TestimonialItem {
  id: string;
  content: string;
  rating: number;
  parentName: string;
  parentPhoto?: string | null;
  createdAt: string;
}

/**
 * Fetch all approved testimonials from the API.
 */
export async function getTestimonialList(): Promise<TestimonialItem[]> {
  try {
    const res = await fetch(`${API_URL}/administration/testimonials/public`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = await res.json();
    return (data as any[]).map((t) => ({
      id: t.id,
      content: t.content,
      rating: t.rating,
      parentName: t.parent?.user?.fullName || "Orang Tua Siswa",
      parentPhoto: t.parent?.user?.photo_url || null,
      createdAt: t.createdAt,
    }));
  } catch (error) {
    console.warn("[getTestimonialList] API unavailable:", error);
    return [];
  }
}
