<template>
	<div id="app">
		<el-container>
			<el-header><Header /></el-header>
			<el-main>
				<router-view />
			</el-main>
			<Footer />
		</el-container>
	</div>
</template>

<script>
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
// import Main from '../src/components/Main'
export default {
	name: 'App',
	components: {
		Header,
		Footer,
		// Main,
	}
};
</script>

<style>
.el-header {
	background-color: #24292e;
}
.el-main {
	color: #333;
	text-align: center;
}
.el-footer {
	color: #333;
	text-align: center;
	height: 30px;
	line-height: 30px;
	background-color: #eee;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>
