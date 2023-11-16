<template>
  <div id="yt-carousel">
    <Carousel
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
      class="main-carousel"
    >
      <Slide v-for="(media, index) in mediaList" :key="index">
        <div class="carousel__item">
          <template v-if="media.type === 'image'">
            <img
              :src="media.url"
              :class="{
                'special-image':
                  media.url === 'https://i.imgur.com/0Gk1myB.jpg',
              }"
              alt="Image"
            />
          </template>
          <template v-else-if="media.type === 'video'">
            <iframe
              width="700px"
              height="515"
              :src="getYouTubeEmbedLink(media.url)"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </template>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
      class="thumbnail-carousel"
    >
      <Slide v-for="(media, index) in mediaList" :key="index">
        <div class="carousel__item" @click="slideTo(index)">
          <template v-if="media.type === 'image'">
            <img
              :src="media.url"
              :class="{
                thumbnail: true,
                'special-thumbnail':
                  media.url === 'https://i.imgur.com/0Gk1myB.jpg',
              }"
              alt="Thumbnail"
            />
          </template>
          <template v-else-if="media.type === 'video'">
            <img
              :src="videoThumbnail"
              alt="Video Thumbnail"
              class="thumbnail"
            />
          </template>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
    videoThumbnail: "https://i.imgur.com/bMQUEKf.png",
    mediaList: [
      { type: "image", url: "https://i.imgur.com/0Gk1myB.jpg" },
      { type: "video", url: "https://www.youtube.com/watch?v=CwBY5HxWvLw" },
      { type: "image", url: "https://i.imgur.com/tq0dzch.jpg" },
      // Add more media objects as needed
    ],
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    getYouTubeEmbedLink(url) {
      // Extract video ID from YouTube URL
      const videoIdMatch = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:.*(?:\/|v=)|[^\/]*\/(?:v=|u\/\w\/|embed\/|watch\?.*v=)))([^"&?\/\s]{11})/
      );
      const videoId = videoIdMatch ? videoIdMatch[1] : "";

      // Return the embed link
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
});
</script>

<style scoped>
.carousel__item {
  border: 1px solid #ddd; /* Border style */
  padding: 10px; /* Padding for spacing */
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}

.carousel {
  padding: 20px;
  background-color: #fce055;
  background-image: linear-gradient(
    319deg,
    #fce055 0%,
    #256eff 37%,
    #46237a 100%
  );
}

iframe {
  max-width: 100%;
}

.thumbnail {
  width: 100%;
  height: 100px; /* Set the desired height for the thumbnails */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
}

.special-image {
  /* Add styles for the special image here */
  width: 200px; /* Set the desired width for the special image */
}

.special-thumbnail {
  /* Add styles for the special thumbnail here */
  height: 120px; /* Set the desired height for the special thumbnail */
}

/* Responsive Styles for Screens with a Max Width of 450px */
@media only screen and (max-width: 450px) {
  .thumbnail {
    height: 80px; /* Adjust height for smaller screens */
  }

  .special-thumbnail {
    height: 60px; /* Adjust height for the special thumbnail on smaller screens */
  }
}
</style>
