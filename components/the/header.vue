<template>
  <header class="the-header">
    <div class="visual">
      <img src="~images/the/logo-180x180.png" alt="" />
    </div>
    <h1>leonecave.eth</h1>
    <nav class="gnb">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/artworks">Artworks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>


<style lang="scss">
.the-header {
  background: #000;
  text-align: center;
  padding: 30px;
  color: #fff;

  .visual {
    img {
      width: 100px;
    }
  }
  h1 {
    margin-top: 12px;
    font-size: 24px;
  }
  .gnb {
    margin-top: 24px;

    ul {
      display: flex;
      justify-content: center;
      column-gap: 50px;
    }
  }
}
</style>