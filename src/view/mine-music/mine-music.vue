<template>
    <div class="min-music-wrap">
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
        <LinkList />
        <AccordionWrap title="创建的歌单" :amount="1" type="songListCreated" />
        <AccordionWrap title="收藏的歌单" :amount="1" type="songListCollection" />
    </div>
</template>
<style lang="less">
    @import "../../style/variable";
    .min-music-wrap {
        top: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        overflow-y: auto;

        /*width: 256px;*/
        /*height: 300px;*/
        /*overflow: auto;*/
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        /*border: 1px solid #d9d9d9;*/
        /*position: relative;*/
        user-select: none;
    }
</style>
<script type="text/javascript">
    import LinkList from './LinkList.vue';
    import AccordionWrap from './AccordionWrap.vue';
    import * as promiseAjax from '../../common/promise-ajax'

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
            this.trigger = this.$el;
            promiseAjax.get('/ajax/get', null, {errorTip: false, successTip: '成功了！'}).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                console.log(123);
            });
            const postAjsx = promiseAjax.get('/ajax/post', null, {errorTip: false, successTip: '成功了！'});
            postAjsx.then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                console.log(123);
            });
            postAjsx.cancel();
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
