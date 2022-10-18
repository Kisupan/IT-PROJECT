<template>
  <div
    id="homepage-carousel"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#homepage-carousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#homepage-carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#homepage-carousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#homepage-carousel"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#homepage-carousel"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <div class="carousel-inner" style="width: 100%">
      <div
        class="carousel-item active"
        data-bs-interval="6000"
        style="background-color: rgb(194 214 227 / 64%)"
      >
        <router-link
          target="_blank"
          :to="{
            path: '/video',
            query: {
              videoname: carouselVideoList[0].name,
              videopath: carouselVideoList[0].videopath,
            },
          }"
        >
          <video
            :src="carouselVideoList[0].videopath"
            style="
                  background-color: rgb(194 214 227 / 64%);
                  width: 100%;
                  height: 512px;video.controls=false;
                "
            id="upvideo"
          >
            您的浏览器不支持视频播放
          </video>
          <!-- <div
            class="overlay-image"
            :style="`background-image: url(${carouselVideoList[0].imageURL})`"
          ></div> -->
        </router-link>
        <div class="carousel-item-container">
          <h1>{{ carouselVideoList[0].name }}</h1>
          <p>{{ carouselVideoList[0].username }}</p>
        </div>
      </div>
      <div
        class="carousel-item"
        data-bs-interval="4000"
        style="background-color: rgb(194 214 227 / 64%)"
      >
        <router-link
          target="_blank"
          :to="{
            path: '/video',
            query: {
              videoname: carouselVideoList[1].name,
              videopath: carouselVideoList[1].videopath,
            },
          }"
        >
          <video
            :src="carouselVideoList[1].videopath"
            style="
                  width: 100%;
                  height: 512px;video.controls=false;
                  background-color: rgb(194 214 227 / 64%);
                "
            id="upvideo"
          >
            您的浏览器不支持视频播放
          </video>
        </router-link>
        <div class="carousel-item-container">
          <h1>{{ carouselVideoList[1].name }}</h1>
          <p>{{ carouselVideoList[1].username }}</p>
        </div>
      </div>
      <div
        class="carousel-item"
        data-bs-interval="4000"
        style="background-color: rgb(194 214 227 / 64%)"
      >
        <router-link
          target="_blank"
          :to="{
            path: '/video',
            query: {
              videoname: carouselVideoList[2].name,
              videopath: carouselVideoList[2].videopath,
            },
          }"
        >
          <video
            :src="carouselVideoList[2].videopath"
            style="
                  width: 100%;
                  height: 512px;video.controls=false;
                  background-color: rgb(194 214 227 / 64%);
                "
            id="upvideo"
          >
            您的浏览器不支持视频播放
          </video>
        </router-link>
        <div class="carousel-item-container">
          <h1>{{ carouselVideoList[2].name }}</h1>
          <p>{{ carouselVideoList[2].username }}</p>
        </div>
      </div>
      <div
        class="carousel-item"
        data-bs-interval="4000"
        style="background-color: rgb(194 214 227 / 64%)"
      >
        <router-link
          target="_blank"
          :to="{
            path: '/video',
            query: {
              videoname: carouselVideoList[3].name,
              videopath: carouselVideoList[3].videopath,
            },
          }"
        >
          <video
            :src="carouselVideoList[3].videopath"
            style="
                  width: 100%;
                  height: 512px;video.controls=false;
                  background-color: rgb(194 214 227 / 64%);
                "
            id="upvideo"
          >
            您的浏览器不支持视频播放
          </video>
        </router-link>
        <div class="carousel-item-container">
          <h1>{{ carouselVideoList[3].name }}</h1>
          <p>{{ carouselVideoList[3].username }}</p>
        </div>
      </div>
      <div
        class="carousel-item"
        data-bs-interval="4000"
        style="background-color: rgb(194 214 227 / 64%)"
      >
        <router-link
          target="_blank"
          :to="{
            path: '/video',
            query: {
              videoname: carouselVideoList[4].name,
              videopath: carouselVideoList[4].videopath,
            },
          }"
        >
          <video
            :src="carouselVideoList[4].videopath"
            style="
                  width: 100%;
                  height: 512px;video.controls=false;
                  background-color: rgb(194 214 227 / 64%);
                "
            id="upvideo"
          >
            您的浏览器不支持视频播放
          </video>
        </router-link>
        <div class="carousel-item-container">
          <h1>{{ carouselVideoList[4].name }}</h1>
          <p>{{ carouselVideoList[4].username }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#homepage-carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#homepage-carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HomePageCarousel",
  data() {
    return {
      carouselVideoList: [],
      backgroundImage: [
        "https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=",
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
        "https://image.shutterstock.com/image-photo/light-bulbs-on-dark-wooden-260nw-354086042.jpg",
        "https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?w=2000",
        "./resources/17545.jpg",
      ],
    };
  },

  methods: {
    // getCarouselVideoInfo: function () {
    //   var that = this;
    //   // Make a request for a user with a given ID
    //   this.axios
    //     .get("/user?ID=12345")
    //     .then(function (response) {
    //       // handle success
    //       var result = response.data;
    //       console.log(result);
    //       if (result.status == 200) {
    //         that.carouselVideoList = result;
    //       }
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(function () {
    //       // always executed
    //     });
    // },
  },
  created() {
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
        if (result.status != 700) {
          for (var i = 0; i < 5; i++) {
            that.carouselVideoList.push(result[i]);
            var path = that.carouselVideoList[i].videopath;
            that.carouselVideoList[i].videopath = combineURLs(domain, path);
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

<style scoped>
#homepage-carousel {
  padding-top: 20px;
}
.carousel-item {
  height: 32em;
  color: white;
  position: relative;
}

.carousel-item-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
  padding-left: 100px;
}

.video-title {
  text-decoration: none;
  color: white;
}

.overlay-image {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-position: center;
  background-size: cover;
  opacity: 1;
}
</style>