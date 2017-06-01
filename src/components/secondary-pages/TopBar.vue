<template>
    <div class="top-bar-wrap">
       <router-link class="bar-link" to="/"><i class="iconfont icon-fanhui"></i></router-link>
        电台分类
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .top-bar-wrap {
        display: flex;
        align-items: stretch;
        height: @navBarHeight;
        background-color: @themeColors;
        color: #fff;
        line-height: @navBarHeight;
        .bar-link {
            width: @navBarHeight;
            font-size: .3rem;
            color: #fff;
            text-align: center;
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
