<template>
    <ul class="horizontal-list-wrap">
        <li class="list-item-wrap" v-for="(item, index) in dataSource" :key="index">
            <a class="item-wrap">
                <div class="item-image-wrap">
                    <img class="item-image" :src.lazy="item.imgPic + imgCropStr">
                    <span class="item-image-des">{{item.imgDes}}</span>
                </div>
                <div class="item-text-wrap">
                    <p class="item-text">{{item.text}}</p>
                </div>
            </a>
        </li>
    </ul>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .horizontal-list-wrap {
        margin: 0 -2px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        .list-item-wrap {
            width: 33.33%;
            .item-wrap {
                display: block;
                margin: 0 1px;
                transition: opacity .3s ease;
                &:active {
                    opacity: .9;
                }
            }
            .item-image-wrap {
                position: relative;
                height: 2.1rem;
                .item-image {
                    height: 100%;
                    width: 100%;
                    background: red;;
                }
                .item-image-des {
                    position: absolute;
                    bottom: .1rem;
                    left: .1rem;
                    color: #fff;
                    font-size: .24rem;
                }
            }
            .item-text-wrap {
                padding: .15rem .1rem .2rem;
                .item-text {
                    font-size: .24rem;
                    color: @textColorMain;
                    line-height: 1.2;
                }

            }
        }
    }
</style>
<script>
    export default{
        props: ['dataSource'],
        data(){
            return{
                imgCropStr:'?param=100y100'
            }
        },
        components:{
        }
    }
</script>
