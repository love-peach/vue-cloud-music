<template>
    <div class="min-music-wrap">
        <mu-list class="option-list">
            <div v-for="(item, index) in optionList">
                <mu-list-item class>
                    <i :class="[item.icon, 'iconfont', 'list-icon' ]" slot="left"></i>
                    <span class="list-title">{{item.title}}</span>
                    <span class="list-amount">({{item.amount}})</span>
                </mu-list-item>
                <mu-divider v-if="index !== optionList.length - 1 " inset/>
            </div>
        </mu-list>
        <div class="abc">dfdf</div>
    </div>
</template>
<style lang="less">
    @import "../../style/variable";

    @grayColor: #e7e9e9;
    @leftOffset: .9rem;
    .min-music-wrap {
        .option-list {
            padding: 0;
            .show-left {
                padding-left: @leftOffset;
            }
            .mu-item-left {
                left: .26rem;
            }
            .list-icon {
                font-size: .42rem;
                color: @themeColors;
                line-height: 1;
            }
        }
        .mu-divider.inset {
            margin-left: @leftOffset;
        }
        .abc {
            background: @grayColor;
        }
    }
</style>
<script type="text/javascript">
    import SongListCollecton from './SongListCollection.vue';
    import * as promiseAjax from '../../common/promise-ajax'

    export default{
        data(){
            return {
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
        components: {
            SongListCollecton
        },
        mounted() {
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
    }
</script>
