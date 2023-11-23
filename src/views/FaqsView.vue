<template>
  <FaqsBanner />
  <Faqs />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import FaqsBanner from "../components/FaqsBanner.vue";
import Footer from "../components/Footer.vue";
import Faqs from "../components/Faqs.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";

export default {
  name: "HomeView",
  components: {
    FaqsBanner,
    Footer,
    Faqs,
    ContactFormTwo,
  },
};
</script>

<style></style>
