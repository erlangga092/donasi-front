<template>
  <div class="h-screen bg-gray-300">
    <HeaderVue />
    <router-view></router-view>
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "./components/atoms/Header.vue";
import FooterVue from "./components/atoms/Footer.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
  },
};
</script>
