<template>
  <ServicesBanner />
  <Services />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import ServicesBanner from "../components/ServicesBanner.vue";
import Services from "../components/Services.vue";
export default {
  name: "HomeView",
  components: {
    Footer,
    ServicesBanner,
    Services,
  },
};
</script>

<style></style>
