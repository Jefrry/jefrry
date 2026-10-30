import type { Profile } from '~/types/profile/profile';
import type { Language } from '~/types/language/language';

export const PROFILE = {
  name: 'Егор Ильин',
  role: 'Fullstack developer',
  location: 'САМАРА, РОССИЯ / УДАЛЁННО',
  introduction: 'Разработчик веб-приложений для B2B и B2C. Создаю пользовательские интерфейсы на React, Vue и TypeScript, разрабатываю серверную логику на Go и Node.js. Запускаю продукты с нуля и развиваю высоконагруженные сервисы. ',
  technologies: ['React', 'Vue', 'TypeScript', 'Go', 'Node.js', 'PostgreSQL', 'MongoDB'],
  resume: { href: '/assets/egor-ilin-resume.pdf', label: 'Скачать резюме' },
  contacts: [
    { name: 'Telegram', label: '@Jefrry', href: 'https://t.me/Jefrry' },
    { name: 'Почта', label: 'contact@jefrry.dev', href: 'mailto:contact@jefrry.dev' },
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
    introduction: 'Web developer building B2B and B2C applications. I create user interfaces with React, Vue, and TypeScript and develop backend logic with Go and Node.js. I build products from scratch and develop high-load services.',
    technologies: PROFILE.technologies,
    resume: { href: '/assets/egor-ilin-resume.pdf', label: 'Download resume' },
    contacts: [
      { name: 'Telegram', label: '@Jefrry', href: 'https://t.me/Jefrry' },
      { name: 'Email', label: 'contact@jefrry.dev', href: 'mailto:contact@jefrry.dev' },
      { name: 'GitHub', label: 'github.com/Jefrry', href: 'https://github.com/Jefrry' },
    ],
    skills: [
      { title: 'Frontend', lines: ['TypeScript · JavaScript · React · Vue', 'Next.js · Vuex · Pinia · Zustand', 'HTML · CSS · Tailwind · Vite · Webpack'] },
      { title: 'Backend', lines: ['Go · Node.js · Koa · Gorm', 'PostgreSQL · MongoDB · WebSockets', 'Billing · Notifications · Authentication'] },
      { title: 'Engineering practices', lines: ['Docker · Git · CI/CD · GitLab CI', 'Jest · Vitest · Mocha · Chai', 'FSD · SOLID · KISS · DRY · AI agents'] },
    ],
  },
};
