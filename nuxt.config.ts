// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    'devextreme/dist/css/dx.light.css', // Change the theme if needed
  ],
  build: {
    transpile: ['devextreme-vue'],
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
