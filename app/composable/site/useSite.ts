export function useSite() {
  const { rootLanguage, language } = useLanguage();

  onMounted(() => {
    rootLanguage.value = /^ru(?:-|$)/i.test(navigator.language) ? 'ru' : 'en';
  });

  useHead(() => ({
    htmlAttrs: { lang: language.value },
  }));
}
