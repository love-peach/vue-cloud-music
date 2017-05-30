<template>
    <div class="quick-entry-wrap">
        <router-link to="/" class="entry-link">
            <i class="iconfont icon-diantai_changgui "></i>
            <p>私人FM</p>
        </router-link>
        <router-link to="/" class="entry-link">
            <i class="iconfont icon-rili0101 link-icon-fm">
                <span class="current-date">{{currentDate}}</span>
            </i>
            <p>每日歌曲推荐</p>

        </router-link>
        <router-link to="/" class="entry-link">
            <i class="iconfont icon-paihangbang"></i>
            <p>云音乐热歌榜</p>
        </router-link>
    </div>
</template>
<style scoped lang="less">
    @import "../../../style/variable";
    .quick-entry-wrap {
        height: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: stretch;
        border-bottom: 1px solid rgba(0,0,0,.05);
        .entry-link {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            align-items: center;
            color: @textColorMain;
            font-size: .26rem;
            &:active .iconfont{
                color: #fff;
                background-color: lighten(@themeColors, 5%);
            }
            .iconfont {
                position: relative;
                height: .95rem;
                width: .95rem;
                line-height: .95rem;
                text-align: center;
                font-size: .5rem;
                color: @themeColors;
                border: 1px solid @themeColors;
                border-radius: .95rem;
                margin-bottom: .1rem;
            }
            .link-icon-fm {
                font-size: .6rem;
            }
            .current-date {
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: .24rem;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>
<script type="text/javascript">
    import moment from 'moment';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed: {
            currentDate: function() {
                return moment().format("DD")
            }
        },
    }
</script>
