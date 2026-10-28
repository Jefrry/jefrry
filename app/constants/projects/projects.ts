import type { PortfolioProject } from '../../types/projects/project';

// One record supplies both language versions, cards, details and generated routes.
export const PROJECTS: PortfolioProject[] = [
  {
    id: 'test-observatory', category: 'fullstack', technologies: ['Vue', 'TypeScript', 'Go', 'PostgreSQL'], cover: '/assets/projects/observatory.svg',
    content: {
      ru: {
        title: 'Тестовый проект «Обсерватория»', summary: 'Тестовый сервис бронирования сеансов наблюдений с календарём и очередью заявок.',
        description: 'Вымышленный тестовый проект объединяет расписание телескопов и заявки посетителей. Интерфейс показывает свободные сеансы, а сервер проверяет пересечения перед подтверждением бронирования.',
        context: 'Учебный сценарий для небольшой обсерватории: два посетителя могут выбрать одно время. Задача примера — продумать согласованность расписания и понятное сообщение при конфликте. Реального заказчика и коммерческих результатов нет.',
        results: ['В сценарии описаны отмена бронирования и возврат сеанса в расписание.', 'Предусмотрены состояния загрузки, конфликта и недоступного сеанса.'], period: 'Учебный сценарий · 2026',
      },
      en: {
        title: 'Test project “Observatory”', summary: 'A test booking service for observation sessions with a calendar and request queue.',
        description: 'This fictional test project brings telescope schedules and visitor requests together. The interface displays available sessions, while the server checks for overlapping bookings before confirming a reservation.',
        context: 'A learning scenario for a small observatory: two visitors may select the same time. The example explores schedule consistency and clear conflict messages. There is no real client or commercial outcome.',
        results: ['The scenario describes cancellations and returning sessions to the schedule.', 'Loading, conflict and unavailable session states are considered.'], period: 'Learning scenario · 2026',
      },
    },
  },
  {
    id: 'test-atlas', category: 'frontend', technologies: ['Vue', 'TypeScript', 'Tailwind CSS'], cover: '/assets/projects/atlas.svg',
    content: {
      ru: {
        title: 'Тестовый проект «Атлас»', summary: 'Тестовый интерфейс путеводителя с подборками мест и фильтрами маршрутов.',
        description: 'Вымышленный тестовый проект представляет места в виде карточек с короткими маршрутами. Фильтры по длительности и типу прогулки позволяют собрать подходящую подборку без перезагрузки страницы.',
        context: 'Личный эксперимент с адаптивной сеткой, клавиатурной навигацией и состоянием фильтров в адресе. Места и маршруты придуманы для интерфейса и не являются туристическими рекомендациями.',
        results: ['Сценарий включает пустую подборку и сброс фильтров.'],
      },
      en: {
        title: 'Test project “Atlas”', summary: 'A test travel guide interface with place collections and route filters.',
        description: 'This fictional test project presents places as cards with short walking routes. Duration and walk type filters help assemble a suitable collection without reloading the page.',
        context: 'A personal experiment with responsive grids, keyboard navigation and filter state in the URL. Places and routes were invented for the interface and are not travel recommendations.',
        results: ['The scenario includes an empty collection and resetting filters.'],
      },
    },
  },
];
