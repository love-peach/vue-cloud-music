<template>
    <div>
        <mu-drawer :open="$store.state.demoStore.showSideMenu" :docked="$store.state.demoStore.docked" :width="200">
            <h1 class="title">Demo合集</h1>
            <mu-list>
                <mu-list-item title="Menu Item 2" :to="{ path: '/demo/demo_todolist' }" />
                <mu-list-item title="Menu Item 2"/>
                <mu-list-item title="Menu Item 3"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>
<style scoped lang="less">
    .title {
        font-size: 1rem;
    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return {
            }
        },
        methods: {
        },
        components: {}
    }
</script>
