import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-22',
  devtools: { enabled: false },
  css: ['@fontsource/manrope/400.css', '@fontsource/manrope/500.css', '@fontsource/manrope/600.css', '~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true },
  experimental: { prerenderErrorPages: [404] },
  nitro: { prerender: { routes: ['/', '/ru/', '/en/'] } },
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
