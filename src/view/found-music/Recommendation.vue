<template>
    <div class="recommendation-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="slider" v-for="(banner, index) in banners" :key="index">
                <img class="slider-img" :src="banner.pic + cropImgStr">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div>dfdf</div>

    </div>
</template>
<style scoped lang="less">
    .recommendation-wrap {
        .slider {
            .slider-img {
                width: 100%;
            }
        }
    }
</style>
<script type="text/javascript">

    import axios from 'axios'
    import API from '../../api/API'
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default{
        data(){
            return{
                swiperOption: {
                    notNextTick: true,
                    autoplay: 3000,
                    direction : 'horizontal',
                    grabCursor : true,
                    setWrapperSize :true,
                    // autoHeight: true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    observeParents:true,
                    debugger: true,
                    onTransitionStart(swiper){
                        console.log(swiper)
                    },
                },
                cropImgStr: '',
                banners: [],
            }
        },
        components:{
            swiper,
            swiperSlide
        },
        computed: {
            swiper: function() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            this.cropImgStr = `?param=${window.innerWidth}x10000`
            // this.swiper.slideTo(3, 1000, false);
            API.get('/api/banner').then((res) => {
                console.log(res, '000');
                this.banners = res.banners;
            })
        },
        methods: {

        }

    }
</script>
