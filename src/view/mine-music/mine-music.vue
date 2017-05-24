<template>
    <div class="min-music-wrap">
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
        <LinkList />
        <AccordionWrap title="创建的歌单" :amount="1" type="songListCreated" />
        <AccordionWrap title="收藏的歌单" :amount="1" type="songListCollection" />
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .min-music-wrap {
        top: 0;
        position: absolute;
        padding-bottom: @playBarHeight;
        width: 100%;
        overflow-y: auto;

        /*width: 256px;*/
        /*height: 300px;*/
        /*-webkit-overflow-scrolling: touch;*/
        /*overflow-scrolling: touch;*/
        /*border: 1px solid #d9d9d9;*/
        /*position: relative;*/
        user-select: none;
        .mu-refresh-svg-icon {
            color: @themeColors;
        }
        .mu-circle-spinner {
            border-color: @themeColors;
        }
    }
    .iconfont {
        font-size: 30px!important;
    }
</style>
<script type="text/javascript">
    import LinkList from './LinkList.vue';
    import AccordionWrap from './AccordionWrap.vue';
    import API from '../../api/API';

    export default{
        data(){
            return {
                refreshing: false,
                trigger: null
            }
        },
        components: {
            AccordionWrap,
            LinkList
        },
        mounted() {
            API.get('/api/search', {
                keyWord: '邓丽君'
            });

            this.trigger = this.$el;
            this.$toast({
                message: '操作成功',
                iconClass: 'iconfont icon-diantaibaoshe'
            })
        },
        methods: {
            refresh () {
                this.refreshing = true
                setTimeout(() => {
                    console.log('fefefe');
                    this.refreshing = false
                }, 2000)
            }
        }
    }
</script>
