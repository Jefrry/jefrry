import type { Article } from '../../types/articles/article';

export const ARTICLES: Article[] = [
  {
    id: 'test-first-note',
    date: '2026-10-28',
    content: {
      ru: {
        title: 'Тестовая статья: первая заметка',
        description: 'Тестовая заготовка заметки о работе над небольшим интерфейсом. Содержание и дата приведены для примера.',
        sections: [
          {
            heading: 'От задачи к интерфейсу',
            paragraphs: [
              'Это тестовый текст для проверки раздела статей, а не описание реального проекта. В примере мы начинаем с одного действия: посетитель должен найти нужную запись и открыть её подробности.',
              'Сначала полезно выписать содержимое карточки и страницы. Так становится понятно, какие данные нужны в обоих представлениях и что можно хранить в одной записи.',
            ],
          },
          {
            heading: 'Проверка результата',
            paragraphs: [
              'В этом вымышленном примере мы проверяем прямой адрес, переход назад и смену языка. Затем открываем страницу на узком экране и проходим ссылки с клавиатуры.',
              'Перед публикацией замените название, описание, дату и этот текст своей статьёй. Обе языковые версии используют один постоянный идентификатор.',
            ],
          },
        ],
      },
      en: {
        title: 'Test article: a first note',
        description: 'A test draft about building a small interface. The content and date are examples.',
        sections: [
          {
            heading: 'From a task to an interface',
            paragraphs: [
              'This is test content for checking the articles section, rather than a real project report. The example starts with a single action: a visitor needs to find an entry and open its details.',
              'Listing the content of the card and detail page first helps identify the data shared by both views and keep it in one record.',
            ],
          },
          {
            heading: 'Checking the result',
            paragraphs: [
              'In this fictional example, we check the direct address, the return link and language switching. We then open the page on a narrow screen and follow its links using the keyboard.',
              'Before publishing, replace the title, description, date and this text with your own article. Both language versions share one stable identifier.',
            ],
          },
        ],
      },
    },
  },
];
