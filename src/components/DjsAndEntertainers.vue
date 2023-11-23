<template>
  <div class="catering-container">
    <h2 id="featured-header">DJs & Entertainers</h2>
    <div v-for="(service, index) in services" :key="index">
      <div class="services-card" @click="toggleInfo(index)">
        <img :src="service.image" :alt="service.name" class="service-image" />
        <div class="overlay">{{ service.name }}</div>
      </div>

      <div v-if="selectedService === index" class="info-container">
        <h2>{{ service.name }}</h2>
        <p>{{ service.description }}</p>
        <p>
          <strong>Price:</strong> <a href="/contactus">{{ service.price }}</a>
        </p>
        <!-- Add more details as needed -->

        <button class="bn5" @click="closeInfo">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: "DJ Services",
          image: "https://i.imgur.com/tyuksU1.jpg",
          description:
            "Immerse your event in a mesmerizing sonic journey with our expert DJ services. Beyond curating playlists that perfectly match your theme and audience tastes, our skilled DJs seamlessly transition into the role of Master of Ceremonies. With charisma and precision, they handle announcements and guide the flow of your celebration. Adding an interactive touch, our DJs engage the crowd with captivating activities, ensuring an event that is not just heard but experienced. Trust us to create a seamless, vibrant, and unforgettable celebration that resonates with your vision and leaves a lasting impression on all attendees.",
          price: "Contact Us",
        },
        {
          name: "Instrument Players",
          image: "https://i.imgur.com/6USBvhb.jpg",
          description:
            "Elevate the ambiance of your event by introducing skilled and interactive instrumentalists to the stage, imparting a captivating rhythm to the dance floor. Our roster exclusively features top-tier performers, including drummers, darbuka/doira players, saxophonists, keyboardists, violinists, and vocalists. The fusion of live instruments and a DJ ensures a sophisticated, dynamic, and sensational musical experience. Whether showcasing solo performances during the cocktail hour or the chuppa ceremony, or providing accompaniment in the main room, our professional instrumentalists guarantee a refined and memorable musical atmosphere.",
          price: "Contact Us",
        },
        {
          name: "MC/Host",
          image: "https://i.imgur.com/ktepr4Y.jpg",
          description:
            "During highly formal occasions, it is imperative to appoint a proficient individual behind the microphone to handle announcements, ensure the seamless and organized flow of the event, and even engage and energize the audience. The inclusion of a Master of Ceremonies (MC) varies across cultures, with some necessitating this role while others do not. Our services encompass a diverse array of MCs, including bilingual presenters, selected based on the specific requirements and stylistic preferences associated with the event in question",
          price: "Contact Us",
        },
        {
          name: "Chuppah/Ceremony Singer",
          image: "https://i.imgur.com/4kFYJ4z.jpg",
          description:
            "Evoke the emotional essence of the chuppah ceremony through a captivating performance featuring a vocalist and a skilled keyboard player. This collaborative musical arrangement stands as the optimal choice for enhancing the ceremonial atmosphere. Our curated selection of talent includes individuals proficient in both Sephardic and Ashkenazi styles to cater to diverse preferences. The keyboard player, adept at utilizing various virtual instruments, complements the singer, ensuring a comprehensive and harmonious performance that resonates with the significance of the occasion.",
          price: "Contact Us",
        },
        {
          name: "Party Motivator",
          image: "https://i.imgur.com/PYnlNna.jpg",
          description:
            "Enhance the entertainment experience by enlisting the expertise of a Party Motivator who actively engages and interacts with guests. This specialized motivator is particularly indispensable for events primarily attended by children and teenagers, such as Bar/Bat Mitzvahs. Their proficiency lies in cultivating a lively atmosphere through crowd hyping, dance guidance, interactive game facilitation, and exuding contagious energy on the dance floor. The presence of a Party Motivator is virtually a necessity for ensuring a spirited and enjoyable ambiance, especially tailored to the preferences of younger audiences.",
          price: "Contact Us",
        },
        {
          name: "Dancers",
          image: "https://i.imgur.com/GFZOBRe.jpg",
          description:
            "Augmenting the main MC with side dancers proves to be a highly effective strategy in maintaining an energetic and vibrant event atmosphere. These side dancers not only elevate the overall energy but also actively participate in leading dances alongside the MC. Distinguished by their proficiency, our side dancers are also skilled breakdancers capable of delivering a captivating performance. The inclusion of professional breakdancers offers a unique and memorable element to the event, providing guests with the opportunity to witness an engaging and unexpected showcase. Elevate your event by introducing side dancers who seamlessly complement the main MC, creating an unforgettable experience for all attendees.",
          price: "Contact Us",
        },

        // Add more service objects with their details
      ],
      selectedService: null,
    };
  },
  methods: {
    toggleInfo(index) {
      this.selectedService = this.selectedService === index ? null : index;
    },
    closeInfo() {
      this.selectedService = null;
    },
  },
};
</script>

<style scoped>
#featured-header {
  color: #fff;
  margin-top: 25px;
}

.services-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin: 10px auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  background-color: #f6f6f6;
  background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
  width: 90%;
}

.services-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-image {
  width: 90%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.75rem;
  text-align: center;
  font-weight: 700;
  background-color: #0beef9;
  background-image: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);
  border-radius: 20px;
  opacity: 0.9;
  padding: 10px;
  transition: opacity 0.3s ease-in-out;
}

.services-card:hover .overlay {
  opacity: 1;
}

.info-container {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 10px;
  color: #fff;
  background-color: #0beef9;
  background-image: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 0 auto;
}

.info-container > p {
  font-weight: 700;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  text-decoration: underline;
}

/* button styling  */
.bn5 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.bn5:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingbn5 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowingbn5 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.bn5:active {
  color: #000;
}

.bn5:active:after {
  background: transparent;
}

.bn5:hover:before {
  opacity: 1;
}

.bn5:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #191919;
  left: 0;
  top: 0;
  border-radius: 10px;
}
/* button styling end  */

@media (max-width: 830px) {
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1rem;
    text-align: center;
    font-weight: 700;
    background-color: #0beef9;
    background-image: linear-gradient(315deg, #0beef9 0%, #48a9fe 74%);
    border-radius: 20px;
    opacity: 0.9;
    padding: 10px;
    transition: opacity 0.3s ease-in-out;
  }
}
@media (max-width: 768px) {
  .services-card {
    width: 100%;
    margin: 15px auto;
    background-color: #f6f6f6;
    background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
    width: 90%;
  }

  .info-container {
    width: 100%;
  }
}

.catering-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
