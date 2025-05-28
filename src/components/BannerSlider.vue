<template>
  <div class="banner-slider">
    <div
      class="banner-slide"
      v-for="(banner, index) in banners"
      :key="index"
      :class="{ active: currentIndex === index }"
    >
      <img :src="banner.image" alt="Banner Image" />
    </div>

    <div class="banner-controls">
      <span
        v-for="(banner, index) in banners"
        :key="'control-' + index"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import banner1 from '@/assets/Banner/Banner1.jpg';
import banner2 from '@/assets/Banner/banner2.jpg';
import banner3 from '@/assets/Banner/banner6.jpg';
import banner4 from '@/assets/Banner/banner4.jpg';
import banner5 from '@/assets/Banner/Banner3.jpg';
import banner6 from '@/assets/Banner/banner3.jpg';

export default {
  name: 'BannerSlider',
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      banners: [
        { image: banner6 },
        { image: banner3 },
        { image: banner5 },
        { image: banner2 },
        { image: banner1 },
        { image: banner4 },
      ],
    };
  },
  mounted() {
    this.startSlideShow();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startSlideShow() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.banners.length;
      }, 5000);
    },
    goToSlide(index) {
      this.currentIndex = index;
      clearInterval(this.intervalId);
      this.startSlideShow();
    },
  },
};
</script>

<style scoped>
.banner-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 4rem;
}

/* Each Slide */
.banner-slide {
  display: none;
  position: relative;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.banner-slide.active {
  display: block;
  opacity: 1;
}

.banner-slide img {
  width: 100%;
  height: 90vh;
  max-height: 600px;
  object-fit: cover;
  display: block;
  filter: brightness(1);
  image-rendering: auto;
}

/* Dot Controls */
.banner-controls {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 6px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #42b983;
}

/* Media Queries for Responsive Design */
@media (max-width: 900px) {
  .banner-slide img {
    height: 50vh;
  }
}

@media (max-width: 600px) {
  .banner-slide img {
    height: 40vh;
  }

  .dot {
    height: 10px;
    width: 10px;
    margin: 0 4px;
  }

  @media (max-width: 480px) {
    .banner-slider{
      display: none;
    }
  }
}
</style>
