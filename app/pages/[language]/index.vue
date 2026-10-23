<script setup lang="ts">
import HomePage from '~/components/home/HomePage.vue';

definePageMeta({
  validate: route => route.params.language === 'ru' || route.params.language === 'en',
});
</script>

<template>
  <HomePage />
</template>
