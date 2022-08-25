<template>
  <div class="root-app">
    <the-header />
    <nuxt-page />
    <the-footer />
  </div>
</template>

<script setup>
import 'swiper/css';
</script>

<style lang="scss">
.root-app {
  background: #000;
  position: relative;
  min-width: 360px;
  min-height: 100vh;
  padding-bottom: 120px;
}
</style>