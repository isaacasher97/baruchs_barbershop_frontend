<template>
  <!-- Banner -->
  <section class="banner" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-12 col-md-6 col-xl-7 wow fadeIn"
          data-wow-duration="1.5s"
        >
          <br /><br />
          <h1 style="color: #fff">
            Hi, I'm Baruch.
            <span
              class="txt-rotate"
              data-period="1000"
              data-rotate='[ "A Musician", "A DJ", "An Entertainer", "A Performer" ]'
            ></span>
            From NYC
          </h1>
          <p style="color: #fff; font-weight: 700">
            Greetings, I'm Baruch Khafizov, a highly seasoned professional
            specializing in event planning, music, and DJ services, based in the
            vibrant hub of New York City.<br /><br />
            With a distinguished reputation for orchestrating truly
            extraordinary experiences, I specialize in tailoring events, ranging
            from weddings to mitzvahs, with an unwavering focus on providing
            personalized service.<br /><br />
            My expertise extends beyond event execution. With a unique emphasis
            on musical artistry and meticulous planning, I ensure seamless and
            memorable experiences that leave a lasting impression.
            <br /><br />Whether it's crafting the enchanting ambiance of a
            wedding or capturing the celebratory spirit of a mitzvah, my
            commitment to professionalism and perfection shines through. Choose
            distinction and elevate your event journey with Baruch Khafizov—an
            unparalleled choice for those seeking extraordinary and personalized
            experiences in the heart of New York City.
          </p>
          <button class="bn5" style="margin: 0 auto; margin-bottom: 25px">
            <a
              style="color: #fff; text-decoration: none"
              href="https://wa.me/c/13478459131"
              target="_blank"
              >Contact Us 📲</a
            >
          </button>
        </div>
        <div
          class="col-12 col-md-6 col-xl-5 wow zoomIn"
          data-wow-duration="1.5s"
        >
          <img
            style="border-radius: 20%"
            src="../../public/imgs/baruchone.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Banner End -->
</template>

<script>
export default {
  name: "Hero",
};

// Text Animate JS
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 155 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
</script>

<style scoped>
/************ Banner Css ************/
.banner {
  margin-top: 0;
  padding: 260px 0 100px 0;
  background-image: url("../../public/imgs/herobgtwo.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner .taglin {
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(
    90.21deg,
    rgba(170, 54, 124, 0.5) -5.91%,
    rgba(74, 47, 189, 0.5) 111.58%
  );
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
}
.banner h1 {
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.2em;
  margin-bottom: 20px;
  display: inline-block;
}
.banner p {
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
}
.banner button {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 60px;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
}
.banner button i {
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
}
.banner button:hover i {
  margin-left: 25px;
}

.banner img {
  animation: updown 3s linear infinite;
  width: 100%;
}
@keyframes updown {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }
}

/* Button Styling  */

.bn5 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.bn5:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingbn5 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowingbn5 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.bn5:active {
  color: #000;
}

.bn5:active:after {
  background: transparent;
}

.bn5:hover:before {
  opacity: 1;
}

.bn5:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #191919;
  left: 0;
  top: 0;
  border-radius: 10px;
}

/* Button Styling End  */

