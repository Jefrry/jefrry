<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';

const { profile, text, experiences } = useLanguage();
</script>

<template>
  <section id="experience" aria-labelledby="experience-title" class="pt-12 md:pt-[75px]">
    <div class="mb-7 flex flex-wrap items-baseline justify-between gap-4">
      <h2 id="experience-title" class="text-2xl font-medium tracking-tight md:text-[26px]"><span aria-hidden="true" class="mr-3 font-mono text-[10px] text-[#95a5cd]">01</span>{{ text.experience }}</h2>

      <a :href="profile.resume.href" class="inline-flex items-center gap-3 text-xs text-[#c1c9e3]">{{ profile.resume.label }} <span aria-hidden="true">↗</span></a>
    </div>

    <div class="border-t border-line">
      <ExperienceItem v-for="experience in experiences" :key="experience.company" :experience="experience" />
    </div>
  </section>
</template>
