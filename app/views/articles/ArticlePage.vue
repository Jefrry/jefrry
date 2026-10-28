<script setup lang="ts">
const { article, text, articlesPath } = useArticle();
</script>

<template>
  <main v-if="article" id="main" class="wrap py-12 sm:py-20" tabindex="-1">
    <NuxtLink :to="articlesPath" class="text-sm text-accent">{{ text.back }}</NuxtLink>

    <article class="mt-8 max-w-3xl">
      <time :datetime="article.date" class="text-sm text-cyan">{{ article.formattedDate }}</time>

      <h1 class="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">{{ article.content.title }}</h1>

      <p class="mt-6 text-lg text-muted">{{ article.content.description }}</p>

      <section v-for="section in article.content.sections" :key="section.heading" class="mt-10">
        <h2 class="text-2xl font-medium">{{ section.heading }}</h2>

        <p v-for="paragraph in section.paragraphs" :key="paragraph" class="mt-4 text-muted">{{ paragraph }}</p>
      </section>
    </article>
  </main>
</template>
