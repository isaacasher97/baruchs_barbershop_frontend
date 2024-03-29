<template>
  <div class="title">
    <h1>About Us</h1>
  </div>
  <div class="content">
    <p>
      Baruch Entertainment is your go-to source for DJ, hosting, singing, party
      planning, among many other entertainment services, catering to the
      tri-state area with top-notch white-glove service for your upcoming event.
      We recognize that the heart of any successful party lies in the music and
      entertainment. With this in mind, we prioritize not just making events
      happen, but ensuring they are truly exceptional!
    </p>
    <p>
      We genuinely grasp the significance of your event. With extensive
      experience in event organization and execution, our keen judgment,
      crowd-reading skills, and state-of-the-art equipment guarantee to
      transform your occasion into a vibrant and engaging celebration.
    </p>
  </div>
  <div class="video-container">
    <iframe
      width="100%"
      height="100%"
      :src="'https://www.youtube.com/watch?v=iczqA_FJ2Xo'"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "AboutInfo",
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

h1 {
  text-decoration: underline;
  padding: 10px;
}
h1,
p {
  color: #fff;
}
p {
  font-weight: 700;
  font-size: large;
}
.video-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content {
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 10px;
  border: 3px dashed #fff;
}
</style>
