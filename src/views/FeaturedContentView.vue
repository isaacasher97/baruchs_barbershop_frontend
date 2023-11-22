<template>
  <FeaturedContentBanner />
  <Carousel />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import FeaturedContentBanner from "../components/FeaturedContentBanner.vue";
export default {
  name: "HomeView",
  components: {
    Footer,
    Carousel,
    FeaturedContentBanner,
  },
};
</script>

<style></style>
