<template>
	<div class="fun">
		<el-form ref="form" :model="form" label-width="80px" id="create">
			<h1 style="padding-bottom: 3.125rem;">输入序列进行预测</h1>
			<el-form-item label="输入序列" style="padding-bottom: 3.125rem;">
				<el-input v-model="form.name" type="textarea"></el-input>
			</el-form-item>
			<el-button type="primary" @click="onSubmit">进行预测</el-button>
			<el-button @click="onResult()">获取结果</el-button>
			<el-button @click="getDocu()">获取结果文件</el-button>
			</el-form-item>
		</el-form>

		<!-- 		<div class="result" v-for="re in res">
			{{re.slice(2,43)}} {{re.slice(46,55)}} {{re.slice(58,59)}}
		</div> -->
		<div id="display">
			<div class="clearfix head"><span>Predict conclusion</span></div>
			<el-table :data="res" header-row-class-name="center">
				<el-table-column label="Sequences" width="300" align="center">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{scope.row.Sequence}}</span>
					</template>
				</el-table-column>
				<el-table-column label="percent" width="300" align="center">
					<template slot-scope="scope">
						<span>{{undefined||scope.row.percent}}</span>
					</template>
				</el-table-column>
				<el-table-column label="exist" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{scope.row.exist}}</span>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					// name2: '',
				},
				res: [],
				path: '',
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
				// alert(this.form.name)
				// alert(this.form.name2)
				// let formData = new FormData();
				// formData.append('sequence',this.form.name);
				// console.log(formData.sequence);
				this.$axios({
					method: 'post',
					url: 'http://localhost:9998',
					data: {
						sequence: this.form.name
					},
				}).then(response => {
					console.log(JSON.stringify(response.data));
					console.log(response)
					alert(response.data.std)
					this.path = response.data.msg;
				}).
				catch(err => {
					console.log(err)
				})
			},
			onResult() {
				this.$axios({
					method: 'post',
					url: 'http://localhost:9998/receiveResult',
				}).then(response => {
					let disable = document.getElementById('create');
					disable.style.display = "none";
					let able = document.getElementById('display');
					able.style.display = "block";
					alert(response.data.msg);
					let temp = response.data.msg.split("\n");
					for (let i = 0; i < temp.length - 1; i++) {
						// console.log(temp[0].split('\' \''))
						let re = temp[i].split('\' \'')
						console.log(re[0].slice(2,))
						console.log(re[2].slice(0,-3))
						this.res.push({
							Sequence: re[0].slice(2, ),
							percent: re[1],
							exist: re[2].slice(0, -3)
						})
					}
				})
			},
			getDocu() {
				alert(this.path);
				window.open(this.path);
			}
		}
	}
</script>
<style scoped>
	.fun {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		border-radius: 30px;
		/* height: 28rem; */
		width: 70%;
		margin: 1.25rem auto;
		padding: 1.25rem;
	}

	.demo-input-suffix {
		width: 500px;
	}
	#display {
		display: none;
		margin-bottom: 6.25rem;
	}
	.head {
		font-size: 1.5625rem;
		margin-bottom: 10px;
	}
</style>
