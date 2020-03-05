<template>
	<div>
		<div class="line"></div>
		<el-menu
			:default-active="activeIndex()"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="#24292e"
			text-color="#fff"
			:router="true"
			active-text-color="#ffd04b"
		>
			<el-menu-item index="/">Index</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					Function
				</template>
				<el-menu-item index="/function">Input</el-menu-item>
				<el-menu-item index="/functionfile">File</el-menu-item>
				<!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
				<!-- <el-submenu index="2-4"> -->
<!-- 					<template slot="title">
						暂未开发
					</template> -->
					<!-- <el-menu-item index="2-4-1">开发1</el-menu-item> -->
					<!-- <el-menu-item index="2-4-2">开发2</el-menu-item> -->
					<!-- <el-menu-item index="2-4-3">开发3</el-menu-item> -->
				<!-- </el-submenu> -->
			</el-submenu>
			<div class="title"><el-menu-item>ACPredstack</el-menu-item></div>
			<el-menu-item index="/personal" style="float:right">
				<!-- <router-link to="/personal"> -->
				<i class="el-icon-user" style="color:white"></i>
				<!-- </router-link> -->
			</el-menu-item>
			<el-menu-item index="4" style="float:right"><a href="https://github.com/wjyzhixing/" >About author</a></el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		activeIndex() {
			let name = location.hash.split(2).join()
			let array = ['','personal','function','functionfile']
			console.log("re",name.substring(2))
			let res = name.substring(2)
			res = (res == array[0]?'/':
			(res == array[1] ? '/personal' : 
			(res == array[2] ? '/function' : 
			(res == array[3] ? '/functionfile' : 'none'))))
			return res;
		}
	}
};
</script>

<style scoped>
.title {
	position: absolute;
	left: 20%;
	right: 20%;
}
.title > .el-menu-item {
	text-align: center;
	font-size: 20px;
}
</style>
