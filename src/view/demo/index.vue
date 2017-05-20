<template>
    <div class="demo-wrap">
        <SideMenu />
        <div class="content-container" :style="{marginLeft: $store.state.demoStore.showSideMenu ? '200px' : '0'}">
            <mu-icon value="home" :size="32" @click="toggle"/>
            <router-view></router-view>
            <router-view name="content"></router-view>
        </div>
    </div>
</template>
<style scoped lang="less">
    .demo-wrap {
        height: 100%;
    }
    .content-container {
        height: 100%;
        transition: all .3s ease;
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
