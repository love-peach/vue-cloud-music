<template>
    <div class="song-list-wrap">
        <!--<refreshControl :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>-->
        <!--<infiniteScroll :scroller="scroller" :loading="loading" @load="loadMore"/>-->
        <!--精品歌单入口-->
        <Banner />

    </div>
</template>
<style scoped lang="less">
    @import "../../../style/variable";
    .song-list-wrap {

    }
</style>
<script type="text/javascript">
    // import refreshControl from '../../components/muse-ui/refresh-control/index.vue';
    // import infiniteScroll from '../../components/muse-ui/infinite-scroll/InfinityScroll.vue'
    import Banner from './Banner.vue';
    export default{
        data(){
            return {
                msg: 'hello vue',
                refreshing: false,
                trigger: null,
                loading: false,
                scroller: null
            }
        },
        components: {
            // refreshControl,
            // infiniteScroll,
            Banner,
        },
        mounted () {
            this.trigger = this.$el;
            this.scroller = this.$el
        },
        methods: {
            refresh () {
                console.log('009988');
                this.refreshing = true;
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
            },
            loadMore () {
                console.log('0011118');
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                }, 2000)
            }
        }
    }
</script>
