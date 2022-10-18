<template>

  <body >
    <HomePageChannel></HomePageChannel>
    <div style="position:relative;height:auto;margin:0 auto; min-height: 100vh;;padding:10px;height:100%">
    <div class="Category">
      <div class="top">
        <li>
          <el-button type="primary" size="middle" round>like:{{ $route.query.title }}</el-button>
        </li>
      </div>
    </div>


    <el-row>
      <el-col :span="4" style="
          margin-left: 120px;
          margin-top: 10px;
          margin-bottom: 30px;
          margin-right: 50%;
        ">
        <el-switch v-model="state" active-text="form detail" inactive-text="form easy">
        </el-switch>
        <div class="grid-content bg-purple-light"></div>
      </el-col>

      <el-button @click="threeperpage" v-if="!pagesort" size="mini" type="primary"
        style=" margin-top: 10px">
        8 items per page</el-button>
      <el-button @click="onepage" v-if="pagesort" size="mini" type="primary" style="margin-top: 10px">
        just one page
      </el-button>
    </el-row>
    <h1 v-if="state">
      <h1 v-if="pagesort">
        <li v-for="per of dataShow" :key="per.id">
          <ResultPage :id="per.id" :title="per.name" :author="per.username" :like="per.like" :label="per.category" :dislike="per.dislike"
            :path="per.videopath">
          </ResultPage>
        </li>
      </h1>
      <h1 v-if="!pagesort">
        <li v-for="per of persons" :key="per.id">
          <ResultPage :id="per.id" :title="per.name" :author="per.username" :like="per.like" :label="per.category" :dislike="per.dislike"
            :path="per.videopath" >
          </ResultPage>
        </li>
      </h1>
    </h1>
    <h1 v-if="!state">
      <h1 v-if="pagesort">
        <li v-for="per of dataShow" :key="per.id">
          <ResultPage2 :id="per.id" :title="per.name" :author="per.username" :like="per.like" :label="per.category" :dislike="per.dislike"
            :path="per.videopath" >
          </ResultPage2>
        </li>
      </h1>
      <h1 v-if="!pagesort">
        <li v-for="per of persons" :key="per.id">
          <ResultPage2 :id="per.id" :title="per.name" :author="per.username" :like="per.like" :label="per.category" :dislike="per.dislike"
            :path="per.videopath">
          </ResultPage2>
        </li>
      </h1>
    </h1>
  </div>
    <ul class="pagination">
      <input type="button" value="pre" @click="prePage" class="btn btn-info" />
      <span v-for="i in pageNum" @click="page(i)" :key="i" :style="{ cursor: 'pointer', margin: '10px' }">{{ i }}</span>
      <input type="button" value="next" @click="nextPage" class="btn btn-info" />
    </ul>
  </body>
</template>

<script>
import ResultPage from "./ResultPage.vue";
import HomePageChannel from "./HomePageChannel.vue";
import ResultPage2 from "./ResultPage2.vue";

export default {
  components: {
    ResultPage,
    HomePageChannel,
    ResultPage2,
  },
  data() {
    return {
      persons: null,
      pagesort: false,
      mycate: this.$route.query.title,
      state: true,
      totalPage: [],
      pageSize: 3,
      pageNum: 1,
      dataShow: [],
      currentPage: 0,
    };
  },
  methods: {
    
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    prePage() {
      if (this.currentPage === 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    },
    page(i) {
      this.currentPage = i;
      this.dataShow = this.totalPage[i - 1];
    },
    changestate() {
      this.state = false;
    },
    threeperpage() {
      this.pageNum = Math.ceil(this.persons.length / this.pageSize) || 1;
      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage[i] = this.persons.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
      this.dataShow = this.totalPage[this.currentPage];
      this.pagesort = true;
    },
    onepage() {
      this.pagesort = false;
    },
  },
  mounted() {
    var that = this;
    var titles = this.$route.query.title;
    this.axios
      .get("http://localhost:3000/api/cat-search/", {
        params: {
          key: titles,
        },
      })
      .then(function (response) {
        var result = response.data;
        if (result.status != 700) {
          that.persons = result;
          console.log(that.persons);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style>
.top {
  margin-left: 20px;
  margin-top: 10px;
}

.carousel-item {
  height: 32em;
  background: rgb(4, 0, 248);
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
  opacity: 0.5;
}

#search-bar {
  width: 400px;
}

.recommend-videos-area {
  margin-top: 30px;
}

.col {
  padding: 30px;
}

.row {
  padding-left: 15px;
}

.account-avatar {
  border-radius: 50%;
}

.channel-items {
  grid-template-columns: repeat(9, 1fr);
  padding-right: 20px;
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-column: span 4;
  grid-gap: 10px;
  border-right: 1px solid var(--line_regular);
}

.channel-link {
  font-size: large;
  height: 22px;
  text-decoration: none;
  line-height: 22px;
  display: inline-block;
  box-sizing: content-box;
  width: 90%;
  height: 100%;
  border: 1px solid var(--line_light);
  border-radius: 10px;
  background-color: rgb(86, 121, 182);
  color: white;
  text-align: center;
  font-weight: 400;
  transition: background-color 0.3s, color 0.3s;
}

.homepage-channel-navigation-bar {
  padding-left: 30px;
  padding-top: 40px;
}

a:hover {
  background-color: #fff;
  color: black;
}

.foot-homepage {
  background-color: aliceblue;
  height: 200px;
}

#homepage-carousel {
  padding-top: 20px;
}

.foot-logo {
  padding-top: 60px;
}

.foot-btn {
  display: inline-block;
}

.btn-light {
  color: black;
  background-color: aliceblue;
}

.btn-light:hover {
  background-color: white;
  color: black;
  border-color: rgb(86, 121, 182);
  transition: background-color 0.3s, color 0.3s;
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.top li {
  float: left;
  width: 100px;
  height: 50px;
  margin-right: 10px;
  margin-top: 10px;
}

.top la {
  float: left;
  width: 300px;
  height: 50px;
  margin-right: 10px;
  margin-top: 10px;
  margin-left: 100px;
}

.top le {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: 400px;
  margin-top: 10px;
  margin-left: 100px;
}

.mybox {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.banner {
  width: 1200px;
  height: 50px;
  margin: 10px auto;
}

.banner li {
  width: 150px;
  height: 30px;
  margin-left: 10px auto;
}

.box {
  width: 1200px;
  margin: 10px auto;
  height: 300px;
  margin-bottom: 20px;
}

.box li {
  float: left;
  width: 300px;
  height: 300px;
  margin-right: 150px;
}

.box la {
  float: left;
  width: 300px;
  height: 300px;
}

.box le {
  float: left;
  width: 50px;
  height: 30px;
  margin-top: 200px;
  margin-left: 40px;
}

.bar {
  padding-left: 30px;
  padding-top: 40px;
}

.footer {
  height: 30px;
  margin-top: 10px;
}

.footer li {
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
