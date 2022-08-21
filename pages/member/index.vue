<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="dashboard">
    <PageHeader pageTitle="Organization Members">
      <BaseButton
        btnText="Add Member"
        href="member/add"
        iconName="fluent:add-circle-16-filled"
      />
    </PageHeader>
  </NuxtLayout>
</template>
