<script setup lang="ts">
import WhaleVisual from '../site/WhaleVisual.vue';

const { profile, text } = useLanguage();
const { trackContact } = useAnalytics();
</script>

<template>
  <section aria-labelledby="profile-title" class="grid items-center pb-7 pt-11 md:min-h-[560px] md:grid-cols-[1.08fr_1fr] md:pb-14">
    <div class="relative z-10 min-w-0">
      <p class="mb-6 flex items-center gap-2 text-[10px] tracking-wide text-[#b0b8d3] sm:text-[11px]">
        <span aria-hidden="true" class="size-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_12px_#6be0df55]" />
        {{ profile.location }}
      </p>

      <h1 id="profile-title" class="mb-3 text-[clamp(42px,12vw,82px)] font-medium leading-[1.1] tracking-[-0.05em] md:text-[clamp(52px,6vw,82px)]">{{ profile.name }}<span class="text-accent">.</span></h1>

      <p class="mb-5 text-2xl tracking-tight text-accent md:text-[26px]">{{ profile.role }}</p>

      <p class="mb-7 max-w-[425px] text-sm leading-[1.9] text-muted">{{ profile.introduction }}</p>

      <div :aria-label="text.authorContacts" class="flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#c1cbe4]">
        <a v-for="contact in profile.contacts" :key="contact.href" :href="contact.href" class="inline-flex items-center gap-2" :aria-label="contact.href.startsWith('mailto:') ? `${contact.name}: ${contact.label}` : contact.name" @click="trackContact(contact.href, 'hero')">
          {{ contact.href.startsWith('mailto:') ? contact.label : contact.name }} <span aria-hidden="true" class="text-accent">↗</span>
        </a>
      </div>
    </div>

    <WhaleVisual />
  </section>

  <div class="flex items-center justify-between gap-5 border-y border-line py-5 text-[11px]">
    <ul :aria-label="text.mainTechnologies" class="flex flex-wrap gap-x-6 gap-y-2 text-[#c6cce0]">
      <li v-for="technology in profile.technologies" :key="technology">{{ technology }}</li>
    </ul>
  </div>
</template>
