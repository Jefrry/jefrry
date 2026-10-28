import tailwindcss from '@tailwindcss/vite';
import { getPublishedPages } from './app/constants/site/publishedPages';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-22',
  devtools: { enabled: false },
  css: ['@fontsource/manrope/400.css', '@fontsource/manrope/500.css', '@fontsource/manrope/600.css', '~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true },
  imports: { dirs: ['composable/**', 'utils/**'] },
  experimental: { prerenderErrorPages: [404] },
  nitro: { prerender: { routes: getPublishedPages() } },
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
