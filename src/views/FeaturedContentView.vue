<template>
  <FeaturedContentBanner />
  <Carousel />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import FeaturedContentBanner from "../components/FeaturedContentBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
export default {
  name: "HomeView",
  components: {
    Footer,
    Carousel,
    FeaturedContentBanner,
    ContactFormTwo,
  },
};
</script>

<style></style>
