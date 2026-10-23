import { PROFILES } from '~/constants/profile';
import { LOCALIZED_EXPERIENCES } from '~/constants/experiences';
import { TRANSLATIONS } from '~/constants/translations';
import type { Language } from '~/types/language';

export function useLanguage() {
  const route = useRoute();
  const rootLanguage = useState<Language>('root-language', () => 'ru');
  const explicitLanguage = computed(() => {
    const prefix = route.path.split('/')[1];
    return prefix === 'ru' || prefix === 'en' ? prefix : undefined;
  });
  const language = computed(() => explicitLanguage.value ?? rootLanguage.value);

  return {
    language,
    rootLanguage,
    explicitLanguage,
    profile: computed(() => PROFILES[language.value]),
    experiences: computed(() => LOCALIZED_EXPERIENCES[language.value]),
    text: computed(() => TRANSLATIONS[language.value]),
  };
}
