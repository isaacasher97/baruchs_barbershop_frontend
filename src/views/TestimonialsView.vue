<template>
  <TestimonialsBanner />
  <CustomerTestimonials />
  <ContactFormTwo />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import CustomerTestimonials from "../components/CustomerTestimonials.vue";
import TestimonialsBanner from "../components/TestimonialsBanner.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";
export default {
  name: "HomeView",
  components: {
    Footer,
    CustomerTestimonials,
    TestimonialsBanner,
    ContactFormTwo,
  },
};
</script>

<style></style>
