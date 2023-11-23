<template>
  <ChazzanBanner />
  <Chazzan />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import ChazzanBanner from "../components/ChazzanBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
import Footer from "../components/Footer.vue";
import Chazzan from "../components/Chazzan.vue";

export default {
  name: "HomeView",
  components: {
    ChazzanBanner,
    ContactFormTwo,
    Footer,
    Chazzan,
  },
};
</script>

<style></style>
