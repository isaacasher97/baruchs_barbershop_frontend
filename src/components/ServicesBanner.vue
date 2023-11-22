<template>
  <div class="card bg-dark text-white">
    <img src="../../public/imgs/bannerimgdupe.jpg" class="card-img" alt="" />
    <div class="card-img-overlay">
      <h4 class="card-title">Services</h4>
      <div class="links">
        <a href="/">Home</a>
        <a href="#"> > Services</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesBanner",
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  text-decoration: underline;
}

.card-img-overlay {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
