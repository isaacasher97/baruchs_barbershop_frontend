<template>
  <div class="home">
    <div class="hero">
      <Slideshow />
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

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Slideshow,
    Footer,
    Carousel,
  },
};
</script>
