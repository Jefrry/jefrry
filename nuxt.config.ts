import tailwindcss from '@tailwindcss/vite';
import { PROJECTS } from './app/constants/projects';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-22',
  devtools: { enabled: false },
  css: ['@fontsource/manrope/400.css', '@fontsource/manrope/500.css', '@fontsource/manrope/600.css', '~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true },
  imports: { dirs: ['composable'] },
  experimental: { prerenderErrorPages: [404] },
  nitro: { prerender: { routes: ['/', ...['ru', 'en'].flatMap(language => [
    `/${language}/`,
    `/${language}/projects/`,
    ...PROJECTS.map(project => `/${language}/projects/${project.id}/`),
  ])] } },
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
