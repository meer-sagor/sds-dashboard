<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>
<template>
  <div class="mb-3 w-[100%]">
    <label :for="props.label">{{ props.label }}</label>
    <input
      :type="props.type"
      class="w-[100%] py-2 px-3 border-gray-200 border focus:outline-none rounded-md"
      :placeholder="props.label"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @wheel.prevent
    />
  </div>
</template>
