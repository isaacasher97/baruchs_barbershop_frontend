<template>
  <DjsBanner />
  <DjsAndEntertainers />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import DjsBanner from "../components/DjsBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";
import DjsAndEntertainers from "../components/DjsAndEntertainers.vue";

export default {
  name: "HomeView",
  components: {
    DjsBanner,
    ContactFormTwo,
    Footer,
    DjsAndEntertainers,
  },
};
</script>

<style></style>
