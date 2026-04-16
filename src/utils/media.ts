export function normalizeMediaUrl(url: string | undefined): string {
  if (!url) return "";

  if (url.startsWith("/image/")) return url;
  if (url.startsWith("/media/")) return url;
  if (url.startsWith("/img/")) return `/media${url}`;

  if (url.startsWith("http")) {
    try {
      const parsed = new URL(url);
      return parsed.pathname.startsWith("/img/") ? `/media${parsed.pathname}` : parsed.pathname;
    } catch {
      return url;
    }
  }

  return url.startsWith("/") ? url : `/${url}`;
}
