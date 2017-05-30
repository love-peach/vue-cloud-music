<template>
    <div class="recommendation-wrap">
        <Banner />
        <QuickEntry />
        <SongList />
        <AnchorRadio />
    </div>
</template>
<style scoped lang="less">

</style>
<script type="text/javascript">
    import Banner from './Banner.vue';
    import QuickEntry from './QuickEntry.vue';
    import SongList from './RecommendSongList.vue';
    import AnchorRadio from './AnchorRadio.vue';

    export default{
        data(){
            return {}
        },
        components: {
            Banner,
            QuickEntry,
            SongList,
            AnchorRadio
        },
        computed: {},
        mounted() {},
        methods: {}

    }
</script>
