import type { RouteLocationNormalized } from 'vue-router';
import { PROJECTS } from '~/constants/projects';
import { PROJECT_TEXT } from '~/constants/projectTranslations';
import { validateLanguageRoute } from './useLanguage';

export function validateProjectRoute(route: RouteLocationNormalized) {
  return validateLanguageRoute(route) && PROJECTS.some(project => project.id === route.params.id);
}

export function usePortfolioProject() {
  const route = useRoute();
  const { language } = useLanguage();
  const project = computed(() => PROJECTS.find(project => project.id === route.params.id));
  const content = computed(() => project.value?.content[language.value]);
  const text = computed(() => PROJECT_TEXT[language.value]);
  const catalogLink = computed(() => ({ path: `/${language.value}/projects/`, query: route.query }));

  useHead(() => ({
    title: content.value?.title,
    meta: [{ name: 'description', content: content.value?.summary ?? '' }],
  }));

  return { project, content, text, catalogLink };
}
