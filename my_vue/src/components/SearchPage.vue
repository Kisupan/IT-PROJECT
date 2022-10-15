<template>
	<div id="root">
		<h2>your search :{{$route.query.keyWord}}</h2>
		<li v-for="per of persons" :key="per.id">
			<ResultPage :id=per._id :title=per.name :author=per.username :like=per.like :label=per.category>
			</ResultPage>
		</li>
	</div>

</template>
<router-view :key='$route.fullPath'></router-view >
<script type="text/javascript"></script>
<script>
import ResultPage from './ResultPage.vue';
	export default {
		components: {
		ResultPage,
	},
		data(){
		return{  	
			keyword:this.$route.query.keyWord,
			persons:{},
				}
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
	watch:{
		$route:{
			immediate :true,
			deep:true,
      handler(n){
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
						}
					}
				},		
name:'SearchPage'
}
</script>