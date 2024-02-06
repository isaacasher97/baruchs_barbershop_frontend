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
    <div class="button">
      <button class="bn39">
        <a style="text-decoration: none; color: white" href="/featuredcontent"
          >See All</a
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "YouTubeCarouselLimited",
  data() {
    return {
      videos: [
        {
          videoId: "nXH4M7h6sx4",
          title: "Baruch Ent - עם ישראל חי Cover",
        },
        {
          videoId: "zXDQ32I6IB0",
          title: "Baruch Ent - Настроение кайф",
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

/* button styling  */
.bn39 {
  background-image: linear-gradient(135deg, #008aff, #86d472);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
  margin: 0 auto;
  margin-top: 20px;
}

.bn39:hover {
  color: #fff;
}

.bn39 .bn39span {
  align-items: center;
  background: #0e0e10;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn39:hover .bn39span {
  background: transparent;
}

/* button styling end  */
</style>
