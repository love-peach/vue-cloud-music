<template>
    <div class="home-wrap">
        <NavBar />
        <div class="home-content">
            <keep-alive> <!--保存在内存中，防止重复渲染-->
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </keep-alive>
        </div>
        <div class="home-footer">
            <PlayBar />
        </div>
        <SidePanel />
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";

    .home-wrap {
        position: relative;
        height: 100%;
        .home-content {
            position: absolute;
            top: @navBarHeight;
            bottom: 0;
            width: 100%;
            padding-bottom: @playBarHeight;
            /*z-index: 10;*/
            overflow-y: auto;
            background-color: #f2f4f5;
        }
        .home-footer {
            position: absolute;
            bottom: 0;
            height: @playBarHeight;
            width: 100%;
            /*z-index: 100;*/
        }
    }

    /* 过度样式 */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<script>
    import NavBar from '@/components/nav-bar/NavBar.vue';
    import PlayBar from '@/components/play-bar/PlayBar.vue';
    import SidePanel from '@/components/side-panel/SidePanel.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            NavBar,
            PlayBar,
            SidePanel,
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
    }
</script>
