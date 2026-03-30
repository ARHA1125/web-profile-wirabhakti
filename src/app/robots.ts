import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Adjust if you have protected paths
    },
    sitemap: 'https://wirabhakti.my.id/sitemap.xml',
  };
}
