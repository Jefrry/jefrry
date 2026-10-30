<script setup lang="ts">
definePageMeta({ validate: validateProjectRoute });
const { project, content, text, catalogLink } = usePortfolioProject();
const { trackProjectSource } = useAnalytics();
</script>

<template>
  <main v-if="project && content" id="main" class="wrap py-12 sm:py-20" tabindex="-1">
    <NuxtLink :to="catalogLink" class="text-sm text-accent">{{ text.back }}</NuxtLink>

    <article class="mt-8 max-w-4xl">
      <p v-if="project.category" class="text-sm text-cyan">{{ text.categories[project.category] }}</p>

      <h1 class="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">{{ content.title }}</h1>

      <p class="mt-6 text-lg text-muted">{{ content.description }}</p>

      <img v-if="project.cover" :src="project.cover" :alt="content.coverAlt" width="800" height="480" class="mt-8 aspect-[5/3] w-full rounded-2xl border border-line object-contain">

      <section class="mt-10">
        <h2 class="text-2xl font-medium">{{ text.context }}</h2>

        <p class="mt-4 text-muted">{{ content.context }}</p>
      </section>

      <section class="mt-10">
        <h2 class="text-2xl font-medium">{{ text.stack }}</h2>

        <ul class="mt-4 flex flex-wrap gap-3 text-sm text-cyan">
          <li v-for="technology in project.technologies" :key="technology" class="rounded border border-line px-3 py-2">{{ technology }}</li>
        </ul>
      </section>

      <section v-if="content.results?.length" class="mt-10">
        <h2 class="text-2xl font-medium">{{ text.results }}</h2>

        <ul class="mt-4 list-disc space-y-2 pl-5 text-muted">
          <li v-for="result in content.results" :key="result">{{ result }}</li>
        </ul>
      </section>

      <p v-if="content.period" class="mt-8 text-sm text-muted">{{ text.period }}: {{ content.period }}</p>

      <a v-if="project.externalUrl" :href="project.externalUrl" class="mt-8 inline-block rounded border border-accent px-5 py-3 text-accent" @click="trackProjectSource(project.id, project.externalUrl)">{{ text.external }}</a>
    </article>
  </main>
</template>
