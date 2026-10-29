<script setup lang="ts">
definePageMeta({ validate: validateLanguageRoute });
const { text, categories, category, projects, selectCategory, resetFilters } = useProjectCatalog();
</script>

<template>
  <main id="main" class="wrap py-12 sm:py-20" tabindex="-1">
    <h1 class="text-3xl font-medium tracking-tight sm:text-5xl">{{ text.title }}</h1>

    <p class="mt-5 max-w-3xl text-muted">{{ text.intro }}</p>

    <!-- Выбор категории временно скрыт; логика сохранена в useProjectCatalog.
    <div role="group" :aria-label="text.filter" class="mt-10 flex flex-wrap gap-3">
      <button v-for="option in categories" :key="option" type="button" :aria-pressed="category === option" class="cursor-pointer rounded-lg border px-4 py-2 text-sm transition-colors hover:border-accent" :class="category === option ? 'border-accent bg-accent/15 text-ink' : 'border-line text-muted'" @click="selectCategory(option)">{{ text.categories[option] }}</button>
    </div>

    -->

    <p role="status" class="mt-5 text-sm text-muted">{{ text.count }} {{ projects.length }}</p>

    <div v-if="projects.length" class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="project in projects" :key="project.id" class="overflow-hidden rounded-2xl border border-line bg-ocean">
        <NuxtLink :to="project.to" class="group flex h-full flex-col">
          <img v-if="project.cover" :src="project.cover" alt="" width="800" height="480" class="aspect-[5/3] w-full object-contain" loading="lazy">

          <div class="flex grow flex-col p-6">
            <h2 class="text-xl font-medium group-hover:text-accent">{{ project.content.title }}</h2>

            <p class="mt-3 text-sm text-muted">{{ project.content.summary }}</p>

            <ul :aria-label="text.stack" class="mt-5 flex flex-wrap gap-2 text-xs text-cyan">
              <li v-for="technology in project.technologies" :key="technology" class="rounded border border-line px-2 py-1">{{ technology }}</li>
            </ul>

            <span class="mt-auto pt-6 text-sm text-accent">{{ text.details }} ↗</span>
          </div>
        </NuxtLink>
      </article>
    </div>

    <div v-else class="mt-6 rounded-2xl border border-line p-8">
      <p>{{ text.empty }}</p>

      <button type="button" class="mt-4 cursor-pointer rounded border border-accent px-4 py-2 text-accent" @click="resetFilters">{{ text.reset }}</button>
    </div>
  </main>
</template>
