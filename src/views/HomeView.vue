<template>
  <div class="home">
    <div class="hero">
      <Hero />
      <NewGallery />
      <ContactCard />
      <CustomerTestimonials />
      <Slideshow />
      <h2 id="featured-header">Featured Content</h2>
      <Carousel />
    </div>
    <Footer />
  </div>
</template>

<script>
import Slideshow from "../components/Slideshow.vue";
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import Hero from "../components/Hero.vue";
import NewGallery from "../components/NewSlideshow.vue";
import ContactCard from "../components/ContactCard.vue";
import CustomerTestimonials from "../components/CustomerTestimonials.vue";

export default {
  name: "HomeView",
  components: {
    Slideshow,
    Footer,
    Carousel,
    Hero,
    NewGallery,
    ContactCard,
    CustomerTestimonials,
  },
};
</script>

<style scoped>
#featured-header {
  color: #fff;
  margin-top: 25px;
}
</style>
