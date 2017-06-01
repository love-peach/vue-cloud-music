<template>
    <div class="sidePanel-top">
        <p>{{text.title}}</p>
        <p>{{text.msg}}</p>
        <router-link to="/" class="login-btn">立即登录</router-link>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .sidePanel-top{
        padding-top: .8rem;
        width: 5.25rem;
        height: 3rem;
        background: #000;//这里是个背景图 暂时那背景代替；
        text-align: center;
        p {
            color: @SidePanelTopText;
            height: .4rem;
            line-height: .4rem;
            font-size: .26rem;

        }
        .login-btn {
            margin-top:  .3rem;
            display: inline-block;
            width: 2.64rem;
            height: .56rem;
            line-height: .52rem;
            color: @SidePanelTopBtn;
            border-radius: .28rem;
            border: 1px solid #5b5c60;
            font-size: .28rem;
        }
    }
</style>
<script type="text/javascript">
        export default{
        data(){
            return{
                text:{
                    title:"登录网易云音乐",
                    msg:"320K高音质无限下载，手机电脑多端同步"
                }
            }
        },
        components:{
        }
    }
</script>
