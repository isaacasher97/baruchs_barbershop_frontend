<template>
  <!-- Get In Touch -->
  <section class="contact" id="connect">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 wow zoomIn" data-wow-duration="1.5s">
          <img src="../../public/imgs/contact-img.svg" alt="Image" />
        </div>
        <div class="col-12 col-md-6 wow fadeIn" data-wow-duration="1.5s">
          <h2 style="color: #fff">Get In Touch</h2>
          <form action="https://formspree.io/f/xpzgegdy" method="POST">
            <div class="row">
              <div class="col-12 col-sm-6 px-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="col-12 col-sm-6 px-1">
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <div class="col-12 col-sm-6 px-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="col-12 col-sm-6 px-1">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone No."
                  required
                />
              </div>
              <div class="col-12 px-1">
                <textarea
                  rows="6"
                  name="messsage"
                  placeholder="Message"
                ></textarea>
                <button><span>Send</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Get In Touch End -->
</template>

<script>
export default {
  name: "ContactFormTwo",
};
</script>

<style scoped>
/************ Contact Form Css ************/
.contact {
  background-color: #4834d4;
  background-image: linear-gradient(315deg, #4834d4 0%, #0c0c0c 74%);
  padding: 60px 0 60px 0;
}
.contact img {
  width: 92%;
}
.contact h2 {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 30px;
}
.contact form input,
.contact form textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
}
.contact form input:focus,
.contact form textarea:focus {
  background: rgba(255, 255, 255, 1);
  color: #121212;
}
.contact form input::placeholder,
.contact form textarea::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.contact form input:focus::placeholder,
.contact form textarea:focus::placeholder {
  color: #121212;
  opacity: 0.8;
}
.contact form button {
  font-weight: 700;
  color: #000;
  background-color: #fff;
  padding: 14px 48px;
  font-size: 18px;
  margin-top: 25px;
  border-radius: 0;
  position: relative;
  transition: 0.3s ease-in-out;
}
.contact form button span {
  z-index: 1;
  position: relative;
}
.contact form button:hover {
  color: #fff;
}
.contact form button::before {
  content: "";
  background: #121212;
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: 0.3s ease-in-out;
}
.contact form button:hover::before {
  width: 100%;
}

.contact h2 {
  margin-bottom: 20px;
}
.contact form input,
.contact form textarea {
  border-radius: 14px;
  padding: 16px 20px;
  font-size: 15px;
}
.contact form input::placeholder,
.contact form textarea::placeholder {
  font-size: 14px;
}
.contact form button {
  padding: 12px 40px;
  font-size: 15px;
  margin-top: 16px;
}
.contact img {
  width: 96%;
}
</style>
