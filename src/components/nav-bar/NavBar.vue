<template>
    <div class="navigation-wrap">
        <mu-flat-button class="navigation-switch" @click="toggle(true)" width="80"><i class="iconfont icon-liebiao2"></i></mu-flat-button>
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
        height: .9rem;
        display: flex;
        align-items: center;
        background-color: @themeColors;
        .navigation-switch {
            width: .8rem;
            height: 100%;
            min-width: inherit;
            color: #fff;
            i {
                font-size: .42rem;
            }
        }
        .navigation-content {
            display: flex;
            flex: 1;
            height: 100%;
            justify-content: center;

            .content-item {
                width: 1rem;
                min-width: inherit;
                height: 100%;
                color: #fff;
                opacity: .5;

                i {
                    font-size: .42rem;
                }
            }
            .router-link-active {
                opacity: 1;
            }
        }
        .navigation-search {
            height: @navBarHeight;
            width: @navBarHeight;
            color: #fff;
            display: block;
            font-size: .36rem;
            i {
                font-size: .36rem;
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
        },
        methods: {
            toggle(flag) {
                this.$store.dispatch('toggleSidePanel', flag);
            },
        },
    }
</script>
