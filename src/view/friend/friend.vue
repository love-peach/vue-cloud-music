<template>
    <div class="music-friend">
        <ul>
            <li class="music-friend-item">
                <div class="music-friend-item-title">
                    <img class="user-portrait" src="../../assets/img/logo.png" alt="">
                    <div class="user-name">
                        <p>
                            <span class="name">你要不要吃芒果千层</span>
                            <span class="share">分享单曲:</span>
                        </p>

                        <p>最近</p>
                    </div>

                    <div class="user-attention">+关注</div>
                </div>

                <div class="music-friend-item-content">
                    <div class="describe">那些神一样的广告，哈哈，太魔性了！这波我服！</div>
                    <div class="music-imgs">
                        <img src="../../assets/img/musicImgs.png" alt="">
                    </div>
                    <div class="music-share">

                        <div class="music-name">
                            <div class="music-name-info">
                                <img src="../../assets/img/music-share.png" alt="">
                                <div>
                                    <p class="name">笑死朕</p>
                                    <p class="author">陈奕迅</p>
                                 </div>
                            </div>

                            <p class="source">——创意搜罗</p>

                            <div class="music-tool">
                                <span>
                                    <i class="iconfont icon-zankongxingai"></i>15264
                                </span>

                                <span>
                                    <i class="iconfont icon-momentmessage"></i>1908
                                </span>

                                <span>
                                    <i class="iconfont icon-fenxiang"></i>7634
                                </span>

                                <i class="info-share iconfont icon-androidmorevertical"></i>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="music-line"></div>
            </li>
            <li class="music-friend-item">
                <div class="music-friend-item-title">
                    <img class="user-portrait" src="../../assets/img/logo.png" alt="">
                    <div class="user-name">
                        <p>
                            <span class="name">你要不要吃芒果千层</span>
                            <span class="share">分享单曲:</span>
                        </p>

                        <p>最近</p>
                    </div>

                    <div class="user-attention">+关注</div>
                </div>

                <div class="music-friend-item-content">
                    <div class="describe">那些神一样的广告，哈哈，太魔性了！这波我服！</div>
                    <div class="music-imgs">
                        <img src="../../assets/img/musicImgs.png" alt="">
                    </div>
                    <div class="music-share">

                        <div class="music-name">
                            <div class="music-name-info">
                                <img src="../../assets/img/music-share.png" alt="">
                                <div>
                                    <p class="name">笑死朕</p>
                                    <p class="author">陈奕迅</p>
                                </div>
                            </div>

                            <p class="source">——创意搜罗</p>

                            <div class="music-tool">
                                <span>
                                    <i class="iconfont icon-zankongxingai"></i>15264
                                </span>

                                <span>
                                    <i class="iconfont icon-momentmessage"></i>1908
                                </span>

                                <span>
                                    <i class="iconfont icon-fenxiang"></i>7634
                                </span>

                                <i class="info-share iconfont icon-androidmorevertical"></i>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="music-line"></div>
            </li>
            <li class="music-friend-item">
                <div class="music-friend-item-title">
                    <img class="user-portrait" src="../../assets/img/logo.png" alt="">
                    <div class="user-name">
                        <p>
                            <span class="name">你要不要吃芒果千层</span>
                            <span class="share">分享单曲:</span>
                        </p>

                        <p>最近</p>
                    </div>

                    <div class="user-attention">+关注</div>
                </div>

                <div class="music-friend-item-content">
                    <div class="describe">那些神一样的广告，哈哈，太魔性了！这波我服！</div>
                    <div class="music-imgs">
                        <img src="../../assets/img/musicImgs.png" alt="">
                    </div>
                    <div class="music-share">

                        <div class="music-name">
                            <div class="music-name-info">
                                <img src="../../assets/img/music-share.png" alt="">
                                <div>
                                    <p class="name">笑死朕</p>
                                    <p class="author">陈奕迅</p>
                                </div>
                            </div>

                            <p class="source">——创意搜罗</p>

                            <div class="music-tool">
                                <span>
                                    <i class="iconfont icon-zankongxingai"></i>15264
                                </span>

                                <span>
                                    <i class="iconfont icon-momentmessage"></i>1908
                                </span>

                                <span>
                                    <i class="iconfont icon-fenxiang"></i>7634
                                </span>

                                <i class="info-share iconfont icon-androidmorevertical"></i>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="music-line"></div>
            </li>
        </ul>
    </div>
</template>
<style lang="less">
@import "../../style/variable";
.music-friend {
    margin:@friendBothOffset;
    background: @friendBg;
    ul {
        margin:0;
        padding:0;

        li.music-friend-item{
            list-style: none;
            margin-top: @friendListMarginTop;
        }
    }
}

.music-line {
    height:.02rem;
    background: #eaebed;
    margin:0 -0.2rem 0 -0.1rem;
}
.music-friend-item .music-friend-item-title {
    display:flex;
    /*justify-content:space-between;*/
    position:relative;

    img.user-portrait {
        width:.64rem;
        height:.7rem;
        border-radius:50%;
        background: #fff;
        margin-right: .16rem;

    }
    .user-name p:nth-of-type(1) {
        font-size:.23rem;
        span.name {
            color: @friendUserColor;
        }
        span.share {
            color: @textColorMain;
        }
    }

    .user-name p:nth-of-type(2) {
        font-size: .21rem;
        color: @friendRecentTime;
    }
    .user-attention {
        position: absolute;
        top:50%;
        right:.06rem;
        transform:translateY(-50%);
        font-size: .23rem;
        color: @friendAccordion;
    }
}

.music-friend-item-content {
    margin:@friendContentMargin;

    .describe {
        font-size: .23rem;
        color: @textColorMain;
        margin-bottom: .12rem;
    }

    .music-imgs {
        img {
            width:100%;
        }
    }
    .music-share {
        font-size:0;

        .music-name-info {
            display: flex;
            height:.84rem;
            background: #e7e9e8;
            margin-top: .1rem;
            img {
                margin:.11rem .12rem 0 .11rem;
                width:.64rem;
                height:.64rem;
            }
            .name {
                margin-top: .16rem;
                font-size: .24rem;
                font-weight: bold;
                color: @textColorMain;
            }
            .author {
                font-size: .18rem;
                color: @friendRecentTime;
            }
        }
        .source {
            margin-top: .18rem;
            font-size: .23rem;
            color: @friendRecentTime;
        }

        .music-tool {
            margin-top: .4rem;
            margin-bottom: .32rem;
            display: flex;
            position:relative;
            span {
                font-size: .16rem;
                margin-right:.5rem;
                i {
                    margin-right:.1rem;
                    font-size: .3rem;
                    vertical-align: middle;
                }
            }

            i.info-share {
                position: absolute;
                right:.16rem;
            }


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
