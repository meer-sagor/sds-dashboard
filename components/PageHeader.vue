<script setup>
const props = defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <header class="flex justify-between mb-5">
    <h1 class="text-[24px] text-page-title">{{ props.pageTitle }}</h1>
    <slot />
  </header>
</template>
