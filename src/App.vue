<script setup lang="ts">
import AsideBar from "@/partials/AsideBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main class="flex">
    <AsideBar />
    <section class="p-[30px] bg-body w-[100%]">
      <RouterView />
    </section>
  </main>
</template>
