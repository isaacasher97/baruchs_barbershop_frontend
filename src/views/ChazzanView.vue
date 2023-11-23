<template>
  <ChazzanBanner />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import ChazzanBanner from "../components/ChazzanBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    ChazzanBanner,
    ContactFormTwo,
    Footer,
  },
};
</script>

<style></style>
