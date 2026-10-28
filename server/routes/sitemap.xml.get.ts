import { SITE_ORIGIN } from '../../app/constants/site/site';

export default defineEventHandler(event => {
  const { publishedPages } = useRuntimeConfig(event);
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  const urls = publishedPages.map(path => `<url><loc>${SITE_ORIGIN}${path}</loc></url>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
});
