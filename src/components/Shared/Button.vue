<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
interface Props {
  btnText: string;
  iconName?: string;
  href?: string;
}
const props = defineProps<Props>();
</script>
<template>
  <RouterLink v-if="props.href" :to="props.href">
    <button class="flex items-center bg-emerald-400 p-2 rounded-md">
      <Icon :icon="props.iconName" class="pr-2 text-4xl" />
      {{ props.btnText }}
    </button>
  </RouterLink>
  <button v-else class="flex items-center bg-emerald-400 p-2 rounded-md">
    <Icon :icon="props.iconName" class="pr-2 text-4xl" />
    {{ props.btnText }}
  </button>
</template>
