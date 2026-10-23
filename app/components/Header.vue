<script setup lang="ts">
import type { Language } from '~/types/language';

const route = useRoute();
const { language, rootLanguage, explicitLanguage, text } = useLanguage();
const languages: readonly Language[] = ['ru', 'en'];
const homePath = computed(() => explicitLanguage.value ? languagePath('/', language.value) : '/');
</script>

<template>
  <header class="wrap flex min-h-14 flex-wrap items-center justify-between gap-x-4 border-b border-line">
    <nav :aria-label="text.navigation" class="flex flex-wrap gap-x-4 gap-y-2 py-4 text-xs text-muted sm:gap-x-9 sm:text-sm">
      <a :href="`${homePath}#top`" class="text-ink">{{ text.about }}</a>

      <a :href="`${homePath}#experience`">{{ text.experience }}</a>

      <a :href="`${homePath}#contacts`">{{ text.contacts }}</a>
    </nav>

    <div :aria-label="text.language" role="group" class="flex gap-1 py-2 text-xs">
      <template v-for="option in languages" :key="option">
        <NuxtLink v-if="explicitLanguage" :to="languagePath(route.fullPath, option)" :lang="option" :aria-current="language === option ? 'page' : undefined" :class="language === option ? 'border-accent text-ink' : 'border-transparent text-muted'" class="rounded border px-2 py-2">{{ option.toUpperCase() }}</NuxtLink>

        <button v-else type="button" :lang="option" :aria-pressed="language === option" :class="language === option ? 'border-accent text-ink' : 'border-transparent text-muted'" class="cursor-pointer rounded border px-2 py-2" @click="rootLanguage = option">{{ option.toUpperCase() }}</button>
      </template>
    </div>
  </header>
</template>
