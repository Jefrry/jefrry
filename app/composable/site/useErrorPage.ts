import type { NuxtError } from '#app';

export function useErrorPage(error: () => NuxtError) {
  const notFound = computed(() => error().status === 404);
  const heading = computed(() => notFound.value ? 'Страница не найдена' : 'Не удалось открыть страницу');
  const description = computed(() => notFound.value
    ? 'Возможно, адрес изменился или в ссылке есть опечатка.'
    : 'Попробуйте вернуться на главную.');

  useHead({ title: () => `${notFound.value ? heading.value : 'Ошибка'} — Егор Ильин` });

  return { heading, description };
}
