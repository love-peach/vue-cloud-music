<template>
    <div>
        <div class="accordion-bar-wrap" @click="$emit('openAccordion')">
            <i :class="[isOpenAccordion ? 'rotate' : '', 'iconfont icon-arrow-right']"></i>
            <div class="accordion-bar-text">{{title}}({{amount}})</div>
            <i class="iconfont icon-shezhi" @click.stop.prevent="openBottomSheet"></i>
        </div>
        <mu-bottom-sheet :open="isShowBottomSheet" @close="closeBottomSheet">
            {{title}}
            <!-- 这里将 closeBottomSheet 方法传递下去，是为了，在用户选择某个选项时，关闭 sheet-->
            <component v-bind:is="type" @closeBottomSheet="closeBottomSheet"></component>
        </mu-bottom-sheet>
    </div>

</template>
<style scoped lang="less">
    @grayColor: #e7e9e9;
    .accordion-bar-wrap {
        display: flex;
        align-items: center;
        background-color: @grayColor;
        .accordion-bar-text {
            font-size: .26rem;
            flex: 1;
            line-height: 1;
        }
        .iconfont {
            height: .64rem;
            line-height: .64rem;
            text-align: center;
            transition: transform .3s ease;
        }
        .icon-arrow-right {
            padding: 0 .24rem;
        }
        .icon-shezhi {
            padding: 0 .32rem;
        }
        .rotate {
            transform: rotate(90deg);
        }
    }
</style>
<script type="text/javascript">
    // type 的取值一共有一下几种
    // songListCreated, songListCollection
    import OptionsSongListCreated from './OptionsSongListCreated.vue';
    import OptionsSongListCollection from './OptionsSongListCollection.vue';
    export default{
        props: ['title', 'amount', 'type', 'isOpenAccordion'],
        data(){
            return {
                isShowBottomSheet: false,
            }
        },
        components: {
            songListCreated: OptionsSongListCreated,
            songListCollection: OptionsSongListCollection
        },
        methods: {
            closeBottomSheet () {
                this.isShowBottomSheet = false
            },
            openBottomSheet () {
                this.isShowBottomSheet = true
            }
        }
    }
</script>
