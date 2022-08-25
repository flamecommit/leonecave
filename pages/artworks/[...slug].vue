<template>
  <main class="page-artworks">
    <h1>{{ data.title }}</h1>
  </main>
</template>

<script setup>
const { params } = useRoute()

const slug = params.slug[0];

const { data } = await useAsyncData(`content-${slug}`, () => {
  return queryContent().where({ _path: `/${slug}` }).only(['title']).findOne()
})
</script>

<style lang="scss">
.page-artworks {
  padding: 50px;
}
</style>