<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const userName = useState(() => null);
definePageMeta({
  layout: false,
});
const handleSubmit = () => {
  console.log("you click");
};
</script>
<template>
  <NuxtLayout name="dashboard">
    <form @submit.prevent="handleSubmit">
      <BaseCard>
        <BaseFormInput label="Project Name" v-model="userName" />
        <BaseFormInput label="Project" v-model="userName" />
        <BaseButton btnText="Add Project" />
      </BaseCard>
    </form>
  </NuxtLayout>
</template>
