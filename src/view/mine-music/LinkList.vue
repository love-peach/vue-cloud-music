<template>
    <ul class="link-list-wrap">
        <li class="list-item waves-effect waves-classic" v-for="(item, index) in optionList" :key="index">
            <i :class="[item.icon, 'iconfont', 'item-icon' ]"></i>
            <div class="item-text">
                <span class="text-title">{{item.title}}</span>
                <span class="text-amount">({{item.amount}})</span>
            </div>
        </li>
    </ul>
</template>
<style lang="less">
    @import "../../style/variable";

    @leftOffset: .9rem;
    .link-list-wrap {
        .list-item {
            display: flex;
            flex: 1;
            align-items: center;
            .item-icon {
                font-size: .42rem;
                color: @themeColors;
                line-height: 1;
                width: @leftOffset;
                text-align: center;
            }
            .item-text {
                display: flex;
                flex: 1;
                height: .9rem;
                align-items: center;
                border-bottom: 1px solid rgba(0,0,0,.05);
                .text-title {
                    color: @textColorMain;
                    font-size: .28rem;
                    margin-right: .1rem;
                }
                .text-amount {
                    color: #888;
                    font-size: .24rem;
                }
            }
            &:last-child .item-text{
                border-bottom: 0;
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                optionList: [
                    {
                        title: '本地音乐',
                        icon: 'icon-music',
                        amount: 0
                    }, {
                        title: '最近播放',
                        icon: 'icon-zuijinbofang',
                        amount: 100
                    }, {
                        title: '下载管理',
                        icon: 'icon-icon_xiazai',
                        amount: 0
                    }, {
                        title: '我的电台',
                        icon: 'icon-diantaibaoshe',
                        amount: 1
                    }, {
                        title: '我的收藏',
                        icon: 'icon-wodeshoucang',
                        amount: 1
                    },
                ]
            }
        },
        components:{
        }
    }

</script>
