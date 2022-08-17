import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: "webpack",
    modules: [
        '@nuxtjs/tailwindcss',
      ],
})
