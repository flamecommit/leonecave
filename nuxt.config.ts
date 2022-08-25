import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  components: true,
  css: [
    '@/assets/scss/reset.scss'
  ],
  target: 'static',
  app: {
    head: {
      title: 'leonecave'
    }
  }
})
