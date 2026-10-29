<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';

const { profile, text, experiences } = useLanguage();
</script>

<template>
  <section id="experience" aria-labelledby="experience-title" class="pt-12 md:pt-[75px]">
    <div class="mb-7 flex flex-wrap items-center justify-between gap-4">
      <h2 id="experience-title" class="text-2xl font-medium tracking-tight md:text-[26px]">{{ text.experience }}</h2>

      <a :href="profile.resume.href" download class="inline-flex min-h-11 items-center justify-center gap-3 rounded-md border border-accent bg-accent px-5 py-3 text-sm font-semibold text-ocean hover:bg-ink hover:text-ocean">{{ profile.resume.label }} <span aria-hidden="true">↓</span></a>
    </div>

    <div class="border-t border-line">
      <ExperienceItem v-for="experience in experiences" :key="experience.company" :experience="experience" />
    </div>
  </section>
</template>
