<template>
  <h2 id="featured-header">Customer Testimonials</h2>
  <div id="cust-carousel">
    <Carousel :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="(testimonial, index) in testimonials" :key="index">
        <div class="carousel__item">
          <div class="testimonial-card">
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <p class="testimonial-author">{{ testimonial.author }}</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CustomerTestimonials",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      testimonials: [
        {
          text: "Baruch Entertainment is an amazingly talented performer who knows how to engage, motivate, and uplift an audience. I have always enjoyed listening and watching him perform. I highly recommend him!",
          author: "Donny Lowy ⭐⭐⭐⭐⭐",
        },
        {
          text: "Baruch Entertainment is the best DJ singer ever, with great music and service at the best price. I have used him before for parties, and he always delivers excellence.",
          author: "Moshe Marashli ⭐⭐⭐⭐⭐",
        },
        {
          text: "Baruch Entertainment is the number 1 singer in all of America he’s very professional  .",
          author: "Yosef Eliav ⭐⭐⭐⭐⭐",
        },
        {
          text: "I’ve hired Baruch Entertainemnt for my sons Brit Milah (circumcision) event. He was punctual, professional, read the crowd well & asked us for a list of songs that prefer to be played in advance. 10/10. We loved Baruch!",
          author: "Nataniel Natan Kay ⭐⭐⭐⭐⭐",
        },
        {
          text: "Baruch Entertainment has become the go-to for community events. Professional, courteous & priced right. All the services from Baruch Entertainment are top-notch!",
          author: "Ronald Sassoon ⭐⭐⭐⭐⭐",
        },
        {
          text: "The Best performance I have ever had fully experienced was with Baruch Entertainment. I highly recommend them for your next event",
          author: "Baruchai ⭐⭐⭐⭐⭐",
        },
        // Add more testimonials as needed
      ],
    };
  },
});
</script>

<style scoped>
.carousel__item {
  padding: 10px;
  text-align: center;
  margin: 0 10px; /* Adjust the margin for spacing */
}

.testimonial-card {
  border: 1px solid #121212;
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
}

.testimonial-text {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 900;
  color: #fff;
}

.testimonial-author {
  font-style: italic;
  color: #555;
}

.carousel {
  border-radius: 20px;
  padding: 20px;
  background-color: #f9fcff;
  background-image: linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%);
  display: flex;
}

#cust-carousel {
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
}
#featured-header {
  color: #fff;
  margin-top: 25px;
}

/* Responsive Styles for Screens with a Max Width of 450px */
@media only screen and (max-width: 450px) {
  .carousel__item {
    margin: 0 5px;
    padding: 5px;
  }
  .testimonial-card {
    padding: 10px;
  }
}
</style>
