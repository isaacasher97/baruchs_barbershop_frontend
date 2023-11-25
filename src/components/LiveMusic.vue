<template>
  <h2 id="featured-header">Live Music</h2>
  <div class="catering-container">
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
          name: "Live Band",
          image: "https://i.imgur.com/rBhEPXuh.png",
          description:
            "Elevate the rhythm of your event with the vibrant energy of live music. Our party planners specialize in arranging live bands that cater to a spectrum of genres, ensuring a musical experience tailored to your unique tastes and the ambiance you envision. Whether you're drawn to the infectious beats of pop, the soulful melodies of jazz, the timeless allure of rock, or the sophisticated elegance of classical compositions, we curate a lineup that resonates with your preferences. Let the dynamic presence of a live band transform your celebration, creating an immersive and memorable atmosphere that captivates every guest.",
          price: "Contact Us",
        },
        {
          name: "Live Orchestra",
          image: "https://i.imgur.com/sCP1Esjh.jpg",
          description:
            "Immerse your event in a symphony of sophistication and elegance with our orchestral arrangements. Our party planners curate orchestras that offer a rich tapestry of classical and contemporary compositions, tailored to the formality and theme of your occasion. From the majestic swells of classical masterpieces to the modern allure of contemporary arrangements, our orchestras elevate the auditory experience, adding a touch of grandeur to weddings, galas, and corporate events. Let the harmonious melodies of a live orchestra set the tone for an unforgettable celebration that transcends the ordinary.",
          price: "Contact Us",
        },
        {
          name: "Solo Musicians",
          image: "https://i.imgur.com/30ltb2fh.jpg",
          description:
            "Unveil the magic of individual artistry at your event with our solo musicians. Whether it's the enchanting notes of a pianist, the soul-stirring melodies of a violinist, or the rhythmic grace of a guitarist, our solo performers create an intimate and personalized atmosphere. Perfect for smaller gatherings or to punctuate specific moments within a larger event, these musicians craft performances that resonate with emotion and captivate your audience. Let their singular talents weave a musical tapestry that adds a touch of elegance and emotion to your special occasion.",
          price: "Contact Us",
        },
        {
          name: "Themed Performances",
          image: "https://i.imgur.com/LTvuwjjh.jpg",
          description:
            "Immerse your event in a world of enchantment with our themed musical performances. Our party planners excel in crafting immersive experiences tailored to your event theme. From captivating costumes to choreography that tells a story, and special effects that add a touch of magic, these performances are designed to transport your guests into a unique and unforgettable realm. Whether it's a lively celebration or an elegant affair, our themed musical performances elevate your event, creating a sensory experience that leaves a lasting impression on all who attend.",
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
