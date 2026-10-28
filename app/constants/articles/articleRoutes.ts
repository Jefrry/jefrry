import type { NuxtPage } from 'nuxt/schema';

export const ARTICLE_ROUTES: (NuxtPage & { meta: { publishedPages: string[] } })[] = [
  /*
  {
    path: '/:language(ru|en)/articles',
    meta: {
      publishedPages: ['ru', 'en'].flatMap(language => [
        `/${language}/articles/`,
        ...ARTICLES.map(article => `/${language}/articles/${article.id}/`),
      ]),
    },
    children: [
      {
        path: '',
        name: 'language-articles',
        file: '~/views/articles/ArticleCatalog.vue',
      },
      {
        path: ':id',
        name: 'language-articles-id',
        file: '~/views/articles/ArticlePage.vue',
      },
    ],
  },
  */
];

