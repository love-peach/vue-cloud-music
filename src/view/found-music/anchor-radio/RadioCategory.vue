<template>
    <div class="radio-category-wrap">
        <p class="part-name">热门分类</p>
        <div class="category-wrap">
            <router-link v-for="(category, index) in categories.slice(0, 6)" to="/" class="category-item waves-effect waves-classic" :key="index" >
                <img class="item-icon" :src="category.pic56x56Url + cropStr">
                <span class="item-name">{{category.name}}</span>
            </router-link>
        </div>
        <p class="part-name">更多分类</p>
        <div class="category-wrap">
            <router-link v-for="(category, index) in categories.slice(6)" to="/" class="category-item waves-effect waves-classic" :key="index">
                <img class="item-icon" :src="category.pic56x56Url + cropStr">
                <span class="item-name">{{category.name}}</span>
            </router-link>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../../../style/variable";
   .radio-category-wrap {
       .part-name {
           padding: .25rem 0;
           text-align: center;
       }
       .category-wrap {
           position: relative;
           display: flex;
           flex-wrap: wrap;
           align-items: stretch;
           border-top: 1px solid rgba(0,0,0,.05);
           .category-item {
               position: relative;
               display: flex;
               width: 50%;
               height: .9rem;
               padding-left: .4rem;
               align-items: center;
               font-size: .28rem;
               color: @textColorMain;
               border-bottom: 1px solid rgba(0,0,0,.05);
               &:nth-child(odd):after {
                   content: ' ';
                   position: absolute;
                   top: .15rem;
                   bottom: .15rem;
                   right: 0;
                   width: 1px;
                   background-color: rgba(0,0,0,.05);
               }
               .item-icon {
                   margin-right: .15rem;
                   color: @themeColors;
                   font-size: .4rem;
                   height: .5rem;
               }
               .item-name {
                   font-size: .28rem;
               }
           }
       }
   }
</style>
<script type="text/javascript">
    import request from '../../../api/request';
    export default{
        data(){
            return{
                categories: [],
                cropStr:'?param=50y50',
            }
        },
        components:{

        },
        beforeMount() {
            request.getRadioCategory()
                .then((data) => {
                    this.categories = data.categories;
                })
                .catch()
        }
    }
</script>
