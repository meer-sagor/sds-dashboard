<script setup></script>

<template>
  <div class="p-4 rounded-md bg-card w-[100%]">
    <header>
      <slot name="header"></slot>
    </header>
    <div>
      <slot></slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
