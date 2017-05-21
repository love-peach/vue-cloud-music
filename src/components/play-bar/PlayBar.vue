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
        padding: .1rem;
        display: flex;
        height: 100%;
        background-color: rgba(255,2555,255,.9);
        .player {
            width: .66rem;
            height: .66rem;
            margin-right: .25rem;
        }
        .player-info {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-around;
            .sing-name {
                font-size: .28rem;
                line-height: 1;
                color: #333;
            }
            .player-name {
                font-size: .12rem;
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
