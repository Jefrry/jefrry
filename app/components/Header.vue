<script setup lang="ts">
const { language, rootLanguage, explicitLanguage, text, languages, homePath, projectsPath } = useLanguage();
</script>

<template>
  <header class="wrap flex min-h-14 flex-wrap items-center justify-between gap-x-4 border-b border-line">
    <nav :aria-label="text.navigation" class="flex flex-wrap gap-x-4 gap-y-2 py-4 text-xs text-muted sm:gap-x-9 sm:text-sm">
      <a :href="`${homePath}#top`" class="text-ink">{{ text.about }}</a>

      <a :href="`${homePath}#experience`">{{ text.experience }}</a>

      <NuxtLink :to="projectsPath">{{ text.projects }}</NuxtLink>

      <a :href="`${homePath}#contacts`">{{ text.contacts }}</a>
    </nav>

    <div :aria-label="text.language" role="group" class="flex gap-1 py-2 text-xs">
      <template v-for="option in languages" :key="option.language">
        <NuxtLink v-if="explicitLanguage" :to="option.path" :lang="option.language" :aria-current="language === option.language ? 'page' : undefined" :class="language === option.language ? 'border-accent text-ink' : 'border-transparent text-muted'" class="rounded border px-2 py-2">{{ option.language.toUpperCase() }}</NuxtLink>

        <button v-else type="button" :lang="option.language" :aria-pressed="language === option.language" :class="language === option.language ? 'border-accent text-ink' : 'border-transparent text-muted'" class="cursor-pointer rounded border px-2 py-2" @click="rootLanguage = option.language">{{ option.language.toUpperCase() }}</button>
      </template>
    </div>
  </header>
</template>
