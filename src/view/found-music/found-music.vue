<template>
    <div class="found-music-wrap">
        <mu-tabs class="tab-bar" :value="$route.path" @change="handleTabChange" lineClass="tab-link-highlight">
            <mu-tab v-for="tab in tabs" :value="tab.path" :key="tab.value" @click="changeRouter(tab.path)">
                <router-link :to="tab.path">{{tab.title}}</router-link>
            </mu-tab>
        </mu-tabs>
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
        top: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        overflow-y: auto;
        .tab-bar {
            height: @foundMusicTopBarHeight;
            background-color: #fff;
            .mu-tab-link {
                color: #333;
                height: 100%;
                min-height: inherit;
                padding: 0;
            }
            .mu-tab-text {
                line-height: @foundMusicTopBarHeight;
            }
            a {
                color: @themeColors;
            }
            .mu-tab-active {
                color: @themeColors;
            }
            .tab-link-highlight {
                background-color: @themeColors;
            }
        }
        .content-wrap {
            top: @foundMusicTopBarHeight;
            position: absolute;
            bottom: 0;
            width: 100%;
            overflow-y: auto;
        }
    }
</style>
<script type="text/javascript">
    import Recommendation from './Recommendation.vue';
    import SongList from './SongList.vue';
    import AnchorRadio from './AnchorRadio.vue';
    import Ranking from './Ranking.vue';
    export default{
        data(){
            return {
                tabs: [
                    {
                        value: 'Recommendation',
                        title: '个性推荐',
                        path: '/found-music/recommendation'
                    }, {
                        value: 'SongList',
                        title: '歌单',
                        path: '/found-music/song_list'
                    }, {
                        value: 'AnchorRadio',
                        title: '主播电台',
                        path: '/found-music/anchor_radio'
                    }, {
                        value: 'Ranking',
                        title: '排行榜',
                        path: '/found-music/ranking'
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
            Recommendation,
            SongList,
            AnchorRadio,
            Ranking
        },
        methods: {
            handleTabChange (val) {
                this.$store.dispatch('changeActiveTab', val);
            },
            changeRouter(path) {
                this.$router.push(path);
            },
        },
    }
</script>
