<template>
    <div class="demo-wrap">
        <div class="side-menu-container">
            <SideMenu />
        </div>
        <div class="content-container">
            <mu-icon value="home" :size="32" @click="toggle"/>
            <router-view></router-view>
        </div>
    </div>
</template>
<style scoped lang="less">
    .demo-wrap {
        height: 100%;
    }
    .side-menu-container {
        width: 200px;
        height: 100%;
        float: left;
        background-color: #666;
    }
    .content-container {
        margin-left: 200px;
        height: 100%;
    }
</style>
<script type="text/javascript">
    import SideMenu from './side-menu/index.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods: {
            toggle() {
                this.$store.dispatch('toggleSideMenu');
            },
        },
        components:{
            SideMenu,
        }
    }
</script>
