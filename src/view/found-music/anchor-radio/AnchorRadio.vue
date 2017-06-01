<template>
    <div>
        <Banner />
        <div class="entry-bar">
            <router-link class="entry-link waves-effect waves-classic" to="/page/radio_category"><i class="iconfont icon-fenlei"></i> 电台分类</router-link>
            <router-link class="entry-link waves-effect waves-classic" to="/"><i class="iconfont icon-liebiao1"></i> 电台排行</router-link>
        </div>
        <Program />
        <Recommendation />
        <TitleBar title="创作翻唱" to="/" />
        <RadioPreview :typeId="2001" />

        <TitleBar title="情感调频" to="/" />
        <RadioPreview :typeId="3" />

        <TitleBar title="脱口秀" to="/" />
        <RadioPreview :typeId="5" />

        <TitleBar title="有声书" to="/" />
        <RadioPreview :typeId="10001" />

        <TitleBar title="音乐故事" to="/" />
        <RadioPreview :typeId="2" />

        <TitleBar title="热门分类" to="/" />
        <RadioCategory />
    </div>
</template>
<style scoped lang="less">
    @import "../../../style/variable";
    .entry-bar {
        position: relative;
        display: flex;
        height: 1.06rem;
        align-items: stretch;
        border-bottom: 1px solid rgba(0,0,0,.05);
        &:after {
            content: ' ';
            position: absolute;
            top: .15rem;
            bottom: .15rem;
            left: 50%;
            width: 1px;
            background-color: rgba(0,0,0,.05);
        }
        .entry-link {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            color: @textColorMain;
            font-size: .28rem;
            .iconfont {
                margin-right: .1rem;
                color: @themeColors;
                font-size: .4rem;
            }
        }
    }
</style>
<script type="text/javascript">
    import TitleBar from '../../../components/title-bar/TitleBar.vue';
    import Banner from './Banner.vue';
    import Recommendation from './Recommendation.vue';
    import Program from './Program.vue';
    import RadioPreview from './RadioPreveiw.vue';
    import RadioCategory from './RadioCategory.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {
            TitleBar,
            Banner,
            Recommendation,
            Program,
            RadioPreview,
            RadioCategory
        }
    }
</script>
