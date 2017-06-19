<template>
    <div class="banner-wrap">
        <Swipe :auto="4000" >
            <SwipeItem v-for="(banner, index) in banners" :key="index">
                <img class="slider-img" :src.lazy="banner.pic + cropImgStr">
            </SwipeItem>
        </Swipe>
    </div>
</template>
<style scoped lang="less">
    .banner-wrap {
        height: 2.5rem;
        .slider-img {
            height: 2.5rem;
        }
    }
</style>
<script type="text/javascript">
    import { Swipe, SwipeItem } from 'mint-ui';
    import request from '@/api/request';

    export default{
        data(){
            return{
                cropImgStr: `?param=${window.innerWidth}x10000`,
                banners: [],
            }
        },
        components:{
            Swipe,
            SwipeItem
        },
        mounted() {
            request.getRecommendBanner()
                .then((data) => {
                    this.banners = data.banners;
                })
                .catch()
        },
    }
</script>
