<template>
  <div class="recommend-videos-area">
    <div class="row row-cols-4">
      <div class="col" v-for="video in recommandVideoList" :key="video._id">
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
                  width: 315px;
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommandVideos",
  data() {
    return {
      recommandVideoList: [],
    };
  },

  methods: {
    getRecommandVideoInfo: function () {
      var that = this;
      // Make a request for a user with a given ID
      this.axios
        .get("/user?ID=12345")
        .then(function (response) {
          // handle success
          var result = response.data;
          console.log(result);
          if (result.status == 200) {
            that.recommandVideoList = result;
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
  },

  mounted() {
    var that = this;
    const domain = "http://localhost:3000/api/video/";
    const combineURLs = (baseURL, relativeURL) => {
      return relativeURL
        ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}`
        : baseURL;
    };
    // Make a request for a user with a given ID
    this.axios
      .get("http://localhost:3000/api/findallV")
      .then(function (response) {
        // handle success
        var result = response.data;
        var len = result.length - 5;
        if (result.status != 700) {
          for (var i = 0; i < len; i++) {
            that.recommandVideoList.push(result[i + 5]);
            var path = that.recommandVideoList[i].videopath;
            that.recommandVideoList[i].videopath = combineURLs(domain, path);
          }
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
.recommend-videos-area {
  margin-top: 30px;
}

.col {
  padding: 30px;
}

.row {
  padding-left: 15px;
}
</style>