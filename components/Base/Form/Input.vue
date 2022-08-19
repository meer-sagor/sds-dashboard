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
  <div>
    <label :for="props.label">{{ props.label }}</label>
    <input
      :type="props.type"
      class="w-[100%] py-2 px-3 focus:outline-none border-none outline-none rounded-md"
      :placeholder="props.label"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
