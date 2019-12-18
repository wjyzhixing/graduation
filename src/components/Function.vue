<template>
	<div class="fun">
		<el-form ref="form" :model="form" label-width="80px">
			<h1 style="padding-bottom: 3.125rem;">输入序列进行预测</h1>
			<el-form-item label="输入序列" style="padding-bottom: 3.125rem;">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-button type="primary" @click="onSubmit">进行预测</el-button>
			<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
		alert(this.form.name)
		// let formData = new FormData();
		// formData.append('sequence',this.form.name);
		// console.log(formData.sequence);
		this.$axios({
			method: 'post',
			url: 'http://localhost:9998',
			data: {sequence:this.form.name},
		}).then(response => {
			console.log(JSON.stringify(response.data));
			console.log(response)
		}).
		catch(err => {
			console.log(err)
		})
      }
    }
  }
</script>
<style scoped>
.fun {
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	border-radius: 30px;
	height: 20rem;
	width: 70%;
	margin: 1.25rem auto;
	padding: 1.25rem;
}
.demo-input-suffix {
	width: 500px;
}
</style>
