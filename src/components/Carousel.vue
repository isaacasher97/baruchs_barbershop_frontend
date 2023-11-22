<template>
  <div id="yt-carousel">
    <h2 id="featured-header">Featured Content</h2>
    <div class="videos-list">
      <div v-for="(video, index) in videos" :key="index" class="video-item">
        <div class="video-container">
          <iframe
            width="100%"
            height="100%"
            :src="'https://www.youtube.com/embed/' + video.videoId"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-details">
          <div class="video-title">{{ video.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YouTubeCarousel",
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
};
</script>

<style scoped>
#featured-header {
  color: #fff;
  margin-bottom: 20px;
}
#yt-carousel {
  max-width: 100%;
  margin: 0 auto;
  padding: 60px;
  border-radius: 20px;
  margin-bottom: 25px;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
}
.videos-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.video-item {
  flex: 0 0 calc(50% - 20px);
  margin: 10px;
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio (square) */
  border: 3px dashed #fff;
  border-radius: 20px;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.video-details {
  margin-top: 10px; /* Margin between video and title */
}

.video-title {
  font-weight: bold;
  color: #fff;
  font-size: 1.3rem;
}

#yt-carousel {
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
}

/* Responsive Styles for Screens with a Max Width of 450px */
@media only screen and (max-width: 450px) {
  .video-item {
    flex: 0 0 calc(100% - 20px);
  }
  .video-details {
    margin-top: 5px; /* Adjust margin between video and title for smaller screens */
  }
}
</style>
