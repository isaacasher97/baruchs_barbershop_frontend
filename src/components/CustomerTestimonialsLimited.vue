<template>
  <div id="customer-testimonials">
    <h2 id="featured-header">Customer Testimonials</h2>

    <div class="testimonials-list">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-item"
      >
        <div class="testimonial-card">
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <p class="testimonial-author">{{ testimonial.author }}</p>
        </div>
      </div>
    </div>
    <div class="button">
      <button class="bn39">
        <a style="text-decoration: none; color: white" href="/testimonials"
          >See All</a
        >
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomerTestimonials",
  data() {
    return {
      testimonials: [
        {
          text: "Dj Baruch was amazing entertainer at our Sisters Outreach event. He sings live songs, he is upbeat and good hearted person. We appreciate!",
          author: "Milana Amramova ⭐⭐⭐⭐⭐",
        },
        {
          text: "Baruch Entertainment is the best DJ singer ever, with great music and service at the best price. I have used him before for parties, and he always delivers excellence.",
          author: "Moshe Marashli ⭐⭐⭐⭐⭐",
        },
        {
          text: "Baruch Entertainment has become the go-to for community events. Professional, courteous & priced right. All the services from Baruch Entertainment are top-notch!",
          author: "Ronald Sassoon ⭐⭐⭐⭐⭐",
        },
        // Add more testimonials as needed
      ],
    };
  },
});
</script>

<style scoped>
#customer-testimonials {
  background-color: #2b4162;
  background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
  padding: 20px;
  border-radius: 20px;
}

.testimonials-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.testimonial-item {
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
}

.testimonial-card {
  border: 1px solid #121212;
  border-radius: 10px;
  padding: 15px;
  text-align: left;
  background-color: #0beef9;
  background-image: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);
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

#customer-testimonials {
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
  .testimonial-item {
    flex: 0 0 calc(100% - 20px);
  }
}

/* button styling  */
.bn39 {
  background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
  margin: 0 auto;
}

.bn39:hover {
  color: #fff;
}
.testimonial-card:hover {
  transform: scale(1.05);
}

.bn39 .bn39span {
  align-items: center;
  background: #0e0e10;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn39:hover .bn39span {
  background: transparent;
}
/* button styling end  */
</style>
