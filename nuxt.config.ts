// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primeuix/themes/aura";
import PrimeUI from "tailwindcss-primeui";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".p-dark",
          cssLayer: {
            name: "primevue",
            order: "theme, primevue",
          },
        },
      },
      ripple: true,
    },
    autoImport: true,
  },

  content: {
    preview: {
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "nuxt3-styled-tailwind",
        owner: "rafaelmils",
        url: "https://github.com/rafaelmils/nuxt3-styled-tailwind",
      },
    },
  },

  css: ["primeicons/primeicons.css"],

  tailwindcss: {
    config: {
      plugins: [PrimeUI],
      darkMode: ["class", ".p-dark"],
    },
  },
});
