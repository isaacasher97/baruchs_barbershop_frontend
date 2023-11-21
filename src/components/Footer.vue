<template>
  <!-- Footer -->
  <footer
    id="bottomfooter"
    class="text-center text-lg-start bg-white text-muted"
  >
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span id="getconnected">Get connected on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div class="socials">
        <a
          href="https://www.instagram.com/baruch__entertainment/"
          target="_blank"
          class="me-4 link-secondary"
        >
          <i class="fab fa-facebook-f"></i>
          <img src="../../public/imgs/icons8-instagram.gif" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC3KmRw3aB2x_-ezl1kmcpJA"
          target="_blank"
          class="me-4 link-secondary"
        >
          <i class="fab fa-twitter"></i>
          <img src="../../public/imgs/icons8-youtube.gif" />
        </a>
        <a
          href="https://www.facebook.com/borukh.khafizov/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
          target="_blank"
          class="me-4 link-secondary"
        >
          <i class="fab fa-google"></i>
          <img src="../../public/imgs/icons8-facebook.gif" />
        </a>
        <a
          href="https://wa.me/c/13478459131"
          target="_blank"
          class="me-4 link-secondary"
        >
          <i class="fab fa-google"></i>
          <img
            style="width: 50px"
            src="../../public/imgs/icons8-whatsapp (1).gif"
          />
        </a>
        <a
          href="https://t.me/Baruch_Entertaimnent"
          target="_blank"
          class="me-4 link-secondary"
        >
          <i class="fab fa-google"></i>
          <img
            style="width: 50px"
            src="../../public/imgs/icons8-telegram.gif"
          />
        </a>
        <a
          href="https://soundcloud.com/b-k-798727976"
          target="_blank"
          class="me-4 link-secondary"
        >
          <i class="fab fa-google"></i>
          <img style="width: 70px" src="../../public/imgs/sclogoanim.gif" />
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3 text-secondary"></i>Baruch Entertainment
            </h6>
            <p>
              Experience excellence with us at Baruch Entertainment—your
              top-tier choice for event planning, music, and DJ services in New
              York. Elevate weddings, bar and bat mitzvahs, and engagements with
              our teams proven expertise. Choose distinction, choose Baruch
              Entertainment, and let's craft unforgettable moments together.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Services</h6>
            <p>Birthdays</p>
            <p>Engagements</p>
            <p>Weddings</p>
            <p>Bar/Bat Mitzvahs</p>
            <p>Brit Milahs</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="/about" class="text-reset">About Us</a>
            </p>
            <p>
              <a href="/faqs" class="text-reset">FAQ's</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact Us</h6>
            <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY</p>
            <p>
              <i class="fas fa-envelope me-3 text-secondary"></i>
              borukhkhafizov@yahoo.com
            </p>
            <p>
              <i class="fas fa-phone me-3 text-secondary"></i> 1 (347)-845-9131
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
      © 2023 Developed By:
      <a class="text-reset fw-bold" href="https://isaacasher.dev/"
        >Isaac Asher</a
      >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#bottomfooter {
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #335c81 74%);
}

.socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

p {
  color: #fff;
  font-weight: 500;
}

#getconnected {
  color: #fff;
  padding: 60px;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
