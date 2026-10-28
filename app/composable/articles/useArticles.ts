import { ARTICLES } from '~/constants/articles/articles';
import { ARTICLE_TEXT } from '~/constants/articles/articleTranslations';

export function useArticles() {
  const { language, profile, articlesPath } = useLanguage();
  const text = computed(() => ARTICLE_TEXT[language.value]);
  const articles = computed(() => ARTICLES.map(article => ({
    ...article,
    content: article.content[language.value],
    formattedDate: new Intl.DateTimeFormat(language.value, {
      dateStyle: 'long', timeZone: 'UTC',
    }).format(new Date(`${article.date}T00:00:00Z`)),
    path: `/${language.value}/articles/${article.id}/`,
  })));

  return { text, articles, profile, articlesPath };
}

export function useArticleCatalog() {
  const catalog = useArticles();
  useHead(() => ({
    title: `${catalog.text.value.title} — ${catalog.profile.value.name}`,
    meta: [{ name: 'description', content: catalog.text.value.intro }],
  }));
  return catalog;
}

export function useArticle() {
  const route = useRoute();
  const { articles, text, articlesPath } = useArticles();
  const article = computed(() => articles.value.find(article => article.id === route.params.id));
  useHead(() => ({
    title: article.value?.content.title,
    meta: [{ name: 'description', content: article.value?.content.description ?? '' }],
  }));
  return { article, text, articlesPath };
}
