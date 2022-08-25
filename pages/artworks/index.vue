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
    <!-- <div class="masonry-container">
      <div class="masonry-item s">
        <span>1</span>
      </div>
      <div class="masonry-item m">
        <img src="~images/the/qrcode.webp" alt="">
      </div>
      <div class="masonry-item l">
        <span>3</span>
      </div>
      <div class="masonry-item l">
        <span>4</span>
      </div>
      <div class="masonry-item s">
        <span>5</span>
      </div>
      <div class="masonry-item l">
        <span>6</span>
      </div>
      <div class="masonry-item l">
        <span>7</span>
      </div>
      <div class="masonry-item l">
        <span>8</span>
      </div>
      <div class="masonry-item s">
        <span>9</span>
      </div>
      <div class="masonry-item m">
        <span>10</span>
      </div>
      <div class="masonry-item s">
        <span>11</span>
      </div>
      <div class="masonry-item m">
        <span>12</span>
      </div>
      <div class="masonry-item l">
        <span>13</span>
      </div>
      <div class="masonry-item s">
        <span>14</span>
      </div>
      <div class="masonry-item m">
        <span>15</span>
      </div>
      <div class="masonry-item s">
        <span>16</span>
      </div>
    </div> -->
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
  .masonry-container {
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 260px);
    grid-auto-rows: 10px;
    justify-content: center;
  }
  .masonry-item {
    background: #333;
    margin: 5px;
    font-size: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    grid-row-end: span auto;

    &.s {
      grid-row-end: span 26;
    }
    &.m {
      grid-row-end: span 33;
    }
    &.l {
      grid-row-end: span 45;
    }
    img {
      width: 100%;
    }
  }
}
</style>