<script setup lang="ts">
import HomePage from '~/components/home/HomePage.vue';

definePageMeta({
  validate: validateLanguageRoute,
});
</script>

<template>
  <HomePage />
</template>
