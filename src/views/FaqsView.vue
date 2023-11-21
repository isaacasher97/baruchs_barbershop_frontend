<template>
  <FaqsBanner />
  <Faqs />
  <Footer />
</template>

<script>
import FaqsBanner from "../components/FaqsBanner.vue";
import Footer from "../components/Footer.vue";
import Faqs from "../components/Faqs.vue";

export default {
  name: "HomeView",
  components: {
    FaqsBanner,
    Footer,
    Faqs,
  },
};
</script>

<style></style>
