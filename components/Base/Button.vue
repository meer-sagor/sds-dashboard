<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
  btnText: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: false,
  },
  href: {
    type: [String, Object],
    required: true,
  },
});
</script>
<template>
  <RouterLink v-if="props.href" :to="props.href">
    <button class="flex items-center bg-emerald-400 p-2 rounded-md">
      <Icon
        :icon="props.iconName"
        v-if="props.iconName"
        class="pr-2 text-4xl"
      />
      {{ props.btnText }}
    </button>
  </RouterLink>
  <button v-else class="flex items-center bg-emerald-400 p-2 rounded-md">
    <Icon :icon="props.iconName" class="pr-2 text-4xl" v-if="props.iconName" />
    {{ props.btnText }}
  </button>
</template>
