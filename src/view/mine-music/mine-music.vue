<template>
    <div class="min-music-wrap">
        <scroller :on-refresh="refresh">
            <LinkList />
            <AccordionWrap title="创建的歌单" :amount="1" type="songListCreated" />
            <AccordionWrap title="收藏的歌单" :amount="1" type="songListCollection" />
        </scroller>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .min-music-wrap {
        top: 0;
        bottom: @playBarHeight;
        position: absolute;
        width: 100%;
        overflow-y: auto;
        .mu-refresh-svg-icon {
            color: @themeColors;
        }
        .mu-circle-spinner {
            border-color: @themeColors;
        }
        .iconfont {
            font-size: 30px!important;
        }
    }

</style>
<script type="text/javascript">
    import { Loadmore } from 'mint-ui';
    import LinkList from './LinkList.vue';
    import AccordionWrap from './AccordionWrap.vue';
    import API from '../../api/API';

    export default{
        data(){
            return {
                refreshing: false,
                trigger: null,
                allLoaded: false,
                items: []
            }
        },
        components: {
            AccordionWrap,
            LinkList,
            Loadmore,
            myLoadmore: Loadmore,
        },
        mounted() {
            API.get('/api/search', {
                keyWord: '邓丽君'
            });

            this.$toast({
                message: '操作成功',
                iconClass: 'iconfont icon-diantaibaoshe'
            });
            this.top = 1
            this.bottom = 20
        },
        methods: {
            refresh(done) {
                setTimeout(() => {
                    done()
                }, 1500)
            },

        }
    }
</script>
