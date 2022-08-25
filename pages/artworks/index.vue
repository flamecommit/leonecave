<template>
  <main class="page-artworks">
    <div class="artwork-list">
      <swiper
        v-bind="swiperOptions"
        @swiper="onSwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
      <button type="button" class="swiper-navi swiper-navi-prev" @click="artSwiper.slidePrev()">
        <span class="material-symbols-outlined">navigate_before</span>
      </button>
      <button type="button" class="swiper-navi swiper-navi-next" @click="artSwiper.slideNext()">
        <span class="material-symbols-outlined">navigate_next</span>
      </button>
    </div>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

const swiperOptions = {
  navigation: false,
  pagination: true,
  spaceBetween: 30,
  loop: true
}

const artSwiper = ref(null);

function onSwiper(swiper) {
  artSwiper.value = swiper;
}
</script>


<style lang="scss">
.page-artworks {
  padding: 50px;

  .artwork-list {
    position: relative;
    max-width: 780px;
    margin: 0 auto;

    .swiper-slide {
      height: 300px;
      background: #fff;
      color: #000;
    }
    .swiper-navi {
      position: absolute;
      top: calc(50% - 18px);

      &.swiper-navi-prev {
        left: -50px;
      }
      &.swiper-navi-next {
        right: -50px;
      }
      .material-symbols-outlined {
        font-size: 36px;
      }
    }
  }
}
</style>