<template>
  <h2 id="featured-header">All Services</h2>
  <div class="services-container">
    <router-link to="/catering" class="service">
      <div class="service-image catering"></div>
      <h3>Catering</h3>
    </router-link>

    <router-link to="/photography" class="service">
      <div class="service-image photography"></div>
      <h3>Photography & Videography</h3>
    </router-link>

    <router-link to="/lighting" class="service">
      <div class="service-image lighting"></div>
      <h3>Lighting + Event Decor</h3>
    </router-link>

    <router-link to="/special-effects" class="service">
      <div class="service-image special-effects"></div>
      <h3>Special Effects</h3>
    </router-link>

    <router-link to="/live-music" class="service">
      <div class="service-image live-music"></div>
      <h3>Live Music & Orchestra</h3>
    </router-link>

    <router-link to="/djs-entertainers" class="service">
      <div class="service-image djs-entertainers"></div>
      <h3>DJ's + Entertainers</h3>
    </router-link>

    <router-link to="/chazzan-singers" class="service">
      <div class="service-image chazzan-singers"></div>
      <h3>Chazzan + Singers</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
.services-container {
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 25px;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
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
</style>
