<script setup lang="ts">
import HeroSection from '~/components/profile/HeroSection.vue';
import ExperienceSection from '~/components/experience/ExperienceSection.vue';
import SkillsSection from '~/components/profile/SkillsSection.vue';

const { text } = useLanguage();
usePageMetadata(() => ({ title: text.value.title, description: text.value.description }));
</script>

<template>
  <main id="main" class="wrap" tabindex="-1">
    <HeroSection />

    <ExperienceSection />

    <SkillsSection />
  </main>
</template>
