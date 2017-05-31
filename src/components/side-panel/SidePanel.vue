<template>
    <Popup v-if="$store.state.sidePanel.openSidePanel" @close="toggle()">
        侧边栏面板内容
    </Popup>
</template>
<style lang="less">

</style>
<script type="text/javascript">
    import Popup from '../../components/popup/Popup.vue';
    export default{
        data(){
            return{}
        },

        components:{
            Popup,
        },
        methods: {
            toggle(flag) {
                this.$store.dispatch('toggleSidePanel', flag);
            },
        },
    }
</script>
