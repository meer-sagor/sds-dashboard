<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="dashboard">
    <PageHeader pageTitle="Projects">
      <BaseButton
        btnText="Add Project"
        href="projects/add"
        iconName="fluent:add-circle-16-filled"
      />
    </PageHeader>
  </NuxtLayout>
</template>
