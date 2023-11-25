<template>
  <SpecialEffectsBanner />
  <SpecialEffects />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import SpecialEffectsBanner from "../components/SpecialEffectsBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";
import SpecialEffects from "../components/SpecialEffects.vue";

export default {
  name: "HomeView",
  components: {
    SpecialEffectsBanner,
    ContactFormTwo,
    Footer,
    SpecialEffects,
  },
};
</script>

<style></style>
