<template>
    <div class="navigation-wrap">
        <i class="iconfont icon-liebiao2 nav-toggle waves-effect waves-classic" @click="toggle(true)"></i>
        <div class="nav-content">
            <router-link class="content-item waves-effect waves-classic" width="80" :to="{ path: '/mine-music' }"><i class="iconfont icon-music"></i></router-link>
            <router-link class="content-item waves-effect waves-classic" width="80" :to="{ path: '/found-music' }"><i class="iconfont icon-wangyiyunyinlezizhi-copy"></i></router-link>
            <router-link class="content-item waves-effect waves-classic" width="80" :to="{ path: '/friend' }"><i class="iconfont icon-pengyou"></i></router-link>
        </div>
        <i class="iconfont icon-search nav-search waves-effect waves-classic"></i>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";

    .navigation-wrap {
        display: flex;
        background-color: @themeColors;
        .nav-toggle {
            width: @navBarHeight;
        }
        .nav-content {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            .content-item {
                width: @navBarHeight;
                height: 100%;
                text-align: center;
                opacity: .5;
                transition: opacity .3s ease;
            }
            .router-link-active {
                opacity: 1;
            }
        }
        .nav-search {
            width: @navBarHeight;
        }
        .iconfont {
            height: @navBarHeight;
            line-height: @navBarHeight;
            text-align: center;
            font-size: .46rem;
            color: #fff;
        }
    }
</style>
<script>
    export default{
        data(){
            return{}
        },
        methods: {
            toggle(flag) {
                this.$store.dispatch('toggleSidePanel', flag);
            },
        },
    }
</script>
