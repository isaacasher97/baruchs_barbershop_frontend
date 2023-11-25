<template>
  <h2 id="featured-header">Special Effects</h2>
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
          name: "Bubble Machines",
          image: "https://i.imgur.com/QIYXC71.jpg",
          description:
            "Infuse a playful and lively atmosphere into your moments with the addition of a bubble machine that fills the area with effervescent delight. This choice is particularly well-suited for events geared towards children, providing an enchanting and fun-filled experience that adds a touch of whimsy to the occasion.",
          price: "Contact Us",
        },
        {
          name: "Co2 Blaster Gun",
          image: "https://i.imgur.com/1P2ExAA.jpg",
          description:
            "Elevate the energy and excitement on the dancefloor with our remarkable Co2 blaster. Our cool-looking guns, illuminated for added visual appeal, deliver dynamic bursts of Co2 from our heavy-duty tanks. This feature provides a visually stunning and invigorating addition to enhance the overall atmosphere of the dancefloor, creating a memorable and immersive experience for your event.",
          price: "Contact Us",
        },
        {
          name: "Confetti Blaster",
          image: "https://i.imgur.com/CgexPMO.jpg",
          description:
            "Elevate your special moments to a star-studded level with a confetti blast, infusing excitement and cheer into your grand entrance, first dance, holiday parties, games, and various other celebratory occasions. Our customizable options allow you to select any color, combination of colors, and a variety of shapes, ensuring that the confetti perfectly complements the mood and theme of your event, making each moment truly memorable.",
          price: "Contact Us",
        },
        {
          name: "Dancing On Clouds Effect",
          image: "https://i.imgur.com/GmhHCr1.jpg",
          description:
            "Enhance the enchantment of your event with our low-lying fog machine, powered by a substantial load of dry ice. This innovative device blankets the dancefloor with a mist, creating the illusion of dancing among the clouds. Particularly popular for the bride and groom's 'first dance,' this effect adds a cinematic and remarkable touch, elevating the visual appeal of this special moment and contributing to the overall magical ambiance of your celebration.",
          price: "Contact Us",
        },
        {
          name: "Sparklers & Fireworks",
          image: "https://i.imgur.com/iKcpLT7.jpg",
          description:
            "Leave your guests in awe as they witness the stunning spectacle of sparklers, adding a touch of theatrical brilliance to your grand entrance, first dance, and other significant moments. This captivating addition infuses your event with heightened excitement and ensures a visually striking experience, capturing the beauty of these special instances in unforgettable photographs.",
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
