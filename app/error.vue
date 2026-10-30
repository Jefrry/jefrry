<script setup lang="ts">
import type { ErrorPageProps } from '~/types/site/error';

const props = defineProps<ErrorPageProps>();

const { heading, description } = useErrorPage(() => props.error);
</script>

<template>
  <main class="wrap flex min-h-screen flex-col items-center justify-center gap-6 py-16 text-center">
    <p class="font-mono text-8xl text-accent sm:text-9xl">{{ error.status }}</p>

    <h1 class="text-4xl font-medium tracking-tight">{{ heading }}</h1>

    <p class="text-muted">{{ description }}</p>

    <a href="/" class="rounded border border-line px-5 py-3 text-sm">На главную ↗</a>
  </main>
</template>
