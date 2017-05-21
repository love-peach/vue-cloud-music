<template>
    <div>
        <AccordionBar :isOpenAccordion="isOpenAccordion" :title="title" :amount="amount" :type="type" @openAccordion="openAccordion"/>
        <!--这里加 isOpenAccordion ，是想让内容在手风琴组件打开的时候在加载-->
        <div v-if="isOpenAccordion">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="less">

</style>
<script type="text/javascript">
    import AccordionBar from './AccordionBar.vue';
    export default{
        props: ['title', 'amount', 'type'],
        data(){
            return {
                isOpenAccordion: false,
            }
        },
        components: {
            AccordionBar
        },
        methods: {
            openAccordion() {
                this.isOpenAccordion = !this.isOpenAccordion;
            }
        }
    }
</script>
