<template>
    <div class="link-list-wrap">
        <mu-list class="option-list">
            <div v-for="(item, index) in optionList" :key="index">
                <mu-list-item>
                    <i :class="[item.icon, 'iconfont', 'list-icon' ]" slot="left"></i>
                    <span class="list-title">{{item.title}}</span>
                    <span class="list-amount">({{item.amount}})</span>
                </mu-list-item>
                <mu-divider class="list-divider" v-if="index !== (optionList.length - 1) " inset/>
            </div>
        </mu-list>
    </div>
</template>
<style lang="less">
    @import "../../style/variable";
    @leftOffset: 1rem;
    .link-list-wrap {
        .option-list {
            padding: 0;
            .show-left {
                padding: .28rem 0 .28rem @leftOffset;
                min-height: inherit;
                height: 1.04rem;
            }
            .mu-item-left {
                left: .3rem;
                width: inherit;
            }
            .mu-item-content {
                display: flex;
                align-items: center;
            }
            .list-item-wrap {
                position: relative;
            }
            .list-icon {
                font-size: .48rem;
                color: @themeColors;
                line-height: 1;
            }
            .list-title {
                color: @textColorMain;
                font-size: .32rem;
                margin-right: .12rem;
            }
            .list-amount {
                color: #888;
                font-size: .26rem;
            }
            .list-divider {
                /* 小米5 上 transform scaleY(0.5) 好像不管用*/
                transform: scaleY(1);
                background-color: rgba(0,0,0,.05);
                margin-left: @leftOffset;
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
