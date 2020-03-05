<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix"><span>西北农林科技大学 信息工程学院 王竟宇</span></div>
			<el-table :data="tableData" header-row-class-name="center">
				<el-table-column label="日期" width="300" align="center">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column label="姓名" width="300" align="center">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>姓名: {{ scope.row.name }}</p>
							<p>项目: {{ scope.row.project }}</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">{{ scope.row.name }}</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="名称" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.project }}</span>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					date: '2018/11/10-2018/11/20',
					name: '王竟宇',
					project: 'DES，RAS加密系统'
				},
				{
					date: '2018/12/19-2019/01/10',
					name: '王竟宇',
					project: '数字签名系统'
				},
				{
					date: '2019/01/21-2019/02/10',
					name: '王竟宇',
					project: '移动端新闻咨询项目'
				},
				{
					date: '2019/04/12-2019/04/28',
					name: '王竟宇',
					project: '个人记账信息项目'
				},
				{
					date: '2019/06/04-2019/07/10',
					name: '赵栩旸，王宇轩，毛羽丰，王竟宇，陶原',
					project: 'WMD博客系统'
				},
				{
					date: '2019/10/19-2020/04/20',
					name: '王竟宇',
					project: '甲基化位点预测系统'
				}
			]
		};
	},
	methods: {
		handleEdit(index, row) {
			console.log(index, row);
		},
		handleDelete(index, row) {
			console.log(index, row);
		}
	}
};
</script>

<style>
.center th .cell {
	text-align: center !important;
}
</style>
