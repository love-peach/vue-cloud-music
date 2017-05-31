<template>
    <div class="recommendation-wrap">
        <TitleBar title="电台个性推荐"></TitleBar>
        <ul class="song-list-wrap">
            <li class="list-item-wrap" v-for="(item, index) in djRadios.slice(0, 6)" :key="index">
                <a class="item-wrap">
                    <div class="item-image-wrap">
                        <img class="item-image" :src.lazy="item.picUrl + imgCropStr">
                        <span class="item-image-des">{{item.imgDes}}</span>
                    </div>
                    <div class="item-text-wrap">
                        <p class="item-text">{{item.name}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import "../../../style/variable";
    .recommendation-wrap {
        overflow: hidden;
    }
    .song-list-wrap {
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
                .item-image {
                    height: 2.1rem;
                    width: 2.1rem;
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
                padding: .15rem .08rem .2rem;
                .item-text {
                    font-size: .24rem;
                    color: @textColorMain;
                    line-height: 1.2;

                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2;
                }

            }
        }
    }
</style>
<script type="text/javascript">
    import request from '../../../api/request';
    import TitleBar from '../../../components/title-bar/TitleBar.vue';
    export default{
        data(){
            return{
                imgCropStr:'?param=105y105',
                djRadios: [],
            }
        },
        components:{
            TitleBar,
        },
        beforeMount() {
            request.getRadioRecommend({limit: 6})
                .then((data) => {
                    this.djRadios = data.djRadios;
                })
                .catch()
        },
    }
</script>
