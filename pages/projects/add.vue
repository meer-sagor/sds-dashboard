<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const userName = useState(() => null);
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="dashboard">
    <h1>user Name: {{ userName }}</h1>
    <section>
      <BaseFormInput label="your name" v-model="userName" />
      <BaseCard>
      <h1>Hello card</h1>
      </BaseCard>
    </section>
  </NuxtLayout>
</template>
