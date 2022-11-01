<template>
  <div v-if="sliders.length">
    <vueper-slides slide-image-inside autoplay>
      <template v-slot:arrow-left>
        <i class="fa fa-arrow-left" />
      </template>
      <vueper-slide
        v-for="(slider, i) in sliders"
        :key="i"
        :image="slider.image"
        :link="slider.link"
      />
      <template v-slot:arrow-right>
        <i class="fa fa-arrow-right"></i>
      </template>
    </vueper-slides>
  </div>
  <div v-else>
    <ContentLoader />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { ContentLoader } from "vue-content-loader";
import { VueperSlide, VueperSlides } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { useSliderStore } from "../../store/module/slider";

export default {
  name: "Slider",
  components: {
    ContentLoader,
    VueperSlide,
    VueperSlides,
  },
  setup() {
    const sliderStore = useSliderStore();

    onMounted(() => {
      sliderStore.getSlider();
    });

    const sliders = computed(() => {
      return sliderStore.sliders;
    });

    console.log(sliders.value);

    return {
      sliders,
    };
  },
};
</script>

<style scoped>
.vueperslide__image {
  transform: scale(1.5) rotate(-10deg);
}
.vueperslide__title {
  font-size: 7em;
  opacity: 0.7;
}
</style>
