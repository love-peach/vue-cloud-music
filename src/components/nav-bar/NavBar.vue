<template>
    <div class="navigation-wrap">
        <mu-flat-button class="navigation-switch" width="80"><i class="iconfont icon-liebiao2"></i></mu-flat-button>
        <div class="navigation-content">
            <mu-flat-button class="content-item" width="80" :to="{ path: '/mine-music' }"><i class="iconfont icon-music"></i></mu-flat-button>
            <mu-flat-button class="content-item" width="80" :to="{ path: '/found-music' }"><i class="iconfont icon-wangyiyunyinlezizhi-copy"></i></mu-flat-button>
            <mu-flat-button class="content-item" width="80" :to="{ path: '/friend' }"><i class="iconfont icon-pengyou"></i></mu-flat-button>

        </div>
        <mu-icon-button class="navigation-search">
            <i class="iconfont icon-search"></i>
        </mu-icon-button>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";

    .navigation-wrap {
        .px2rem(height, 90);
        display: flex;
        align-items: center;
        background-color: @themeColors;
        .navigation-switch {
            .px2rem(width, 80);
            height: 100%;
            min-width: inherit;
            color: #fff;
            i {
                .px2rem(font-size, 42);
            }
        }
        .navigation-content {
            display: flex;
            flex: 1;
            height: 100%;
            justify-content: center;
            .content-item {
                .px2rem(width, 100);
                min-width: inherit;
                height: 100%;
                i {
                    .px2rem(font-size, 42);
                    color: #fff;
                }
            }
        }
        .navigation-search {
            .px2rem(height, @navBarHeight);
            .px2rem(width, @navBarHeight);
            color: #fff;
            display: block;
            .px2rem(font-size, 36);
            i {
                .px2rem(font-size, 36);
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
