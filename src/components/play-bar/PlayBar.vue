<template>
    <div class="play-bar-wrap">
        <img class="player" src="../../assets/img/logo.png">
        <div class="player-info">
            <span class="sing-name">成都</span>
            <span class="player-name">赵雷</span>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .play-bar-wrap {
        .padding2rem(10);
        display: flex;
        height: 100%;
        background-color: rgba(255,2555,255,.9);
        .player {
            .px2rem(width, 66);
            .px2rem(height, 66);
            .px2rem(margin-right, 15)
        }
        .player-info {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-around;
            .sing-name {
                .px2rem(font-size, 28);
                line-height: 1;
                color: #333;
            }
            .player-name {
                .px2rem(font-size, 12);
                line-height: 1;
                color: #666;
            }
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
