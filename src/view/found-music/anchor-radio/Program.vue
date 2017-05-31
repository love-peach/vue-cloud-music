<template>
    <div class="program-wrap">
        <TitleBar title="每天听些好节目"></TitleBar>
        <ul class="program-list-wrap">
            <li class="list-item" v-for="program in programs">
                <router-link class="item-link waves-effect waves-classic" to="/">
                    <div class="item-img-wrap">
                        <img class="item-img" :src.lazy="program.coverUrl + cropStr">
                        <i class="iconfont icon-bofang img-icon"></i>
                    </div>
                    <div class="item-info">
                        <p class="info-title">{{program.name}}</p>
                        <p class="info-des">{{program.reason}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import "../../../style/variable";
    .program-wrap {
        .program-list-wrap {
            .list-item {
                &:first-child .item-link{
                    padding: 0;
                    border-top: 1px solid rgba(0,0,0,.05);
                }
                .item-link {
                    display: flex;
                    padding-top: .05rem;
                }
                .item-img-wrap {
                    position: relative;
                    height: 1.25rem;
                    width: 1.25rem;
                    .item-img {
                        height: 100%;
                        width: 100%;
                    }
                    .img-icon {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: .4rem;
                        color: #fff;
                        background-color: rgba(0,0,0,.08);
                        border: 2rem;
                    }
                }
                .item-info {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    justify-content: center;
                    padding: 0 .15rem;
                    border-bottom: 1px solid rgba(0,0,0,.05);
                    color: @textColorMain;
                    .info-title {
                        font-size: .28rem;
                        margin-bottom: .15rem;
                        display: -webkit-box;
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp:1;
                        overflow:hidden;
                    }
                    .info-des {
                        font-size: .24rem;
                        color: #999;
                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
    import request from '../../../api/request';
    import TitleBar from '../../../components/title-bar/TitleBar.vue';
    export default{
        data(){
            return{
                cropStr:'?param=120y120',
                programs: [],
            }
        },
        components:{
            TitleBar,
        },
        beforeMount() {
            request.getProgramRecommend()
                .then((data) => {
                    this.programs = data.programs;
                })
                .catch()
        },
    }
</script>
