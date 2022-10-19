<template>
  <div class="profile-intro-upload">
    <div class="nav-area">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <div
            class="navbar-brand"
            href="profilepGender.html"
            v-for="data in profileFormData"
            :key="data._id"
          >
            <img
              src="/resources/ZCC.JPG"
              alt=""
              width="100"
              height="100"
              class="d-inline-block align-text-center"
              style="border-radius: 50%"
            />
            <p
              class="web-name"
              style="color: black; display: inline-block; margin-left: 20px"
            >
              {{ data.username }}
            </p>
          </div>
          <!-- <div class="text-container">
            <p>
              {{ data.intro }}
            </p>
          </div> -->
          <div class="upload">
            <router-link
              class="btn btn-outline-primary"
              to="/upload"
              role="button"
              target="_blank"
              >Upload Video</router-link
            >
          </div>
        </div>
      </nav>
    </div>

    <div class="tabs">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="my-video-tab"
            data-bs-toggle="tab"
            data-bs-target="#my-video-tab-pane"
            type="button"
            role="tab"
            aria-controls="my-video-tab-pane"
            aria-selected="true"
          >
            My Video
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manage-video-tab"
            data-bs-toggle="tab"
            data-bs-target="#manage-video-tab-pane"
            type="button"
            role="tab"
            aria-controls="manage-video-tab-pane"
            aria-selected="true"
          >
            Manage Video
          </button>
        </li>
        <!-- <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="favourite-tab"
            data-bs-toggle="tab"
            data-bs-target="#favourite-tab-pane"
            type="button"
            role="tab"
            aria-controls="favourite-tab-pane"
            aria-selected="false"
          >
            Favourite
          </button>
        </li> -->
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="intro-tab"
            data-bs-toggle="tab"
            data-bs-target="#intro-tab-pane"
            type="button"
            role="tab"
            aria-controls="intro-tab-pane"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="my-video-tab-pane"
          role="tabpanel"
          aria-labelledby="my-video-tab"
          tabindex="0"
        >
          <div class="my-videos-area">
            <div class="row row-cols-4">
              <div class="col" v-for="video in myVideoList" :key="video._id">
                <div class="card">
                  <router-link
                    target="_blank"
                    :to="{
                      path: '/video',
                      query: {
                        videoname: video.name,
                        videopath: video.videopath,
                      },
                    }"
                  >
                    <div class="video-container">
                      <video
                        :src="video.videopath"
                        style="
                  background-color: black;
                  width: 100%;
                  height: 205px;video.controls=false;
                "
                        id="upvideo"
                      >
                        您的浏览器不支持视频播放
                      </video>
                    </div>
                  </router-link>
                  <div class="card-body">
                    <h3>{{ video.name }}</h3>
                    <h5>{{ video.username }}</h5>
                    <!-- <p>{{ video.date }}</p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="manage-video-tab-pane"
          role="tabpanel"
          aria-labelledby="manage-video-tab"
          tabindex="0"
        >
          <div class="manage-videos-area">
            <div class="row row-cols-4">
              <div class="col" v-for="video in myVideoList" :key="video._id">
                <div class="card">
                  <div class="video-container">
                    <video
                      :src="video.videopath"
                      style="
                  background-color: black;
                  width: 100%;
                  height: 205px;video.controls=false;
                "
                      id="upvideo"
                    >
                      您的浏览器不支持视频播放
                    </video>
                  </div>
                  <div class="card-body">
                    <h3>{{ video.name }}</h3>
                    <h5>{{ video.username }}</h5>
                    <!-- <p>{{ video.date }}</p> -->
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#manage-video"
                      @click="manageVideo(video._id)"
                    >
                      Delete
                    </button>
                    <div
                      class="modal fade"
                      id="manage-video"
                      tabindex="-1"
                      aria-labelledby="myModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Delete video
                            </h5>
                          </div>
                          <div class="modal-body">
                            <h5>
                              Are you sure to delete this video: "{{
                                videoObj.video_name
                              }}"
                            </h5>
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
                              class="btn btn-danger"
                              @click="deleteVideo()"
                              data-bs-dismiss="modal"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
          class="tab-pane fade"
          id="favourite-tab-pane"
          role="tabpanel"
          aria-labelledby="favourite-tab"
          tabindex="0"
        >
          <div class="favourite-videos-area">
            <div class="row row-cols-4">
              <div
                class="col"
                v-for="video in favouriteVideoList"
                :key="video._id"
              >
                <div class="card">
                  <a href="blankpGender.html" target="_blank">
                    <img
                      src="resources/ZCC.JPG"
                      class="card-img-top"
                      alt="..."
                    />
                  </a>
                  <div class="card-body">
                    <h5>{{ video.title }}</h5>
                    <p>{{ video.author }}</p>
                    <p>{{ video.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div
          class="tab-pane fade"
          id="intro-tab-pane"
          role="tabpanel"
          aria-labelledby="intro-tab"
          tabindex="0"
        >
          <ul type="none">
            <li
              class="profile-info"
              v-for="data in profileFormData"
              :key="data._id"
            >
              <!-- {{info.email}} - {{info.password}} - {{info.username}} - {{info.age}} - {{info.Gender}} -->
              <!-- E-Mail: {{ data.email }} <br />
              Username: {{ data.username }} <br />
              Age: {{ data.age }} <br />
              Gender: {{ data.gender }} <br /> -->
              E-Mail:
              <div class="intro-detail">
                <el-input
                  :placeholder="data.email"
                  size="medium"
                  disabled
                ></el-input>
              </div>
              <!-- <input type="text" :placeholder="data.email" disabled /> -->
              <br />Username:
              <div class="intro-detail">
                <el-input
                  :placeholder="data.username"
                  size="medium"
                  disabled
                ></el-input>
              </div>
              <!-- <input type="text" :placeholder="data.username" disabled /> -->
              <br />Age:
              <div class="intro-detail">
                <el-input
                  :placeholder="data.age"
                  size="medium"
                  disabled
                ></el-input>
              </div>
              <!-- <input type="text" :placeholder="data.age" disabled /> -->
              <br />Gender:
              <div class="intro-detail">
                <el-input
                  :placeholder="data.gender"
                  size="medium"
                  disabled
                ></el-input>
              </div>
              <!-- <input type="text" :placeholder="data.gender" disabled /><br /> -->
              <button
                type="button"
                class="btn btn-primary"
                id="manage-profile-button"
                data-bs-toggle="modal"
                data-bs-target="#manage-profile"
                @click="manage(data)"
              >
                Manange profile
              </button>
            </li>
          </ul>
          <!-- Button trigger modal -->
          <div
            class="modal fade"
            id="manage-profile"
            tabindex="-1"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Manage profile
                  </h5>
                </div>
                <div class="modal-body">
                  <div class="content">
                    <label for="Email">Email</label>
                    <input
                      aria-label="Search"
                      class="form-control"
                      type="text"
                      :placeholder="manageObj.email"
                      readonly="readonly"
                    />
                    <br />
                    <label for="User name">User name</label>
                    <input
                      aria-label="Search"
                      class="form-control"
                      type="text"
                      :placeholder="manageObj.username"
                      v-model="manageObj.username"
                    />
                    <br />
                    <label for="Password">Password</label>
                    <input
                      aria-label="Search"
                      class="form-control"
                      type="password"
                      placeholder="Leave blank if not want to change"
                      v-model="manageObj.password"
                    />
                    <br />
                    <label for="Gender">Gender</label>
                    <select
                      aria-label="Search"
                      class="form-control"
                      name="gender"
                      v-model="manageObj.gender"
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
                      v-model="manageObj.age"
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
                    @click="updateInfo()"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBody",
  inject: ["reload"],
  data() {
    return {
      profileFormData: null,
      manageObj: { username: "", email: "", password: "", age: "", gender: "" },
      myVideoList: [],
      manageVideoList: [],
      // videoData: {
      //   id: 0,
      //   imGenderAddr: "resources/ZCC.JPG",
      //   videoAddr: "blankpGender.html",
      //   title: "Title",
      //   author: "ZCC",
      //   date: "1/9/2022",
      // },
      favouriteVideoList: [],
      videoObj: { video_id: "", video_path: "", video_name: "" },
      old_username: "",
    };
  },

  methods: {
    updateInfo: function () {
      var that = this;
      var params = {
        email: this.manageObj.email,
        username: this.manageObj.username,
        age: this.manageObj.age,
        gender: this.manageObj.gender,
        old_username: this.old_username,
      };
      if (!this.manageObj.password) {
        this.axios
          .post("http://localhost:3000/api/update", params)
          .then(function (request) {
            if (request.status == 200) {
              localStorage.setItem("Username", that.manageObj.username);
              that.reload();
              setTimeout(() => {
                alert(request.data.msg);
              }, 1000);
            }
          })
          .catch(function (error) {
            console.log(error);
            if (error.request.status == 500) {
              setTimeout(() => {
                alert(error.response.data.msg);
              }, 900);
            }
          });
      }
      if (this.manageObj.password) {
        var param = {
          email: this.manageObj.email,
          password: this.manageObj.password,
        };
        this.axios
          .post("http://localhost:3000/api/password-reset", param)
          .then(function (request) {
            if (request.status == 200) {
              that.continues = true;
              if (that.continues == true) {
                that.axios
                  .post("http://localhost:3000/api/update", params)
                  .then(function (request) {
                    if (request.status == 200) {
                      that.reload();
                      setTimeout(() => {
                        alert("Update Successful");
                      }, 1000);
                    }
                  })
                  .catch(function (error) {
                    if (error.request.status == 500) {
                      setTimeout(() => {
                        alert(error.response.data.msg);
                      }, 900);
                    }
                  });
              }
            }
          })
          .catch(function (error) {
            if (error.request.status == 500) {
              that.continues = false;
              that.reload();
              setTimeout(() => {
                alert(error.response.data.msg);
              }, 900);
            }
          });
      }
    },

    getFavouriteVideoInfo: function () {
      var that = this;
      // Make a request for a user with a given ID
      this.axios
        .get("/user?ID=12345")
        .then(function (response) {
          // handle success
          var result = response.data;
          console.log(result);
          if (result.status == 200) {
            that.favouriteVideoList = result;
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    manage(item) {
      this.manageObj.email = item.email;
      this.manageObj.username = item.username;
      this.manageObj.age = item.age;
      this.manageObj.gender = item.gender;
      this.manageObj.password = "";
      this.old_username = this.manageObj.username;
    },
    manageVideo(video_id) {
      var that = this;
      that.videoObj.video_id = video_id;
      for (var i = 0; i < that.manageVideoList.length; i++) {
        if (that.manageVideoList[i].video_id == video_id) {
          that.videoObj.video_path = that.manageVideoList[i].videopath;
          that.videoObj.video_name = that.manageVideoList[i].video_name;
        }
      }
    },

    deleteVideo() {
      var that = this;
      this.axios
        .delete("http://localhost:3000/api/video/", {
          params: {
            video_id: that.videoObj.video_id,
            video_path: that.videoObj.video_path,
          },
        })
        .then(function (response) {
          var result = response.data;
          console.log(result);
          if (response.status == 200) {
            that.reload();
            setTimeout(() => {
              alert("Delete successful");
            }, 1500);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

  mounted() {
    var that = this;
    // this.getProfileInfo();
    var name = localStorage.getItem("Username");
    const domain = "http://localhost:3000/api/video/";
    const combineURLs = (baseURL, relativeURL) => {
      return relativeURL
        ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}`
        : baseURL;
    };
    this.axios
      .get("http://localhost:3000/api/user-search/", {
        params: {
          username: name,
          isadmin: false,
        },
      })
      .then(function (response) {
        // handle success
        that.profileFormData = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    this.axios
      .get("http://localhost:3000/api/user-video-search/", {
        params: {
          key: name,
        },
      })
      .then(function (response) {
        // handle success
        var result = response.data;
        if (result.status != 700) {
          that.myVideoList = result;
          // that.manageVideoList = result;
          for (var i = 0; i < that.myVideoList.length; i++) {
            var _id = that.myVideoList[i]._id;
            var path = that.myVideoList[i].videopath;
            var name = that.myVideoList[i].name;
            that.manageVideoList.push({
              video_id: _id,
              videopath: path,
              video_name: name,
            });
            that.myVideoList[i].videopath = combineURLs(domain, path);
          }
          // console.log(that.myVideoList);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
};
</script>

<style>
.profile-intro-upload {
  margin-left: 70px;
  margin-top: 40px;
  margin-right: 70px;
}

.text-container {
  width: 600px;
  height: 125px;
  background-color: white;
  align-items: center;
}
.tabs {
  margin-top: 30px;
}

.my-videos-area {
  padding-top: 20px;
}

.favourite-videos-area {
  padding-top: 20px;
}

.col {
  padding: 30px;
}

#intro-tab-pane {
  margin-top: 30px;
}

.update-button {
  margin-top: 20px;
}

.profile-info {
  font-size: 20px;
  font-style: normal;
}

.intro-detail {
  width: 500px;
}

#manage-profile-button {
  margin-top: 30px;
}
</style>