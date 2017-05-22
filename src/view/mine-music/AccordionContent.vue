<template>
    <div class="accordion-content-wrap">
        <mu-list class="content-item-wrap" @change="change" @itemClick="itemClick">
            <div style="position: relative">
                <mu-list-item title="我喜欢的音乐" titleClass="item-title" describeText="100首" describeTextClass="item-amount" >
                    <img class="item-avatar" src="../../assets/img/logo.png" slot="leftAvatar">
                </mu-list-item>
                <mu-flat-button slot="right" class="item-opetation-demo"  @click.stop.prevent="demo"><i class="iconfont icon-androidmorevertical"></i></mu-flat-button>
            </div>
        </mu-list>
    </div>
</template>
<style lang="less">
    @import "../../style/variable";
    @textColorSilver: #888;
    .accordion-content-wrap {
        .content-item-wrap {
            padding: 0;
            .mu-item {
                height: 1.24rem;
            }
            .item-title {
                color: @textColorMain;
                font-size: .3rem;
            }
            .item-amount {
                color: @textColorSilver;
                font-size: .24rem;
                line-height: 1;
                margin-top: .2rem;
            }
            .item-avatar {
                height: 1.14rem;
                width: 1.14rem;
            }
            .mu-item-left {
                left: @baseOffset;
                width: inherit;
            }
            .mu-item.show-right {
                padding-left: 1.45rem;
            }
            .mu-item-right {
                right: 0;
                width: inherit;
                i {
                    line-height: 1;
                    font-size: .3rem;
                }
            }
            .item-opetation {
                min-width: inherit;
                padding: 0 .30rem;
                height: 100%;
            }
            .item-opetation-demo {
                min-width: inherit;
                padding: 0 .30rem;
                height: 100%;
                position: absolute;
                top: 0;
                right: 0;
            }
            .list-divider {
                /* 小米5 上 transform scaleY(0.5) 好像不管用*/
                transform: scaleY(1);
                background-color: rgba(0,0,0,.05);
                margin-left: 1.45rem;
            }
        }
    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return{
                isDisableRipple: false,
            }
        },
        components:{
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
