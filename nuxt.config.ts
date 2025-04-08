// https://nuxt.com/docs/api/configuration/nuxt-config
import { publicRuntimeConfig } from './server-config/environments/public';
import { privateRuntimeConfig } from './server-config/environments/private';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    'devextreme/dist/css/dx.light.css', // Change the theme if needed
  ],
  ssr: false,
  build: {
    transpile: ['devextreme-vue'],
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      ...publicRuntimeConfig
    },
    // private
    ...privateRuntimeConfig,
  },
});
