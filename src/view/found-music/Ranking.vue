<template>
    <div class="ranking-wrap">
        <TitleBar title="官方榜"/>
        <VerticalOfficial :dataSource="rankingOfficialArray" />
        <TitleBar title="全球榜"/>
        <TitleBar title="用户榜"/>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .ranking-wrap {
        margin-bottom: @playBarHeight;

    }
</style>
<script type="text/javascript">
    import TitleBar from '@/components/title-bar/TitleBar.vue';
    import VerticalOfficial from '@/components/ranking/VerticalOfficial.vue'
    import request from '@/api/request.js';


    export default{
        beforeRouteEnter (to, from, next) {
            next(vm => {
                for(let i = 0; i < 4; i++) {
                    vm.getRanking(i);
                }
            })
        },
        data(){
            return{
                SoaringRanking: [],
                rankingOfficial: {
                    S: {
                        coverImgUrl: '',
                        updateFrequency: '每天更新',
                        tracksPreview: []
                    },
                    N: {
                        coverImgUrl: '',
                        updateFrequency: '每天更新',
                        tracksPreview: []
                    },
                    O: {
                        coverImgUrl: '',
                        updateFrequency: '每周四更新',
                        tracksPreview: []
                    },
                    H: {
                        coverImgUrl: '',
                        updateFrequency: '每周四更新',
                        tracksPreview: []
                    },
                }
            }
        },
        computed: {
            rankingOfficialArray: function () {
                let rankingArray = [];
                Object.keys(this.rankingOfficial).forEach(key => {
                    rankingArray.push(this.rankingOfficial[key])
                });
                return rankingArray;
            }
        },
        components:{
            TitleBar,
            VerticalOfficial
        },

        methods: {
            getRanking(type) {
                const vm = this;
                request.getRanking(type)
                    .then(data => {
                        console.log(data);
                        const rankingItem = vm.rankingOfficial[data.ToplistType]
                        rankingItem.coverImgUrl = data.coverImgUrl;
                        rankingItem.tracksPreview = data.tracks.slice(0,3);
                        console.log(rankingItem, 'rankingItem');
                    })
                    .catch()
            }
        }
    }
</script>
