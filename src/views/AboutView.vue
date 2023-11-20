<template>
  <div class="about">
    <AboutBanner />
    <AboutInfo />
    <Faqs />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import AboutBanner from "../components/AboutBanner.vue";
import AboutInfo from "../components/AboutInfo.vue";
import Faqs from "../components/Faqs.vue";

export default {
  name: "HomeView",
  components: {
    Footer,
    AboutBanner,
    AboutInfo,
    Faqs,
  },
};
</script>

<style scoped>
#featured-header {
  color: #fff;
  margin-top: 25px;
}
</style>
