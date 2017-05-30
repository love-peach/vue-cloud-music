<template>
    <div class="song-list-wrap">
        <!-- 歌单筛选 -->
        <div class="song-filter">
            <router-link class="filter-link" to="/">全部歌单 <i class="iconfont icon-arrow-right"></i></router-link>
            <ul class="filter-short-option">
                <li @click="filterSongList('欧美')"><span>欧美</span></li>
                <li @click="filterSongList('电子')"><span>电子</span></li>
                <li @click="filterSongList('民谣')"><span>民谣</span></li>
            </ul>
        </div>

        <!-- 歌单列表 -->
        <ul class="song-list-content">
            <li class="list-item-wrap" v-for="(item, index) in songList" :key="index">
                <a class="item-wrap">
                    <div class="item-image-wrap">
                        <img class="item-image" :src.lazy="item.coverImgUrl + imgCropStr">
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

    .song-list-wrap {
        overflow: hidden;
        .song-filter {
            padding: .3rem .16rem;
            display: flex;
            justify-content: space-between;
            font-size: .26rem;
            color: @textColorMain;
            align-items: center;
            .filter-link {
                padding: .1rem .2rem;
                color: @textColorMain;
                border: 1px solid rgba(0, 0, 0, .1);
                border-radius: 1rem;
            }
            .filter-short-option {
                display: flex;
                li {
                    border-right: 1px solid #aaa;
                    padding: 0 .05rem;
                    &:last-child {
                        border-right: 0;
                    }
                    span {
                        padding: .05rem;
                        border-radius: 3px;
                    }
                    &:active span {
                        background-color: #aaa;
                    }
                }
            }
        }
        .song-list-content {
            margin: 0 -2px;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            .list-item-wrap {
                width: 50%;
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
                        height: 3.19rem;
                        width: 100%;
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

                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }

                }
            }
        }
    }
</style>
<script type="text/javascript">
    import request from '../../../api/request';
    export default{
        data(){
            return {
                params: {
                    cat: '欧美',
                    order: 'hot',
                    limit: 10,
                    offset: 0
                },
                songList: [],
                imgCropStr: '?param=160y160'
            }
        },
        components: {},
        beforeMount () {
            this.requestSongListData();
        },
        methods: {
            requestSongListData(params = this.params) {
                request.getFoundMusicSongList(params)
                    .then((data) => {
                        this.songList = data.playlists;
                    })
                    .catch();
            },
            filterSongList(category) {
                const params = {
                    cat: category,
                    order: 'hot',
                    limit: 10,
                    offset: 0
                };
                this.requestSongListData(params)
            },
        }
    }
</script>
