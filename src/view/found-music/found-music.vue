<template>
    <div class="found-music-wrap">
        <TabBar :tabs="tabs" :value="$route.path" @change="handleTabChange"/>
        <div class="content-wrap">
            <keep-alive> <!--保存在内存中，防止重复渲染-->
                <transition name="fade" mode="out-in" >
                    <!--component 组件，由vue提供，具体文档可看这里 https://cn.vuejs.org/v2/guide/components.html#动态组件-->
                    <!--<component class="content-wrap" v-bind:is="activeTab"></component>-->
                    <router-view></router-view>
                </transition>
            </keep-alive>
        </div>
    </div>
</template>
<style lang="less">
    @import "../../style/variable";
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .found-music-wrap {
        .content-wrap {
            top: @foundMusicTopBarHeight;
            position: absolute;
            bottom: 0;
            padding-bottom: @playBarHeight;
            width: 100%;
            overflow-y: auto;
        }
    }
</style>
<script type="text/javascript">
    import { TabContainer, TabContainerItem, Navbar, TabItem } from 'mint-ui';
    import TabBar from '../../components/tab-bar/TabBar.vue';

    export default{
        data(){
            return {
                selected: '1',
                active: '1',
                tabs: [
                    {
                        value: '/found_music/recommendation',
                        title: '个性推荐',
                        path: '/found_music/recommendation'
                    }, {
                        value: '/found_music/song_list',
                        title: '歌单',
                        path: '/found_music/song_list'
                    }, {
                        value: '/found_music/anchor_radio',
                        title: '主播电台',
                        path: '/found_music/anchor_radio'
                    }, {
                        value: '/found_music/ranking',
                        title: '排行榜',
                        path: '/found_music/ranking'
                    }
                ]
            }
        },
        computed: {
            activeTab: function () {
                return this.$store.state.foundMusic.activeTab
            },
        },
        components: {
            TabContainer,
            TabContainerItem,
            Navbar,
            TabItem,
            TabBar
        },
        methods: {
            handleTabChange (val) {
                this.$store.dispatch('changeActiveTab', val);
            },
        },
    }
</script>
