<template>
    <Popup v-if="$store.state.sidePanel.openSidePanel" @close="toggle()">
        <div class="sidePanel-scroll-hide">
            <div class="sidePanel-wrap">
                <side-panel-top/>
                <side-panel-nav/>
            </div>
            <side-panel-footer/>
        </div>
    </Popup>
</template>
<style lang="less">
    .sidePanel-scroll-hide{
        width: 5.25rem;
        height:100%;
        overflow-y: hidden;
        .sidePanel-wrap {
            margin-bottom: .8rem;
            padding-right: .4rem;
            width: 5.65rem;
            height: 100%;
            overflow-y: auto;
        }
    }

</style>
<script type="text/javascript">
    import Popup from '../../components/popup/Popup';
    import SidePanelTop from './SidePanelTop'
    import SidePanelNav from './SidePanelNav'
    import SidePanelFooter from './SidePanelFooter'
    export default{
        data(){
            return{}
        },

        components:{
            Popup,
            SidePanelTop,
            SidePanelNav,
            SidePanelFooter
        },
        methods: {
            toggle(flag) {
                this.$store.dispatch('toggleSidePanel', flag);
            },
        },
    }
</script>
