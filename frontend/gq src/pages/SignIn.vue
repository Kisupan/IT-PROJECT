<template>
	
	<div>
		<div>
				账户: <input type="text" v-model="account">
			</div>
			<div>
				密码: <input type="password" v-model="password">
			</div>
			<div>
				<button @click="login()">log in </button>
			</div>
	</div>
</template>

<script>
export default {
	name: "LogIn",
	data() {
		return {
			email: "",
			account: "",
			username: "",
			password: "",
		}
	},
	methods: {
		login: function () {
				console.log('login');
				// 前端校验
				if (this.account == '') {
					alert('请填写账户');
					return;
				}
				if (this.password == '') {
					alert('请填写密码');
					return;
				}
				var params = {
					account: this.account,
					password: this.password
				};
				var that = this;
				console.log(params)
				this.axios.post('http://localhost:3000/api/signin', params)
					.then(function (response) {
						console.log(response);
						if (response.status == 200) {
							that.isLogin = true;
						}
					})
					.catch(function (error) {
						console.log(error);
						alert('account not exist');
						that.account = '';
						that.password = '';

					});
			},
		
	
	
		}
}
</script>
  
<style>
.login {
	margin-top: 200px;
}

.input_style {
	width: 200px;
	margin-bottom: 10px;
}

.login_style {
	width: 200px;
}
</style>
  
  