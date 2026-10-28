export function useSite() {
  const { rootLanguage, language, text } = useLanguage();

  onMounted(() => {
    rootLanguage.value = /^ru(?:-|$)/i.test(navigator.language) ? 'ru' : 'en';
  });

  useHead(() => ({
    htmlAttrs: { lang: language.value },
    title: text.value.title,
    meta: [{ name: 'description', content: text.value.description }],
  }));
}
