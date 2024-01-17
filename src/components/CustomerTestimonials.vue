<template>
  <div id="customer-testimonials">
    <!-- TrustBox widget - Review Collector -->
    <div
      class="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="657361b235c51e659f729812"
      data-style-height="52px"
      data-style-width="100%"
    >
      <a
        href="https://www.trustpilot.com/review/baruchentertainment.com"
        target="_blank"
        rel="noopener"
        ><img
          style="width: 200px"
          src="https://support.trustpilot.com/hc/article_attachments/360022601899"
      /></a>
    </div>
    <!-- End TrustBox widget -->
    <h2 id="featured-header">All Customer Testimonials</h2>
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
        {
          text: "Baruch Entertainment super talented the  music is awesome check it out on YouTube the music is LIT🔥 They do many different types of events super recommended!",
          author: "Nachman Braunfeld ⭐⭐⭐⭐⭐",
        },
        {
          text: "Baruch Entertainment and his team are wonderful! Have seen him in action at multiple weddings and were privileged enough to have him DJ ours! An incredible night of dancing!! I definitely would recommend him to anyone who wants a fun event.",
          author: "Yaron Bedid ⭐⭐⭐⭐⭐",
        },
        {
          text: "Best DJ ever Baruch is number one he know how to get it done call him and he will show it all to everyone.",
          author: "Zevulun ⭐⭐⭐⭐⭐",
        },
        {
          text: "Baruch Entertainment rocks the house with killer DJ skills and an amazing voice. The mix of tracks keeps the energy high, and Baruch's stage presence amps up the party vibe. It's not just entertainment; it's a guaranteed good time you won't forget.",
          author: "Sam Munkes ⭐⭐⭐⭐⭐",
        },
        {
          text: "Dj Baruch was amazing entertainer at our Sisters Outreach event. He sings live songs, he is upbeat and good hearted person. We appreciate!Milana Amramova",
          author: "Milana Amramova ⭐⭐⭐⭐⭐",
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
.testimonial-card:hover {
  transform: scale(1.05);
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
</style>
