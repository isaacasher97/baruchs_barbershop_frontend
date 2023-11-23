<template>
  <div class="catering-container">
    <h2 id="featured-header">Lighting Services</h2>
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
          name: "Large Lighting Production",
          image: "https://i.imgur.com/NwXLHzD.jpg",
          description:
            "Our expansive high-end lighting production package exceeds the conventional standard, featuring an increased number of moving heads. While the typical range is 4-6 moving heads, sufficient for most venues, opting for 10 or more can elevate the light show experience to an unprecedented level. Additionally, we offer concert-grade moving heads known for their exceptional brightness, nearly double that of standard counterparts. Our commitment to providing tailored recommendations ensures that your event receives the optimal lighting setup, enhancing its visual impact in accordance with your specific requirements and preferences.",
          price: "Contact Us",
        },
        {
          name: "Standard Lighting Production",
          image: "https://i.imgur.com/4UujVYR.jpg",
          description:
            "The standard high-end lighting package offers either 4 or 6 moving heads, the quantity being determined by the size of the venue. Each package includes the presence of a dedicated light technician on-site, tasked with crafting a bespoke light show tailored to the characteristics of each room. Our skilled technician actively synchronizes the lighting with the music and environment, ensuring an immersive and dynamic visual experience. While primarily designed for the dancefloor, these lights are versatile, serving as effective mood and spot lighting. During transitional moments, such as guest arrivals or meal sessions, the lights can be strategically directed towards ceilings, floors, and/or walls to create an ambient and visually captivating effect.",
          price: "Contact Us",
        },
        {
          name: "Basic Lighting Production",
          image: "https://i.imgur.com/YM9zRlU.jpg",
          description:
            "Offering a cost-effective solution for more compact spaces, this lighting package features two moving heads. The operation of these moving heads can be managed by a skilled light technician, manually syncing the lights with the music and ambiance. Alternatively, they can be set to sound mode, allowing the lights to follow the music dynamically. For those with budget constraints, we also provide more economical dancefloor lighting options, ensuring that even tighter budgets can incorporate a lively and entertaining visual element into their event.",
          price: "Contact Us",
        },
        {
          name: "Pinspots",
          image: "https://i.imgur.com/E4gcIlG.jpg",
          description:
            "Enhance the visual impact of your flower centerpieces by employing a white pin spotlight that highlights their details. In dimly lit settings, a pin spot becomes a subtle yet impactful detail, providing a striking contrast and accentuating the elegance of your centerpieces. Our approach involves strategically mounting pin spots on ceilings, walls, or poles, precisely directing the light onto key focal points such as centerpieces, buffet tables, and cakes. This meticulous technique ensures that these elements stand out prominently, contributing to an aesthetically pleasing and well-defined ambiance in the room.",
          price: "Contact Us",
        },
        {
          name: "LED Uplightiing",
          image: "https://i.imgur.com/DOK9hjl.jpg",
          description:
            "For a profound transformation of the room, creating an unmistakable 'party feel,' uplighting stands as an exceptional method. Our approach involves installing wireless LED lights strategically positioned around the room, casting vibrant beams upward along the walls. This versatile lighting system allows you to choose virtually any color, adding a dynamic and customizable visual element to the space. Furthermore, during dance segments, synchronization with the music enables the lights to change colors dynamically, enhancing the overall celebratory atmosphere.",
          price: "Contact Us",
        },
        {
          name: "Custom Monogram Lights",
          image: "https://i.imgur.com/4y7zwkc.jpg",
          description:
            "Elevate the personalization of your event with a high-quality monogram name projection expertly displayed on the wall or ceiling. Our services extend beyond static projections, encompassing dynamic options such as moving pictures and 3D animated gobos. With a diverse array of styles available, you can tailor how your name or logo is presented to suit the desired aesthetic. A thoughtful touch involves aligning the displayed logo with the one featured on your invitation, providing a cohesive thematic link that enhances the overall visual identity of your event.",
          price: "Contact Us",
        },
        {
          name: "Gobo Lighting",
          image: "https://i.imgur.com/lvmWo7h.jpg",
          description:
            "Transform bare walls into thematic focal points using our Gobo monogram projectors. These versatile devices serve as excellent additions, allowing you to project various themed shapes onto walls and infuse the room with a tailored ambiance. Elevate the visual appeal of your space by effortlessly filling it with personalized and engaging patterns, enhancing the overall atmosphere of the room.",
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
