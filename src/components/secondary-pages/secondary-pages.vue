<template>
    <div class="secondary-pages-wrap">
        <div class="pages-header">
            <TopBar />
        </div>
        <div class="pages-content">
            <keep-alive> <!--保存在内存中，防止重复渲染-->
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </keep-alive>
        </div>
        <div class="pages-footer">
            <PlayBar />
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .secondary-pages-wrap {
        position: relative;
        height: 100%;
        .pages-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }
        .pages-content {
            padding-top: @navBarHeight;
            padding-bottom: @playBarHeight;
        }
        .pages-footer {
            position: fixed;
            bottom: 0;
            height: @playBarHeight;
            width: 100%;
        }
    }
</style>
<script type="text/javascript">
    import TopBar from './TopBar.vue';
    import PlayBar from '../../components/play-bar/PlayBar.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            TopBar,
            PlayBar
        }
    }
</script>
