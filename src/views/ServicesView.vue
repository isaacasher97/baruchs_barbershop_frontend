<template>
  <ServicesBanner />
  <Services />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import ServicesBanner from "../components/ServicesBanner.vue";
import Services from "../components/Services.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
export default {
  name: "HomeView",
  components: {
    Footer,
    ServicesBanner,
    Services,
    ContactFormTwo,
  },
};
</script>

<style></style>
