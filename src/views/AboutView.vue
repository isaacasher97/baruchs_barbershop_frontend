<template>
  <div class="about">
    <AboutBanner />
    <AboutInfo />
    <ContactFormTwo />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import AboutBanner from "../components/AboutBanner.vue";
import AboutInfo from "../components/AboutInfo.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";

export default {
  name: "HomeView",
  components: {
    Footer,
    AboutBanner,
    AboutInfo,
    ContactFormTwo,
  },
};
</script>

<style scoped>
#featured-header {
  color: #fff;
  margin-top: 25px;
}
</style>
