import VueRouter from 'vue-router'
//引入组件
import PageP from '../pages/PageP'
import SignIn from '../pages/SignIn'
import SearchPage from '../pages/SearchPage'
import ResultPage from '../pages/ResultPage'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/Pages',
			component:PageP
		},
		{
			path:'/SignIn',
			component:SignIn
		},
		{
			path:'/SearchPage',
			component:SearchPage
		},
		{
			path:'/ResultPage',
			component:ResultPage,
			children:[
				{
					path:'ResultPage',
					component:ResultPage,
				}]
		}
	]
})