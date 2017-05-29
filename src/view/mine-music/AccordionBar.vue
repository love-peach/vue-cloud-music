<template>
    <div>
        <div class="accordion-bar-wrap" @click="$emit('openAccordion')">
            <i :class="[isOpenAccordion ? 'rotate' : '', 'iconfont icon-arrow-right']"></i>
            <div class="accordion-bar-text">{{title}}({{amount}})</div>
            <i class="iconfont icon-shezhi" @click.stop.prevent="openBottomSheet"></i>
        </div>

        <Popup v-if="isShowBottomSheet" @close="toggle()">
            <component v-bind:is="type" @closeBottomSheet="closeBottomSheet"></component>
        </Popup>
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
            height: .54rem;
            line-height: .6rem;
            text-align: center;
            transition: transform .3s ease;
        }
        .icon-arrow-right {
            padding: 0 .24rem;
            font-size: .26rem;
        }
        .icon-shezhi {
            padding: 0 .28rem;
            font-size: .26rem;

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
    import Popup from '../../components/popup/Popup.vue';

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
            songListCollection: OptionsSongListCollection,
            Popup,
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
