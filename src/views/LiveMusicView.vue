<template>
  <LiveMusicBanner />
  <LiveMusic />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import LiveMusicBanner from "../components/LiveMusicBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";
import LiveMusic from "../components/LiveMusic.vue";

export default {
  name: "HomeView",
  components: {
    LiveMusicBanner,
    ContactFormTwo,
    Footer,
    LiveMusic,
  },
};
</script>

<style></style>
