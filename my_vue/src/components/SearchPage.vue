<template>
  <div id="root">
    <h2>your search :{{ $route.query.keyWord }}</h2>
    <el-dropdown>
      <span class="el-dropdown-link">
        sort by like<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          ><el-button type="text" @click="sortType = 2"
            >likes up</el-button
          ></el-dropdown-item
        >
        <el-dropdown-item
          ><el-button type="text" @click="sortType = 1"
            >likes down</el-button
          ></el-dropdown-item
        >
        <el-dropdown-item
          ><el-button type="text" @click="sortType = 0"
            >random</el-button
          ></el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>

    <div v-if="!persons.length">
      <h2 style="text-align: center">NO RESULT</h2>
    </div>
    <div v-else>
      <li v-for="per of filPerons" :key="per.id">
        <ResultPage2
          :id="per._id"
          :title="per.name"
          :author="per.username"
          :likes="per.likes"
          :dislikes="per.dislikes"
          :label="per.category"
          :path="per.videopath"
          :description="per.description"
        >
        </ResultPage2>
      </li>
    </div>
  </div>
</template>
<router-view :key='$route.fullPath'></router-view >
<script type="text/javascript"></script>
<script>
import ResultPage2 from "./ResultPage2.vue";
export default {
  components: {
    ResultPage2,
  },
  data() {
    return {
      sortType: 0,
      keyword: this.$route.query.keyWord,
      persons: {},
    };
  },
  mounted() {
    var that = this;
    var video_name = this.$route.query.keyWord;
    this.axios
      .get("http://localhost:3000/api/video-search/", {
        params: {
          key: video_name,
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
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(n) {
        var that = this;
        var video_name = this.$route.query.keyWord;
        this.axios
          .get("http://localhost:3000/api/video-search/", {
            params: {
              key: video_name,
            },
          })
          .then(function (response) {
            var result = response.data;
            if (result.status != 700) {
              that.persons = result;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    },
  },
  computed: {
    filPerons() {
      //判断一下是否需要排序
      if (this.sortType) {
        this.persons.sort((p1, p2) => {
          return this.sortType === 1
            ? p2.likes - p1.likes
            : p1.likes - p2.likes;
        });
      }
      console.log(this.persons);
      return this.persons;
    },
  },
  name: "SearchPage",
};
</script>