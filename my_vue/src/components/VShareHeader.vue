<template>
  <div class="header">
    <div class="my-header" v-if="notlogin">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <div>
            <router-link class="navbar-brand" to="/homepage">
              <img
                src="resources/Logo03.PNG"
                width="50"
                height="50"
                class="d-inline-block align-text-center"
              />
              <span
                class="web-name"
                style="color: rgb(86, 121, 182); display: inline-block"
              >
                VShare
              </span>
            </router-link>
          </div>
          <form class="d-flex" role="search">
            <input
              id="search-bar"
              class="form-control"
              type="text"
              placeholder="INPUT NAME"
              v-model="keyWord"
            />
            <router-link
              :to="{
                path: '/SearchPage',
                query: {
                  keyWord: this.keyWord,
                },
              }"
            >
              <button
                id="search-btn"
                class="btn btn-outline-primary"
                type="submit"
              >
                Search
              </button></router-link
            >
          </form>
          <div class="sign-in-up">
            <button
              class="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#Signin"
              type="button"
              id="search-btn"
            >
              Sign in
            </button>
            &nbsp;
            <div
              class="modal fade"
              id="Signin"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
                  </div>
                  <div class="modal-body">
                    <div class="content">
                      <label for="Account">Account</label>
                      <input
                        aria-label="Search"
                        class="form-control"
                        type="text"
                        placeholder="Email/User name"
                        v-model="SigninObj.account"
                      />
                      <br />
                      <label for="Password">Password</label>
                      <input
                        aria-label="Search"
                        class="form-control"
                        type="password"
                        placeholder="Password range 6-20"
                        v-model="SigninObj.password"
                      />
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      @click="Signin"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#Signup"
              type="button"
              id="search-btn"
            >
              Sign up
            </button>
            <div
              class="modal fade"
              id="Signup"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sign up</h5>
                  </div>
                  <div class="modal-body">
                    <div class="content">
                      <label for="Email">Email</label>
                      <input
                        aria-label="Search"
                        class="form-control"
                        type="text"
                        placeholder="example@example"
                        v-model="SignupObj.email"
                      />
                      <br />
                      <label for="User name">User name</label>
                      <input
                        aria-label="Search"
                        class="form-control"
                        type="text"
                        placeholder="User name"
                        v-model="SignupObj.username"
                      />
                      <br />
                      <label for="Password">Password</label>
                      <input
                        aria-label="Search"
                        class="form-control"
                        type="password"
                        placeholder="Password length need to be 6-20 range"
                        v-model="SignupObj.password"
                      />
                      <br />
                      <label for="Gender">Gender</label>
                      <select
                        aria-label="Search"
                        class="form-control"
                        name="gender"
                        v-model="SignupObj.gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                      <br />
                      <label for="Age">Age</label>
                      <input
                        aria-label="Search"
                        class="form-control"
                        type="text"
                        placeholder="age between 0 ~ 150"
                        v-model="SignupObj.age"
                      />
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      @click="Signup"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="homepage-avatar-container">
            <router-link to="/profile" target="_self"
              ><img
                class="account-avatar"
                src="resources/avatar.png"
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
              type="text"
              placeholder="INPUT NAME"
              v-model="keyWord"
            />
            <router-link
              :to="{
                path: '/SearchPage',
                query: {
                  keyWord: this.keyWord,
                },
              }"
            >
              <button
                id="search-btn"
                class="btn btn-outline-primary"
                type="submit"
              >
                Search
              </button></router-link
            >
          </form>
          <div class="sign-out">
            <router-link to="/homepage">
              <button
                class="btn btn-outline-primary"
                type="button"
                id="signout-btn"
                @click="Signout"
              >
                Sign out
              </button>
            </router-link>
          </div>
          <div class="homepage-avatar-container">
            <router-link to="/profile" target="_blank"
              ><img
                class="account-avatar"
                src="resources/avatar.png"
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
  inject: ["reload", "admin_system_load"],
  data() {
    return {
      keyWord: "",
      notlogin: true,
      notadmin: true,
      SigninObj: {
        account: "",
        password: "",
      },
      SignupObj: {
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "",
      },
    };
  },
  methods: {
    Signin() {
      if (!this.SigninObj.account || !this.SigninObj.password) {
        alert("Please fill in Account or Password");
        return;
      }
      var params = {
        account: this.SigninObj.account,
        password: this.SigninObj.password,
      };
      var that = this;
      this.axios
        .post("http://localhost:3000/api/signin", params)
        .then(function (response) {
          if (response.status == 200) {
            localStorage.setItem("Token", response.data.token);
            localStorage.setItem("Username", response.data.username);
            if (localStorage.getItem("Username") === "admin") {
              localStorage.setItem("Stay", "True");
              that.admin_system_load();
            }
            that.reload();
            setTimeout(() => {
              alert("Sign in successful!");
            }, 1000);
            that.SigninObj.account = "";
            that.SigninObj.password = "";
          }
        })
        .catch(function (error) {
          if (error.response.status == 404) {
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 1000);
          }
          if (error.response.status == 400) {
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 1000);
          }
          that.SigninObj.account = "";
          that.SigninObj.password = "";
        });
    },
    Signup() {
      var that = this;
      if (
        !this.SignupObj.email ||
        !this.SignupObj.username ||
        !this.SignupObj.password ||
        !this.SignupObj.age ||
        !this.SignupObj.gender
      ) {
        this.reload();
        setTimeout(() => {
          alert("Please fill in data to create an account!");
        }, 600);
        return;
      }
      var params = {
        email: this.SignupObj.email,
        username: this.SignupObj.username,
        password: this.SignupObj.password,
        age: this.SignupObj.age,
        gender: this.SignupObj.gender,
      };
      this.axios
        .post("http://localhost:3000/api/signup", params)
        .then(function (request) {
          if (request.status == 201) {
            that.reload();
            setTimeout(() => {
              alert(request.data.msg);
            }, 900);
          }
        })
        .catch(function (error) {
          if (error.request.status == 503) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
          if (error.request.status == 502) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
          if (error.request.status == 501) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
          if (error.request.status == 500) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
        });
      this.SignupObj = {};
    },

    Signout() {
      localStorage.clear();
      this.notadmin = true;
      this.reload();
      setTimeout(() => {
        alert("Sign out!");
      }, 900);
    },
  },
  mounted() {
    if (localStorage.getItem("Token") !== null) {
      this.notlogin = false;
    }
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