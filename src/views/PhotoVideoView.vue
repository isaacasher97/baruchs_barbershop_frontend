<template>
  <PhotoVideoBanner />
  <PhotoVideo />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import PhotoVideoBanner from "../components/PhotoVideoBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";
import PhotoVideo from "../components/PhotoVideo.vue";

export default {
  name: "HomeView",
  components: {
    PhotoVideoBanner,
    ContactFormTwo,
    Footer,
    PhotoVideo,
  },
};
</script>

<style></style>
