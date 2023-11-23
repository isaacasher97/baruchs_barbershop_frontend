<template>
  <LightingEventBanner />
  <Lighting />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import LightingEventBanner from "../components/LightingEventBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";
import Lighting from "../components/Lighting.vue";

export default {
  name: "HomeView",
  components: {
    LightingEventBanner,
    ContactFormTwo,
    Footer,
    Lighting,
  },
};
</script>

<style></style>
