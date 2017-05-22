<template>
    <div>
        <AccordionBar :isOpenAccordion="isOpenAccordion" :title="title" :amount="amount" :type="type" @openAccordion="openAccordion"/>
        <!--这里加 isOpenAccordion ，是想让内容在手风琴组件打开的时候在加载-->
        <div v-if="isOpenAccordion">
            <AccordionContent :songList="songList"/>
        </div>
    </div>
</template>
<style scoped lang="less">

</style>
<script type="text/javascript">
    import AccordionBar from './AccordionBar.vue';
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
            type: {
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
        components: {
            AccordionBar,
            AccordionContent
        },
        methods: {
            openAccordion() {
                this.isOpenAccordion = !this.isOpenAccordion;
            }
        }
    }
</script>
