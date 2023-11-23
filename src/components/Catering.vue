<template>
  <div class="catering-container">
    <h2 id="featured-header">Catering Services</h2>
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
          name: "Menu Planning",
          image: "https://i.imgur.com/IAK1YUM.jpg",
          description:
            "Party planners work with clients to create a customized menu that suits the theme, budget, and dietary preferences of the event. This may include appetizers, main courses, desserts, and beverages.",
          price: "Contact Us",
        },
        {
          name: "Food Preparation and Cooking",
          image: "https://i.imgur.com/XTBoXqF.jpg",
          description:
            "Our dedicated team of highly skilled and professional chefs is committed to creating a culinary experience that delights your senses. From meticulous preparation to the artful presentation, we take pride in sourcing the finest ingredients to ensure each dish is a masterpiece. Whether you crave innovative flavors, classic favorites, or international cuisines, our culinary experts bring creativity and expertise to the kitchen. Let us elevate your event with fresh and delicious dishes that not only satisfy your taste buds but also leave a lasting impression on your guests.",
          price: "Contact Us",
        },
        {
          name: "Service Staff",
          image: "https://i.imgur.com/2EpW3bq.jpg",
          description:
            "Our experienced service staff is dedicated to ensuring the smooth and efficient flow of your event. With a keen eye for detail and a commitment to hospitality, our team creates an inviting atmosphere from arrival to departure. Drawing on years of expertise, our staff anticipates and fulfills your guests' needs, ensuring a seamless and enjoyable experience. Trust us to turn your event into a well-coordinated and memorable celebration.",
          price: "Contact Us",
        },
        {
          name: "Catering Equipment and Rentals",
          image: "https://i.imgur.com/cwxFI3n.jpg",
          description:
            "Leave the logistics to us! Our party planners specialize in securing all the essential catering equipment for your event. From tables and chairs to linens, dinnerware, and glassware, we handle every detail to ensure your venue is set up with precision and style. Going beyond the basics, we collaborate with trusted rental companies to provide any additional items needed for your unique event. Our goal is to create an ambiance that reflects your vision, seamlessly blending functionality with aesthetic appeal. Trust our expertise to transform your venue into a well-equipped and visually stunning space, perfectly tailored to your event requirements.",
          price: "Contact Us",
        },
        {
          name: "Specialty Catering",
          image: "https://i.imgur.com/90dWJPJ.jpg",
          description:
            "Elevate your event with our Specialty Catering services tailored to your unique taste and preferences. Whether it's a themed celebration or specific dietary requirements, our party planners curate a culinary experience that transcends expectations. From exotic ethnic cuisines to gourmet delicacies and dietary-specific options like vegetarian, vegan, or gluten-free, we specialize in creating menus that delight every palate. Immerse your guests in a world of flavors and let our expert chefs craft a dining experience that reflects the essence of your event. Trust us to turn your vision into a culinary masterpiece.",
          price: "Contact Us",
        },
        {
          name: "Beverage Services",
          image: "https://i.imgur.com/z6HtqCB.jpg",
          description:
            "Quench the thirst of your guests with our comprehensive Beverage Services. We provide a diverse range of both alcoholic and non-alcoholic beverages to suit every taste. Elevate your event further with our full bar service, complete with skilled bartenders ready to craft a selection of enticing cocktails. Whether it's a refreshing mocktail or a sophisticated mixed drink, our beverage offerings add a touch of flair to your celebration. Let us handle the drinks, so you can toast to a memorable and enjoyable event.",
          price: "Contact Us",
        },
        {
          name: "Dessert Stations",
          image: "https://i.imgur.com/65UQz4o.jpg",
          description:
            "Indulge your sweet tooth with our enchanting Dessert Stations. Our party planners curate delightful displays featuring an array of sweet treats, including decadent cakes, mouthwatering cupcakes, irresistible cookies, and exquisite pastries. Elevate your event with a visually stunning and delectable dessert experience that adds a touch of sweetness to every celebration. From elegant weddings to lively parties, our dessert stations are designed to leave a lasting impression on your guests.",
          price: "Contact Us",
        },
        {
          name: "Food Presentation and Styling",
          image: "https://i.imgur.com/wS5j2Dw.jpg",
          description:
            "Elevate your event to a feast for the eyes with our Food Presentation and Styling service. We understand that presentation is key, and our party planners are dedicated to ensuring that every dish is a work of art. Collaborating with skilled chefs and food stylists, we meticulously craft visual experiences that align with the overall theme of your event. From elegant and sophisticated to playful and vibrant, our food presentation adds a touch of creativity to your dining experience. Impress your guests with a culinary journey that stimulates not only the taste buds but also the visual senses.",
          price: "Contact Us",
        },
        {
          name: "Tastings",
          image: "https://i.imgur.com/VoMy2t9.jpg",
          description:
            "Experience a sneak peek of culinary excellence with our Tastings service. Before your event, our party planners arrange personalized tastings, allowing you to sample and savor menu items to perfection. This hands-on experience empowers you to make informed decisions about the food choices for your upcoming celebration. From savory entrees to delectable desserts, our tastings ensure that every flavor is a delightful preview of the culinary journey that awaits your guests. Immerse yourself in a world of taste and refinement, as we work together to create a menu that surpasses your expectations.",
          price: "Contact Us",
        },
        {
          name: "Cleanup Services",
          image: "https://i.imgur.com/BdSQIYY.jpg",
          description:
            "Relax and enjoy your event to the fullest with our Cleanup Services. After the celebration, our party planners seamlessly coordinate with the catering staff to ensure that your venue is left in pristine condition. From swiftly removing catering equipment to meticulous cleaning of dining areas, we handle the post-event details with care and efficiency. Our dedicated team goes beyond the ordinary, making sure that every trace of the celebration is tidied up, allowing you to reminisce about the memorable moments without the worry of cleanup. Trust us to leave your venue spotless and ready for its next beautiful occasion.",
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
