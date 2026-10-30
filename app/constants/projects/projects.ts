import type { PortfolioProject } from '../../types/projects/project';

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'yandex-praktikum-chat',
    technologies: ['TypeScript', 'Webpack', 'PostCSS', 'WebSocket', 'Docker', 'nginx', 'Mocha', 'Chai'],
    externalUrl: 'https://github.com/Jefrry/mf.messenger.praktikum.yandex',
    content: {
      ru: {
        title: 'Yandex Praktikum Chat — чат на TypeScript',
        summary: 'Учебный чат на TypeScript для Яндекс.Практикума: SPA с hash-навигацией, шаблонизатором и обменом данными по HTTP и WebSocket.',
        description: 'Yandex Praktikum Chat — учебный чат на TypeScript для Яндекс.Практикума. Приложение включает шаблонизатор, EventBus, роутер с hash-навигацией, HTTPTransport и контроллеры для работы с HTTP и WebSocket.',
        context: 'Проект построен как SPA: компоненты страниц основаны на базовом компоненте Block и содержат собственные шаблоны и логику. В README описаны сборка с Webpack и развёртывание в Heroku с помощью Docker и nginx.',
        results: [
          'Шаблонизация и обмен событиями через EventBus.',
          'SPA-навигация с hash-маршрутами вида localhost/#/mypage.',
          'Обмен данными по HTTP и WebSocket через HTTPTransport и контроллеры.',
          'Компоненты страниц на основе базового компонента Block.',
          'Сборка приложения с Webpack.',
          'Развёртывание в Heroku с помощью Docker и nginx.',
          'Precommit и вспомогательные утилиты.',
        ],
      },
      en: {
        title: 'Yandex Praktikum Chat — TypeScript chat app',
        summary: 'A TypeScript chat project for Yandex.Practicum: a single-page app with hash routing, a template engine, and HTTP and WebSocket communication.',
        description: 'Yandex Praktikum Chat is a TypeScript chat app built for Yandex.Practicum. It includes a template engine, EventBus, a hash-based router, HTTPTransport, and controllers for HTTP and WebSocket communication.',
        context: 'The project is a single-page application. Page components extend the base Block component and provide their own templates and logic. The README covers building with Webpack and deploying to Heroku using Docker and nginx.',
        results: [
          'Templating and event handling through EventBus.',
          'Single-page navigation with hash routes such as localhost/#/mypage.',
          'HTTP and WebSocket communication through HTTPTransport and controllers.',
          'Page components based on the base Block component.',
          'Application builds with Webpack.',
          'Heroku deployment using Docker and nginx.',
          'Precommit and supporting utilities.',
        ],
      },
    },
  },
  {
    id: 'yaporto-rpg',
    technologies: ['ReactJS', 'Redux', 'TypeScript', 'Jest', 'PostgreSQL', 'SSR', 'ServiceWorker', 'Docker', 'Nginx'],
    externalUrl: 'https://github.com/ya-porto/Yaporto-rpg',
    content: {
      ru: {
        title: 'Yaporto RPG — игра в жанре 2D action RPG',
        summary: 'Yaporto RPG — игра в жанре 2D action RPG на React и TypeScript: сражения с монстрами и итоговые очки, зависящие от времени прохождения уровня.',
        description: 'Yaporto RPG — игра в жанре 2D action RPG. Задача игрока — уничтожать монстров как можно быстрее: время прохождения уровня влияет на итоговое количество очков.',
        context: 'Проект создан в рамках командного модуля курса Яндекс.Практикума «Мидл фронтенд-разработчик». В стеке используются React, Redux и TypeScript.',
      },
      en: {
        title: 'Yaporto RPG — 2D action RPG game',
        summary: 'Yaporto RPG is a 2D action RPG built with React and TypeScript, featuring monster battles and a final score influenced by level completion time.',
        description: 'Yaporto RPG is a 2D action RPG game. Players must defeat monsters as quickly as possible: the time taken to complete a level affects the final score.',
        context: 'The project was created during the team module of the Yandex.Practicum “Middle Frontend Developer” course. Its stack includes React, Redux, and TypeScript.',
      },
    },
  },
  {
    id: 'typing-cat-obsidian',
    technologies: ['Obsidian', 'TypeScript', 'esbuild'],
    cover: '/assets/projects/typing-cat-obsidian.png',
    externalUrl: 'https://github.com/Jefrry/obsidian-typing-cat',
    content: {
      ru: {
        title: 'Typing Cat — плагин для Obsidian с печатающим котом',
        coverAlt: 'Белый кот с сердечком и индикатором скорости печати на фоне кристаллов Obsidian',
        summary: 'Typing Cat — плагин для Obsidian с котом, который печатает вместе с вами, и отслеживанием скорости в словах и символах в минуту или символах в секунду.',
        description: 'Typing Cat — плагин для Obsidian с печатающим котом, который составляет компанию во время работы с текстом и отслеживает скорость печати.',
        context: 'После включения кот появляется поверх окна Obsidian и двигает лапами в ритме печати в любом редакторе. Если отображение скорости включено, текущая скорость выводится под котом. Плагин предназначен для настольных компьютеров.',
        results: [
          'Анимация кота поверх интерфейса в ритме печати в реальном времени.',
          'Отслеживание скорости в WPM (слова в минуту), CPM (символы в минуту) и CPS (символы в секунду).',
          'Визуальная обратная связь: кот «потеет» при интенсивной печати и показывает сердечко при нажатии.',
          'Настройка отступов слева и снизу в процентах.',
          'Настройка размера и прозрачности.',
          'Зеркальное отражение кота.',
          'Включение и отключение отображения скорости, выбор метрики.',
          'Размещение кота на экране настольного компьютера без помех для работы.',
        ],
      },
      en: {
        title: 'Typing Cat — Obsidian typing cat plugin',
        coverAlt: 'White cat with a heart and a typing speed indicator against Obsidian crystals',
        summary: 'Typing Cat is an Obsidian plugin with a cat that types along with you and tracks typing speed in words or characters per minute, or characters per second.',
        description: 'Typing Cat is an Obsidian plugin with a typing cat that keeps you company while you write and tracks your typing speed.',
        context: 'Once enabled, the cat appears over the Obsidian window and moves its paws in time with your typing in any editor. When the speed display is enabled, your current typing speed appears below the cat. The plugin is designed for desktop use.',
        results: [
          'A cat overlay animated in time with your typing in real time.',
          'Typing speed tracking in WPM (words per minute), CPM (characters per minute), and CPS (characters per second).',
          'Visual feedback: the cat “sweats” during intense typing and shows a heart when clicked.',
          'Position settings with left and bottom offsets in percentages.',
          'Size and opacity settings.',
          'Mirrored cat orientation.',
          'Speed display toggle and metric selection.',
          'Desktop overlay placement that keeps the cat visible without disrupting work.',
        ],
      },
    },
  },
  {
    // Source: https://github.com/Jefrry/obsidian-em-dash-replace/blob/main/README.md
    id: 'em-dash-replace-obsidian',
    technologies: ['Obsidian', 'TypeScript', 'esbuild'],
    externalUrl: 'https://github.com/Jefrry/obsidian-em-dash-replace',
    content: {
      ru: {
        title: 'Em Dash Replace — плагин для замены дефисов в Obsidian',
        summary: 'Em Dash Replace — плагин для Obsidian, который заменяет пробел и два дефиса на длинное тире при печати. Работает на компьютерах и мобильных устройствах.',
        description: 'Em Dash Replace — плагин для Obsidian, который автоматически заменяет пробел и два дефиса ( --) на длинное тире (—) во время печати.',
        context: 'Для замены достаточно ввести пробел и два дефиса ( --). В блоках кода и встроенном коде замена не выполняется, чтобы сохранить форматирование. Плагин работает на настольных компьютерах и мобильных устройствах.',
        results: [
          'Автоматическая замена пробела и двух дефисов ( --) на длинное тире (—) во время печати.',
          'Сохранение дефисов внутри блоков кода и встроенного кода.',
          'Поддержка настольных компьютеров и мобильных устройств.',
        ],
      },
      en: {
        title: 'Em Dash Replace — Obsidian dash replacement plugin',
        summary: 'Em Dash Replace is an Obsidian plugin that converts a space and two hyphens to an em dash as you type. Available on desktop and mobile.',
        description: 'Em Dash Replace is an Obsidian plugin that automatically replaces a space followed by two hyphens ( --) with an em dash (—) as you type.',
        context: 'To trigger a replacement, type a space followed by two hyphens ( --). The plugin leaves hyphens unchanged inside code blocks and inline code to preserve formatting. It works on desktop and mobile devices.',
        results: [
          'Automatic replacement of a space and two hyphens ( --) with an em dash (—) while typing.',
          'Preservation of hyphens inside code blocks and inline code.',
          'Desktop and mobile support.',
        ],
      },
    },
  },
  {
    id: 'project-gameface',
    technologies: ['Python', 'MediaPipe', 'PyInstaller'],
    cover: '/assets/projects/project-gameface.jpg',
    externalUrl: 'https://github.com/Jefrry/project-gameface',
    content: {
      ru: {
        title: 'Project Gameface — управление курсором движениями головы и мимикой',
        coverAlt: 'Схематическое лицо рядом с монитором и компьютерной мышью',
        summary: 'Project Gameface — приложение для Windows, которое позволяет управлять курсором в играх движениями головы и назначать действия мыши и клавиатуры мимике.',
        description: 'Project Gameface — приложение для Windows, которое помогает игрокам управлять курсором мыши с помощью движений головы и мимики.',
        context: 'Приложение предназначено для людей, которые выбирают управление движениями головы и мимикой в играх. Для распознавания используется MediaPipe Face Landmark Detection API.',
        results: [
          'Управление курсором мыши в играх.',
          'Настройка скорости курсора в каждом направлении и плавности движения.',
          'Ускорение курсора при быстрых движениях головы.',
          'Назначение действий мыши и клавиатуры выражениям лица.',
          'Настройка порога срабатывания и режима действия: одиночное или удержание.',
        ],
      },
      en: {
        title: 'Project Gameface — head and facial gesture cursor control',
        coverAlt: 'Stylized face beside a monitor and computer mouse',
        summary: 'Project Gameface is a Windows app for controlling the cursor in games with head movements and assigning mouse and keyboard actions to facial gestures.',
        description: 'Project Gameface is a Windows application that helps gamers control the mouse cursor using head movements and facial gestures.',
        context: 'The application is designed for people who choose head movements and facial gestures to control games. It uses the MediaPipe Face Landmark Detection API for detection.',
        results: [
          'Mouse cursor control in games.',
          'Cursor speed settings for each direction and movement smoothing.',
          'Cursor acceleration during fast head movements.',
          'Mouse and keyboard action bindings for facial expressions.',
          'Trigger threshold settings and single-action or hold modes.',
        ],
      },
    },
  },
];
