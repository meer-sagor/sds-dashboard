<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="dashboard">
    <PageHeader pageTitle="Overview" />
    <BaseCard>
      <template #header>
        <h1>Hello SDS</h1>
      </template>

    </BaseCard>
  </NuxtLayout>
</template>
