// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    '@pinia/nuxt'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
