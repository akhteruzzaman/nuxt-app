// https://nuxt.com/docs/api/configuration/nuxt-config
import { publicRuntimeConfig } from './server-config/environments/public';
import { privateRuntimeConfig } from './server-config/environments/private';
import enLocaleFiles from './configs/locales/en';
import msLocaleFiles from './configs/locales/ms';

const setDefaultLanguage = process.env.NODE_ENV === "production" ? "ms" : 'en';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    'devextreme/dist/css/dx.light.css', // Change the theme if needed
  ],
  ssr: false, // devextreeme is client only
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
      {
        code: 'en',
        iso: 'en-US',
        files: enLocaleFiles
      },
      {
        code: 'ms',
        iso: 'ms-MY',
        files: msLocaleFiles
      },
    ],
    defaultLocale: setDefaultLanguage,
    langDir: 'locales/',
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false, // Disable this feature as recommended
    }
  },
});
