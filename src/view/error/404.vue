<template>
    <div class="error-wrap">
        <img class="error-type" src="../../assets/img/404.png">
        <p class="error-tip" >很抱歉，你要查找的网页找不到!</p>
        <p class="error-tip">你可以尝试 <a href="">刷新页面</a> 或者 <router-link :to="{path: '/mine-music'}">返回首页</router-link></p>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .error-wrap {
        height: 100%;
        padding: 0 20px;
        background-color: #f5f5f5;
        text-align: center;
        .error-type {
            width: 4rem;
            margin: 2rem 0 .3rem;
        }
        .error-tip {
            margin-bottom: .15rem;
            font-size: .28rem;
            line-height: 1.5;
            color: #333;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
