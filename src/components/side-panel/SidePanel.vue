<template>
    <mu-drawer class="side-panel-wrap" @close="toggle()" :open="$store.state.sidePanel.openSidePanel" :docked="$store.state.sidePanel.docked">
        侧边栏面板
    </mu-drawer>
</template>
<style scoped lang="less">
    @import "../../style/variable";
    .side-panel-wrap {
        width: 5.25rem;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        methods: {
            toggle(flag) {
                this.$store.dispatch('toggleSidePanel', flag);
            },
        },
    }
</script>
