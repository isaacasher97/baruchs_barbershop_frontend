<template>
  <PhotoVideoBanner />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import PhotoVideoBanner from "../components/PhotoVideoBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    PhotoVideoBanner,
    ContactFormTwo,
    Footer,
  },
};
</script>

<style></style>
