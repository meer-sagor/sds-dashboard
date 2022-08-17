<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const userName = useState(() => null);
</script>
<template>
  <h1>user Name: {{ userName }}</h1>
  <section>
    <BaseFormInput v-model="userName" />
  </section>
</template>
