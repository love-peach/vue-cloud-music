<template>
    <div class="vertical-official-wrap">
        <mu-list class="ranking-list">
            <div v-for="(item, index) in dataSource" :key="index">
                <mu-list-item>
                    <img :src="item.coverImgUrl + imgCropStr" slot="left">
                    <div class="list-name" v-for="(track, trackIndex) in item.tracksPreview" :key="trackIndex">{{trackIndex + 1}}.{{track.name}}</div>
                    <span class="list-updateFrequency">{{item.updateFrequency}}</span>
                </mu-list-item>
                <mu-divider class="list-divider" inset/>
            </div>
        </mu-list>
    </div>
</template>
<style lang="less">
    @import "../../style/variable";
    @leftOffset: 2.3rem;
    @silverColor: #666;
    .vertical-official-wrap {
        margin-bottom: .3rem;
        .mu-list {
            overflow: hidden;
        }
        .ranking-list {
            padding: 0;

            .show-left {
                padding: .06rem .2rem 0 @leftOffset;
                min-height: inherit;
                height: 2.16rem;
            }
            .mu-item-left {
                left: 0;
                bottom: 0;
                top: inherit;
                width: inherit;
                max-height: inherit;
                height: 2.1rem;
                background: -webkit-linear-gradient(top, rgba(0,0,0,.5) 0%, rgba(0,0,0, 0) 50%, rgba(0,0,0,.5) 100%);
                img {
                    height: 2.1rem;
                }
            }
            .mu-item-content {
                padding: .1rem 0 .15rem;
                display: flex;
                flex-direction: column;
                align-self: stretch;
                justify-content: space-around;
            }
            .list-name {
                font-size: .26rem;
                color: @silverColor;
            }
            .list-updateFrequency {
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
            .list-divider {
                /* 小米5 上 transform scaleY(0.5) 好像不管用*/
                position: relative;
                top: -1px;
                transform: scaleY(1);
                background-color: rgba(0,0,0,.05);
                margin-left: 2.1rem;

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
        mounted() {
            console.log(this.dataSource)
        }
    }
</script>
