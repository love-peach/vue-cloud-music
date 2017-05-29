<template>
    <div class="min-music-wrap">
        <scroller :on-refresh="refresh">
            <LinkList />
            <AccordionWrap
                title="创建的歌单"
                :amount="1"
                manageType="songListCreated"
                @openActionSheet="handleToggleActionSheet"/>
            <AccordionWrap
                title="收藏的歌单"
                :amount="1"
                manageType="songListCollection"
                @openActionSheet="handleToggleActionSheet"/>
        </scroller>
        <ActionSheet v-if="isShowActionSheet" @close="handleToggleActionSheet">
            <!-- 这里将 handleToggleActionSheet 方法传递下去，是为了，在用户选择某个选项时，关闭 sheet-->
            <component v-bind:is="actionSheetType" @close="handleToggleActionSheet"></component>
        </ActionSheet>
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
    import ActionSheet from '../../components/action-sheet/ActionSheet.vue';
    import LinkList from './LinkList.vue';
    import AccordionWrap from './AccordionWrap.vue';
    import OptionsSongListCreated from './OptionsSongListCreated.vue';
    import OptionsSongListCollection from './OptionsSongListCollection.vue';
    import API from '../../api/API';

    export default{
        data(){
            return {
                refreshing: false,
                trigger: null,
                allLoaded: false,
                isShowActionSheet: false,
                items: [],
                actionSheetType: '',
            }
        },
        components: {
            AccordionWrap,
            LinkList,
            ActionSheet,
            songListCreated: OptionsSongListCreated,
            songListCollection: OptionsSongListCollection,
        },
        mounted() {
            API.get('/api/search', {
                keyWord: '邓丽君'
            });

            this.$toast({
                message: '操作成功',
                iconClass: 'iconfont icon-diantaibaoshe'
            });
        },
        methods: {
            refresh(done) {
                setTimeout(() => {
                    done()
                }, 1500)
            },
            handleToggleActionSheet(type) {
                console.log(type, '0009');
                this.isShowActionSheet = !this.isShowActionSheet;
                this.actionSheetType = type;
            },
        }
    }
</script>
