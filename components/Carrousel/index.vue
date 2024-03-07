<script setup lang="ts">
import { ref } from 'vue';

interface Image {
  id: number;
  src: string;
  caption: string;
  alt: string;
}

const images: Image[] = ref([
  {
    id: 1,
    src: '/carrousel/smartfony-motorola.png',
    caption: 'Smartfony Motorola',
    alt: 'Smartfony Motorola',
  },
  {
    id: 2,
    src: '/carrousel/sprzet-rtv-promocja.png',
    caption: 'Sprzęt RTV Promocja',
    alt: 'Sprzęt RTV Promocja',
  },
  {
    id: 3,
    src: '/carrousel/laptop-nauczyciele.png',
    caption: 'Laptop dla nauczyciela',
    alt: 'Laptop dla nauczyciela',
  },
  {
    id: 4,
    src: '/carrousel/premiera-nothing-phone.png',
    caption: 'Premiera Nothing Phone (2a)',
    alt: 'Premiera Nothing Phone (2a)',
  },
  {
    id: 5,
    src: '/carrousel/dzien-kobiet.png',
    caption: 'Otwarte na każdą okazję',
    alt: 'Dzien Kobiet',
  },
  {
    id: 6,
    src: '/carrousel/lenovo-tab.png',
    caption: 'Lenovo Tab M11 8GB',
    alt: 'Lenovo Tab',
  },
  {
    id: 7,
    src: '/carrousel/lego.png',
    caption: 'LEGO na Dzień Kobiet',
    alt: 'LEGO',
  },
]);

const activeIndex = ref(0);
const startX = ref(0);
const endX = ref(0);

function startSwipe(event) {
  startX.value = event.touches[0].clientX;
}

function onSwipe(event) {
  endX.value = event.touches[0].clientX;
}

function endSwipe() {
  if (startX.value - endX.value > 50) {
    // przesunięcie palcem w lewo
    nextImage();
  } else if (startX.value - endX.value < -50) {
    // przesunięcie palcem w prawo
    prevImage();
  }
}

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  activeIndex.value =
    (activeIndex.value - 1 + images.value.length) % images.value.length;
};

const setActiveIndex = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="carousel">
    <div
      class="carousel-container"
      @touchstart="startSwipe"
      @touchmove="onSwipe"
      @touchend="endSwipe"
    >
      <button class="carousel-control left is-hidden-touch" @click="prevImage">
        &lt;
      </button>
      <div
        v-for="(image, index) in images"
        :key="image.id"
        class="carousel-item"
        :style="{ display: index === activeIndex ? 'block' : 'none' }"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
      <button class="carousel-control right is-hidden-touch" @click="nextImage">
        &gt;
      </button>
    </div>
    <div class="carousel-indicators is-hidden-touch">
      <span
        v-for="(image, index) in images"
        :key="image.id"
        class="carousel-caption"
        :class="{ 'is-active': index === activeIndex }"
        @click="setActiveIndex(index)"
      >
        {{ image.caption }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './carrousel.scss';
</style>
