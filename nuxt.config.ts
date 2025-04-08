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
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      ...publicRuntimeConfig
    },
    // private
    ...privateRuntimeConfig,
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en/landing.json' },
      { code: 'nl', iso: 'nl-NL', file: 'nl/landing.json' },
    ],
    defaultLocale: 'nl',
    langDir: 'locals/',
    lazy: true,
    strategy: 'no_prefix', // Disable locale prefix in the URL

  },
});
