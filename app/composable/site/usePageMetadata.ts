import { SITE_ORIGIN, SITE_PREVIEW_IMAGE } from '~/constants/site/site';

export function usePageMetadata(content: () => { title: string; description: string; image?: string; type?: 'website' | 'article' }) {
  const route = useRoute();
  const { language } = useLanguage();
  const path = computed(() => `${route.path.replace(/\/+$/, '')}/`);
  const canonical = computed(() => `${SITE_ORIGIN}${path.value}`);
  const home = computed(() => /^\/(?:ru\/|en\/)?$/.test(path.value));
  const image = computed(() => new URL(content().image || SITE_PREVIEW_IMAGE, SITE_ORIGIN).href);
  const imageAlt = computed(() => content().image
    ? content().title
    : language.value === 'ru' ? 'Егор Ильин' : 'Egor Ilin');

  useHead(() => ({
    title: content().title,
    link: [
      { rel: 'canonical', href: canonical.value },
      ...(['ru', 'en'] as const).map(hreflang => ({
        rel: 'alternate' as const, hreflang,
        href: `${SITE_ORIGIN}${languagePath(path.value, hreflang)}`,
      })),
      ...(home.value ? [{ rel: 'alternate' as const, hreflang: 'x-default', href: `${SITE_ORIGIN}/` }] : []),
    ],
  }));

  useSeoMeta({
    description: () => content().description,
    ogTitle: () => content().title,
    ogDescription: () => content().description,
    ogType: () => content().type ?? 'website',
    ogUrl: () => canonical.value,
    ogLocale: () => language.value === 'ru' ? 'ru_RU' : 'en_US',
    ogLocaleAlternate: () => language.value === 'ru' ? ['en_US'] : ['ru_RU'],
    ogImage: () => image.value,
    ogImageAlt: () => imageAlt.value,
    twitterCard: 'summary',
    twitterTitle: () => content().title,
    twitterDescription: () => content().description,
    twitterImage: () => image.value,
    twitterImageAlt: () => imageAlt.value,
  });
}
