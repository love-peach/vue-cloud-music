<template>
    <div class="sidePanel-footer">
        <router-link to="/"></router-link>
    </div>
</template>
<style lang="less">
    @import "../../style/variable";
    .sidePanel-footer {
        position: absolute;
        width: 5.25rem;
        height: .8rem;
        border-top: 1px solid #e5e5e5;
        background-color: @SidePanelBg;
        left:0;
        bottom:0;
    }
</style>
<script type="text/javascript">
        export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
