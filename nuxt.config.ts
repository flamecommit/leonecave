import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  components: true,
  css: [
    '@/assets/scss/reset.scss'
  ],
  mode: 'universal',
  target: 'static',
  router: {
    prefetchLinks: false
  },
  alias: {
    images: resolve(__dirname, './assets/images'),
  },
  app: {
    head: {
      title: 'leonecave',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
  },
  ssr: true
})
