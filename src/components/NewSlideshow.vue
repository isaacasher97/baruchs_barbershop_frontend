<template>
  <div id="new-car">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../public/imgs/djslide.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption animate-slide hidden-xs">
            <h1 class="animated-text">
              Elevate Your Event with Expert DJs and Seamless Party Planning
            </h1>
            <p class="animated-text">
              Unforgettable Celebrations Tailored to Your Style and Occasion
            </p>
            <a style="text-decoration: none" href="/about" class="bn5"
              >About Us</a
            ><br /><br />
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../public/imgs/weddingphoto.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption animate-slide hidden-xs">
            <h1 class="animated-text">
              Picture-Perfect Celebrations with Exceptional Imagery
            </h1>
            <p class="animated-text">
              Capture the Essence of Your Occasion in Every Frame.
            </p>
            <a style="text-decoration: none" href="/services" class="bn5"
              >Services</a
            >
            <br /><br />
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../public/imgs/Parties.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption animate-slide hidden-xs">
            <h1 class="animated-text">
              Entertainment Extravaganza for Unforgettable Memories
            </h1>
            <p class="animated-text">
              Transforming Ordinary Events into Joyful Celebrations
            </p>
            <a
              style="text-decoration: none"
              href="https://wa.me/c/13478459131"
              target="_blank"
              class="bn5"
              >Contact Us</a
            >
            <br /><br />
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../public/imgs/engagement.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption animate-slide hidden-xs">
            <h1 class="animated-text">
              Life's Milestones Is Our Expertise: Birthdays, Engagements, and
              More
            </h1>
            <p class="animated-text">
              Turning Every Special Moment into a Timeless Celebration
            </p>
            <a style="text-decoration: none" href="#" class="bn5"
              >Frequently Asked Questions</a
            >
            <br /><br />
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../public/imgs/singing.jpg"
            class="d-block w-100"
            alt=""
          />
          <div class="carousel-caption animate-slide hidden-xs">
            <h1 class="animated-text">
              Harmony in Every Note: Elevate Your Event with Enchanting Vocal
              Performances
            </h1>
            <p class="animated-text">
              Immerse Your Celebration in the Magic of Soulful Singing and
              Melodic Bliss
            </p>
            <a
              style="text-decoration: none"
              href="https://www.youtube.com/@baruchentertainment9802/videos"
              target="_blank"
              class="bn5"
              >View All Music</a
            >
            <br /><br />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewGallery",
};
</script>

<style scoped>
.carousel-item {
  height: 100%; /* Set a fixed height for the carousel items */
}

.carousel-caption {
  background-color: #fce055;
  background-image: linear-gradient(
    319deg,
    #fce055 0%,
    #256eff 37%,
    #46237a 100%
  );
}

.animate-slide {
  animation: slideIn 1s ease-in-out;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-text {
  animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button styling */
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

/* Button Styling End */

/* Custom styling to ensure visibility on smaller screens */
@media (max-width: 767px) {
  .carousel-caption {
    display: block;
    position: static;
    padding: 20px; /* Add padding for better visibility */
  }
}
</style>
