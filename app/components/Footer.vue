<script setup lang="ts">
const { profile, text, language, explicitLanguage } = useLanguage();
const homePath = computed(() => explicitLanguage.value ? languagePath('/', language.value) : '/');
</script>

<template>
  <footer id="contacts" class="wrap mt-14 border-t border-line pt-8 md:mt-[75px]">
    <h2 class="mb-6 text-2xl font-medium tracking-tight md:text-[26px]">{{ text.contacts }}</h2>

    <div class="grid gap-5 md:grid-cols-3 md:gap-8">
      <a v-for="contact in profile.contacts" :key="contact.href" :href="contact.href" class="flex min-w-0 flex-col border-b border-line pb-4">
        <span class="mb-2 text-[9px] uppercase tracking-widest text-muted">{{ contact.name }}</span>

        <span class="break-words text-sm">{{ contact.label }} <span aria-hidden="true">↗</span></span>
      </a>
    </div>

    <div class="mt-7 flex flex-wrap justify-between gap-4 py-6 text-[10px] text-muted">
      <span>© 2026 {{ profile.name }}</span>

      <a :href="`${homePath}#top`">{{ text.backToTop }}</a>
    </div>
  </footer>
</template>
