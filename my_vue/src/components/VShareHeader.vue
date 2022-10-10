<template>
  <div class="header">
    <div class="my-header" v-if="profileFormData.login == 'false'">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/homepage">
            <img
              src="resources/Logo03.PNG"
              alt=""
              width="50"
              height="50"
              class="d-inline-block align-text-center"
            />
            <p
              class="web-name"
              style="color: rgb(86, 121, 182); display: inline-block"
            >
              VShare
            </p>
          </router-link>
          <form class="d-flex" role="search">
            <input
              id="search-bar"
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              id="search-btn"
              class="btn btn-outline-primary"
              type="submit"
            >
              Search
            </button>
          </form>
          <div class="sign-in-up">
            <router-link
              class="btn btn-outline-primary"
              to="/signin"
              role="button"
              >Sign in</router-link
            >
            <router-link
              class="btn btn-outline-primary"
              to="/signup"
              role="button"
              >Sign up</router-link
            >
          </div>
          <div class="homepage-avatar-container">
            <router-link to="/profile" target="_blank"
              ><img
                class="account-avatar"
                src="resources/ZCC.JPG"
                style="width: 50px; height: 50px"
            /></router-link>
          </div>
        </div>
      </nav>
    </div>
    <div v-else>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/homepage">
            <img
              src="resources/Logo03.PNG"
              alt=""
              width="50"
              height="50"
              class="d-inline-block align-text-center"
            />
            <p
              class="web-name"
              style="color: rgb(86, 121, 182); display: inline-block"
            >
              VShare
            </p>
          </router-link>
          <form class="d-flex" role="search">
            <input
              id="search-bar"
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              id="search-btn"
              class="btn btn-outline-primary"
              type="submit"
            >
              Search
            </button>
          </form>
          <div class="homepage-avatar-container">
            <router-link to="/profile" target="_blank"
              ><img
                class="account-avatar"
                src="resources/ZCC.JPG"
                style="width: 50px; height: 50px"
            /></router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>



<script>
export default {
  name: "VShareHeader",
  data() {
    return {
      profileFormData: {
        _id: "",
        email: "abccc@gmail.com",
        avatar: "",
        password: "hxx211",
        username: "hxx",
        dateOfBirth: "01/09/2022",
        gender: "Male",
        intro: "",
        login: "false",
      },
    };
  },
};
</script>

<style>
#search-bar {
  width: 400px;
}
.account-avatar {
  border-radius: 50%;
}
</style>