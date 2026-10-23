import type { Experience } from '~/types/experience';
import type { Language } from '~/types/language';

export const EXPERIENCES: readonly Experience[] = [
  {
    "date": "Апрель 2026",
    "current": true,
    "role": "Fullstack developer",
    "company": "NDA",
    "summary": "Автоматизированная банковская система. Единый DSL для MongoDB и PostgreSQL, двухфакторная аутентификация на основе TOTP.",
    "tech": [
      "Vue",
      "TypeScript",
      "Node.js",
      "Koa",
      "MongoDB",
      "Docker"
    ],
    "more": [
      "Разработал единый язык фильтрации для двух типов баз данных.",
      "Повысил безопасность приложения, внедрив TOTP-аутентификацию."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Vue, Vuex, Node.js, Koa, MongoDB, Vite, Docker, Jest, Git, CI/CD, GitLab CI",
    "rare": "PostgreSQL, Bootstrap",
    "used": "Python"
  },
  {
    "date": "Май 2023 — Июль 2025",
    "role": "Fullstack developer",
    "company": "Teseract",
    "summary": "Два React-приложения с нуля, AI-платформа Retell.media и автоматизация новостных сайтов. Архитектура FSD, микрофронтенды и наставничество.",
    "tech": [
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Next.js",
      "FSD"
    ],
    "more": [
      "Разработал с нуля два клиентских приложения на React. Проекты привлекли более 1000 клиентов и инвесторов.",
      "Внедрил уведомления внутри приложения и по email на Go — вовлечённость пользователей выросла на 20%.",
      "Разработал историю биллинга пользователей на frontend и backend.",
      "Объединил два frontend-приложения под одним доменом с помощью микрофронтендов.",
      "Проектировал архитектуру FSD, занимался наставничеством и декомпозицией задач. Точность оценки сроков выросла на 30%.",
      "Оптимизировал сборку и CI/CD — время сборки и выполнения сократилось на 50%."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Go, Gorm, PostgreSQL, Vite, React, Zustand, Next.js, Tailwind, Docker, WebSockets, Jest, Git, CI/CD, GitLab CI, FSD",
    "rare": "RabbitMQ, Redis, Kubernetes",
    "used": "Python, Rust, AWS, WordPress"
  },
  {
    "date": "Май 2022 — Апрель 2023",
    "role": "Vue Frontend developer",
    "company": "Aitu-dala",
    "summary": "B2B-виджеты рекомендаций и панель аналитики. Оптимизация API, A/B-тестирование и временное исполнение роли тимлида.",
    "tech": [
      "Vue",
      "TypeScript",
      "Pinia",
      "Vitest"
    ],
    "more": [
      "Расширил настройку виджетов и мониторинг взаимодействий пользователей.",
      "Временно исполнял роль тимлида; количество интеграций выросло на 40%.",
      "Оптимизировал работу с API через кэширование и сокращение числа запросов — время загрузки уменьшилось на 30%.",
      "Внедрил A/B-тестирование — CTR виджетов вырос на 50%."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Vite, Vue, Vuex, Pinia, WebSockets, Jest, Vitest, Git",
    "rare": "Node.js, Docker, Nuxt, CI/CD, GitLab CI",
    "used": "Python, Rust, Go, PostgreSQL, ClickHouse, RabbitMQ, Redis, Kubernetes"
  },
  {
    "date": "Октябрь 2021 — Март 2022",
    "role": "Vue Frontend developer",
    "company": "CMTT",
    "summary": "Развитие Osnova: vc.ru, TJournal и DTF. Подсайты, авторизация и перенос легаси-кода с PHP на Vue.",
    "tech": [
      "Vue",
      "TypeScript",
      "Vuex",
      "Webpack"
    ],
    "more": [
      "Расширил возможности раздела подсайтов для vc.ru, TJournal и DTF.",
      "Участвовал в переносе легаси-кода с PHP на Vue.",
      "Внедрил удаление пользователей и улучшенную авторизацию. Количество обращений в поддержку снизилось на 20%."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Webpack, Vue, Vuex, Pinia, Jest, Git",
    "rare": "PHP, Node.js",
    "used": "PostgreSQL, CI/CD, GitHub CI"
  },
  {
    "date": "Февраль 2018 — Сентябрь 2021",
    "role": "Junior Frontend developer",
    "company": "Hybrid AI",
    "summary": "Инструменты обучения нейросетей, собственные CMS и CRM. Более 50 интерактивных HTML5/Canvas-баннеров для рекламной платформы.",
    "tech": [
      "JavaScript",
      "Vue",
      "Canvas",
      "Node.js"
    ],
    "more": [
      "Создал приложение сортировки и категоризации контента для обучения нейросетей, которым пользовались более 50 ML-специалистов.",
      "Разработал рекурсивные таблицы на Vue — работа пользователей ускорилась на 25%.",
      "Создал более 50 интерактивных HTML5/Canvas-баннеров на JavaScript для SSP-платформы.",
      "Работал над CMS модерации рекламы, CRM документооборота и лендингом hybrid.ai."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Node.js, Webpack, Gulp, KnockoutJS, Vue, Vuex, Jest, Mocha, Chai, Canvas, Git",
    "rare": "PHP, Bitrix, Nginx",
    "used": "C#, .NET"
  }
];

const ENGLISH_EXPERIENCES: Record<string, Pick<Experience, 'date' | 'summary' | 'more'>> = {
  NDA: {
    date: 'April 2026',
    summary: 'Automated banking system. A unified DSL for MongoDB and PostgreSQL, and TOTP-based two-factor authentication.',
    more: [
      'Developed a unified filtering language for two database types.',
      'Improved application security by implementing TOTP authentication.',
    ],
  },
  Teseract: {
    date: 'May 2023 — July 2025',
    summary: 'Two React applications built from scratch, the Retell.media AI platform and news website automation. FSD architecture, microfrontends and mentoring.',
    more: [
      'Built two React client applications from scratch. The projects attracted over 1,000 customers and investors.',
      'Implemented in-app and email notifications in Go, increasing user engagement by 20%.',
      'Developed user billing history on the frontend and backend.',
      'Combined two frontend applications under one domain using microfrontends.',
      'Designed FSD architecture, mentored developers and broke down tasks. Delivery estimate accuracy increased by 30%.',
      'Optimized builds and CI/CD, reducing build and execution time by 50%.',
    ],
  },
  'Aitu-dala': {
    date: 'May 2022 — April 2023',
    summary: 'B2B recommendation widgets and an analytics dashboard. API optimization, A/B testing and serving as acting team lead.',
    more: [
      'Expanded widget configuration and user interaction monitoring.',
      'Served as acting team lead; the number of integrations increased by 40%.',
      'Optimized API usage through caching and fewer requests, reducing load time by 30%.',
      'Introduced A/B testing, increasing widget CTR by 50%.',
    ],
  },
  CMTT: {
    date: 'October 2021 — March 2022',
    summary: 'Development of Osnova: vc.ru, TJournal and DTF. Subsites, authentication and migrating legacy PHP code to Vue.',
    more: [
      'Expanded the subsites section for vc.ru, TJournal and DTF.',
      'Contributed to migrating legacy PHP code to Vue.',
      'Implemented user deletion and improved authentication. Support requests decreased by 20%.',
    ],
  },
  'Hybrid AI': {
    date: 'February 2018 — September 2021',
    summary: 'Neural network training tools, custom CMS and CRM systems. Over 50 interactive HTML5/Canvas banners for an advertising platform.',
    more: [
      'Created a content sorting and categorization application for neural network training, used by over 50 ML specialists.',
      'Developed recursive tables in Vue, speeding up users’ work by 25%.',
      'Created over 50 interactive HTML5/Canvas banners in JavaScript for an SSP platform.',
      'Worked on an advertising moderation CMS, a document workflow CRM and the hybrid.ai landing page.',
    ],
  },
};

export const LOCALIZED_EXPERIENCES: Record<Language, readonly Experience[]> = {
  ru: EXPERIENCES,
  en: EXPERIENCES.map(experience => ({
    ...experience,
    ...ENGLISH_EXPERIENCES[experience.company],
  })),
};
