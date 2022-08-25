<template>
  <header class="the-header">
    <h1>logo</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/artworks/about">artworks > about</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/artworks/test">artworks > test</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">about</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>


<style lang="scss">
.page-about {
  padding: 50px;
}
</style>