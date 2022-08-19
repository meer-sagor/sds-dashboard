<script setup></script>
<template>
  <aside class="bg-gray text-primary-color w-[255px] h-screen">
    <ul>
      <RouterLink
        to="/"
        class="p-5 mb-1 cursor-pointer block hover:bg-h-gray hover:text-primary-h-color"
        >Overview</RouterLink
      >
      <RouterLink
        to="/profile"
        class="p-5 mb-1 cursor-pointer block hover:bg-h-gray hover:text-primary-h-color"
        >Profile</RouterLink
      >
      <RouterLink
        to="/projects"
        class="p-5 cursor-pointer block hover:bg-h-gray hover:text-primary-h-color"
        >Projects</RouterLink
      >
      <RouterLink
        to="/auth"
        class="p-5 cursor-pointer block hover:bg-h-gray hover:text-primary-h-color"
        >Auth</RouterLink
      >
    </ul>
  </aside>
</template>
