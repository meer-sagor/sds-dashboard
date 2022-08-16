<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import { RouterView } from "vue-router";
import Button from "../../components/Shared/Button.vue";
</script>
<template>
  <PageHeader pageTitle="Projects">
    <Button
      btnText="Add Project"
      href="/projects/add"
      iconName="fluent:add-circle-16-filled"
    />
  </PageHeader>
  <RouterView />
</template>
