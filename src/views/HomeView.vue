<template>
  <div class="home">
    <div class="hero">
      <Hero />
      <Slideshow />
      <h2 id="featured-header">Featured Content</h2>
      <Carousel />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Slideshow from "../components/Slideshow.vue";
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import Hero from "../components/Hero.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Slideshow,
    Footer,
    Carousel,
    Hero,
  },
};
</script>

<style scoped>
#featured-header {
  color: #fff;
  margin-top: 25px;
}
</style>
