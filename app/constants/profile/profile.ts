import type { Profile } from '~/types/profile/profile';
import type { Language } from '~/types/language/language';

export const PROFILE = {
  name: 'Егор Ильин',
  role: 'Fullstack developer',
  location: 'САМАРА, РОССИЯ / УДАЛЁННО',
  introduction: 'Создаю веб-приложения — от первого интерфейса до серверной логики. Погружаюсь в задачу, нахожу суть и довожу до работающего продукта.',
  technologies: ['React', 'Vue', 'TypeScript', 'Go', 'Node.js', 'PostgreSQL'],
  resume: { href: '/assets/egor-ilin-resume.pdf', label: 'Резюме в PDF · на русском' },
  contacts: [
    { name: 'Telegram', label: '@Jefrry', href: 'https://t.me/Jefrry' },
    { name: 'Почта', label: 'skeetch2010@gmail.com', href: 'mailto:skeetch2010@gmail.com' },
    { name: 'GitHub', label: 'github.com/Jefrry', href: 'https://github.com/Jefrry' },
  ],
  skills: [
    { title: 'Frontend', lines: ['TypeScript · JavaScript · React · Vue', 'Next.js · Vuex · Pinia · Zustand', 'HTML · CSS · Tailwind · Vite · Webpack'] },
    { title: 'Backend', lines: ['Go · Node.js · Koa · Gorm', 'PostgreSQL · MongoDB · WebSockets', 'Биллинг · Уведомления · Аутентификация'] },
    { title: 'Инженерная практика', lines: ['Docker · Git · CI/CD · GitLab CI', 'Jest · Vitest · Mocha · Chai', 'FSD · SOLID · KISS · DRY · AI-агенты'] },
  ],
} as const satisfies Profile;

export const PROFILES: Record<Language, Profile> = {
  ru: PROFILE,
  en: {
    name: 'Egor Ilin',
    role: 'Fullstack developer',
    location: 'SAMARA, RUSSIA / REMOTE',
    introduction: 'I build web applications — from the first interface to server-side logic. I explore the problem, find what matters and turn it into a working product.',
    technologies: PROFILE.technologies,
    resume: { href: '/assets/egor-ilin-resume.pdf', label: 'Résumé in PDF · in Russian' },
    contacts: [
      { name: 'Telegram', label: '@Jefrry', href: 'https://t.me/Jefrry' },
      { name: 'Email', label: 'skeetch2010@gmail.com', href: 'mailto:skeetch2010@gmail.com' },
      { name: 'GitHub', label: 'github.com/Jefrry', href: 'https://github.com/Jefrry' },
    ],
    skills: [
      { title: 'Frontend', lines: ['TypeScript · JavaScript · React · Vue', 'Next.js · Vuex · Pinia · Zustand', 'HTML · CSS · Tailwind · Vite · Webpack'] },
      { title: 'Backend', lines: ['Go · Node.js · Koa · Gorm', 'PostgreSQL · MongoDB · WebSockets', 'Billing · Notifications · Authentication'] },
      { title: 'Engineering practices', lines: ['Docker · Git · CI/CD · GitLab CI', 'Jest · Vitest · Mocha · Chai', 'FSD · SOLID · KISS · DRY · AI agents'] },
    ],
  },
};
