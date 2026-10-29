import type { Experience } from '~/types/experience/experience';
import type { Language } from '~/types/language/language';

export const EXPERIENCES: readonly Experience[] = [
  {
    "date": "АПРЕЛЬ 2026",
    "role": "Full-stack developer",
    "company": "NDA",
    "summary": "Автоматизированная банковская система.",
    "tech": [
      "Vue",
      "TypeScript",
      "Node.JS",
      "Koa",
      "MongoDB",
      "Docker"
    ],
    "more": [
      "Разработал единый язык фильтрации данных (DSL) для MongoDB и PostgreSQL, унифицировав формирование запросов к разным типам баз данных.",
      "Повысил безопасность приложения, внедрив двухфакторную аутентификацию (2FA) на основе TOTP."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Vue, Vuex, Node.JS, Koa, MongoDB, Vite, Docker, Jest, Git, Docker, CI/CD, Gitlab CI",
    "rare": "PostgreSQL, Bootstrap",
    "used": "Python"
  },
  {
    "date": "МАЙ 2023 – ИЮЛЬ 2025",
    "role": "Full-stack developer",
    "company": "Teseract",
    "summary": "Платформа на базе искусственного интеллекта для полной автоматизации SEO-контента. Retell.media.\nСервис для автоматизации развертывания новостных сайтов.",
    "tech": [
      "React",
      "TypeScript",
      "Golang",
      "PostgreSQL",
      "Next",
      "FSD"
    ],
    "more": [
      "Разработал с нуля два полнофункциональных клиентских приложений на React от идеи до привлечения 1000+ клиентов и инвесторов.",
      "Внедрил систему уведомлений на GoLang (внутри приложения и на email), что увеличило вовлеченность пользователей на 20%.",
      "Разработал Full-stack функционал истории биллинга пользователей.",
      "Руководство наставничеством младших специалистов, проектирование архитектуры (FSD) фронтенда. Декомпозировал задачи, повысив точность оценки сроков на 30%.",
      "Объединил 2 frontend приложения под одним доменом с помощью micro frontend архитектуры.",
      "Оптимизировал сборку проекта и автоматизацию CI/CD-процессов: сокращение времени сборки и выполнения на 50%."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Golang, Gorm, PostgreSQL, Vite, React, Zustand, Next, Tailwind, Docker, Websockets, Jest, Git, Docker, CI/CD, Gitlab CI, FSD",
    "rare": "RabbitMQ, Redis, Kubernetes",
    "used": "Python, Rust, AWS Amazon, Wordpress"
  },
  {
    "date": "МАЙ 2022 – АПРЕЛЬ 2023",
    "role": "Vue Frontend developer",
    "company": "Aitu-dala",
    "summary": "B2B-виджет для обмена трафиком и рекомендаций новостных статей.\nАдмин панель для гибкой настройки виджета и отображения статистики взаимодействия с ним.\nОбщая автоматизация для проектов компании.",
    "tech": [
      "Vue",
      "TypeScript",
      "Pinia",
      "Vitest"
    ],
    "more": [
      "Расширил функционал для кастомизации виджетов и мониторинга статистики по взаимодействиям пользователей.",
      "Временно исполнял роль тимлида, обеспечив рост числа интеграций на 40%.",
      "Оптимизировал взаимодействие с API (кэширование, сокращение запросов), снизив время загрузки на 30%.",
      "Внедрил A/B тестирования, что привело к повышению CTR виджетов на 50% и увеличило конверсию."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Vite, Vue, Vuex, Pinia, Websockets, Jest, Vitest, Git",
    "rare": "Node.JS, Docker, Nuxt, CI/CD, Gitlab CI",
    "used": "Python, Rust, Golang, PostgreSQL, ClickHouse, RabbitMQ, Redis, Kubernetes"
  },
  {
    "date": "ОКТЯБРЬ 2021 – МАРТ 2022",
    "role": "Vue Frontend developer",
    "company": "CMTT",
    "summary": "Платформа для контентных проектов “Osnova” с аудиторией миллионы пользователей в месяц.",
    "tech": [
      "Vue",
      "TypeScript",
      "Vuex",
      "Webpack"
    ],
    "more": [
      "Расширил функционал раздела подсайтов для vc.ru, TJournal и DTF.",
      "Рефакторинг легаси кода с PHP на Vue.",
      "Внедрил функционал удаления пользователей и улучшенную авторизацию, что снизило количество обращений в саппорт на 20%."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Webpack, Vue, Vuex, Pinia, Jest, Git",
    "rare": "PHP, Node.JS",
    "used": "PostgreSQL, CI/CD, Github CI"
  },
  {
    "date": "ФЕВРАЛЬ 2018 – СЕНТЯБРЬ 2021",
    "role": "Junior Frontend developer",
    "company": "Hybrid AI",
    "summary": "Веб приложение с сортировкой и категоризацией контента для обучения нейросети.\nИнтерактивные рекламные баннеры для полного programmatic цикла.\nСобственное CMS для модерации рекламных объявлений.\nCRM система для автоматизации документооборота.\nЛендинг hybrid.ai",
    "tech": [
      "JavaScript",
      "Vue",
      "Canvas",
      "Node.JS"
    ],
    "more": [
      "Разработал веб приложения с нуля для обучения нейросетей, использовавшееся 50+ ML-специалистами.",
      "Создал гибкий компонент рекурсивных таблиц с использованием Vue, ускорив работу пользователей на 25%.",
      "Создал более 50 интерактивных HTML5/Canvas баннеров на нативном JavaScript для SSP-платформы, охватившие миллионы пользователей по всему миру."
    ],
    "active": "HTML, CSS, JavaScript, TypeScript, Node.JS, Webpack, Gulp, KnockoutJS, Vue, Vuex, Jest, Mocha, Chai, Canvas, Git",
    "rare": "PHP, Bitrix, Nginx",
    "used": "C#, .NET"
  }
];

const ENGLISH_EXPERIENCES: Record<string, Pick<Experience, 'date' | 'summary' | 'more'>> = {
  "NDA": {
    "date": "APRIL 2026",
    "summary": "Automated banking system.",
    "more": [
      "Developed a unified data filtering language (DSL) for MongoDB and PostgreSQL, unifying query construction for different types of databases.",
      "Improved application security by implementing two-factor authentication (2FA) based on TOTP."
    ]
  },
  "Teseract": {
    "date": "MAY 2023 – JULY 2025",
    "summary": "An artificial intelligence platform for fully automating SEO content. Retell.media.\nA service for automating the deployment of news websites.",
    "more": [
      "Developed two fully functional React client applications from scratch, from the idea to attracting 1000+ clients and investors.",
      "Implemented a notification system in GoLang (in-app and email), which increased user engagement by 20%.",
      "Developed full-stack functionality for user billing history.",
      "Led the mentoring of junior specialists and designed the frontend architecture (FSD). Broke down tasks, improving the accuracy of time estimates by 30%.",
      "Combined 2 frontend applications under one domain using micro frontend architecture.",
      "Optimized project builds and the automation of CI/CD processes: reduced build and execution time by 50%."
    ]
  },
  "Aitu-dala": {
    "date": "MAY 2022 – APRIL 2023",
    "summary": "A B2B widget for exchanging traffic and recommending news articles.\nAn admin panel for flexible widget configuration and displaying interaction statistics.\nGeneral automation for the company’s projects.",
    "more": [
      "Expanded functionality for widget customization and monitoring user interaction statistics.",
      "Temporarily served as team lead, ensuring a 40% increase in the number of integrations.",
      "Optimized API interaction (caching, reducing requests), reducing loading time by 30%.",
      "Introduced A/B testing, which led to a 50% increase in widget CTR and increased conversion."
    ]
  },
  "CMTT": {
    "date": "OCTOBER 2021 – MARCH 2022",
    "summary": "The “Osnova” platform for content projects, with an audience of millions of users per month.",
    "more": [
      "Expanded the functionality of the subsites section for vc.ru, TJournal and DTF.",
      "Refactored legacy code from PHP to Vue.",
      "Implemented user deletion functionality and improved authentication, which reduced the number of support requests by 20%."
    ]
  },
  "Hybrid AI": {
    "date": "FEBRUARY 2018 – SEPTEMBER 2021",
    "summary": "A web application with content sorting and categorization for neural network training.\nInteractive advertising banners for the full programmatic cycle.\nAn in-house CMS for moderating advertisements.\nA CRM system for automating document workflows.\nThe hybrid.ai landing page",
    "more": [
      "Developed web applications from scratch for neural network training, used by 50+ ML specialists.",
      "Created a flexible recursive table component using Vue, speeding up users’ work by 25%.",
      "Created more than 50 interactive HTML5/Canvas banners in native JavaScript for an SSP platform, reaching millions of users worldwide."
    ]
  }
};

export const LOCALIZED_EXPERIENCES: Record<Language, readonly Experience[]> = {
  ru: EXPERIENCES,
  en: EXPERIENCES.map(experience => ({
    ...experience,
    ...ENGLISH_EXPERIENCES[experience.company],
  })),
};
