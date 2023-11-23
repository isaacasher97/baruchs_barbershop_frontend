<template>
  <CateringBanner />
  <Catering />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import CateringBanner from "../components/CateringBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";
import Catering from "../components/Catering.vue";

export default {
  name: "HomeView",
  components: {
    CateringBanner,
    ContactFormTwo,
    Footer,
    Catering,
  },
};
</script>

<style></style>
