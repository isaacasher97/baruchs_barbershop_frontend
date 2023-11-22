<template>
  <div id="app">
    <div id="top-banner">
      <div class="banner-left">
        <span>Baruch Entertainment</span>
        <span
          >1 (347)-845-9131<img
            style="width: 20px"
            src="../public/imgs/icons8-phone.gif"
        /></span>
        <span
          >borukhkhafizov@yahoo.com
          <img style="width: 20px" src="../public/imgs/icons8-gmail-logo.gif"
        /></span>
      </div>
      <div class="banner-right">
        <span>בסייד</span>
      </div>
    </div>
    <nav id="topnavbar" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img style="width: 250px" src="../public/imgs/baruchent_logo.jpg" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul id="nav-list" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <!-- Updated "About Us" button with dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/about">About Us</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/faqs">FAQ's</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/testimonials"
                  >Customer Testimonials</a
                >
                <!-- Add more dropdown items as needed -->
              </div>
            </li>
            <!-- End of updated "About Us" button -->

            <!-- Updated "Services" button with dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/services">All Services</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/faqs">FAQ's</a>
                <!-- Add more dropdown items as needed -->
              </div>
            </li>
            <!-- End of updated "Services" button -->
            <li class="nav-item">
              <a class="nav-link" href="/featuredcontent">Featured Content</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #ffeaa7;
  background-image: linear-gradient(315deg, #ffeaa7 0%, #000000 74%);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #fff;
}

#top-navbar {
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #335c81 74%);
}

#top-banner {
  background-color: #4834d4;
  background-image: linear-gradient(315deg, #4834d4 0%, #0c0c0c 74%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  font-weight: bold;
}

.banner-left {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.banner-right {
  text-align: right;
}

/* Your existing styles for the navbar */
#topnavbar {
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #335c81 74%);
}

/* Other styles as needed */
</style>
