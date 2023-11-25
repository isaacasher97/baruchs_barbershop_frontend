<template>
  <h2 id="featured-header">Photo & Video</h2>
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
          name: "Photo Booths",
          image: "https://i.imgur.com/GmZyq2K.jpg",
          description:
            "Photobooths consistently prove to be a crowd-pleaser at nearly every event, transcending the role of a mere photo-capturing device to curate a memorable and interactive experience among guests. Encouraging both lighthearted and formal photo sessions, the photobooth fosters a sense of camaraderie as guests capture moments together. The added allure of receiving an instant print-out photo serves as the ideal event keepsake, ensuring attendees depart with a tangible memento that encapsulates the spirit of the occasion, destined to be cherished for years to come.",
          price: "Contact Us",
        },
        {
          name: "Event Photography",
          image: "https://i.imgur.com/SSRWd7m.jpg",
          description:
            "Immerse your event in the artistry of our professional photographers, dedicated to capturing the essence of every moment. From candid and spontaneous interactions to meticulously composed group shots and intricate details, our photographers skillfully document the unfolding narrative of your occasion. Meticulously edited, the result is a collection of high-quality images that immortalize the atmosphere, emotions, and beauty of your event. Whether presented in digital format for seamless online sharing or transformed into exquisite prints, our event photography service ensures that every cherished memory is preserved with a timeless elegance, ready to be relived and shared for years to come.",
          price: "Contact Us",
        },
        {
          name: "Drone Photo/Video",
          image: "https://i.imgur.com/h6cGxhB.jpg",
          description:
            "Elevate your event with the captivating allure of aerial perspectives, courtesy of cutting-edge drone technology. Our skilled drone operators skillfully navigate the skies to capture breathtaking aerial shots, offering a distinctive and panoramic view of your event venue and its surroundings. From sweeping vistas that showcase the grandeur of the location to dynamic shots that encapsulate the energy of the celebration, our drone photography/videography service adds a modern and cinematic dimension to your event documentation. Immerse your audience in the awe-inspiring visuals that only aerial views can provide, creating a lasting and unique visual narrative of your special occasion.",
          price: "Contact Us",
        },
        {
          name: "Live Streaming Services",
          image: "https://i.imgur.com/o310POm.jpg",
          description:
            "Break down geographical barriers and connect your event with a global audience through our professional live streaming services. Our skilled team leverages advanced streaming technology to seamlessly broadcast your event in real-time, ensuring that remote attendees can virtually participate from anywhere in the world. Whether it's a corporate conference, wedding ceremony, or special celebration, our live streaming services provide a dynamic and inclusive experience, allowing everyone to share in the excitement and significance of the moment. Embrace the power of technology to transcend physical boundaries and make your event accessible to a wider audience, fostering engagement and connection on a global scale.",
          price: "Contact Us",
        },
        {
          name: "Karaoke",
          image: "https://i.imgur.com/iJeo0ls.jpg",
          description:
            'Engage in a musical experience alongside your guests with our Karaoke package. This comprehensive offering includes premium wireless microphones for an optimal singing experience, a vibrant projector for displaying lyrics, and the choice of a 100" white screen or wall projection. Whether on a dedicated screen or an available wall, this package provides all the essential components for a lively and immersive karaoke session, ensuring everyone can participate in the joy of singing along.',
          price: "Contact Us",
        },
        {
          name: "Video Montages",
          image: "https://i.imgur.com/UGtTT52.jpg",
          description:
            "Add a personalized touch to your event by showcasing a video montage for your guests during downtimes. The flexibility of this feature allows you to choose between looping the slideshow throughout the night with muted playback or utilizing it as a formal presentation, integrating both visuals and audio through the main sound system for everyone to enjoy. This dynamic option ensures that your curated video content becomes a meaningful and engaging element of your event, tailored to suit the atmosphere you wish to create.",
          price: "Contact Us",
        },
        {
          name: "LED Video Wall Package",
          image: "https://i.imgur.com/rBUU3Ny.jpg",
          description:
            "Elevate your visual experience with our ultra-high-end video walls, capable of displaying a wide range of content. Managed by a dedicated Video DJ, these state-of-the-art displays offer versatility in showcasing various visuals. Our two popular sizes, 12ft x 8ft and 8ft x 4ft, provide expansive and impactful canvases for delivering immersive visual presentations that significantly enhance the overall atmosphere of your event.",
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
