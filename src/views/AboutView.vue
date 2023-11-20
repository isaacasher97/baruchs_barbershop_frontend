<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Footer,
  },
};
</script>

<style scoped>
#featured-header {
  color: #fff;
  margin-top: 25px;
}
</style>
