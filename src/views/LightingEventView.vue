<template>
  <LightingEventBanner />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import LightingEventBanner from "../components/LightingEventBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    LightingEventBanner,
    ContactFormTwo,
    Footer,
  },
};
</script>

<style></style>
