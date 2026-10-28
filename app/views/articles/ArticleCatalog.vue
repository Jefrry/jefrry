<script setup lang="ts">
const { text, articles } = useArticleCatalog();
</script>

<template>
  <main id="main" class="wrap py-12 sm:py-20" tabindex="-1">
    <h1 class="text-3xl font-medium tracking-tight sm:text-5xl">{{ text.title }}</h1>

    <p class="mt-6 max-w-2xl text-lg text-muted">{{ text.intro }}</p>

    <ul class="mt-10 grid gap-6 md:grid-cols-2">
      <li v-for="article in articles" :key="article.id" class="min-w-0 rounded-2xl border border-line p-6 sm:p-8">
        <time :datetime="article.date" class="text-sm text-muted">{{ article.formattedDate }}</time>

        <h2 class="mt-4 text-2xl font-medium">
          <NuxtLink :to="article.path" class="text-accent">{{ article.content.title }}</NuxtLink>
        </h2>

        <p class="mt-4 text-muted">{{ article.content.description }}</p>
      </li>
    </ul>
  </main>
</template>
