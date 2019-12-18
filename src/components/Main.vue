<template>
	<div>
		<el-card shadow="hover" style="margin: 2.5rem;">使用步骤</el-card>
		<el-steps :active="1" align-center>
			<el-step title="步骤1" description="输入您所要判断的序列"></el-step>
			<el-step title="步骤2" description="通过已训练模型进行预测"></el-step>
			<el-step title="步骤3" description="显示结果进行查看"></el-step>
		</el-steps>
		<div class="start">
			<el-card shadow="hover" style="margin: 4rem auto 0;">
				<el-button type="success" plain>
					<router-link @click.native="flushCom" to='/function' >开始使用</router-link>
				</el-button>
			</el-card>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Main',
	data() {
		return {
			active: 0
		};
	},
	methods: {
		next() {
			if (this.active++ > 2) this.active = 0;
		},
		flushCom(){
			this.$router.go(0)
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
	border: 2px solid red;
	width: 25rem;
	height: 28rem;
}
.el-steps {
	padding-top: 1.25rem;
}
.start {
	width: 200px;
	margin: 0 auto;
}
a{
	text-decoration: none;
}
</style>
