<template>
	<div class="fun">
		<h1 style="padding-bottom: 2.5rem;">上传序列文件进行预测</h1>
		<div class="load">
		<a href="javascript:;" class="file" name="file">
			<i class="el-icon-upload" ></i>
			<div>点击这里上传文件</div><input type="file" @change="update"/>
		</a>
		<div class="row">
			<el-button @click="predict()">进行预测</el-button>
			<el-button @click="fileLoad()">文件下载</el-button>
		</div>
		<div v-if="loading" v-loading="true" element-loading-spinner="el-icon-loading" style="margin-top: 2.275rem;height: 1rem;" element-loading-text="正在预测，请稍后"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			path: 'http://localhost:9998/download/',
			name: '',
			loading: false,
		};
	},
	methods: {
		update(e){
			let file = e.target.files[0];
			let param = new FormData();
			param.append('file',file);
			console.log(param.get('file'));
			this.$axios.post('http://127.0.0.1:9998/file',param).then(response => {
				console.log(response.data);
				this.name = response.data.name;
				console.log(this.name)
				alert(response.data.msg);
			})
		},
		fileLoad(){
			alert(this.path+this.name);
			window.open(this.path+this.name);
		},
		predict(){
			this.loading = true;
			this.$axios.post('http://127.0.0.1:9998/compute').then(response => {
				this.loading = false;
				alert(response.data.msg);
			})
		},
	}
}
</script>
<style scoped>
h1 {
	margin-bottom: 0;
}
.fun {
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	border-radius: 30px;
	height: 26rem;
	width: 70%;
	margin: 1rem auto;
	padding: 1.5rem;
}
.load {
	height: 3.75rem;
	width: 28.75rem;
	margin: 0 auto;
	line-height: 1.75rem;
}
i {
	font-size:3.5rem;
	padding-top: 0.625rem;
}
.file {
    position: relative;
    display: block;
    background: #EEEFFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
	padding: 4px 20px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 50px;
	margin-bottom: 1.25rem;
}
.file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}
.file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
}
.row{
	display: flex;
}
.row > button{
	flex: 1;
}

</style>
