<template>
    <ul class="accordion-content-wrap">
        <li v-for=" n in (1,3)" class="content-item waves-effect waves-classic">
            <div class='item-avatar'>
                <img class="item-img" src="../../assets/img/logo.png">
            </div>
            <div class="item-main">
                <p class="main-text">
                    <span class="text-title">我喜欢的音乐</span>
                    <span class="text-amount">100首</span>
                </p>
                <i class="iconfont icon-androidmorevertical text-operation waves-effect waves-classic" @click.prevent.stop=""></i>
            </div>
        </li>
    </ul>
</template>
<style lang="less">
    @import "../../style/variable";
    @textColorSilver: #888;
    .accordion-content-wrap {
        .content-item {
            display: flex;
            height: 1.06rem;
            .item-avatar {
                width: 1.24rem;
                display: flex;
                align-items: center;
                justify-content: center;
                .item-img {
                    height: .96rem;
                    width: .96rem;
                }
            }
            .item-main {
                display: flex;
                flex: 1;
                align-items: stretch;
                border-bottom: 1px solid rgba(0,0,0,.05);
            }
            .main-text {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
            }
            .text-title {
                color: @textColorMain;
                font-size: .26rem;
            }
            .text-amount {
                color: @textColorSilver;
                font-size: .24rem;
                line-height: 1;
                margin-top: .15rem;
            }
            .text-operation {
                display: flex;
                align-items: center;
                padding: 0 .3rem;
            }
        }
    }
</style>
<script type="text/javascript">
    import ActionSheet from '../../components/action-sheet/ActionSheet.vue';

    export default{
        data(){
            return{
                isDisableRipple: false,
            }
        },
        components:{
            ActionSheet,
        },
        methods: {
            change() {
                console.log(123);
            },
            itemClick(e) {
                console.log(e);
            },
            demo() {
                console.log(999);
            }
        },

    }
</script>
