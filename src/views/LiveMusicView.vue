<template>
  <LiveMusicBanner />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import LiveMusicBanner from "../components/LiveMusicBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    LiveMusicBanner,
    ContactFormTwo,
    Footer,
  },
};
</script>

<style></style>
