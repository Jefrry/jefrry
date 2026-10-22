<script setup lang="ts">
import type { ErrorPageProps } from '~/types/error';

const props = defineProps<ErrorPageProps>();

useHead({
  title: () => `${props.error.status === 404 ? 'Страница не найдена' : 'Ошибка'} — Егор Ильин`,
});
</script>

<template>
  <main class="wrap flex min-h-screen flex-col items-start justify-center gap-6 py-16">
    <p class="font-mono text-sm text-accent">{{ error.status }}</p>

    <h1 class="text-4xl font-medium tracking-tight">{{ error.status === 404 ? 'Страница не найдена' : 'Не удалось открыть страницу' }}</h1>

    <p class="text-muted">{{ error.status === 404 ? 'Возможно, адрес изменился или в ссылке есть опечатка.' : 'Попробуйте вернуться на главную.' }}</p>

    <a href="/" class="rounded border border-line px-5 py-3 text-sm">На главную ↗</a>
  </main>
</template>
