<template>
  <div class="catering-container">
    <h2 id="featured-header">Chazzan Services</h2>
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
          name: "Ceremony Planning",
          image: "https://i.imgur.com/frfE5mP.jpg",
          description:
            "Our skilled team collaborates with a chazzan to meticulously plan your ceremony, tailoring it to your preferences and honoring Jewish traditions. We curate a meaningful experience by selecting the perfect prayers, blessings, and readings that reflect the essence of your union, ensuring a ceremony that beautifully encapsulates your love and commitment.",
          price: "Contact Us",
        },
        {
          name: "Chazzan Selection",
          image: "https://i.imgur.com/6BwnvsE.jpg",
          description:
            "We take pride in recommending or coordinating with a highly qualified chazzan, ensuring their expertise in officiating Jewish wedding ceremonies. Our meticulous process guarantees that the chosen chazzan is not only skilled but also intimately familiar with the specific Jewish traditions and customs preferred by the couple. Your ceremony deserves a knowledgeable and harmonious officiant, and we are dedicated to making that choice a seamless and meaningful part of your wedding planning journey.",
          price: "Contact Us",
        },
        {
          name: "Music & Song Selection",
          image: "https://i.imgur.com/SlxwtxY.jpg",
          description:
            " We collaborate with the chazzan to curate a selection of appropriate musical elements, incorporating traditional Jewish wedding songs and melodies that resonate with the significance of your union. Whether you envision a soulful rendition or a harmonious choir, we coordinate with talented musicians to ensure the musical backdrop aligns seamlessly with the atmosphere you desire, creating a memorable and melodious experience for you and your guests.",
          price: "Contact Us",
        },
        {
          name: "Preparation and Rehearsals",
          image: "https://i.imgur.com/syJBO68.jpg",
          description:
            "Our meticulous approach extends to the organization of rehearsals, involving the chazzan, the couple, and any other participants. We believe in ensuring a seamless and well-coordinated ceremony, and these rehearsals play a pivotal role in achieving that goal. Our team provides expert guidance on the order of events and timing, leaving no detail to chance. By investing in thorough preparations and rehearsals, we aim to instill confidence in every participant, allowing you to walk down the aisle with the assurance that your ceremony will unfold flawlessly.",
          price: "Contact Us",
        },
        {
          name: "Ketubah Ceremony",
          image: "https://i.imgur.com/UrQ1jNA.jpg",
          description:
            "Immerse yourselves in the beauty of tradition with our dedicated coordination of the chazzan's involvement in the Ketubah signing ceremony—a cherished Jewish pre-wedding ritual. We understand the significance of this moment, and our team ensures that the chazzan's presence enhances the sanctity and solemnity of the occasion. By seamlessly coordinating this integral aspect of your wedding, we aim to contribute to the richness of your ceremony, honoring the traditions that make your union truly special.",
          price: "Contact Us",
        },
        {
          name: "Ceremony Customization",
          image: "https://i.imgur.com/aGFwfYT.jpg",
          description:
            " Your story is unique, and so should be your wedding ceremony. We take pride in offering a range of options for personalizing every aspect of the ceremony to authentically reflect the couple's individual preferences. Our approach combines creativity and respect for tradition, ensuring that your ceremony becomes a bespoke expression of your love. From meaningful rituals to tailored vows, we work closely with you to weave together elements that make your union distinctly yours while upholding the rich tapestry of Jewish traditions.",
          price: "Contact Us",
        },
        {
          name: "Coordination with Rabbi",
          image: "https://i.imgur.com/bvvJejg.jpg",
          description:
            "In our commitment to creating a harmonious and meaningful wedding ceremony, we actively collaborate with the rabbi officiating. Our goal is to ensure a seamless integration of the chazzan's role, crafting a ceremony that flows effortlessly and resonates with the spiritual significance you seek. By fostering open communication and coordination with the rabbi, we work together to orchestrate a ceremony that honors both tradition and individual preferences, creating a cohesive and heartfelt celebration of your union.",
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
