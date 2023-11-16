<template>
  <div id="yt-carousel">
    <Carousel :items-to-show="2.5" :wrap-around="true">
      <Slide v-for="(video, index) in videos" :key="index">
        <div class="carousel__item">
          <iframe
            width="100%"
            height="315"
            :src="'https://www.youtube.com/embed/' + video.videoId"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="video-details">
            <div class="video-title">{{ video.title }}</div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      videos: [
        {
          videoId: "RYZ_O__f148",
          title: "Baruch Ent - Hava Nagilah Cover",
        },
        {
          videoId: "zXDQ32I6IB0",
          title: "Baruch Ent - Настроение кайф",
        },
        {
          videoId: "L3yK0NVp7GQ",
          title: "Baruch Ent - Я сегодня гуляю",
        },
        {
          videoId: "LlFJghVtwQU",
          title: "Baruch Ent - מתחילים ‏מחדש",
        },
        {
          videoId: "mxI4lLj9syU",
          title: "Baruch Ent - ‏להינשא הלילה חופה",
        },
        {
          videoId: "_0CKTvm3VNE",
          title: "Baruch Ent - מי שמאמין לא מפחד",
        },
      ],
    };
  },
});
</script>

<style scoped>
.carousel__item {
  border: 1px solid #ddd; /* Border style */
  padding: 10px; /* Padding for spacing */
  text-align: center;
}

.video-details {
  margin-top: 10px; /* Margin between video and title */
}

.video-title {
  font-weight: bold;
}

.carousel {
  padding: 20px;
  background: #121212;
}

.video-title {
  color: #fff;
}
</style>
