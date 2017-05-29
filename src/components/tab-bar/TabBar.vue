<template>
    <ul class="tab-bar-wrap">
        <li v-for="tab in tabs" class="tab-item waves-effect waves-classic" @click="handleTabClick(tab.value)">
            <router-link  v-if="tab.path" :to="tab.path" :class="[tab.value === value ? 'tab-active' : '']">{{tab.title}}</router-link>
            <span v-else :class="[tab.value === value ? 'tab-active' : '']">{{tab.title}}</span>
        </li>
        <span class="tab-line-height" ref="highlight"></span>
    </ul>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .tab-bar-wrap{
        position: relative;
        height: @foundMusicTopBarHeight;
        background-color: #fff;
        display: flex;
        align-items: stretch;
        .tab-item {
            display: flex;
            flex: 1;
            a,
            span {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: center;
                color: #333;
            }
        }
        .tab-line-height {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            background-color: @themeColors;
            transition: transform .3s;
            backface-visibility: hidden;
        }
    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        props: {
            tabs: {
                type: Array,
                required: true
            },
            value: {
                type: [Array,String],
                required: true
            }
        },

        components:{
        },
        updated () {
            this.setTabLightStyle()
        },
        mounted () {
            this.setTabLightStyle()
        },
        methods: {
            handleTabClick (value) {
                this.$emit('change', value)
            },
            getActiveIndex () {
                let activeIndex = -1
                this.tabs.forEach((tab, i) => {
                    if (tab.value === this.value) {
                        activeIndex = i
                        return false
                    }
                })
                return activeIndex
            },
            setTabLightStyle () {
                const x = this.getActiveIndex() * 100
                const len = this.$children.length;
                const el = this.$refs.highlight;
                el.style.width = len > 0 ? (100 / len).toFixed(4) + '%' : '100%'
                el.style.transform = 'translate3d(' + x + '%, 0, 0)'
            }
        },
    }
</script>
