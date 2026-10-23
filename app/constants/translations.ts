import type { Language } from '~/types/language';

interface Translation {
  title: string;
  description: string;
  navigation: string;
  about: string;
  experience: string;
  contacts: string;
  language: string;
  skip: string;
  backToTop: string;
  authorContacts: string;
  technologies: string;
  mainTechnologies: string;
  deeper: string;
  results: string;
  active: string;
  rare: string;
  used: string;
  skills: string;
  whale: string;
}

export const TRANSLATIONS: Record<Language, Translation> = {
  ru: {
    title: 'Егор Ильин — Fullstack разработчик',
    description: 'Егор Ильин — Fullstack разработчик. Создаю веб-приложения на React, Vue, Go и Node.js. Опыт, навыки и контакты.',
    navigation: 'Основная навигация',
    about: 'Обо мне',
    experience: 'Опыт работы',
    contacts: 'Контакты',
    language: 'Язык',
    skip: 'К содержимому',
    backToTop: 'Вернуться наверх ↑',
    authorContacts: 'Контакты автора',
    technologies: 'Технологии',
    mainTechnologies: 'Основные технологии',
    deeper: 'Глубже — интереснее',
    results: 'Результаты и полный стек',
    active: 'Активно работал: ',
    rare: 'Работал реже: ',
    used: 'Также было на проекте: ',
    skills: 'Технологии и подход',
    whale: 'Синий кит',
  },
  en: {
    title: 'Egor Ilin — Fullstack developer',
    description: 'Egor Ilin — Fullstack developer. I build web applications with React, Vue, Go and Node.js. Experience, skills and contacts.',
    navigation: 'Main navigation',
    about: 'About me',
    experience: 'Work experience',
    contacts: 'Contacts',
    language: 'Language',
    skip: 'Skip to content',
    backToTop: 'Back to top ↑',
    authorContacts: 'Author contacts',
    technologies: 'Technologies',
    mainTechnologies: 'Main technologies',
    deeper: 'More beneath the surface',
    results: 'Achievements and full stack',
    active: 'Used regularly: ',
    rare: 'Used occasionally: ',
    used: 'Also used on the project: ',
    skills: 'Technologies and approach',
    whale: 'Blue whale',
  },
};
