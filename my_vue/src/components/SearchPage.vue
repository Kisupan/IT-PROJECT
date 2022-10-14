<template>
	<div id="root">
		<h2>{{$route.query.keyWord}}</h2>
		<ul>
			<li v-for="(p,id) of filPerons" :key="id">
				<router-link :to="{
					path:'/ResultPage',
					query:{
						id:p.id,
						title:p.title,
						author:p.name,
						like:p.like
					}
				}">
					{{p.title}}-{{p.name}}-{{p.like}}
				</router-link>
			</li>
		</ul>
	</div>

</template>
<script type="text/javascript"></script>
<script>
	export default {
		data(){
		return{  	opacity:1,
					persons:[
						{id:'001',title:"bllads",name:'zcc',like:300},
						{id:'002',title:"blladd",name:'zsb',like:301},
						{id:'003',title:"blldda",name:'hxx',like:300},
						{id:'004',title:"bllabb",name:'gq',like:30}
					],
					filPerons:[],
					keyWord: $route.query.keyWord,
				}
			},
			watch:{
					keyWord:{
						immediate:true,
						handler(val){
							this.filPerons = this.persons.filter((p)=>{
								return p.name.indexOf(keyWord) !== -1
							})
						}
					}
				},
name:'SearchPageS'
}
</script>