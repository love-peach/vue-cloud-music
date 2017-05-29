<template>
    <div>
        <div class="accordion-bar-wrap" @click="handleToggleAccordion">
            <i :class="[isOpenAccordion ? 'rotate' : '', 'iconfont icon-arrow-right']"></i>
            <div class="accordion-bar-text">{{title}}({{amount}})</div>
            <i class="iconfont icon-shezhi" @click.stop.prevent="handleOpenActionSheet"></i>
        </div>
        <!--这里加 isOpenAccordion ，是想让内容在手风琴组件打开的时候在加载-->
        <div v-if="isOpenAccordion">
            <AccordionContent :songList="songList"/>
        </div>
    </div>
</template>
<style scoped lang="less">
    @grayColor: #e7e9e9;
    .accordion-bar-wrap {
        display: flex;
        align-items: center;
        background-color: @grayColor;
        .accordion-bar-text {
            font-size: .24rem;
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
            width: .6rem;
            line-height: .6rem;
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
    import AccordionContent from './AccordionContent.vue';
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
            manageType: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                isOpenAccordion: false,
                songList: [
                    {
                        avatar: '',
                        title: '',
                        amount: 103,
                    }
                ],
            }
        },
        computed: {
           operationType: function () {
               let operationType = '';
               switch (this.manageType) {
                   case '':
                       operationType = '';
                       break;
                   case '':
                       operationType = '';
                       break;
                   default:
                       console.log('无匹配则组件');
                       operationType = '';
               }
               return operationType
           }
        },
        components: {
            AccordionContent
        },
        methods: {
            handleToggleAccordion() {
                this.isOpenAccordion = !this.isOpenAccordion;
            },
            handleOpenActionSheet() {
                this.$emit('openActionSheet', this.manageType)
            },
        }
    }
</script>
