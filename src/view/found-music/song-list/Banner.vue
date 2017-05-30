<template>
    <router-link class="boutique-entry" to="/" :style="{ backgroundImage: 'url(' + pic + cropStringBlur + ')'}">
        <img class="boutique-img" :src.lazy="pic + cropString">
        <div class="boutique-info">
            <p class="info-name"><i class="iconfont icon-huangguan"></i> 精品歌单 <i class="iconfont icon-arrow-right"></i></p>
            <p class="info-des">{{des}}</p>
            <p class="info-tip">{{tip}}</p>
        </div>
    </router-link>
</template>
<style scoped lang="less">
    @import "../../../style/variable";
    @silverColor: #888;
    .boutique-entry {
        position: relative;
        z-index: 1;
        height: 2.5rem;
        padding: .45rem .15rem .25rem;
        display: flex;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        &:before {
            content: ' ';
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,.4);
        }
        .boutique-img {
            height: 1.8rem;
            width: 1.8rem;
            margin-right: .15rem;
        }
        .boutique-info {
            flex: 1;
            color: #fff;
            align-self: center;
        }
        .info-name {
            align-self: center;
            margin-bottom: .25rem;
            font-size: .3rem;
        }
        .icon-huangguan {
            display: inline-block;
            height: .4rem;
            width: .4rem;
            line-height: .4rem;
            text-align: center;
            color: orange;
            border-radius: 1rem;
            border: 1px solid orange;
            font-size: .28rem;
            margin-right: .05rem;
        }
        .info-des {
            margin-bottom: .15rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1;
            font-size: .26rem;
            line-height: 1.1;
        }
        .info-tip {
            color: @silverColor;
            font-size: .24rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1;
            line-height: 1.3;
        }
    }
</style>
<script type="text/javascript">
    import request from '../../../api/request';
    export default{
        data(){
            return {
                cropString: '?param=120y120',
                cropStringBlur: '?param=10y10',
                pic: '',
                des: '',
                tip: ''
            }
        },
        components: {
        },
        beforeMount() {
            request.getSongListHighQuality({limit: 1})
                .then((data) => {
                    console.log(data)
                    const info = data.playlists[0];
                    this.pic = info.coverImgUrl;
                    this.des = info.name;
                    this.tip = info.copywriter;

                })
                .catch()
        }
    }
</script>
