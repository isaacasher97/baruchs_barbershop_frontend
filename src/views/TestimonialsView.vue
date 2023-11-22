<template>
  <TestimonialsBanner />
  <CustomerTestimonials />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import CustomerTestimonials from "../components/CustomerTestimonials.vue";
import TestimonialsBanner from "../components/TestimonialsBanner.vue";
export default {
  name: "HomeView",
  components: {
    Footer,
    CustomerTestimonials,
    TestimonialsBanner,
  },
};
</script>

<style></style>
