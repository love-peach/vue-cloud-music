<template>
    <div class="demo">
        <!--<refreshControl :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>-->
        <div style="height: 800px;border: 1px solid red;">歌单</div>
        <!--<infiniteScroll :scroller="scroller" :loading="loading" @load="loadMore"/>-->
    </div>
</template>
<style scoped lang="less">
    .demo {
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid #d9d9d9;
    }
</style>
<script type="text/javascript">
    // import refreshControl from '../../components/muse-ui/refresh-control/index.vue';
    // import infiniteScroll from '../../components/muse-ui/infinite-scroll/InfinityScroll.vue'
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
