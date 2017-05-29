<template>
    <ul class="vertical-official-wrap">
        <li class="list-item waves-effect waves-classic" v-for="(item, index) in dataSource" :key="index">
            <div class="item-cover-wrap">
                <img class="cover-img" :src.lazy="item.coverImgUrl + imgCropStr">
                <span class="cover-frequency">{{item.updateFrequency}}</span>
            </div>
            <div class="item-main">
                <p v-for="(track, trackIndex) in item.tracksPreview" :key="trackIndex" class="main-text">{{trackIndex + 1}}.{{track.name}}</p>
            </div>
        </li>
    </ul>
</template>
<style lang="less">
    @import "../../style/variable";
    @leftOffset: 2.3rem;
    @silverColor: #666;
    .vertical-official-wrap {
        margin-bottom: .3rem;
        .list-item {
            display: flex;
            padding-top: .05rem;
            .item-cover-wrap {
                position: relative;
                .cover-img {
                    height: 2.1rem;
                    width: 2.1rem;
                }
                .cover-frequency {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 2.1rem;
                    width: 2.1rem;
                    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0, 0) 70%, rgba(0,0,0,.2) 100%);
                    display: flex;
                    align-items: flex-end;
                    padding: .1rem;
                    color: #fff;
                    font-size: .24rem;
                }
            }
            .item-main {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-left: .15rem;
                flex: 1;
                border-bottom: 1px solid rgba(0,0,0,.05);
                .main-text {
                    font-size: .26rem;
                    color: @silverColor;
                }
            }
        }
    }
</style>
<script type="text/javascript">
    export default{
        props: ['dataSource'],
        data(){
            return{
                imgCropStr:'?param=100y100'
            }
        },
        components:{
        },
    }
</script>
