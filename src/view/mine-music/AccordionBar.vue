<template>
    <div>
        <div class="accordion-bar-wrap" @click="$emit('openAccordion')">
            <i :class="[isOpenAccordion ? 'rotate' : '', 'iconfont icon-arrow-right']"></i>
            <div class="accordion-bar-text">{{title}}({{amount}})</div>
            <i class="iconfont icon-shezhi" @click.stop.prevent="openBottomSheet"></i>
        </div>
        <!-- 在用 mu-bottom-sheet 的时候有个问题：如果页面中用了mu-bottom-sheet 组件，不把他显示出来，直接跳页面，会报错。（官网demo也有）-->
        <!-- 解决办法是 添加 v-if 在打开的时候在加载 mu-bottom-sheet 组件，但是这个时候没有过度效果-->
        <!-- 因为报错好像不影响程序的运行，所以，这里就没有加 v-if -->
        <!--<div v-if="isShowBottomSheet">-->
            <mu-bottom-sheet :open="isShowBottomSheet" @close="closeBottomSheet">
                {{title}}
                <!-- 这里将 closeBottomSheet 方法传递下去，是为了，在用户选择某个选项时，关闭 sheet-->
                <component v-bind:is="type" @closeBottomSheet="closeBottomSheet"></component>
            </mu-bottom-sheet>
        <!--</div>-->
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
            font-size: .26rem;
        }
        .icon-shezhi {
            padding: 0 .32rem;
            font-size: .30rem;

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
        props: {
            title: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            isOpenAccordion: {
                type: Boolean,
                required: true
            }
        },
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
