import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://abmar.org.br/sitemap.xml',
    host: 'https://abmar.org.br',
  };
}
