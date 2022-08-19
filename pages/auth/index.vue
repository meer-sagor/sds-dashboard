<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="auth">
    <section class="w-[40rem] m-auto">
      <BaseCard>
        <h1>Login</h1>
        <BaseFormInput label="Email" type="email" />
        <BaseFormInput label="Password" type="password" />
      </BaseCard>
    </section>
  </NuxtLayout>
</template>
