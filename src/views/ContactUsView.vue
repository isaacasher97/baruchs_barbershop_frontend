<template>
  <ContactBanner />
  <ContactForm />
  <Footer />
</template>

<script>
import ContactBanner from "../components/ContactBanner.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "HomeView",
  components: {
    ContactBanner,
    Footer,
    ContactForm,
  },
};
</script>

<style></style>
