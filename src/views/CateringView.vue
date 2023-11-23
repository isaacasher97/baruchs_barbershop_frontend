<template>
  <CateringBanner />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import CateringBanner from "../components/CateringBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    CateringBanner,
    ContactFormTwo,
    Footer,
  },
};
</script>

<style></style>
