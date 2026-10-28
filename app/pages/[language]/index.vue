<script setup lang="ts">
import HomePage from '~/views/site/HomePage.vue';

definePageMeta({
  validate: validateLanguageRoute,
});
</script>

<template>
  <HomePage />
</template>
