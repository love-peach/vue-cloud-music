<template>
    <div class="home-wrap">
        <NavBar />
        <div class="home-content">
            <router-view></router-view>
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
            .px2rem(top, @navBarHeight);
            .px2rem(bottom, 0);
            width: 100%;
            position: absolute;
            /*z-index: 10;*/
            overflow-y: auto;
            .px2rem(padding-bottom, @playBarHeight);
            background-color: #f2f4f5;
        }
        .home-footer {
            .px2rem(height, @playBarHeight);
            position: absolute;
            /*z-index: 100;*/
            bottom: 0;
            width: 100%;
        }
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
        }
    }
</script>
