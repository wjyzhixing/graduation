<template>
    <div>
        <el-footer style="height:30px">{{msg1}}&copy;{{msg2}}</el-footer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg1: 'Copyright By',
			msg2: '2020 王竟宇 AllRightsReserved'
        }
    }
}
</script>

<style scoped>

</style>