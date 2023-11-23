<template>
  <div id="services-container">
    <h2 id="featured-header">Services</h2>
    <div class="services-list">
      <router-link to="/services/djs-entertainers" class="service">
        <div class="service-image djs-entertainers"></div>
        <h3>DJ's & Entertainers</h3>
      </router-link>

      <router-link to="/services/photo-video" class="service">
        <div class="service-image photography"></div>
        <h3>Photo & Video</h3>
      </router-link>

      <router-link to="/services/live-music-orchestra" class="service">
        <div class="service-image live-music"></div>
        <h3>Live Music & Orchestra</h3>
      </router-link>

      <router-link to="/services/lighting-decor" class="service">
        <div class="service-image lighting"></div>
        <h3>Lighting & Event Decor</h3>
      </router-link>
    </div>
    <div class="button">
      <button class="bn39">
        <a style="text-decoration: none; color: white" href="/services"
          >See All</a
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesLimited",
};
</script>

<style scoped>
#services-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 25px;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
}
.services-list {
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
}
#featured-header {
  color: #fff;
  margin-top: 25px;
}
h3 {
  color: #fff;
}

.service {
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: transform 0.3s ease-out;
}
.service:hover {
  transform: scale(1.05);
}

.service h3 {
  text-align: center;
  margin-top: 10px;
}

.service-image {
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

.catering {
  background-image: url("../../public/imgs/catering-image.jpg");
}

.photography {
  background-image: url("../../public/imgs/photography-image.jpg");
}

.lighting {
  background-image: url("../../public/imgs/lighting-image.jpg");
}

.special-effects {
  background-image: url("../../public/imgs/special-effects-image.jpg");
}

.live-music {
  background-image: url("../../public/imgs/live-music-image.jpg");
}

.djs-entertainers {
  background-image: url("../../public/imgs/dj-entertainers-image.jpg");
}

.chazzan-singers {
  background-image: url("../../public/imgs/chazzan-singers-image.jpg");
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
  margin: 0 auto;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;
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
