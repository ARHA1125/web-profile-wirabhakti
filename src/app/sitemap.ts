import { MetadataRoute } from 'next';
import { getNewsSlugs } from '../hooks/useNews';
import { getGallerySlugs } from '../hooks/useGallery';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wirabhakti.my.id';

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/programs',
    '/coach',
    '/location',
    '/news',
    '/gallery'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  try {
     // 2. Dynamic News Routes
     const newsSlugs = await getNewsSlugs();
     const newsRoutes: MetadataRoute.Sitemap = newsSlugs.map((slug) => ({
       url: `${baseUrl}/news/${slug}`,
       lastModified: new Date(),
       changeFrequency: 'daily',
       priority: 0.7,
     }));

     // 3. Dynamic Gallery Routes
     const gallerySlugs = await getGallerySlugs();
     const galleryRoutes: MetadataRoute.Sitemap = gallerySlugs.map((slug) => ({
       url: `${baseUrl}/gallery/${slug}`,
       lastModified: new Date(),
       changeFrequency: 'monthly',
       priority: 0.6,
     }));

     return [...staticRoutes, ...newsRoutes, ...galleryRoutes];
  } catch(error) {
     // Fallback to static if backend fails during build
     return staticRoutes;
  }
}
