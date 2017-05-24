<template>
    <div class="title-bar-wrap">
        <router-link  v-if="to" :to="to">{{title}} <i v-if="to" class="iconfont icon-arrow-right"></i></router-link>
        <span v-else >{{title}}</span>
    </div>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .title-bar-wrap {
        position: relative;
        width: 100%;
        &:before {
            content: ' ';
            position: absolute;
            top: .35rem;
            bottom: .25rem;
            left: 0;
            width: 2px;
            color: @textColorMain;
            background-color: @themeColors;
        }
        a,
        span {
            display: block;
            padding: .35rem 0 .25rem .18rem;
            font-size: .3rem;
            color: @textColorMain;
        }
        i {
            color: #888;
        }
    }
</style>
<script type="text/javascript">
    export default{
        props: {
            title: {
                type: String,
                required: true
            },
            to: {
                type: [String, Object],
            },
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed: {
            toType: function() {
                return typeof to;
            }
        },

    }
</script>
