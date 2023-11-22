<template>
  <div id="contact-form">
    <form action="https://formspree.io/f/xpzgegdy" method="POST">
      <fieldset>
        <legend>
          Reach Us Directly
          <img
            style="width: 40px"
            src="../../public/imgs/icons8-phone-message.gif"
          />
        </legend>
        <div class="input-container">
          <label>
            First Name:<br />
            <input type="text" name="firstName" placeholder="First Name" />
          </label>

          <label>
            Last Name:<br />
            <input type="text" name="lastName" placeholder="Last Name" />
          </label>

          <label>
            Your email:<br />
            <input type="email" name="email" placeholder="Enter your e-mail" />
          </label>

          <label>
            City:<br />
            <input type="text" name="city" placeholder="City" />
          </label>

          <label>
            State:<br />
            <input type="text" name="state" placeholder="State" />
          </label>

          <label>
            Date of Event:<br />
            <input type="date" name="dateOfEvent" />
          </label>

          <label>
            Type of Event:<br />
            <input
              type="text"
              name="typeOfEvent"
              placeholder="e.g. (Wedding, Birthday)"
            />
          </label>

          <label>
            Services Needed (Notes):<br />
            <textarea
              name="servicesNeeded"
              placeholder="e.g.(Hello, I was interested in your DJ services at my upcoming wedding)"
            ></textarea>
          </label>
        </div>
      </fieldset>

      <button class="bn5" type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
#contact-form {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
}

fieldset {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 25px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
}

legend {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

label {
  margin-bottom: 10px;
}

input,
textarea {
  width: 80%;
  margin: 0 auto;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 25px;
}
.input-container {
  display: flex;
  flex-direction: column;
}
label {
  color: #fff;
  font-size: 1.2rem;
}

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
</style>
