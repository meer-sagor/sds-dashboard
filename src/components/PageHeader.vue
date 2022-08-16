<script setup lang="ts">
interface Props {
  pageTitle: string;
}
const props = defineProps<Props>();
</script>
<template>
  <header class="flex justify-between">
    <h1 class="text-[24px] text-page-title">{{ props.pageTitle }}</h1>
    <slot />
  </header>
</template>
