import { PROFILES } from '~/constants/profile';
import { LOCALIZED_EXPERIENCES } from '~/constants/experiences';
import { TRANSLATIONS } from '~/constants/translations';
import type { Language } from '~/types/language';
import type { RouteLocationNormalized } from 'vue-router';

export function validateLanguageRoute(route: RouteLocationNormalized) {
  return route.params.language === 'ru' || route.params.language === 'en';
}

export function useLanguage() {
  const route = useRoute();
  const rootLanguage = useState<Language>('root-language', () => 'ru');
  const explicitLanguage = computed(() => {
    const prefix = route.path.split('/')[1];
    return prefix === 'ru' || prefix === 'en' ? prefix : undefined;
  });
  const language = computed(() => explicitLanguage.value ?? rootLanguage.value);
  const homePath = computed(() => explicitLanguage.value ? languagePath('/', language.value) : '/');
  const projectsPath = computed(() => `/${language.value}/projects/`);
  const languages = computed(() => (['ru', 'en'] as const).map(option => ({
    language: option,
    path: languagePath(route.fullPath, option),
  })));

  return {
    language,
    rootLanguage,
    explicitLanguage,
    homePath,
    projectsPath,
    languages,
    profile: computed(() => PROFILES[language.value]),
    experiences: computed(() => LOCALIZED_EXPERIENCES[language.value]),
    text: computed(() => TRANSLATIONS[language.value]),
  };
}
