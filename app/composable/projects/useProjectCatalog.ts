import { PROJECTS } from '~/constants/projects/projects';
import { PROJECT_TEXT } from '~/constants/projects/projectTranslations';

export function useProjectCatalog() {
  const route = useRoute();
  const router = useRouter();
  const { language, profile } = useLanguage();
  const text = computed(() => PROJECT_TEXT[language.value]);
  const categories = ['all', 'fullstack', 'frontend', 'personal'] as const;
  const category = computed(() => categories.find(value => value === route.query.category) ?? 'all');
  const projects = computed(() => PROJECTS
    .filter(project => category.value === 'all' || project.category === category.value)
    .map(project => ({
      ...project,
      content: project.content[language.value],
      to: { path: `/${language.value}/projects/${project.id}/`, query: route.query },
    })));

  function selectCategory(value: typeof categories[number]) {
    return router.replace({ query: { ...route.query, category: value === 'all' ? undefined : value }, hash: route.hash });
  }

  function resetFilters() {
    return router.replace({ query: {}, hash: route.hash });
  }

  usePageMetadata(() => ({
    title: `${text.value.title} — ${profile.value.name}`,
    description: text.value.intro,
  }));

  return { text, categories, category, projects, selectCategory, resetFilters };
}
