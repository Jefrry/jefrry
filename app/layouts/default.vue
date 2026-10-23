<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

const { text } = useLanguage();
</script>

<template>
  <div id="top">
    <a href="#main" class="fixed left-5 top-3 z-50 -translate-y-24 rounded bg-ink px-4 py-2 text-ocean focus:translate-y-0">{{ text.skip }}</a>

    <Header />

    <slot />

    <Footer />
  </div>
</template>
