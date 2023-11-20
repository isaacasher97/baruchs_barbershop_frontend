<template>
  <div id="card-container" class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="../../public/imgs/contact-img.svg"
          class="img-fluid rounded-start"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <!-- Use 'tel:' URI scheme to make the phone number clickable -->
          <h5 class="card-title">
            <a :href="getTelLink()">&#128222; (347) 845 9131</a>
          </h5>
          <p class="card-text">
            Are you in search of an experienced and skilled Jewish DJ to elevate
            your event? Our expertise spans a range of occasions, including
            weddings, Bar Mitzvahs, Bat Mitzvahs, engagements, corporate events,
            and beyond. Headquartered in Brooklyn, NY, we proudly extend our
            services throughout NYC, Long Island, Connecticut, and New Jersey.
            Entrust us with the musical ambiance, and let our professionalism
            enhance the significance of your special moments.
          </p>
          <p class="card-text">Call Today!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  methods: {
    getTelLink() {
      // Format the phone number for the 'tel:' URI scheme
      return "tel:+13478459131";
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#card-container {
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  padding: 10px;
  width: 98%;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 20px;
}
p {
  color: #fff;
  font-weight: 700;
}
</style>
