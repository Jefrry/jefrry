import type { RouterConfig } from 'nuxt/schema';
import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { ARTICLES } from './constants/articles/articles';

export const ARTICLE_ROUTES: (RouteRecordRaw & { meta: { publishedPages: string[] } })[] = [
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
        component: () => import('./views/articles/ArticleCatalog.vue'),
      },
      {
        path: ':id',
        name: 'language-articles-id',
        component: () => import('./views/articles/ArticlePage.vue'),
        meta: { validate: (route: RouteLocationNormalized) => ARTICLES.some(article => article.id === route.params.id) },
      },
    ],
  },
  */
];

export default {
  routes: routes => [...routes, ...ARTICLE_ROUTES],
} satisfies RouterConfig;
