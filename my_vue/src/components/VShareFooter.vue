<template>
  <div class="foot-page">
    <div class="foot-container">
      <a class="navbar-brand" href="index.html">
        <img
          src="resources/Logo03.PNG"
          alt=""
          width="100"
          height="100"
          class="d-inline-block align-text-center"
          style="margin-top: 50px; margin-left: 50px"
        />
      </a>
      <div class="foot-btn">
        <div class="term-btn">
          <router-link
            to="/HelpPage"
            class="btn btn-light"
            role="button"
            target="_blank"
            style="margin-left: 200px; margin-top: 55px"
            >Help</router-link
          >
        </div>
      </div>
      <div class="foot-btn">
        <div class="privacy-btn">
          <router-link
            to="/TermPage"
            class="btn btn-light"
            role="button"
            target="_blank"
            style="margin-left: 200px; margin-top: 55px"
            >About us</router-link
          >
        </div>
      </div>
      <div class="foot-btn">
        <div class="support-btn">
          <router-link
            to="/TermPage"
            class="btn btn-light"
            role="button"
            target="_blank"
            style="margin-left: 200px; margin-top: 55px"
            >Terms</router-link
          >
        </div>
      </div>
      <div class="foot-btn">
        <div class="privacy-btn">
          <router-link
            to="/TermPage"
            class="btn btn-light"
            role="button"
            target="_blank"
            style="margin-left: 140px; margin-top: 55px"
            >Policy</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VShareFooter",
};
</script>

<style>
.foot-page {
  background-color: rgb(247, 248, 249);
  height: 200px;
}

.foot-logo {
  padding-top: 60px;
}

.foot-btn {
  display: inline-block;
}

.btn-light {
  color: black;
  background-color: rgb(247, 248, 249);
}

.btn-light:hover {
  background-color: white;
  color: black;
  border-color: black;
  transition: background-color 0.3s, color 0.3s;
}
</style>