<template>
  <DjsBanner />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import DjsBanner from "../components/DjsBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    DjsBanner,
    ContactFormTwo,
    Footer,
  },
};
</script>

<style></style>
