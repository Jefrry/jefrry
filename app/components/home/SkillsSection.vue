<script setup lang="ts">
import { PROFILE } from '~/constants/profile';
</script>

<template>
  <section aria-labelledby="skills-title" class="pt-12 md:pt-[75px]">
    <h2 id="skills-title" class="mb-7 text-2xl font-medium tracking-tight md:text-[26px]"><span aria-hidden="true" class="mr-3 font-mono text-[10px] text-[#95a5cd]">02</span>Технологии и подход</h2>

    <div class="grid gap-6 md:grid-cols-3 md:gap-10">
      <div v-for="skill in PROFILE.skills" :key="skill.title" class="border-t border-line pt-5">
        <h3 class="mb-3 text-sm font-medium">{{ skill.title }}</h3>

        <p v-for="line in skill.lines" :key="line" class="text-xs leading-loose text-muted">{{ line }}</p>
      </div>
    </div>
  </section>
</template>
