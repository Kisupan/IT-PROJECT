<template>

	<body>
		<div class="Category">
			<div class=top>
				<el-button type="primary" round>like:{{$route.query.title}}</el-button>
			</div>
		</div>
		<li v-for="per of persons" :key="per.id">
			<ResultPage :id=per.id :title=per.title :author=per.name :like=per.like></ResultPage>
		</li>
		<el-pagination page-sizes="10" background layout="prev, pager, next" :total="1000">
		</el-pagination>
	</body>

</template>

<script>
import ResultPage from './ResultPage.vue';


export default {
	components: {
		ResultPage
	},
	data() {

		return {
			persons: [
				{ id: '001', title: "bllads", name: 'zcc', like: 300 },
				{ id: '002', title: "blladd", name: 'zsb', like: 301 },
				{ id: '003', title: "blldda", name: 'hxx', like: 300 },
				{ id: '004', title: "bllabb", name: 'gq', like: 30 }
			],
		}
	},
	name: 'PageP'
}

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
	transition: background-color .3s, color .3s;
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
	transition: background-color .3s, color .3s;
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
	width: 30px;
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
