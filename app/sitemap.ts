import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://abmar.org.br';
  return ['/', '/sobre-nos', '/ligas-academicas'].map((path) => ({
    url: base + path,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
