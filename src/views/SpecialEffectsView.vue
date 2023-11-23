<template>
  <SpecialEffectsBanner />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import SpecialEffectsBanner from "../components/SpecialEffectsBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    SpecialEffectsBanner,
    ContactFormTwo,
    Footer,
  },
};
</script>

<style></style>
