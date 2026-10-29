<script setup lang="ts">
import type { ExperienceItemProps } from '~/types/experience/experience';

defineProps<ExperienceItemProps>();
const { text } = useLanguage();
</script>

<template>
  <article class="grid gap-2 border-b border-line py-7 md:grid-cols-[170px_1fr] md:gap-5 lg:grid-cols-[220px_1fr] lg:gap-9">
    <p class="pt-1 text-[11px] text-muted"><span v-if="experience.current" aria-hidden="true" class="mr-2 inline-block size-1.5 rounded-full bg-cyan" />{{ experience.date }}</p>

    <div class="min-w-0">
      <h3 class="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg font-medium tracking-tight">{{ experience.role }} <span class="text-xs text-accent">{{ experience.company }}</span></h3>

      <p class="mt-2 max-w-[695px] whitespace-pre-line text-xs leading-relaxed text-muted">{{ experience.summary }}</p>

      <ul :aria-label="text.technologies" class="mt-3.5 flex flex-wrap gap-2">
        <li v-for="technology in experience.tech" :key="technology" class="rounded border border-[#3b425e] px-2 py-0.5 text-[10px] text-[#abb6d3]">{{ technology }}</li>
      </ul>

      <details class="mt-3 text-xs leading-loose text-muted">
        <summary class="w-fit text-[11px] text-[#abbadd]">{{ text.results }}<span class="sr-only"> — {{ experience.company }}</span></summary>

        <ul class="my-3 list-disc space-y-1.5 pl-4">
          <li v-for="result in experience.more" :key="result">{{ result }}</li>
        </ul>

        <dl class="space-y-1 text-[11px]">
          <div>
            <dt class="inline font-medium text-[#c2cce3]">{{ text.active }}</dt>

            <dd class="inline">{{ experience.active }}</dd>
          </div>

          <div>
            <dt class="inline font-medium text-[#c2cce3]">{{ text.rare }}</dt>

            <dd class="inline">{{ experience.rare }}</dd>
          </div>

          <div>
            <dt class="inline font-medium text-[#c2cce3]">{{ text.used }}</dt>

            <dd class="inline">{{ experience.used }}</dd>
          </div>
        </dl>
      </details>
    </div>
  </article>
</template>