/* Responsiv css */
@media (max-width: 1700px) {
  nav.navbar ul.navbar-nav li.nav-item a.nav-link {
    padding: 0 20px;
    font-size: 15px;
  }
  .social-icon a {
    width: 35px;
    height: 35px;
  }
  .social-icon a::before {
    width: 35px;
    height: 35px;
  }
  .navbar-text button {
    padding: 13px 28px;
    font-size: 15px;
  }
  nav.navbar a.navbar-brand {
    width: 10%;
  }
  .banner {
    padding: 200px 0 60px 0;
  }
  .banner h1 {
    font-size: 52px;
  }
  .banner p,
  .skill p,
  .project p {
    font-size: 15px;
  }
  .banner .taglin {
    font-size: 15px;
  }
  .banner button {
    font-size: 15px;
  }
  .banner button i {
    font-size: 23px;
  }
  .skill h2,
  .project h2,
  .contact h2 {
    font-size: 38px;
  }
  .project .nav.nav-pills .nav-link {
    padding: 15px 0;
    font-size: 14px;
  }
  .proj-txtx h4 {
    font-size: 26px;
  }
  .proj-txtx span {
    font-size: 14px;
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
  .newsletter-bx {
    border-radius: 52px;
    padding: 80px 80px;
    margin-bottom: 80px;
    margin-top: -120px;
  }
  .new-emil-bx input {
    font-size: 15px;
  }
  .new-emil-bx button {
    padding: 15px 52px;
    border-radius: 15px;
  }
  .newsletter-bx h3 {
    font-size: 25px;
  }
  .footer p {
    font-size: 12px;
  }
  .footer img {
    width: 22%;
  }
  .skill-slider .item h5 {
    font-size: 18px;
  }
  .skill-slider .owl-nav button.owl-next,
  .skill-slider .owl-nav button.owl-prev {
    width: 18px;
  }
  .skill-slider .owl-nav button::before {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 1368px) {
  nav.navbar {
    padding: 14px 0;
  }
  .banner {
    padding: 170px 0 60px 0;
  }
  .banner h1 {
    font-size: 44px;
  }
  .banner p,
  .skill p,
  .project p {
    font-size: 13px;
  }
  .skill h2,
  .project h2,
  .contact h2 {
    font-size: 32px;
  }
  .banner button {
    margin-top: 45px;
  }
  .skill-slider {
    width: 88%;
  }
  .skill p {
    margin: 14px 0 50px 0;
  }
  .proj-txtx h4 {
    font-size: 22px;
  }
  .proj-txtx span {
    font-size: 12px;
  }
  .contact form input,
  .contact form textarea {
    border-radius: 14px;
    padding: 14px 15px;
    font-size: 14px;
  }
  .contact form input::placeholder,
  .contact form textarea::placeholder {
    font-size: 13px;
  }
  .newsletter-bx h3 {
    font-size: 22px;
  }
  .new-emil-bx input {
    font-size: 14px;
  }
  .new-emil-bx button {
    padding: 14px 45px;
    border-radius: 13px;
    font-size: 14px;
  }
  .skill-bx {
    margin-top: -35px;
  }
}

@media (max-width: 1199px) {
  main .container {
    max-width: 1075px;
  }
  .banner {
    padding: 150px 0 50px 0;
  }
  .banner h1 {
    font-size: 36px;
  }
  .project p {
    width: 65%;
  }
  .project .nav.nav-pills {
    width: 75%;
  }
  .newsletter-bx {
    border-radius: 50px;
    padding: 80px 50px;
    margin-bottom: 50px;
    margin-top: -110px;
  }
  .footer img {
    width: 26%;
  }
  .contact img {
    width: 100%;
  }
  .banner img {
    width: 90%;
    margin-left: auto;
    display: block;
  }
}

@media (max-width: 1025px) {
  main .container {
    max-width: 960px;
  }
  .banner h1 {
    font-size: 32px;
  }
  .banner button {
    margin-top: 35px;
  }
  .skill-bx {
    border-radius: 55px;
    padding: 40px 20px;
  }
  .project {
    padding: 50px 0;
  }
  .project p {
    width: 75%;
  }
  .project .nav.nav-pills {
    width: 85%;
  }
  .contact {
    padding: 60px 0 150px 0;
  }
  .newsletter-bx {
    margin-top: -100px;
  }
  nav.navbar a.navbar-brand {
    width: 12%;
  }
  .banner p {
    width: 100%;
  }
}

@media (max-width: 991px) {
  .project .nav.nav-pills {
    width: 100%;
  }
  nav.navbar ul.navbar-nav li.nav-item a.nav-link {
    padding: 0 13px;
    font-size: 15px;
  }
  nav.navbar a.navbar-brand {
    width: 15%;
  }
  .newsletter-bx {
    border-radius: 35px;
    padding: 60px 25px;
    margin-bottom: 50px;
    margin-top: -80px;
  }
  .project p {
    width: 100%;
  }
  .skill-slider {
    width: 100%;
  }
  .skill-slider .item img {
    width: 55%;
    margin: 0 auto 15px auto;
  }
  .banner h1 {
    font-size: 25px;
  }
  .banner .taglin {
    font-size: 13px;
  }
  .newsletter-bx h3 {
    font-size: 20px;
  }
  .footer {
    padding: 0 0 28px 0;
  }
}

@media (max-width: 767px) {
  div#navbarNav {
    position: absolute;
    top: 60px;
    background: #1f1f1f;
    left: 0;
    right: 0;
    transition: 0.3s ease-in-out;
  }
  nav.navbar a.navbar-brand {
    width: 26%;
  }
  .banner {
    background-position: left;
    padding: 100px 0 50px 0;
  }
  .banner h1 {
    font-size: 24px;
  }
  .banner img {
    width: 100%;
  }
  .contact img {
    width: 100%;
    margin-bottom: 30px;
  }
  .newsletter-bx {
    border-radius: 35px;
    padding: 35px 14px;
    margin-bottom: 50px;
    margin-top: -85px;
  }
  .banner button {
    margin-top: 25px;
    margin-bottom: 35px;
  }
  .footer img {
    width: 35%;
  }
  .newsletter-bx h3 {
    font-size: 20px;
    margin-bottom: 22px;
    text-align: center;
  }
  .footer img {
    width: 40%;
    margin: 0 auto 25px auto;
    display: block;
  }
  .footer .social-icon a img {
    margin: 0;
  }
  nav.navbar ul.navbar-nav li.nav-item a.nav-link {
    padding: 16px 15px;
    font-size: 16px;
    border-bottom: 1px solid rgb(255 255 255 / 20%);
  }
  span.navbar-text {
    flex-wrap: wrap;
  }
  span.navbar-text .social-icon {
    display: block;
    margin-left: 0;
    padding: 10px 15px;
    border-bottom: 1px solid rgb(255 255 255 / 20%);
    width: 100%;
  }
  .navbar-text button {
    padding: 13px 28px;
    font-size: 15px;
    margin: 15px 0 10px 15px;
    overflow: hidden;
  }
  .navbar-text button::before {
    width: 100%;
    left: -200px;
    z-index: 0;
  }
  .navbar-text button:hover::before {
    width: 100%;
    left: 0;
  }
  .navbar-text button span {
    z-index: 1;
    position: relative;
  }
  nav.navbar.scrolled {
    padding: 8px 0;
  }
  nav.navbar.scrolled div#navbarNav {
    top: 52px;
  }
  .skill-bx {
    margin-top: 0;
  }
  .project .nav.nav-pills {
    width: 100%;
    border-radius: 0;
  }
  .project .nav.nav-pills li.nav-item {
    width: 100%;
  }
  button#pills-contact-tab {
    /* border: 0px solid rgba(255, 255, 255, 0.5); */
    border-radius: 0;
  }
  button#pills-home-tab {
    /* border: 0px solid rgba(255, 255, 255, 0.5); */
    border-radius: 0;
  }
  button#pills-profile-tab {
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 0px solid rgba(255, 255, 255, 0.5);
    border-bottom: 0px solid rgba(255, 255, 255, 0.5);
  }
}
</style>
