<template>
  <div class="home">
    <div class="hero">
      <Hero />
      <NewGallery />
      <ContactCard />
      <CustomerTestimonialsLimited />
      <ServicesLimited />
      <!-- <Slideshow /> -->
      <CarouselLimited />
      <ContactFormTwo />
    </div>
    <Footer />
  </div>
</template>

<script>
import Slideshow from "../components/Slideshow.vue";
import Footer from "../components/Footer.vue";
import CarouselLimited from "../components/CarouselLimited.vue";
import Hero from "../components/Hero.vue";
import NewGallery from "../components/NewSlideshow.vue";
import ContactCard from "../components/ContactCard.vue";
import CustomerTestimonialsLimited from "../components/CustomerTestimonialsLimited.vue";
import ServicesLimited from "../components/ServicesLimited.vue";
import ContactFormTwo from "../components/ContactFormTwo.vue";

export default {
  name: "HomeView",
  components: {
    Slideshow,
    Footer,
    CarouselLimited,
    Hero,
    NewGallery,
    ContactCard,
    CustomerTestimonialsLimited,
    ServicesLimited,
    ContactFormTwo,
  },
};
</script>

<style scoped></style>
