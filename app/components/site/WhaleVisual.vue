<script setup lang="ts">
const { text } = useLanguage();
</script>

<template>
  <div class="relative mt-8 h-[280px] min-w-0 md:mt-0 md:h-[405px]">
    <div aria-hidden="true" class="absolute left-1/2 top-1/2 size-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7d94c41c] md:size-[335px]" />

    <div aria-hidden="true" class="absolute left-1/2 top-1/2 size-[265px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7d94c41c] opacity-50 md:size-[425px]" />

    <span aria-hidden="true" class="absolute right-0 top-2 text-[9px] tracking-[2px] text-[#909bbb]">A LITTLE DEEPER.</span>

    <div class="absolute inset-0 flex items-center justify-center">
      <img src="/assets/whale.png" :alt="text.whale" width="1000" height="1000" fetchpriority="high" class="whale relative z-1 h-auto w-[350px] max-w-full shrink-0 md:w-[520px]">
    </div>

    <span aria-hidden="true" class="absolute bottom-2 right-0 font-mono text-[9px] tracking-widest text-[#909bbb]">53°12′ N &nbsp; 50°08′ E</span>
  </div>
</template>
