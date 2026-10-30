import tailwindcss from '@tailwindcss/vite';
import { getPublishedPages } from './app/constants/site/publishedPages';
import { ARTICLE_ROUTES } from './app/constants/articles/articleRoutes';

const publishedPages = getPublishedPages(ARTICLE_ROUTES);

export default defineNuxtConfig({
  compatibilityDate: '2026-10-22',
  devtools: { enabled: false },
  css: ['@fontsource/manrope/400.css', '@fontsource/manrope/500.css', '@fontsource/manrope/600.css', '~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true },
  imports: { dirs: ['composable/**', 'utils/**'] },
  experimental: { prerenderErrorPages: [404] },
  hooks: {
    'pages:extend'(pages) {
      pages.push(...ARTICLE_ROUTES);
    },
  },
  runtimeConfig: { publishedPages, public: { yandexMetricaId: '' } },
  nitro: { prerender: { routes: [...publishedPages, '/sitemap.xml', '/robots.txt'] } },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      meta: [
        { name: 'theme-color', content: '#1a1e39' },
      ],
      link: [{ rel: 'icon', href: '/assets/whale.png' }],
    },
  },
});
